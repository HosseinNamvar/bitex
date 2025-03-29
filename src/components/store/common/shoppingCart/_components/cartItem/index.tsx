"use client";
import Image from "next/image";
import { TCartItemData } from "@/types/shoppingCart";
import { DeleteIcon } from "@/components/icons/svgIcons";
import { useDispatch } from "react-redux";
import { modifyQuantity, remove } from "@/store/shoppingCart";
import Quantity from "../../../quantity";
import { useRouter } from "next/navigation";

interface IProps {
  data: TCartItemData;
  onLinkClicked: () => void;
}

const CartItem = ({ data, onLinkClicked }: IProps) => {
  const { productName, productId, imgUrl, price, dealPrice = 0, quantity } = data;

  const dispatch = useDispatch();
  const router = useRouter();
  const handleQuantityChange = (isReduced: boolean) => {
    isReduced
      ? dispatch(modifyQuantity({ amount: -1, productId }))
      : dispatch(modifyQuantity({ amount: 1, productId }));
  };
  const currentPrice = dealPrice === 0 ? price : dealPrice;

  const handleGoToPage = () => {
    router.push("/product/" + productId);
    onLinkClicked();
  };

  return (
    <div className="flex md:flex-row flex-col mt-5 mx-7 pb-5 justify-between gap-4 border-b border-gray-200">
      <div className={"w-[120px] h-[110px] relative cursor-pointer"} onClick={handleGoToPage}>
        <Image
          src={imgUrl}
          fill
          alt={productName}
          className="rounded-lg overflow-hidden border border-gray-200 object-contain"
        />
      </div>
      <div className={"flex flex-grow flex-col"}>
        <h2 className={"mb-3 text-sm text-gray-600 md:mb-6"} onClick={handleGoToPage}>
          {productName}
        </h2>
        <div className={"flex items-center justify-start"}>
          <span className="text-lg text-gray-700">
            {(quantity * currentPrice).toLocaleString("en-us", {
              minimumFractionDigits: 2,
            })}{" "}
            €
          </span>
          <span className="text-sm text-gray-500 ml-3">
            {quantity > 1
              ? `${quantity} x ${currentPrice.toLocaleString("en-us", {
                  maximumFractionDigits: 2,
                })} €`
              : ""}{" "}
          </span>
        </div>
        <div className={"flex justify-between items-center mt-3"}>
          <Quantity onChange={handleQuantityChange} quantity={quantity} iconWidth={8} />
          <button
            onClick={() => dispatch(remove(productId))}
            className="size-10 cursor-pointer rounded-md flex items-center justify-center transition-all duration-300 border border-white hover:border-gray-200 hover:bg-gray-100 active:border-gray-300 active:bg-gray-200"
          >
            <DeleteIcon width={16} className="stroke-gray-400 fill-gray-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
