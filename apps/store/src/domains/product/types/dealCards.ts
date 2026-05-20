import { TProductCard } from "@/shared/types/common";

export type TDealCard = TProductCard & {
  dealDate: Date;
  dealPrice: number;
};
