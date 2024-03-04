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
import { TListSort, TPageStatus } from "@/types/list";
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
  const { params } = useParams<{ params: string[] }>();
  const pathName = usePathname();

  const [productList, setProductList] = useState<TListItem[]>([]);
  const [subCategories, setSubCategories] = useState<TProductPath[]>([]);

  const [sortIndex, setSortIndex] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [isFilterApplied, setIsFilterApplied] = useState(false);
  const [filters, setFilters] = useState<TFilters>(defaultFilters);
  const [appliedFilters, setAppliedFilters] = useState<TFilters>({
    ...defaultFilters,
    priceMinMax: [...defaultFilters.priceMinMax],
  });

  const [isListLoading, setIsListLoading] = useState(true);

  useEffect(() => {
    const getProductsList = async () => {
      setIsListLoading(true);

      const response = await getList(
        pathName,
        sortData[sortIndex],
        appliedFilters
      );
      if (response.error || !response.products || !response.subCategories)
        return router.push("/");

      if (isFilterApplied) {
        setFilters(appliedFilters);
        setProductList(response.products);
        setIsListLoading(false);
      } else {
        const filtersFromDB = getFiltersFromProductList(response.products);
        setFilters(filtersFromDB);
        setSubCategories(response.subCategories);
        setProductList(response.products);

        setIsListLoading(false);
      }
    };

    getProductsList();
  }, [router, pathName, sortIndex, appliedFilters, isFilterApplied]);

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

  const getPageStatus = (): TPageStatus => {
    if (isListLoading) {
      if (isFilterApplied) return "filterLoading";
      return "pageLoading";
    }

    if (productList.length > 0) return "filledProductList";

    if (isFilterApplied) return "filterHasNoProduct";

    return "categoryHasNoProduct";
  };
  const currentPageStatus: TPageStatus = getPageStatus();

  const pageStatusJSX = {
    pageLoading: (
      <div className={styles.sklList}>{SKL_Product().map((skl) => skl)}</div>
    ),
    filterLoading: (
      <div className={styles.sklList}>{SKL_Product().map((skl) => skl)}</div>
    ),
    filledProductList: (
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
    ),
    categoryHasNoProduct: <NoItem pageHeader={getPageHeader()} />,
    filterHasNoProduct: (
      <div className={styles.noItemContainer}>
        <span> There is no product!</span>
        <Button text="Reset Filters" onClick={handleResetFilters} />
      </div>
    ),
  }[currentPageStatus];

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
        <div className={styles.childrenContainer}>
          {subCategories && subCategories.length > 0 ? (
            <div className={styles.children}>
              More:
              {subCategories.map((cat, index) => (
                <Link href={pathName + "/" + cat.url} key={index}>
                  {cat.label}
                </Link>
              ))}
            </div>
          ) : (
            ""
          )}
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
          <Filters
            onToggleWindow={toggleFiltersWindow}
            showFilters={showFilters}
            filters={filters}
            onFilterChange={setFilters}
            onBrandChange={handleBrandChange}
            isFilterChanged={isFilterChanged}
            onApplyFilter={handleApplyFilter}
            pageStatus={currentPageStatus}
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
            {pageStatusJSX}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListPage;

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

// -------- GET UNIQUE BRAND LIST FROM PRODUCT LIST --------
const getBrandsFromProducts = (productList: TListItem[]) => {
  return productList.map((product) => product.brand);
};
const removeDuplicatedBrands = (list: TBrand[]) => {
  const newList: TBrand[] = [];
  list.forEach((listItem) => {
    const isFind = newList.findIndex((brand) => listItem.id === brand.id);
    if (isFind === -1) newList.push({ id: listItem.id, name: listItem.name });
  });
  return newList;
};
const addIsSelectedValueToBrands = (brandList: TBrand[]) => {
  return brandList.map((b) => ({
    ...b,
    isSelected: true,
  }));
};
const generateBrands = (productList: TListItem[]) => {
  const listOfProductsBrand: TBrand[] = getBrandsFromProducts(productList);
  const uniqueBrandList = removeDuplicatedBrands(listOfProductsBrand);
  return addIsSelectedValueToBrands(uniqueBrandList);
};

// -------- GET PRICE LIMIT FROM PRODUCT LIST --------
const getPricesFromProducts = (productList: TListItem[]) => {
  return productList.map((product) => product.price);
};
const findMinMax = (array: number[]) => {
  const minMax: [number, number] = [Math.min(...array), Math.max(...array)];
  return minMax;
};
const roundMaxMinPricesWithMargin = (minMax: [number, number]) => {
  const roundedPrices: [number, number] = [...minMax];
  roundedPrices[0] = Math.floor(roundedPrices[0]);
  roundedPrices[0] = roundedPrices[0] - (roundedPrices[0] % 100);

  roundedPrices[1] = Math.ceil(roundedPrices[1]);
  roundedPrices[1] = roundedPrices[1] + (100 - (roundedPrices[1] % 100));
  return roundedPrices;
};
const getPriceLimit = (productList: TListItem[]) => {
  const allProductsPrices: number[] = getPricesFromProducts(productList);
  const minMaxValues = findMinMax(allProductsPrices);
  const roundedPrices = roundMaxMinPricesWithMargin(minMaxValues);

  return roundedPrices;
};

// -------- GET INITIAL FILTERS --------
const getFiltersFromProductList = (productsList: TListItem[]) => {
  const newFilter: TFilters = {
    brands: generateBrands(productsList),
    priceMinMax: getPriceLimit(productsList),
    priceMinMaxLimitation: getPriceLimit(productsList),
    stockStatus: "all",
  };
  return newFilter;
};
