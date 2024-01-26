"use client";
import StoreNavBar from "@/components/store/navbar";
import StoreFooter from "./../../components/store/footer/index";
import { Provider } from "react-redux";
import { shoppingCartStore } from "@/store/shoppingCart";

const StoreLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Provider store={shoppingCartStore}>
        <StoreNavBar />
        {children}
        <StoreFooter />
      </Provider>
    </main>
  );
};

export default StoreLayout;
