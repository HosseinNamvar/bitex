export type TProductCard = {
  name: string;
  specs: string[];
  price: number;
  dealPrice?: number;
  imgUrl: string;
  url: string;
};

export type TDealCard = TProductCard & {
  dealDate: Date;
  dealPrice: number;
};

export type TSlide = {
  imgUrl: string;
  url: string;
};
