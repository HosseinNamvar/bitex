export type ProductCard = {
  name: string;
  specs: string[];
  price: number;
  dealPrice?: number;
  imgUrl: string;
  url: string;
};

export type DealCard = ProductCard & {
  dealDate: Date;
  dealPrice: number;
};
