import Image from "next/image";
import styles from "./footer.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.storeFooter}>
      <div className={`${styles.footerWrapper} storeContainer`}>
        <div className={styles.topSection}>
          <Image
            alt="Bitex Logo"
            src={"/images/logo.png"}
            width={125}
            height={40}
          />
          <div className={styles.search}>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search"
            />
            <Image
              src={"/images/icons/searchIcon.svg"}
              width={16}
              height={16}
              alt="Search"
            />
          </div>
        </div>
        <section className={styles.middle}>
          <div>
            <h3>Contact Us</h3>
            <span>Got Question? Call us 24/7</span>
            <h2>+49 30 575909881</h2>
            <span>685 Market Street, San Francisco, CA 94105, US</span>
            <span>nonamecompany@justportfolio.com</span>
          </div>
          <div>
            <h3>Categories</h3>
            <ul>
              <li>
                <Link href={""}>Computer & Laptop</Link>
              </li>
              <li>
                <Link href={""}>Tablets & iPad</Link>
              </li>
              <li>
                <Link href={""}>Printer & Cameras</Link>
              </li>
              <li>
                <Link href={""}>Smart Phones</Link>
              </li>
              <li>
                <Link href={""}>OLED Smart TVs</Link>
              </li>
              <li>
                <Link href={""}>Keyboard & Mouse</Link>
              </li>
              <li>
                <Link href={""}>Video Games</Link>
              </li>
              <li>
                <Link href={""}>Sports & Outdoors</Link>
              </li>
              <li>
                <Link href={""}>Smart Watches</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Customer Service</h3>
            <ul>
              <li>
                <Link href={""}>Privacy Policy</Link>
              </li>
              <li>
                <Link href={""}>Refund Policy</Link>
              </li>
              <li>
                <Link href={""}>Shipping & Return</Link>
              </li>
              <li>
                <Link href={""}>Term & Conditions</Link>
              </li>
              <li>
                <Link href={""}>Advanced Search</Link>
              </li>
              <li>
                <Link href={""}>Store Locations</Link>
              </li>
            </ul>
          </div>
          <div className={styles.contact}>
            <h3>Sign Up to Newsletter</h3>
            <input type="text" placeholder="email address" />
            <button>Subscribe</button>
          </div>
        </section>
      </div>
      <section className={styles.bottom}>
        <div className={`${styles.footerWrapper} storeContainer`}>
          <span>© 2024 BITEX Store. All Rights Reserved.</span>
          <div className={styles.legal}>
            <ul>
              <li>
                <Link href={""}>Conditions of Use & Sale</Link>
              </li>
              <li>
                <Link href={""}>Privacy Notice</Link>
              </li>
              <li>
                <Link href={""}>Imprint</Link>
              </li>
              <li>
                <Link href={""}>Cookies Notice</Link>
              </li>
              <li>
                <Link href={""}>Interest-Based Ads Notice</Link>
              </li>
            </ul>
          </div>
          <div className={styles.social}>
            <Link href={"https://www.linkedIn.com"}>
              <Image
                alt=""
                src={"/images/icons/linkedInLogo.svg"}
                width={20}
                height={20}
              />
            </Link>
            <Link href={"https://www.twitter.com"}>
              <Image
                alt=""
                src={"/images/icons/xLogo.svg"}
                width={20}
                height={20}
              />
            </Link>
            <Link href={"https://www.instagram.com"}>
              <Image
                alt=""
                src={"/images/icons/instagramLogo.svg"}
                width={20}
                height={20}
              />
            </Link>
            <Link href={"https://www.facebook.com"}>
              <Image
                alt=""
                src={"/images/icons/facebookLogo.svg"}
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
