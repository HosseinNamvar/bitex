import { ProductSpec } from "@prisma/client";

export type TUserReview = {
  userName: string;
  userImage: string;
  isVerified: boolean;
  date: Date;
  likeNumber: number;
  dislikeNumber: number;
  text: string;
  advantages?: string[];
  disAdvantages?: string[];
};

export type TProductSpec = {
  groupName: string;
  specs: {
    label: string;
    data: string[];
  }[];
};

export type TProductOption = {
  optionName: string;
  options: { value: string; label?: string }[];
  optionSelectedId: number;
  type: "text" | "color";
};

export type TProductBoard = {
  id: string;
  name: string;
  isAvailable: boolean;
  shortDesc: string;
  price: number;
  dealDate?: Date;
  dealPrice?: number;
  specialFeatures?: string[];
  options?: TProductOption[];
  defaultQuantity: number;
};

export type TProductPath = {
  label: string;
  url: string;
};

export type TProduct = {
  path: TProductPath[];
  board: TProductBoard;
  gallery: string[];
  specification: TProductSpec[];
  reviews: TUserReview[];
};

export type TAddProductFormValues = {
  name: string;
  isAvailable: boolean;
  specialFeatures: string[];
  brandID: string;
  desc?: string;
  price: string;
  salePrice?: string;
  images: string[];
  categoryID: string;
  specifications: ProductSpec[];
};

export type TProductListItem = {
  id: string;
  name: string;
  category: {
    id: string;
    name: string;
  };
};
export type TCartListItemDB = {
  id: string;
  name: string;
  images: string[];
  price: number;
  salePrice: number | null;
};

export type TBrand = {
  id: string;
  name: string;
};

export type TFilters = {
  stockStatus: "all" | "inStock" | "outStock";
  priceMinMax: [number, number];
  priceMinMaxLimitation: [number, number];
  brands: TFilterBrands[];
};
export type TFilterBrands = {
  id: string;
  name: string;
  isSelected: boolean;
};

export type TListItem = {
  id: string;
  name: string;
  isAvailable: boolean;
  specialFeatures: string[];
  images: string[];
  price: number;
  salePrice: number | null;
  brand: {
    id: string;
    name: string;
  };
};

export type TSpecification = {
  groupName: string;
  specs: {
    name: string;
    value: string;
  }[];
};

export type TPath = {
  id: string;
  parentID: string | null;
  name: string;
  url: string;
};

export type TProductPageInfo = {
  id: string;
  name: string;
  isAvailable: boolean;
  desc: string | null;
  images: string[];
  optionSets: string[];
  specialFeatures: string[];
  price: number;
  salePrice: number | null;
  specifications: TSpecification[];
  path: TPath[];
};
