"use-client";
import styles from "./navProfile.module.scss";

import { useRef } from "react";
import { ProfileIcon } from "@/components/icons/svgIcons";
import { useToggleMenu } from "@/hooks/useToggleMenu";

const NavBarProfile = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useToggleMenu(false, menuRef);

  const toggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsActive(!isActive);
  };

  return (
    <div className={styles.profile}>
      <button
        onClick={toggleMenu}
        className={`${isActive ? styles.isActive : ""}`}
      >
        <ProfileIcon width={16} />
        <span>Account</span>
      </button>
      <div
        ref={menuRef}
        className={`${styles.menu} ${isActive && styles.showMenu}`}
      >
        <button>Sign In</button>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default NavBarProfile;
