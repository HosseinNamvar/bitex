"use-client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ShoppingIconOutline } from "@/shared/components/icons/svgIcons";
import { cn } from "@/shared/utils/styling";
import { TCartState, RootState } from "@/store/shoppingCart";
import { toggleCart } from "@/store/shoppingCart";

import ShoppingCart from "../../common/shoppingCart";

const NavBarShopping = () => {
  const dispatch = useDispatch();
  const [cartData, setCartData] = useState<TCartState>();
  const localCartData = useSelector((state: RootState) => state.cart);
  let cartItemQuantity = 0;

  useEffect(() => {
    if (localCartData) {
      setCartData(localCartData);
    }
  }, [localCartData]);

  if (cartData && cartData.items.length > 0) {
    cartData.items.map((item) => (cartItemQuantity += item.quantity));
  }

  const handleCartVisibility = (visibility: boolean) => {
    dispatch(toggleCart(visibility));
    if (visibility) {
      document.documentElement.classList.add("noScroll");
    } else {
      document.documentElement.classList.remove("noScroll");
    }
  };

  return (
    <div className="flex items-center relative ml-9 mr-4 hover:stroke-gray-700 stroke-gray-500 cursor-pointer">
      <div onClick={() => handleCartVisibility(true)} className="border-none relative">
        <ShoppingIconOutline width={24} className="fill-none stroke-inherit transition-all duration-300" />
        <span
          className={cn(
            "absolute -top-2 -right-4 text-sm size-6 leading-6  text-center rounded-full",
            cartItemQuantity ? "text-white bg-red-500" : "text-gray-500 bg-gray-300"
          )}
        >
          {cartItemQuantity}
        </span>
      </div>
      <ShoppingCart
        isVisible={cartData ? cartData.isVisible : false}
        quantity={cartItemQuantity}
        handleOnClose={() => handleCartVisibility(false)}
      />
    </div>
  );
};

export default NavBarShopping;
