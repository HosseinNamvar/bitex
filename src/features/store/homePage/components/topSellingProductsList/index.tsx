import Link from "next/link";
import { TopProducts } from "../../constants";
import ProductCard from "@/components/store/common/productCard";

export const TopSellingProductsList = () => {
  return (
    <div className="w-full mt-14">
      <div className="flex w-full justify-between items-center mb-7">
        <h2 className="text-2xl font-medium text-gray-700">Top Selling Products</h2>
        <Link href={"/"}>view all</Link>
      </div>
      <div className="flex justify-between gap-3.5 overflow-x-scroll pb-7 2xl:pb-2 2xl:overflow-x-visible">
        {TopProducts.map((product, index) => (
          <ProductCard
            name={product.name}
            imgUrl={product.imgUrl}
            price={product.price}
            specs={product.specs}
            url={product.url}
            dealPrice={product.dealPrice}
            key={index}
            staticWidth
          />
        ))}
      </div>
    </div>
  );
};
