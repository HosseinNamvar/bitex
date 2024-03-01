"use client";
import { CloseIcon } from "@/components/icons/svgIcons";
import styles from "./filters.module.scss";
import { TFilters, TProductPath } from "@/types/product";
import Link from "next/link";
import CheckBox from "@/components/UI/checkBox";
import PriceSlider from "@/components/UI/priceSlider";
import { SK_Box } from "@/components/UI/skeleton";
import Button from "@/components/UI/button";

interface IProps {
  showFilters: boolean;
  subCategories: TProductPath[];
  pathName: string;
  filters: TFilters;
  isFilterChanged: boolean;
  onToggleWindow: (value: boolean) => void;
  onFilterChange: (value: TFilters) => void;
  onBrandChange: (value: number) => void;
  onApplyFilter: () => void;
}

const Filters = ({
  showFilters,
  subCategories,
  filters,
  pathName,
  isFilterChanged,
  onToggleWindow,
  onFilterChange,
  onBrandChange,
  onApplyFilter,
}: IProps) => {
  return (
    <div
      className={`${styles.filtersContainer} 
  ${showFilters ? styles.showMobileFilters : ""}`}
    >
      <div
        className={styles.background}
        onClick={() => onToggleWindow(false)}
      />

      <div className={styles.filtersWindow}>
        <div className={styles.header}>
          <h2>Filters</h2>
          <button onClick={() => onToggleWindow(false)}>
            <CloseIcon width={12} />
          </button>
        </div>
        {subCategories && subCategories.length > 0 ? (
          <div className={styles.eachFilter}>
            <div className={styles.header}>
              <h3>In This Category:</h3>
            </div>
            <div className={styles.body}>
              <div className={styles.subCategories}>
                {subCategories.map((cat, index) => (
                  <Link href={pathName + "/" + cat.url} key={index}>
                    {cat.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className={styles.eachFilter}>
          <div className={styles.header}>
            <h3>Availability</h3>
          </div>
          <div className={styles.body}>
            <CheckBox
              text="All"
              onClick={() => onFilterChange({ ...filters, stockStatus: "all" })}
              isChecked={filters.stockStatus === "all"}
            />
            <CheckBox
              text="In Stock"
              onClick={() =>
                onFilterChange({ ...filters, stockStatus: "inStock" })
              }
              isChecked={filters.stockStatus === "inStock"}
            />
            <CheckBox
              text="Out of Stock"
              onClick={() =>
                onFilterChange({ ...filters, stockStatus: "outStock" })
              }
              isChecked={filters.stockStatus === "outStock"}
            />
          </div>
        </div>
        <div className={styles.eachFilter}>
          <div className={styles.header}>
            <h3>Price</h3>
          </div>
          <div className={styles.body}>
            <PriceSlider
              sliderValues={filters.priceMinMax}
              minMaxLimit={filters.priceMinMaxLimitation}
              onChange={(value) =>
                onFilterChange({ ...filters, priceMinMax: [...value] })
              }
            />
          </div>
        </div>
        <div className={styles.eachFilter}>
          <div className={styles.header}>
            <h3>Brand</h3>
          </div>
          <div className={styles.body}>
            {filters.brands.length === 0 ? (
              <div className={styles.loadingBrands}>
                <SK_Box width="100%" height="20px" />
                <SK_Box width="100%" height="20px" />
                <SK_Box width="100%" height="20px" />
                <SK_Box width="100%" height="20px" />
                <SK_Box width="100%" height="20px" />
              </div>
            ) : (
              <div className={styles.optionsList}>
                {filters.brands.map((brand, index) => (
                  <CheckBox
                    key={brand.id}
                    isChecked={brand.isSelected}
                    text={brand.name}
                    onClick={() => onBrandChange(index)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        <div className={styles.apply}>
          <Button
            text="Apply Changes"
            disabled={isFilterChanged}
            onClick={() => onApplyFilter()}
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
