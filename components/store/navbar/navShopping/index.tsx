import styles from "./navShopping.module.scss";
import ShoppingCart from "../../common/shoppingCart";
import { ShoppingIconOutline } from "@/components/icons/svgIcons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/shoppingCart";
import { toggleCart } from "@/store/shoppingCart";

const NavBarShopping = () => {
  const dispatch = useDispatch();
  let cartItemQuantity = 0;

  useSelector((state: RootState) => state.cart).items.map(
    (item) => (cartItemQuantity += item.quantity)
  );

  const handleCartVisibility = (visibility: boolean) => {
    dispatch(toggleCart(visibility));
    visibility
      ? document.documentElement.classList.add("noScroll")
      : document.documentElement.classList.remove("noScroll");
  };

  return (
    <div className={styles.shopping}>
      <button onClick={() => handleCartVisibility(true)}>
        <ShoppingIconOutline width={24} />
        <span
          className={`${
            cartItemQuantity === 0 ? styles.emptyCart : styles.filledCart
          }`}
        >
          {cartItemQuantity}
        </span>
      </button>
      <ShoppingCart
        isVisible={useSelector((state: RootState) => state.cart.isVisible)}
        handleOnClose={() => handleCartVisibility(false)}
      />
    </div>
  );
};

export default NavBarShopping;
