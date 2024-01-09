import StoreHeader from "./../../components/store/header/index";
import StoreFooter from "./../../components/store/footer/index";

const StoreLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <StoreHeader />
      {children}
      <StoreFooter />
    </main>
  );
};

export default StoreLayout;
