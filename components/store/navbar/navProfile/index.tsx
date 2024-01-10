import Image from "next/image";
import styles from "./navProfile.module.scss";
const NavBarProfile = () => {
  return (
    <div className={styles.profile}>
      <Image
        src={"/images/icons/profileIcon.svg"}
        width={16}
        height={18}
        alt="profile"
      />
      <span>Account</span>
    </div>
  );
};

export default NavBarProfile;
