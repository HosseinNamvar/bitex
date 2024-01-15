export type TCollectionCard = {
  name: string;
  imgUrl: string;
  collections: singleCollection[];
  url: string;
};

type singleCollection = {
  label: string;
  url: string;
};
