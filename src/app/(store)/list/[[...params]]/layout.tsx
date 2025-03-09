import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BITEX - Products List",
};

const ListLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default ListLayout;
