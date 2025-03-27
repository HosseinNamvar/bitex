"use client";

import { CloseIcon } from "@/components/icons/svgIcons";
import { TFilters } from "@/types/product";
import CheckBox from "@/components/UI/checkBox";
import PriceSlider from "@/components/UI/priceSlider";
import { SK_Box } from "@/components/UI/skeleton";
import Button from "@/components/UI/button";
import { TPageStatus } from "@/types/list";
import { cn } from "@/shared/utils/styling";

type TProps = {
  showFilters: boolean;
  filters: TFilters;
  isFilterChanged: boolean;
  pageStatus: TPageStatus;
  onToggleWindow: (value: boolean) => void;
  onFilterChange: (value: TFilters) => void;
  onBrandChange: (value: number) => void;
  onApplyFilter: () => void;
};

const Filters = ({
  showFilters,
  filters,
  isFilterChanged,
  pageStatus,
  onToggleWindow,
  onFilterChange,
  onBrandChange,
  onApplyFilter,
}: TProps) => {
  return (
    <div
      className={cn(
        "min-w-[260px] lg:relative lg:visible  lg:opacity-100 fixed top-0 left-0 bottom-0 right-0 invisible opacity-0 transition-all duration-300 z-[20]",
        showFilters && "styles.showMobileFilters"
      )}
    >
      <div
        className="block w-screen h-screen invisible opacity-0 absolute bg-[rgba(0,0,0,0.6)] cursor-pointer backdrop-blur-[5px] transition-opacity duration-300"
        onClick={() => onToggleWindow(false)}
      />

      <div className="min-w-[220px] max-w-[260px] px-5 border-r border-gray-300 overflow-y-scroll">
        <div className="hidden">
          <h2>Filters</h2>
          <button onClick={() => onToggleWindow(false)}>
            <CloseIcon width={12} />
          </button>
        </div>
        <div className="w-full mb-4 border-b border-gray-300">
          <div className="flex justify-between mb-3.5">
            <h3 className="text-sm font-medium text-gray-800">Availability</h3>
          </div>
          <div className="w-full flex gap-2 px-2.5 mb-6 flex-col">
            <CheckBox
              text="All"
              onClick={() => onFilterChange({ ...filters, stockStatus: "all" })}
              isChecked={filters.stockStatus === "all"}
            />
            <CheckBox
              text="In Stock"
              onClick={() => onFilterChange({ ...filters, stockStatus: "inStock" })}
              isChecked={filters.stockStatus === "inStock"}
            />
            <CheckBox
              text="Out of Stock"
              onClick={() => onFilterChange({ ...filters, stockStatus: "outStock" })}
              isChecked={filters.stockStatus === "outStock"}
            />
          </div>
        </div>
        <div className="w-full mb-4 border-b border-gray-300">
          <div className="flex justify-between mb-3.5">
            <h3 className="text-sm font-medium text-gray-800">Price</h3>
          </div>
          <div className="w-full flex gap-2 px-2.5 mb-6 flex-col">
            <PriceSlider
              sliderValues={filters.priceMinMax}
              minMaxLimit={filters.priceMinMaxLimitation}
              pageStatus={pageStatus}
              onChange={(value) => onFilterChange({ ...filters, priceMinMax: [...value] })}
            />
          </div>
        </div>
        <div className="w-full mb-4 border-b border-gray-300">
          <div className="flex justify-between mb-3.5">
            <h3 className="text-sm font-medium text-gray-800">Brands</h3>
          </div>
          <div className="w-full flex gap-2 px-2.5 mb-6 flex-col">
            {pageStatus === "pageLoading" ? (
              <div className={"styles.loadingBrands"}>
                <SK_Box width="100%" height="20px" />
                <SK_Box width="100%" height="20px" />
                <SK_Box width="100%" height="20px" />
                <SK_Box width="100%" height="20px" />
                <SK_Box width="100%" height="20px" />
              </div>
            ) : pageStatus === "categoryHasNoProduct" ? (
              <div className="w-full h-auto flex flex-col" />
            ) : (
              <div className="w-full h-auto flex gap-2 flex-col">
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
        <div className={"styles.apply"}>
          <Button
            disabled={isFilterChanged}
            className="w-full py-1 text-sm rounded-md text-gray-100 border-none bg-bitex-blue-500 hover:bg-bitex-blue-600 active:bg-bitex-blue-400 disabled:bg-bitex-blue-700"
            onClick={() => onApplyFilter()}
          >
            Apply Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
