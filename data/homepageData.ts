import { TCollectionCard } from "@/types/collections";
import { TDealCard, TProductCard, TSlide, TBlogCard } from "@/types/common";

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

export const TodayDeals: TDealCard[] = [
  {
    name: "Apple Airpods MAX",
    imgUrl: "/images/products/airpodsMax1.jpg",
    price: 579.0,
    dealPrice: 519.0,
    specs: ["Wireless", "Noise Cancelling", "Built-In Microphone"],
    url: "",
    dealDate: new Date("1970-01-01T18:00:00"),
  },
  {
    name: "Apple Magic Mouse",
    imgUrl: "/images/products/appleMouse1.jpg",
    price: 79.99,
    dealPrice: 55.49,
    specs: ["Bluetooth", "White"],
    url: "",
    dealDate: new Date("1970-01-01T09:30:00"),
  },
  {
    name: "Apple iMac",
    imgUrl: "/images/products/imac2_1.jpg",
    price: 1299.0,
    dealPrice: 1119.0,
    specs: ["8GB Memory", "256GB", "M3 chip"],
    url: "",
    dealDate: new Date("1970-01-01T23:10:00"),
  },
  {
    name: "Apple 12.9 Inch iPad Pro",
    imgUrl: "/images/products/ipadPro1.jpg",
    price: 1149.0,
    dealPrice: 1099.0,
    specs: ["Wi-Fi", "256GB", "12.9-Inch"],
    url: "",
    dealDate: new Date("1970-01-01T06:30:00"),
  },
  {
    name: "Apple iPhone 15 Pro Max",
    imgUrl: "/images/products/iphone1.jpg",
    price: 1199.99,
    specs: ["256GB", "Blue Titanium"],
    dealPrice: 1059.99,
    url: "",
    dealDate: new Date("1970-01-01T10:50:00"),
  },
];

export const TopProducts: TProductCard[] = [
  {
    name: "Apple Airpods Pro",
    imgUrl: "/images/products/airpods1.jpg",
    price: 129.99,
    specs: ["Built-In Microphone", "3rd generation", "Water Resistant"],
    url: "",
  },
  {
    name: "Apple Watch Ultra 2",
    imgUrl: "/images/products/appleWatch1.jpg",
    price: 799.0,
    specs: ["GPS + Cellular", "Titanium", "49mm"],
    url: "",
  },
  {
    name: "ASUS ROG Laptop",
    imgUrl: "/images/products/asusRog1.jpg",
    price: 2499.99,
    dealPrice: 2149.99,
    specs: ["32GB RAM", "17inch display", "OLED Display"],
    url: "",
  },
  {
    name: "PS5 Controller",
    imgUrl: "/images/products/ps5Controller1.jpg",
    price: 69,
    specs: ["Bluetooth", "Version 2"],
    url: "",
  },
  {
    name: "Sony Alpha 7RV",
    imgUrl: "/images/products/sonyAlpha7_1.jpg",
    price: 4499,
    specs: ["Full Frame", "Body", "40MP"],
    dealPrice: 3699,
    url: "",
  },
];

export const SlidesData: TSlide[] = [
  {
    imgUrl: "/images/images/PS5.webp",
    url: "#",
    alt: "/playstation5",
    msg: {
      title: "PLAY STATION 5",
      buttonText: "Shop now!",
    },
  },
  {
    imgUrl: "/images/images/wacom.jpg",
    url: "/wacom",
    alt: "WACOM CINITIQ PRO",
    msg: {
      title: "WACOM CINITIQ PRO",
      buttonText: "Shop Now",
      desc: "Best for designers",
    },
  },
  {
    imgUrl: "/images/images/appleWatch.jpg",
    url: "/apple-watch",
    alt: "APPLE WATCH",
    msg: {
      title: "APPLE WATCH",
      buttonText: "Show All",
      desc: "",
    },
  },
  {
    imgUrl: "/images/images/appleAirpods.jpg",
    url: "/apple-airpods",
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
    title: "Merry & Bright: How Building Meaningful Careers",
    imgUrl: "/images/blog/post1.png",
    url: "/blog/1",
    shortText: `The holiday season is well underway — lights are a-twinkling, bells are jingling,
    and excited faces are beaming. Shelves are stocked with merry-making goodies and all the essentials,
    and gifts arrive seamlessly as lists are checked off one by one. The secret behind all of
    that oh-so-festive fun? Our incredible team.`,
  },
  {
    title: "The Great GifTogether Ties a Bow on a Year of Care in Action",
    imgUrl: "/images/blog/post2.png",
    url: "/blog/2",
    shortText: `A wrapped gift, picked just for you, waiting to be opened —
    it doesn’t take much to bring comfort and joy to someone’s holidays.
    Now imagine that magic multiplied across the country, touching thousands of communities,
    and you’ll get a sense of the true impact of Target’s annual Great GifTogether holiday giving event.`,
  },
  {
    title:
      "Talking Shop with Brett Craig, Target’s New Chief Information Officer",
    imgUrl: "/images/blog/post3.jpg",
    url: "/blog/3",
    shortText: `Over the past 14 years, Brett Craig has led teams across Target, including in technology,
    digital and merchandising. Originally a self-taught programmer,
    his natural curiosity drives him to explore how technology connects to and shapes the future of retail commerce.`,
  },
];
