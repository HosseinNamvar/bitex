"use client";
import styles from "./list.module.scss";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { redirect, useParams, usePathname } from "next/navigation";

import ProductCard from "@/components/store/common/productCard";
import DropDownList from "@/components/UI/dropDown";
import LineList from "@/components/UI/lineList";

import { sortDropdownData } from "@/data/uiElementsData";
import { CloseIcon } from "@/components/icons/svgIcons";
import CheckBox from "@/components/UI/checkBox";
import PriceSlider from "@/components/UI/priceSlider";
import { TBrand, TFilters, TListItem, TProductPath } from "@/types/product";
import Button from "@/components/UI/button";
import { getList } from "@/actions/list/listServices";

const initialFilters: TFilters = {
  stockStatus: "all",
  brands: [],
  priceMinMaxLimitation: [20, 100],
  priceMinMax: [20, 100],
};

const imgBaseUrl = process.env.IMG_URL;

const pathToArray = (path: string) => {
  const pathWithoutList = path.split("/list/")[1];
  const pathArray = pathWithoutList.split("/");
  return pathArray;
};

const ListPage = () => {
  const [sortIndex, setSortIndex] = useState(0);
  const [productList, setProductList] = useState<TListItem[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<TFilters>(initialFilters);
  const { params } = useParams<{ params: string[] }>();
  const pathName = usePathname();

  const [subCategories, setSubCategories] = useState<TProductPath[]>([]);

  useEffect(() => {
    const getProductsList = async () => {
      const pathArray = pathToArray(pathName);
      const response = await getList(pathArray);
      if (response.products && response.subCategories) {
        const brands = getBrands(response.products).map((m) => {
          return { id: m.id, name: m.name, isSelected: true };
        });
        initialFilters.brands = [...brands];
        initialFilters.priceMinMaxLimitation = getPriceLimit(response.products);
        initialFilters.priceMinMax = initialFilters.priceMinMaxLimitation;
        setFilters(initialFilters);
        setSubCategories(response.subCategories);
        setProductList(response.products);
      }
    };

    const getBrands = (data: TListItem[]) => {
      const brands: TBrand[] = [];
      data.forEach((p) => {
        const isFind = brands.findIndex((brand) => p.brand.id === brand.id);
        if (isFind === -1) brands.push({ id: p.brand.id, name: p.brand.name });
      });
      return brands;
    };
    const getPriceLimit = (data: TListItem[]) => {
      const priceLimit: [number, number] = [data[0].price, data[0].price];
      data.forEach((p) => {
        if (p.price < priceLimit[0]) priceLimit[0] = Math.floor(p.price);
        if (p.price > priceLimit[1]) priceLimit[1] = Math.ceil(p.price);
      });
      return priceLimit;
    };

    getProductsList();
  }, [pathName]);

  if (!params || params.length <= 0) redirect("/");

  const handleSortChange = (newIndex: number) => {
    setSortIndex(newIndex);
  };

  const toggleFiltersWindow = (visibility: boolean) => {
    setShowFilters(visibility);
    visibility
      ? document.documentElement.classList.add("noScroll")
      : document.documentElement.classList.remove("noScroll");
  };

  const getPageHeader = () => {
    const pageName = params[params.length - 1].split("-");
    pageName.forEach((word, index) => {
      pageName[index] = word[0].toUpperCase() + word.slice(1);
    });

    return pageName.join(" ");
  };

  const getLink = (array: string[], index: number) => {
    let link = "/list";
    for (let i = 0; i <= index; i++) {
      link += "/" + array[i];
    }
    return link;
  };

  const handleBrandChange = (index: number) => {
    const newBrandList = JSON.parse(JSON.stringify(filters.brands));
    newBrandList[index].isSelected = !newBrandList[index].isSelected;
    setFilters({ ...filters, brands: newBrandList });
  };

  const isFilterChanged = () => {
    if (initialFilters.stockStatus !== filters.stockStatus) return true;

    if (
      JSON.stringify(initialFilters.brands) !== JSON.stringify(filters.brands)
    )
      return true;
    if (
      JSON.stringify(initialFilters.priceMinMax) !==
      JSON.stringify(filters.priceMinMax)
    )
      return true;
    return false;
  };
  return (
    <div className={styles.listPage}>
      <div className={styles.header}>
        <h1>{getPageHeader()}</h1>
        <div className={styles.links}>
          <Link href={"/"}>Home</Link>
          {params.map((item, index) => (
            <Link key={index} href={getLink(params, index)}>
              {item[0].toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>
      </div>
      <div className="storeContainer flexCol">
        <div className={styles.mobileFilter}>
          <button
            className={styles.filterBtn}
            onClick={() => toggleFiltersWindow(true)}
          >
            FILTERS
          </button>
          <DropDownList
            data={sortDropdownData}
            width="170px"
            selectedIndex={sortIndex}
            onChange={handleSortChange}
          />
        </div>
        <div className={styles.main}>
          <div
            className={`${styles.filtersContainer} 
              ${showFilters ? styles.showMobileFilters : ""}`}
          >
            <div
              className={styles.background}
              onClick={() => toggleFiltersWindow(false)}
            />
            <div className={styles.filtersWindow}>
              <div className={styles.header}>
                <h2>Filters</h2>
                <button onClick={() => toggleFiltersWindow(false)}>
                  <CloseIcon width={12} />
                </button>
              </div>
              {subCategories && subCategories.length > 0 ? (
                <div className={styles.eachFilter}>
                  <div className={styles.header}>
                    <h3>In This Category:</h3>
                  </div>
                  <div className={styles.body}>
                    <div className={styles.subCategories}>
                      {subCategories.map((cat, index) => (
                        <Link href={pathName + "/" + cat.url} key={index}>
                          {cat.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
              <div className={styles.eachFilter}>
                <div className={styles.header}>
                  <h3>Availability</h3>
                </div>
                <div className={styles.body}>
                  <CheckBox
                    text="All"
                    onClick={() =>
                      setFilters({ ...filters, stockStatus: "all" })
                    }
                    isChecked={filters.stockStatus === "all"}
                  />
                  <CheckBox
                    text="In Stock"
                    onClick={() =>
                      setFilters({ ...filters, stockStatus: "inStock" })
                    }
                    isChecked={filters.stockStatus === "inStock"}
                  />
                  <CheckBox
                    text="Out of Stock"
                    onClick={() =>
                      setFilters({ ...filters, stockStatus: "outStock" })
                    }
                    isChecked={filters.stockStatus === "outStock"}
                  />
                </div>
              </div>
              <div className={styles.eachFilter}>
                <div className={styles.header}>
                  <h3>Price</h3>
                </div>
                <div className={styles.body}>
                  <PriceSlider
                    sliderValues={filters.priceMinMax}
                    minMaxLimit={filters.priceMinMaxLimitation}
                    onChange={(value) =>
                      setFilters({ ...filters, priceMinMax: [...value] })
                    }
                  />
                </div>
              </div>
              <div className={styles.eachFilter}>
                <div className={styles.header}>
                  <h3>Brand</h3>
                </div>
                <div className={styles.body}>
                  <div className={styles.optionsList}>
                    {filters.brands.map((brand, index) => (
                      <CheckBox
                        key={brand.id}
                        isChecked={brand.isSelected}
                        text={brand.name}
                        onClick={() => handleBrandChange(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.apply}>
                <Button text="Apply Changes" disabled={!isFilterChanged()} />
              </div>
            </div>
          </div>
          <div className={styles.rightCol}>
            <div className={styles.sortContainer}>
              <Image
                src={"/images/icons/sortIcon.svg"}
                alt="Sort"
                width={16}
                height={12}
              />
              <span>Sort By:</span>
              <LineList
                data={sortDropdownData}
                selectedId={sortIndex}
                onChange={handleSortChange}
              />
            </div>
            {productList.length > 0 ? (
              <div className={styles.listContainer}>
                {productList.map((product) => (
                  <ProductCard
                    key={product.id}
                    imgUrl={[
                      imgBaseUrl + product.images[0],
                      imgBaseUrl + product.images[1],
                    ]}
                    name={product.name}
                    price={product.price}
                    isAvailable={product.isAvailable}
                    dealPrice={product.salePrice || undefined}
                    specs={product.specialFeatures}
                    url={"/product/" + product.id}
                  />
                ))}
              </div>
            ) : (
              <div className={styles.noItemContainer}>
                <span> There is no product in {getPageHeader()} category!</span>
                <div>
                  <span> Please Check These Categories:</span>
                  <div>
                    <Link href={"/list/pc-laptops/computer"}>Computers</Link>
                    <Link href={"/list/pc-laptops/laptops"}>Laptop</Link>
                    <Link href={"/list/smartphones"}>Mobile</Link>
                    <Link href={"/list/tablets"}>Tablet</Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListPage;
