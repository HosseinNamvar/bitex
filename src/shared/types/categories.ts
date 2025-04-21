export type TCategory = {
  id: string;
  parentID: string | null;
  name: string;
  url: string;
  iconUrl: string | null;
  iconSize: number[];
};

export type TGroupJSON = {
  group: TCategory;
  categories: categoryJSON[];
};
type categoryJSON = {
  category: TCategory;
  subCategories: TCategory[];
};
