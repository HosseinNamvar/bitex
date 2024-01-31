"use-client";
import styles from "./navProfile.module.scss";

import { useState } from "react";
import { ProfileIcon } from "@/components/icons/svgIcons";

const NavBarProfile = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleRemoveFocus = (event: React.FocusEvent<HTMLButtonElement>) => {
    if (event.currentTarget === event.target) {
      setMenuVisible(false);
    }
  };

  return (
    <div className={styles.profile}>
      <button
        onClick={() => setMenuVisible(!menuVisible)}
        onBlur={handleRemoveFocus}
        className={`${menuVisible ? styles.isActive : ""}`}
      >
        <ProfileIcon width={16} />
        <span>Account</span>
      </button>
      <div className={`${styles.menu} ${menuVisible && styles.showMenu}`}>
        <button>Sign In</button>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default NavBarProfile;
