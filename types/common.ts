import { NameValue, OptionSetType, PageType } from "@prisma/client";

export type TProductCard = {
  name: string;
  isAvailable?: boolean;
  specs: string[];
  price: number;
  dealPrice?: number;
  imgUrl: [string, string];
  url: string;
  staticWidth?: boolean;
};

export type TDealCard = TProductCard & {
  dealDate: Date;
  dealPrice: number;
};

export type TSlide = {
  imgUrl: string;
  url: string;
  alt: string;
  msg?: {
    title: string;
    desc?: string;
    buttonText?: string;
  };
};

export type TBlogCard = {
  title: string;
  imgUrl: string;
  url: string;
  shortText: string;
};

type TSubCategory = {
  name: string;
  url: string;
  subCategories?: {
    name: string;
    url: string;
  }[];
};

export type TCategory = {
  name: string;
  iconUrl: string;
  iconSize: [number, number];
  url: string;
  subCategories?: TSubCategory[];
};

export type TOptionSet = {
  id: string;
  name: string;
  options: NameValue[];
  type: OptionSetType;
};

export type TSingleOption = {
  optionSetID: string;
  name: string;
  value: string;
};

export type TSpecGroup = {
  id: string;
  title: string;
  specs: string[];
};

export type TSingleSpec = {
  specGroupID: string;
  value: string;
};

export type TAddPageVisit = {
  pageType: PageType;
  pagePath?: string;
  productID?: string;
  deviceResolution?: string;
};
