import styles from "./sidebar.module.scss";

import Link from "next/link";

const AdminSidebar = () => {
  return (
    <aside className={styles.adminSidebar}>
      <h2>Dashboard</h2>
      <Link href={"/admin/categories"}>Categories</Link>
      <Link href={"/admin/products"}>Products</Link>
      <Link href={"/admin/brands"}>Brands</Link>
      <Link href={"/admin/trafficView"}>Traffic View</Link>
    </aside>
  );
};

export default AdminSidebar;
