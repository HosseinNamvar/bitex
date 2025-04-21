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
