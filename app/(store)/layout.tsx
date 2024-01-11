import StoreNavBar from "@/components/store/navbar";
import StoreFooter from "./../../components/store/footer/index";

const StoreLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <StoreNavBar />
      {children}
      <StoreFooter />
    </main>
  );
};

export default StoreLayout;
