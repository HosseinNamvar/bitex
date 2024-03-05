import { TCollectionCard } from "@/types/collections";
import { TDealCard, TProductCard, TSlide, TBlogCard } from "@/types/common";

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

export const TodayDeals: TDealCard[] = [
  {
    name: "Apple Airpods MAX",
    imgUrl: [
      "/images/products/airpodsMax1.jpg",
      "/images/products/airpodsMax2.jpg",
    ],
    price: 579.0,
    dealPrice: 519.0,
    specs: ["Wireless", "Noise Cancelling", "Built-In Microphone"],
    url: "/product/65e6ef559d4ab819d1158194",
    dealDate: new Date("1970-01-01T18:00:00"),
  },
  {
    name: "Apple Magic Mouse",
    imgUrl: [
      "/images/products/appleMouse1.jpg",
      "/images/products/appleMouse2.jpg",
    ],
    price: 79.99,
    dealPrice: 55.49,
    specs: ["Bluetooth", "White"],
    url: "/product/65e6f3fd9d4ab819d1158197",
    dealDate: new Date("1970-01-01T09:30:00"),
  },
  {
    name: "Apple iMac",
    imgUrl: ["/images/products/imac2_1.jpg", "/images/products/imac2_2.jpg"],
    price: 1299.0,
    dealPrice: 1119.0,
    specs: ["8GB Memory", "256GB", "M3 chip"],
    url: "/product/65e22d7f580cd983d5aa5a2f",
    dealDate: new Date("1970-01-01T23:10:00"),
  },
  {
    name: "Apple 12.9 Inch iPad Pro",
    imgUrl: ["/images/products/ipadPro1.jpg", "/images/products/ipadPro2.jpg"],
    price: 1149.0,
    dealPrice: 1099.0,
    specs: ["Wi-Fi", "256GB", "12.9-Inch"],
    url: "/product/65e6244fcb99bb936d4cb7c0",
    dealDate: new Date("1970-01-01T06:30:00"),
  },
  {
    name: "Apple iPhone 15 Pro Max",
    imgUrl: ["/images/products/iphone1.jpg", "/images/products/iphone2.jpg"],
    price: 1199.99,
    specs: ["256GB", "Blue Titanium"],
    dealPrice: 1059.99,
    url: "/product/65e6530ecb99bb936d4cb7db",
    dealDate: new Date("1970-01-01T10:50:00"),
  },
];

export const TopProducts: TProductCard[] = [
  {
    name: "Apple Airpods Pro",
    imgUrl: ["/images/products/airpods1.jpg", "/images/products/airpods2.jpg"],
    price: 129.99,
    specs: ["Built-In Microphone", "3rd generation", "Water Resistant"],
    url: "/product/65e6eed69d4ab819d1158193",
  },
  {
    name: "Apple Watch Ultra 2",
    imgUrl: [
      "/images/products/appleWatch1.jpg",
      "/images/products/appleWatch2.jpg",
    ],
    price: 799.0,
    specs: ["GPS + Cellular", "Titanium", "49mm"],
    url: "/product/65e6f5339d4ab819d115819c",
  },
  {
    name: "ASUS ROG Laptop",
    imgUrl: ["/images/products/asusRog1.jpg", "/images/products/asusRog2.jpg"],
    price: 2499.99,
    dealPrice: 2149.99,
    specs: ["32GB RAM", "17inch display", "OLED Display"],
    url: "/product/65e6008bcb99bb936d4cb7ac",
  },
  {
    name: "PS5 Controller",
    imgUrl: [
      "/images/products/ps5Controller1.jpg",
      "/images/products/ps5Controller2.jpg",
    ],
    price: 69,
    specs: ["Bluetooth", "Version 2"],
    url: "/product/65e6f5f89d4ab819d115819f",
  },
  {
    name: "Sony Alpha 7RV",
    imgUrl: [
      "/images/products/sonyAlpha7_1.jpg",
      "/images/products/sonyAlpha7_2.jpg",
    ],
    price: 4499,
    specs: ["Full Frame", "Body", "40MP"],
    dealPrice: 3699,
    url: "/product/65e656decb99bb936d4cb7e4",
  },
];

export const SlidesData: TSlide[] = [
  {
    imgUrl: "/images/images/PS5.webp",
    url: "/product/65e6f80a9d4ab819d11581a2",
    alt: "/playstation5",
    msg: {
      title: "PLAY STATION 5",
      buttonText: "Shop now!",
    },
  },
  {
    imgUrl: "/images/images/wacom.jpg",
    url: "/product/65e6f7469d4ab819d11581a1",
    alt: "WACOM CINITIQ PRO",
    msg: {
      title: "WACOM CINITIQ PRO",
      buttonText: "Shop Now",
      desc: "Best for designers",
    },
  },
  {
    imgUrl: "/images/images/appleWatch.jpg",
    url: "/product/65e6f5339d4ab819d115819c",
    alt: "APPLE WATCH",
    msg: {
      title: "APPLE WATCH",
      buttonText: "Show All",
      desc: "",
    },
  },
  {
    imgUrl: "/images/images/appleAirpods.jpg",
    url: "/list/audio/headphones/apple",
    alt: "",
    msg: {
      title: "AIRPODS PRO",
      buttonText: "Shop now!",
      desc: "Just for today!",
    },
  },
];

export const BlogCardData: TBlogCard[] = [
  {
    title: "Praesent vestibulum nisi at mollis mollis",
    imgUrl: "/images/blog/blogPost1.avif",
    url: "#",
    shortText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet quam finibus,
     gravida mi in, fermentum est. Nulla lacinia, orci ac dictum euismod, ligula leo suscipit lectus,
      ac porttitor sem purus ac nisl. Nunc aliquet nisi tristique magna suscipit finibus. 
      Praesent vestibulum nisi at mollis mollis. Phasellus sollicitudin felis sit amet eros 
      accumsan rutrum. Phasellus est nisi, eleifend vel bibendum vitae, interdum ac tellus.`,
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    imgUrl: "/images/blog/blogPost2.avif",
    url: "#",
    shortText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet quam finibus,
    gravida mi in, fermentum est. Nulla lacinia, orci ac dictum euismod, ligula leo suscipit lectus,
     ac porttitor sem purus ac nisl. Nunc aliquet nisi tristique magna suscipit finibus. 
     Praesent vestibulum nisi at mollis mollis. Phasellus sollicitudin felis sit amet eros 
     accumsan rutrum. Phasellus est nisi, eleifend vel bibendum vitae, interdum ac tellus.`,
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur",
    imgUrl: "/images/blog/blogPost3.avif",
    url: "#",
    shortText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet quam finibus,
    gravida mi in, fermentum est. Nulla lacinia, orci ac dictum euismod, ligula leo suscipit lectus,
     ac porttitor sem purus ac nisl. Nunc aliquet nisi tristique magna suscipit finibus. 
     Praesent vestibulum nisi at mollis mollis. Phasellus sollicitudin felis sit amet eros 
     accumsan rutrum. Phasellus est nisi, eleifend vel bibendum vitae, interdum ac tellus.`,
  },
];
