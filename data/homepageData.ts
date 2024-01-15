import { TCollectionCard } from "@/types/collections";

export const DealsEndTime: Date[] = [
  new Date("1970-01-01T18:00:00"),
  new Date("1970-01-01T09:30:00"),
  new Date("1970-01-01T23:10:00"),
  new Date("1970-01-01T06:30:00"),
  new Date("1970-01-01T10:50:00"),
];

export const CollectionsData: TCollectionCard[] = [
  {
    name: "Tablet",
    collections: [
      {
        label: "iPad",
        url: "#",
      },
      {
        label: "Microsoft Surface",
        url: "#",
      },
      {
        label: "Samsung Galaxy",
        url: "#",
      },
      {
        label: "Amazon Fire",
        url: "#",
      },
      {
        label: "E-Readers",
        url: "#",
      },
    ],
    imgUrl: "/images/images/collectionTablet.jpg",
    url: "/collection/tablet",
  },
  {
    name: "Smartphones",
    collections: [
      {
        label: "iPhone",
        url: "#",
      },
      {
        label: "Samsung Galaxy",
        url: "#",
      },
      {
        label: "Google",
        url: "#",
      },
    ],
    imgUrl: "/images/images/collectionSmartphone.jpg",
    url: "/collection/Smartphones",
  },
  {
    name: "Smartwatches",
    collections: [
      {
        label: "Apple Watch",
        url: "#",
      },
      {
        label: "Samsung Galaxy",
        url: "#",
      },
      {
        label: "Android Smartwatches",
        url: "#",
      },
      {
        label: "Fitness Smartwatches",
        url: "#",
      },
      {
        label: "Smartwatches Accessories",
        url: "#",
      },
    ],
    imgUrl: "/images/images/collectionWatch.jpg",
    url: "/collection/Smartwatches",
  },
  {
    name: "Accessories",
    collections: [
      {
        label: "Chargers",
        url: "#",
      },
      {
        label: "Power Banks",
        url: "#",
      },
      {
        label: "Cables",
        url: "#",
      },
      {
        label: "PC Fans",
        url: "#",
      },
      {
        label: "Mobile Covers",
        url: "#",
      },
    ],
    imgUrl: "/images/images/collectionAccessories.jpg",
    url: "/collection/accessories",
  },
];
