import Image from "next/image";
import Link from "next/link";

import { FacebookIcon, InstagramIcon, LinkedinIcon, XIcon } from "@/components/icons/svgIcons";
import Button from "@/shared/components/UI/button";

const CATEGORIES = [
  "Computer & Laptop",
  "Tablets & iPad",
  "Printer & Cameras",
  "Smart Phones",
  "OLED Smart TVs",
  "Keyboard & Mouse",
  "Video Games",
  "Sports & Outdoors",
  "Smart Watches",
];
const CUSTOMER_SERVICES = [
  "Privacy Policy",
  "Refund Policy",
  "Shipping & Return",
  "Terms & Conditions",
  "Advanced Search",
  "Store Locations",
];
const LEGALS = ["Conditions of Use & Sale", "Privacy Notice", "Imprint", "Cookies Notice", "Interest-Based Ads Notice"];

const CURRENT_YEAR = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="flex flex-col border-t bg-white z-50 border-t-gray-300 w-full">
      <div className="flex-col storeContainer">
        <div className="flex w-full items-center h-32 border-b border-b-gray-300">
          <Link href={"/"}>
            <Image alt="Bitex Logo" src={"/images/logo.png"} width={125} height={40} />
          </Link>
          <div className="h-11 w-full relative ml-16">
            <input
              type="text"
              className="w-full h-full rounded-lg text-gray-700 border border-gray-300 pl-12 focus:border-gray-600"
              placeholder="Search"
            />
            <Image
              src="/icons/searchIcon.svg"
              width={16}
              height={16}
              alt="Search"
              className="absolute top-3.5 left-5 hidden sm:block"
            />
          </div>
        </div>
        <section className="flex flex-col lg:flex-row items-start justify-between">
          <div>
            <h3 className="text-lg text-gray-900 font-medium mt-9 mb-4">Contact Us</h3>
            <span className="text-gray-500 block text-sm leading-5">Got Question? Call us 24/7</span>
            <h2 className="text-blue-600 font-medium my-2">+49 30 575909881</h2>
            <span className="text-gray-500 block text-sm leading-5">
              685 Market Street, San Francisco, CA 94105, US
            </span>
            <span className="text-gray-500 block text-sm leading-5">nonamecompany@justportfolio.com</span>
          </div>
          <div>
            <h3 className="text-lg text-gray-900 font-medium mt-9 mb-4">Categories</h3>
            <ul className="p-0 mb-4">
              {CATEGORIES.map((item) => (
                <li
                  key={item}
                  className="text-sm leading-7 transition-all duration-150 hover:text-gray-800 text-gray-700"
                >
                  <Link href={""}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg text-gray-900 font-medium mt-9 mb-4">Customer Service</h3>
            <ul>
              {CUSTOMER_SERVICES.map((item) => (
                <li
                  key={item}
                  className="text-sm leading-7 transition-all duration-150 hover:text-gray-800 text-gray-700"
                >
                  <Link href={""}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:mb-0 mb-12">
            <h3 className="text-lg text-gray-900 font-medium mt-9 mb-4">Sign Up to Newsletter</h3>
            <div className="flex w-auto justify-start">
              <input
                type="text"
                placeholder="email address"
                className="w-[200px] text-sm h-8 rounded-md px-4 border border-gray-300 focus:border-gray-800"
              />
              <Button className="h-8  px-4 ml-2 rounded-md border text-sm border-gray-300 bg-gray-100 text-gray-700  hover:bg-gray-200 active:bg-gray-300 active:text-gray-900">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </div>
      <section className="w-full xl:h-20 bg-gray-100 text-sm">
        <div className="h-full flex-col gap-4 xl:flex-row xl:gap-0 justify-between items-center storeContainer">
          <span className="text-gray-500 mt-6 xl:mt-0">© {CURRENT_YEAR} BITEX Store. All Rights Reserved.</span>
          <ul className="gap-4 flex flex-col my-6 sm:my-0 sm:flex-row text-gray-800 font-medium">
            {LEGALS.map((item) => (
              <li
                key={item}
                className="text-sm leading-7 transition-all text-center duration-150 hover:text-gray-800 text-gray-700"
              >
                <Link href={""}>{item}</Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-4 mb-6 xl:mb-0">
            <Link
              href={"https://www.linkedIn.com"}
              className="fill-gray-400 hover:fill-gray-800 transition-all duration-200"
            >
              <LinkedinIcon width={20} strokeWidth={0} className="fill-inherit" />
            </Link>
            <Link
              href={"https://www.twitter.com"}
              className="fill-gray-400 hover:fill-gray-800 transition-all duration-200"
            >
              <XIcon width={20} className="fill-inherit" />
            </Link>
            <Link
              href={"https://www.instagram.com"}
              className="fill-gray-400 hover:fill-gray-800 transition-all duration-200"
            >
              <InstagramIcon width={20} strokeWidth={0} className="fill-inherit" />
            </Link>
            <Link
              href={"https://www.facebook.com"}
              className="fill-gray-400 hover:fill-gray-800 transition-all duration-200"
            >
              <FacebookIcon width={20} strokeWidth={0} className="fill-inherit" />
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
