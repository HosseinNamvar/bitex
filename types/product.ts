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
  id: number;
  name: string;
  shortDesc: string;
  price: number;
  dealDate?: Date;
  dealPrice?: number;
  options: TProductOption[];
  imageUrl: string;
  defaultQuantity: number;
};

type TProductPath = {
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
  desc?: string;
  price: string;
  salePrice?: string;
  images: string[];
  categoryID: string;
  specifications: ProductSpec[];
};
