export type TListSort = {
  sortName: "id" | "price" | "name";
  sortType: "asc" | "desc";
};

export type TPageStatus =
  | "pageLoading"
  | "filterLoading"
  | "filledProductList"
  | "filterHasNoProduct"
  | "categoryHasNoProduct";
