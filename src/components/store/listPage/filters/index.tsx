"use client";

import { CloseIcon } from "@/components/icons/svgIcons";
import Button from "@/components/UI/button";
import CheckBox from "@/components/UI/checkBox";
import PriceSlider from "@/components/UI/priceSlider";
import { SK_Box } from "@/components/UI/skeleton";
import { TFilters } from "@/domains/store/productList/types";
import { cn } from "@/shared/utils/styling";
import { TPageStatus } from "@/types/list";

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
        "min-w-[260px] lg:relative lg:visible lg:transition-none lg:opacity-100 fixed inset-0 transition-all invisible opacity-0 lg:z-1 z-20",
        {
          "visible opacity-100": showFilters,
        }
      )}
    >
      <div
        className={cn(
          "block w-screen h-screen lg:invisible opacity-0 absolute bg-[rgba(0,0,0,0.6)] cursor-pointer backdrop-blur-xs transition-opacity duration-300",
          { "visible opacity-100": showFilters }
        )}
        onClick={() => onToggleWindow(false)}
      />

      <div
        className={cn(
          "lg:min-w-[220px] w-[310px] ease-bitex-easeOut transition-all pb-8 duration-500 lg:w-auto max-w-[260px] absolute lg:relative h-full px-5 border-r bg-white lg:z-1 z-20 border-gray-300 overflow-y-scroll",
          showFilters ? "left-0" : "left-[-310px] lg:left-0"
        )}
      >
        <div className="lg:hidden pb-2 flex justify-between text-gray-500 items-center my-2 border-b border-gray-300">
          <h2>Filters</h2>
          <button
            onClick={() => onToggleWindow(false)}
            className="block border-white rounded-sm cursor-pointer p-3 duration-300 border hover:bg-gray-100 transition-colors hover:border-gray-200"
          >
            <CloseIcon width={12} />
          </button>
        </div>
        <div className="w-full lg:mt-0 my-4 border-b border-gray-300">
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
              <div className="flex flex-col gap-2">
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
        <Button
          disabled={isFilterChanged}
          className="w-full py-1 text-sm rounded-md text-gray-100 border-none bg-bitex-blue-500 hover:bg-bitex-blue-600 active:bg-bitex-blue-400 disabled:bg-bitex-blue-700"
          onClick={() => onApplyFilter()}
        >
          Apply Changes
        </Button>
      </div>
    </div>
  );
};

export default Filters;
