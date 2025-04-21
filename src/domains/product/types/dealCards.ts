import { TProductCard } from "@/types/common";

export type TDealCard = TProductCard & {
  dealDate: Date;
  dealPrice: number;
};
