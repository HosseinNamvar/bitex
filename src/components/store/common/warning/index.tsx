import Link from "next/link";
import styles from "./warning.module.scss";
import { LinkedinIcon } from "@/components/icons/svgIcons";

const Warning = () => {
  return (
    <div className={styles.warning}>
      <div className={styles.wrapper}>
        <span>
          This website was created for portfolio purposes and is NOT a real
          business.
        </span>
        <div className={styles.contact}>
          <span>Contact: </span>
          <Link
            href={"https://www.linkedin.com/in/hossein-namvar/"}
            title="My LinkedIn Profile"
            target="_blank"
          >
            <LinkedinIcon width={20} strokeWidth={0} />
            LinkedIn
          </Link>
          <Link
            href={"mailto:hossein.namvar@gmail.com"}
            title="Send Me an Email!"
          >
            Email
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Warning;
