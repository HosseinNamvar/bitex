"use client";
import styles from "./list.module.scss";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";

import ProductCard from "@/components/store/common/productCard";
import DropDownList from "@/components/UI/dropDown";
import LineList from "@/components/UI/lineList";

import { sortDropdownData } from "@/data/uiElementsData";
import {
  TBrand,
  TFilterBrands,
  TFilters,
  TListItem,
  TProductPath,
} from "@/types/product";
import Button from "@/components/UI/button";
import { getList } from "@/actions/list/listServices";
import { TListSort } from "@/types/list";
import { SK_Box } from "@/components/UI/skeleton";
import NoItem from "@/components/store/listPage/noItem";
import Filters from "@/components/store/listPage/filters";

const defaultFilters: TFilters = {
  stockStatus: "all",
  brands: [],
  priceMinMaxLimitation: [0, 0],
  priceMinMax: [0, 0],
};

const imgBaseUrl = process.env.IMG_URL;

const sortData: TListSort[] = [
  { sortName: "id", sortType: "desc" },
  { sortName: "id", sortType: "asc" },
  { sortName: "price", sortType: "desc" },
  { sortName: "price", sortType: "asc" },
  { sortName: "name", sortType: "asc" },
];

const ListPage = () => {
  const router = useRouter();
  const [sortIndex, setSortIndex] = useState(0);
  const [productList, setProductList] = useState<TListItem[] | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [isFilterApplied, setIsFilterApplied] = useState(false);
  const [filters, setFilters] = useState<TFilters>(defaultFilters);
  const [appliedFilters, setAppliedFilters] = useState<TFilters>({
    ...defaultFilters,
    priceMinMax: [...defaultFilters.priceMinMax],
  });
  const { params } = useParams<{ params: string[] }>();
  const pathName = usePathname();
  const [isListLoading, setIsListLoading] = useState(true);

  const [subCategories, setSubCategories] = useState<TProductPath[]>([]);

  useEffect(() => {
    const getProductsList = async () => {
      setIsListLoading(true);
      const pathArray = pathToArray(pathName);
      const response = await getList(
        pathArray,
        sortData[sortIndex],
        appliedFilters
      );
      if (response.error) router.push("/");
      if (
        response.products &&
        response.products.length > 0 &&
        response.subCategories
      ) {
        const brands = getBrands(response.products).map((m) => {
          return { id: m.id, name: m.name, isSelected: true };
        });
        if (appliedFilters.brands.length === 0) {
          appliedFilters.brands = [...brands];
        }
        if (!isFilterApplied && response.products) {
          appliedFilters.priceMinMaxLimitation = getPriceLimit(
            response.products
          );
          appliedFilters.priceMinMax = appliedFilters.priceMinMaxLimitation;
        }
        setIsListLoading(false);
        setFilters(appliedFilters);
        setSubCategories(response.subCategories);
        setProductList(response.products);
      }
      if (
        response.products &&
        response.products.length === 0 &&
        isFilterApplied
      ) {
        setProductList([]);
      }
      setIsListLoading(false);
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
        if (p.price < priceLimit[0]) priceLimit[0] = p.price;
        if (p.price > priceLimit[1]) priceLimit[1] = p.price;
      });
      priceLimit[0] = Math.floor(priceLimit[0]);
      priceLimit[0] = priceLimit[0] - (priceLimit[0] % 100);

      priceLimit[1] = Math.ceil(priceLimit[1]);
      priceLimit[1] = priceLimit[1] + (100 - (priceLimit[1] % 100));

      return priceLimit;
    };

    getProductsList();
  }, [pathName, sortIndex, appliedFilters, isFilterApplied, router]);

  if (!params || params.length <= 0) router.push("/");

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

  const defineFilterChangeStatus = () => {
    if (appliedFilters.stockStatus !== filters.stockStatus) return false;

    if (
      JSON.stringify(appliedFilters.brands) !== JSON.stringify(filters.brands)
    )
      return false;
    if (
      JSON.stringify(appliedFilters.priceMinMax) !==
      JSON.stringify(filters.priceMinMax)
    )
      return false;

    return true;
  };
  let isFilterChanged: boolean = defineFilterChangeStatus();
  const handleApplyFilter = () => {
    const newFilter: TFilters = {
      brands: JSON.parse(JSON.stringify(filters.brands)),
      priceMinMax: [...filters.priceMinMax],
      stockStatus: filters.stockStatus,
      priceMinMaxLimitation: [...filters.priceMinMaxLimitation],
    };
    setIsFilterApplied(true);
    setAppliedFilters(newFilter);
  };

  const handleResetFilters = () => {
    const newBrands: TFilterBrands[] = [];
    filters.brands.forEach((b) =>
      newBrands.push({ id: b.id, name: b.name, isSelected: true })
    );
    const newFilter: TFilters = {
      brands: newBrands,
      priceMinMax: [...filters.priceMinMaxLimitation],
      stockStatus: "all",
      priceMinMaxLimitation: [...filters.priceMinMaxLimitation],
    };
    setIsFilterApplied(false);
    setAppliedFilters(newFilter);
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
      {!productList && !isListLoading ? (
        <NoItem pageHeader={getPageHeader()} />
      ) : (
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
            <Filters
              onToggleWindow={toggleFiltersWindow}
              showFilters={showFilters}
              subCategories={subCategories}
              filters={filters}
              onFilterChange={setFilters}
              pathName={pathName}
              onBrandChange={handleBrandChange}
              isFilterChanged={isFilterChanged}
              onApplyFilter={handleApplyFilter}
            />
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
              {isListLoading ? (
                <div className={styles.sklList}>
                  {SKL_Product().map((skl) => skl)}
                </div>
              ) : (
                <>
                  {productList && productList.length > 0 ? (
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
                  ) : productList &&
                    productList.length === 0 &&
                    isFilterApplied ? (
                    <div className={styles.noItemContainer}>
                      <span> There is no product!</span>
                      <Button
                        text="Reset Filters"
                        onClick={handleResetFilters}
                      />
                    </div>
                  ) : (
                    <div></div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const SKL_Product = (): React.ReactNode[] => {
  const nodes: React.ReactNode[] = [];
  for (let i = 0; i < 6; i++) {
    nodes.push(
      <div className={styles.item} key={i}>
        <SK_Box width="100%" height="160px" />
        <SK_Box width="70%" height="26px" />
        <div>
          <SK_Box width="40%" height="12px" />
          <SK_Box width="40%" height="12px" />

          <SK_Box width="40%" height="12px" />
        </div>
        <SK_Box width="60%" height="20px" />
      </div>
    );
  }
  return nodes;
};

const pathToArray = (path: string) => {
  const pathWithoutList = path.split("/list/")[1];
  const pathArray = pathWithoutList.split("/");
  return pathArray;
};

export default ListPage;
