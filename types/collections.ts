export type TCollectionCard = {
  name: string;
  imgUrl: string;
  collections: TSingleCollection[];
  url: string;
};

type TSingleCollection = {
  label: string;
  url: string;
};
