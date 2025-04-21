import { TListSort } from "@/types/list";

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
