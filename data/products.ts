import { TProductCard } from "@/types/common";
import { TProduct } from "@/types/product";

export const ProductsData: TProductCard[] = [
  {
    name: "Apple Airpods Pro",
    imgUrl: ["/images/products/airpods1.jpg", "/images/products/airpods2.jpg"],
    price: 129.99,
    specs: ["Built-In Microphone", "3rd generation", "Water Resistant"],
    url: "/product/1",
  },
  {
    name: "Apple Watch Ultra 2",
    imgUrl: [
      "/images/products/appleWatch1.jpg",
      "/images/products/appleWatch2.jpg",
    ],
    price: 799.0,
    specs: ["GPS + Cellular", "Titanium", "49mm"],
    url: "/product/2",
  },
  {
    name: "ASUS ROG Laptop",
    imgUrl: ["/images/products/asusRog1.jpg", "/images/products/asusRog2.jpg"],
    price: 2499.99,
    dealPrice: 2149.99,
    specs: ["32GB RAM", "17inch display", "OLED Display"],
    url: "/product/3",
  },
  {
    name: "PS5 Controller",
    imgUrl: [
      "/images/products/ps5Controller1.jpg",
      "/images/products/ps5Controller2.jpg",
    ],
    price: 69,
    specs: ["Bluetooth", "Version 2"],
    url: "/product/4",
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
    url: "/product/5",
  },
  {
    name: "ASUS ROG Laptop",
    imgUrl: ["/images/products/asusRog1.jpg", "/images/products/asusRog2.jpg"],
    price: 2499.99,
    specs: ["32GB RAM", "17inch display", "OLED Display"],
    url: "/product/6",
  },
  {
    name: "Apple Airpods Pro",
    imgUrl: ["/images/products/airpods1.jpg", "/images/products/airpods2.jpg"],
    price: 129.99,
    specs: ["Built-In Microphone", "3rd generation", "Water Resistant"],
    url: "/product/7",
  },
];

export const OneProduct: TProduct = {
  path: [
    { label: "Home", url: "/" },
    { label: "Products", url: "/list/" },
    { label: "Mobile", url: "/list/1" },
  ],
  board: {
    name: "Sony - PlayStation 5 - DualSense Wireless Controller - White",
    id: 1,
    shortDesc: "Apple iPhone 12 Pro Max A2412 Dual SIM 256GB Mobile Phone",
    price: 215.99,
    dealDate: new Date("1970-01-01T12:40:00"),
    dealPrice: 185.95,
    defaultQuantity: 1,
    imageUrl: "/images/products/ps5Controller1.jpg",
    options: [
      {
        optionName: "Storage Capacity",
        options: [{ value: "64GB" }, { value: "128GB" }, { value: "256GB" }],
        optionSelectedId: 1,
        type: "text",
      },
      {
        optionName: "Color",
        options: [
          { value: "#484848", label: "Grey" },
          { value: "#388EDD", label: "Blue" },
          { value: "#7AC38F", label: "Green" },
          { value: "#ED4A4A", label: "Red" },
          { value: "#DD9D24", label: "Yellow" },
        ],
        optionSelectedId: 3,
        type: "color",
      },
    ],
  },
  specification: [
    {
      groupName: "Overall",
      specs: [
        {
          label: "Dimension",
          data: ["160.8 x 78.1 x 7.4 mm"],
        },
        {
          label: "SimCard",
          data: ["Nano Sim Cards (8.8 × 12.3 mm)"],
        },
        {
          label: "Weight",
          data: ["228 gram"],
        },
        {
          label: "Body Spec",
          data: [
            "Metal and Glass",
            "IP68 Standard",
            "Gorilla Glass",
            "Cover for display",
          ],
        },
        {
          label: "Special Features",
          data: [
            "Great for: Gaming, Photography, Selfie, Waterproof, Resistance Body, Face detection sensor",
          ],
        },
      ],
    },
    {
      groupName: "Display",
      specs: [
        {
          label: "Colored display",
          data: ["Yes"],
        },
        {
          label: "Touchscreen",
          data: ["Yes"],
        },
      ],
    },
    {
      groupName: "Camera",
      specs: [
        {
          label: "Front Camera",
          data: ["18MP", "CMOS Sensor"],
        },
        {
          label: "Back Camera",
          data: ["48MP"],
        },
      ],
    },
  ],
  gallery: [
    "ps5Controller1.jpg",
    "ps5Controller2.jpg",
    "ps5Controller3.jpg",
    "ps5Controller4.jpg",
  ],
  reviews: [
    {
      userName: "T. Mihai",
      userImage: "/images/icons/profileIcon.svg",
      date: new Date("1970-08-25"),
      likeNumber: 0,
      dislikeNumber: 0,
      isVerified: true,
      text: `It took awhile to find the right pillow. All of the ones I have tried were not "true" memory foam. Memory foam is dense and not light weight. So all of the other pillows were too soft and did not support my head correctly. I have slept so well on this pillow that am waking up in more pain because my apine is re-adjusting to its proper position`,
      advantages: ["Good Camera", "High quality", "OLED display"],
      disAdvantages: ["Have not a charger", "Bad quality Battery"],
    },
  ],
};
