import { Metadata } from "next";
import styles from "./layout.module.scss";
import AdminSidebar from "@/components/admin/sideBar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Admin",
};

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }
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
