import { TBrand } from "@/shared/types";

import { TFilters, TListItem } from "../types";

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
export const getFiltersFromProductList = (productsList: TListItem[]) => {
  const newFilter: TFilters = {
    brands: generateBrands(productsList),
    priceMinMax: getPriceLimit(productsList),
    priceMinMaxLimitation: getPriceLimit(productsList),
    stockStatus: "all",
  };
  return newFilter;
};
