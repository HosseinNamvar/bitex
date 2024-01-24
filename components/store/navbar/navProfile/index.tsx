import styles from "./navProfile.module.scss";
import { ProfileIcon } from "@/components/icons/svgIcons";
const NavBarProfile = () => {
  return (
    <div className={styles.profile}>
      <ProfileIcon width={16} />
      <span>Account</span>
    </div>
  );
};

export default NavBarProfile;
