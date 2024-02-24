"use client";
import styles from "./list.module.scss";

import Link from "next/link";
import Image from "next/image";

import ProductCard from "@/components/store/common/productCard";
import DropDownList from "@/components/UI/dropDown";
import LineList from "@/components/UI/lineList";

import { ProductsData } from "@/data/products";
import { sortDropdownData } from "@/data/uiElementsData";
import { useState } from "react";
import { CloseIcon } from "@/components/icons/svgIcons";
import { redirect, useParams } from "next/navigation";
import CheckBox from "@/components/UI/checkBox";
import PriceSlider from "@/components/UI/priceSlider";

type TFilters = {
  stockStatus: "all" | "inStock" | "outStock";
};

const initialFilters: TFilters = {
  stockStatus: "all",
};

const ListPage = () => {
  const [sortIndex, setSortIndex] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<TFilters>(initialFilters);
  const { params } = useParams<{ params: string[] }>();

  if (!params || params.length <= 0) redirect("/");

  const handleSortChange = (newIndex: number) => {
    setSortIndex(newIndex);
  };

  const toggleFiltersWindow = (visibility: boolean) => {
    setShowFilters(visibility);
    visibility
      ? document.documentElement.classList.add("noScroll")
      : document.documentElement.classList.remove("noScroll");
  };

  const getPageHeader = () => {
    const pageName = params[params.length - 1].split("-");
    pageName.forEach((word, index) => {
      pageName[index] = word[0].toUpperCase() + word.slice(1);
    });

    return pageName.join(" ");
  };

  const getLink = (array: string[], index: number) => {
    let link = "/list";
    for (let i = 0; i <= index; i++) {
      link += "/" + array[i];
    }
    return link;
  };
  return (
    <div className={styles.listPage}>
      <div className={styles.header}>
        <h1>{getPageHeader()}</h1>
        <div className={styles.links}>
          <Link href={"/"}>Home</Link>
          {params.map((item, index) => (
            <Link key={index} href={getLink(params, index)}>
              {item[0].toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>
      </div>
      <div className="storeContainer flexCol">
        <div className={styles.mobileFilter}>
          <button
            className={styles.filterBtn}
            onClick={() => toggleFiltersWindow(true)}
          >
            FILTERS
          </button>
          <DropDownList
            data={sortDropdownData}
            width="170px"
            selectedIndex={sortIndex}
            onChange={handleSortChange}
          />
        </div>
        <div className={styles.main}>
          <div
            className={`${styles.filtersContainer} 
              ${showFilters ? styles.showMobileFilters : ""}`}
          >
            <div
              className={styles.background}
              onClick={() => toggleFiltersWindow(false)}
            />
            <div className={styles.filtersWindow}>
              <div className={styles.header}>
                <h2>Filters</h2>
                <button onClick={() => toggleFiltersWindow(false)}>
                  <CloseIcon width={12} />
                </button>
              </div>
              <div className={styles.eachFilter}>
                <div className={styles.header}>
                  <h3>Availability</h3>
                  <button />
                </div>
                <div className={styles.body}>
                  <CheckBox
                    text="All"
                    onClick={() =>
                      setFilters({ ...filters, stockStatus: "all" })
                    }
                    isChecked={filters.stockStatus === "all"}
                  />
                  <CheckBox
                    text="In Stock"
                    onClick={() =>
                      setFilters({ ...filters, stockStatus: "inStock" })
                    }
                    isChecked={filters.stockStatus === "inStock"}
                  />
                  <CheckBox
                    text="Out of Stock"
                    onClick={() =>
                      setFilters({ ...filters, stockStatus: "outStock" })
                    }
                    isChecked={filters.stockStatus === "outStock"}
                  />
                </div>
              </div>
              <div className={styles.eachFilter}>
                <div className={styles.header}>
                  <h3>Price</h3>
                  <button />
                </div>
                <div className={styles.body}>
                  <PriceSlider
                    minValue={2000}
                    maxValue={6000}
                    onChange={() => ""}
                  />
                </div>
              </div>
              <div className={styles.eachFilter}>
                <div className={styles.header}>
                  <h3>Colors</h3>
                  <button />
                </div>
                <div className={styles.body}>
                  <div className={styles.searchInput}>
                    <input type="text" placeholder="Search Color" />
                  </div>
                  <div className={styles.optionsList}>
                    <div>
                      <input type="checkbox" id="colorBlack" />
                      <label htmlFor="colorBlack">Black</label>
                      <div className={`${styles.colorBox} ${styles.black}`} />
                    </div>
                    <div>
                      <input type="checkbox" id="colorBlue" />
                      <label htmlFor="colorBlue">Blue</label>
                      <div className={`${styles.colorBox} ${styles.blue}`} />
                    </div>
                    <div>
                      <input type="checkbox" id="colorRed" />
                      <label htmlFor="colorRed">Red</label>
                      <div className={`${styles.colorBox} ${styles.red}`} />
                    </div>
                    <div>
                      <input type="checkbox" id="colorGreen" />
                      <label htmlFor="colorGreen">Green</label>
                      <div className={`${styles.colorBox} ${styles.green}`} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.eachFilter}>
                <div className={styles.header}>
                  <h3>Options</h3>
                  <button />
                </div>
                <div className={styles.body}>
                  <div className={styles.searchInput}>
                    <input type="text" placeholder="Search Option" />
                  </div>
                  <div className={styles.optionsList}>
                    <div>
                      <input type="checkbox" id="option1" />
                      <label htmlFor="option1">Option 1</label>
                    </div>
                    <div>
                      <input type="checkbox" id="option2" />
                      <label htmlFor="option2">Option 2</label>
                    </div>
                    <div>
                      <input type="checkbox" id="option3" />
                      <label htmlFor="option3">Option 3</label>
                    </div>
                    <div>
                      <input type="checkbox" id="option4" />
                      <label htmlFor="option4">Option 4</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rightCol}>
            <div className={styles.sortContainer}>
              <Image
                src={"/images/icons/sortIcon.svg"}
                alt="Sort"
                width={16}
                height={12}
              />
              <span>Sort By:</span>
              <LineList
                data={sortDropdownData}
                selectedId={sortIndex}
                onChange={handleSortChange}
              />
            </div>
            <div className={styles.listContainer}>
              {ProductsData.map((product, index) => (
                <ProductCard
                  key={index}
                  imgUrl={product.imgUrl}
                  name={product.name}
                  price={product.price}
                  dealPrice={product.dealPrice}
                  specs={product.specs}
                  url={product.url}
                />
              ))}
            </div>
            <div className={styles.pagingContainer}>
              <button className={styles.first} />
              <button className={styles.numbers}>1</button>
              <button className={styles.numbers}>2</button>
              <button className={styles.numbers}>3</button>
              <button className={`${styles.numbers} ${styles.active}`}>
                4
              </button>
              <button className={styles.numbers}>5</button>
              <button className={styles.numbers}>6</button>
              <button className={styles.numbers}>7</button>
              <button className={styles.numbers}>8</button>
              <button className={styles.last} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListPage;
