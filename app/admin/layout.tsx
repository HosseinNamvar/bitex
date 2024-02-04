import styles from "./layout.module.scss";
import AdminSidebar from "@/components/admin/sideBar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.adminLayout}>
      <AdminSidebar />
      <div className={styles.rightCol}>
        <h1>Page Name</h1>
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
