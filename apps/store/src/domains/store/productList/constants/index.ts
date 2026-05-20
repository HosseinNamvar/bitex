import { TListSort } from "@/domains/store/productList/types/";
import { TDropDown } from "@/shared/types/uiElements";

import { TFilters } from "../types";

export const DEFAULT_FILTERS: TFilters = {
  stockStatus: "all",
  brands: [],
  priceMinMaxLimitation: [0, 0],
  priceMinMax: [0, 0],
};

export const SORT_DATA: TListSort[] = [
  { sortName: "id", sortType: "desc" },
  { sortName: "id", sortType: "asc" },
  { sortName: "price", sortType: "desc" },
  { sortName: "price", sortType: "asc" },
  { sortName: "name", sortType: "asc" },
];

export const sortDropdownData: TDropDown[] = [
  {
    text: "Newest",
    value: "0",
  },
  {
    text: "Oldest",
    value: "1",
  },
  {
    text: "Most Expensive",
    value: "2",
  },
  {
    text: "Cheapest",
    value: "3",
  },
  {
    text: "Name",
    value: "4",
  },
];
