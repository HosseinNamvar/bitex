import { TProductCard } from "@/types/common";
import { TDealCard } from "../types/dealCards";

export const TodayDeals: TDealCard[] = [
  {
    name: "Apple Airpods MAX",
    imgUrl: ["/images/products/airpodsMax1.jpg", "/images/products/airpodsMax2.jpg"],
    price: 579.0,
    dealPrice: 519.0,
    specs: ["Wireless", "Noise Cancelling", "Built-In Microphone"],
    url: "/product/65e6ef559d4ab819d1158194",
    dealDate: new Date("1970-01-01T18:00:00"),
  },
  {
    name: "Apple Magic Mouse",
    imgUrl: ["/images/products/appleMouse1.jpg", "/images/products/appleMouse2.jpg"],
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
    imgUrl: ["/images/products/appleWatch1.jpg", "/images/products/appleWatch2.jpg"],
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
    imgUrl: ["/images/products/ps5Controller1.jpg", "/images/products/ps5Controller2.jpg"],
    price: 69,
    specs: ["Bluetooth", "Version 2"],
    url: "/product/65e6f5f89d4ab819d115819f",
  },
  {
    name: "Sony Alpha 7RV",
    imgUrl: ["/images/products/sonyAlpha7_1.jpg", "/images/products/sonyAlpha7_2.jpg"],
    price: 4499,
    specs: ["Full Frame", "Body", "40MP"],
    dealPrice: 3699,
    url: "/product/65e656decb99bb936d4cb7e4",
  },
];
