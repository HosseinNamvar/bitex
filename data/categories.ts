import { TCategory } from "@/types/common";

export const CategoriesData: TCategory[] = [
  {
    name: "Computer & Laptops",
    url: "/list/computer-laptops",
    iconSize: [17, 15],
    iconUrl: "computerIcon",
    subCategories: [
      {
        name: "Computers",
        url: "/list/computers",
        subCategories: [
          {
            name: "CPU",
            url: "/list/cpu",
          },
          {
            name: "Graphic Cards",
            url: "/list/graphics",
          },
          {
            name: "Motherboards",
            url: "/list/motherboards",
          },
          {
            name: "RAMs",
            url: "/list/rams",
          },
          {
            name: "Monitors",
            url: "/list/monitors",
          },
          {
            name: "SSD",
            url: "/list/ssd",
          },
        ],
      },
      {
        name: "Laptops",
        url: "/list/laptops",
        subCategories: [
          {
            name: "Apple",
            url: "/list/laptops/apple",
          },
          {
            name: "Asus",
            url: "/list/laptops/asus",
          },
          {
            name: "Dell",
            url: "/list/laptops/dell",
          },
          {
            name: "HP",
            url: "/list/laptops/hp",
          },
        ],
      },
    ],
  },
  {
    name: "Tablets",
    url: "/list/tablets",
    iconSize: [18, 14],
    iconUrl: "tabletIcon",
    subCategories: [
      {
        name: "iPad",
        url: "/list/tablets/ipad",
      },
      {
        name: "Galaxy Tab",
        url: "/list/tablets/galaxy",
      },
    ],
  },
  {
    name: "Printer & Cameras",
    url: "/list/printer-cameras",
    iconSize: [15, 14],
    iconUrl: "printerIcon",
    subCategories: [
      {
        name: "Printers",
        url: "/list/printers",
        subCategories: [
          {
            name: "HP",
            url: "/list/printers/hp",
          },
          {
            name: "Epson",
            url: "/list/printers/epson",
          },
          {
            name: "Canon",
            url: "/list/printers/canon",
          },
        ],
      },
      {
        name: "Cameras",
        url: "/list/cameras",
        subCategories: [
          {
            name: "Sony",
            url: "/list/cameras/sony",
          },
          {
            name: "Canon",
            url: "/list/cameras/Canon",
          },
          {
            name: "Panasonic",
            url: "/list/cameras/panasonic",
          },
          {
            name: "Fuji",
            url: "/list/cameras/fuji",
          },
        ],
      },
    ],
  },
  {
    name: "Smartphones",
    url: "/list/smartphones",
    iconSize: [12, 18],
    iconUrl: "phoneIcon",
    subCategories: [
      {
        name: "Apple",
        url: "/list/smartphones/apple",
      },
      {
        name: "Samsung",
        url: "/list/smartphones/samsung",
      },
      {
        name: "Sony",
        url: "/list/smartphones/sony",
      },
      {
        name: "Xiaomi",
        url: "/list/smartphones/xiaomi",
      },
    ],
  },
  {
    name: "OLED Smart TVs",
    url: "/list/tvs",
    iconSize: [17, 13],
    iconUrl: "tvIcon",
    subCategories: [
      {
        name: "Sony",
        url: "/list/tvs/sony",
      },
      {
        name: "Samsung",
        url: "/list/tvs/samsung",
      },
      {
        name: "Panasonic",
        url: "/list/tvs/panasonic",
      },
      {
        name: "LG",
        url: "/list/tvs/lg",
      },
    ],
  },
  {
    name: "Keyboard & Mouse",
    url: "/list/keyboard-mouse",
    iconSize: [12, 17],
    iconUrl: "mouseIcon",
    subCategories: [
      {
        name: "Keyboards",
        url: "/list/keyboards",
        subCategories: [
          {
            name: "Apple",
            url: "/list/keyboards/apple",
          },
          {
            name: "Logitech",
            url: "/list/keyboards/logitech",
          },
          {
            name: "ISY",
            url: "/list/keyboards/isy",
          },
          {
            name: "Razer",
            url: "/list/keyboards/razer",
          },
        ],
      },
      {
        name: "Mouses",
        url: "/list/mouses",
        subCategories: [
          {
            name: "Apple",
            url: "/list/mouse/apple",
          },
          {
            name: "Logitech",
            url: "/list/mouse/logitech",
          },
          {
            name: "ISY",
            url: "/list/mouse/isy",
          },
          {
            name: "Razer",
            url: "/list/mouse/razer",
          },
        ],
      },
    ],
  },
  {
    name: "Video Games",
    url: "/list/video-games",
    iconSize: [18, 11],
    iconUrl: "gameIcon",
    subCategories: [
      {
        name: "Consoles",
        url: "/list/consoles",
        subCategories: [
          {
            name: "Playstation",
            url: "/list/consoles/playstation",
          },
          {
            name: "XBox",
            url: "/list/consoles/xbox",
          },
          {
            name: "Nintendo",
            url: "/list/consoles/nintendo",
          },
        ],
      },
      {
        name: "Games",
        url: "/list/games",
        subCategories: [
          {
            name: "Playstation 4 Games",
            url: "/list/games/playstation4",
          },
          {
            name: "Playstation 5 Games",
            url: "/list/games/playstation5",
          },
          {
            name: "XBox Games",
            url: "/list/games/xbox",
          },
          {
            name: "Nintendo Games",
            url: "/list/games/nintendo",
          },
        ],
      },
    ],
  },
  {
    name: "Sports & Outdoors",
    url: "/list/sports-outdoors",
    iconSize: [13, 11],
    iconUrl: "healthIcon",
  },
  {
    name: "Smart Watches",
    url: "/list/smart-watches",
    iconSize: [10, 16],
    iconUrl: "watchIcon",
  },
  {
    name: "Film & Music",
    url: "/list/film-music",
    iconSize: [14, 14],
    iconUrl: "musicIcon",
  },
];
