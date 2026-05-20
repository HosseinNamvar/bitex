export type TCartItem = {
  productId: string;
  quantity: number;
};

export type TCartItemData = {
  productId: string;
  productName: string;
  imgUrl: string;
  price: number;
  dealPrice?: number;
  quantity: number;
};
