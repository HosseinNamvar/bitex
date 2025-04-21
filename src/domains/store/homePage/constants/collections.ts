import { TCollectionCard } from "../types";

export const CollectionsData: TCollectionCard[] = [
  {
    name: "Tablet",
    collections: [
      {
        label: "iPad",
        url: "/list/tablets/apple",
      },
      {
        label: "Microsoft Surface",
        url: "/list/pc-laptops/laptops/microsot",
      },
      {
        label: "Samsung Galaxy",
        url: "/list/tablets/samsung",
      },
      {
        label: "Amazon Fire",
        url: "/list/tablets",
      },
      {
        label: "E-Readers",
        url: "/list/tablets",
      },
    ],
    imgUrl: "/images/images/collectionTablet.jpg",
    url: "/list/tablets",
  },
  {
    name: "Smartphones",
    collections: [
      {
        label: "iPhone",
        url: "/list/smartphones/apple-iphone",
      },
      {
        label: "Samsung Galaxy",
        url: "/list/smartphones/samsung-galaxy",
      },
      {
        label: "Google",
        url: "/list/smartphones/google-pixel",
      },
    ],
    imgUrl: "/images/images/collectionSmartphone.jpg",
    url: "/list/smartphones",
  },
  {
    name: "Smartwatches",
    collections: [
      {
        label: "Apple Watch",
        url: "/list/watches/apple",
      },
      {
        label: "Samsung Galaxy",
        url: "/list/watches/Samsung",
      },
      {
        label: "Android Smartwatches",
        url: "/list/watches",
      },
      {
        label: "Fitness Smartwatches",
        url: "/list/watches",
      },
      {
        label: "Smartwatches Accessories",
        url: "/list/watches",
      },
    ],
    imgUrl: "/images/images/collectionWatch.jpg",
    url: "/list/watches",
  },
  {
    name: "Accessories",
    collections: [
      {
        label: "Chargers",
        url: "/",
      },
      {
        label: "Power Banks",
        url: "/",
      },
      {
        label: "Cables",
        url: "/",
      },
      {
        label: "PC Fans",
        url: "/",
      },
      {
        label: "Mobile Covers",
        url: "/",
      },
    ],
    imgUrl: "/images/images/collectionAccessories.jpg",
    url: "/",
  },
];
