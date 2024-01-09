import Image from "next/image";
import styles from "./footer.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <section>
        <Image alt="Bitex Logo" src={"/images/logo.png"} fill />
        <div className="search">
          <input type="text" />
        </div>
      </section>
      <section className="middle">
        <div className="col">
          <h3>Contact Us</h3>
          <span>Got Question? Call us 24/7</span>
          <h2>+49 30 575909881</h2>
          <span>685 Market Street, San Francisco, CA 94105, US</span>
          <span>nonamecompany@justportfolio.com</span>
        </div>
        <div className="col">
          <h3>Categories</h3>
          <li>Computer & Laptop</li>
          <li>Tablets & iPad</li>
          <li>Printer & Cameras</li>
          <li>Smart Phones</li>
          <li>OLED Smart TVs</li>
          <li>Keyboard & Mouse</li>
          <li>Video Games</li>
          <li>Sports & Outdoors</li>
          <li>Smart Watches</li>
        </div>
        <div className="col">
          <h3>Customer Service</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>Shipping & Return</li>
            <li>Term & Conditions</li>
            <li>Advanced Search</li>
            <li>Store Locations</li>
          </ul>
        </div>
        <div className="col">
          <h3>Sign Up to Newsletter</h3>
          <input type="text" placeholder="email address" />
          <button>Subscribe</button>
        </div>
      </section>
      <section className="bottom">
        <span>© 2024 BITEX Store. All Rights Reserved.</span>
        <div className="legal">
          <ul>
            <li>Conditions of Use & Sale</li>
            <li>Privacy Notice</li>
            <li>Imprint</li>
            <li>Cookies Notice</li>
            <li>Interest-Based Ads Notice</li>
          </ul>
        </div>
        <div className="social">
          <Link href={"https://www.linkedIn.com"}>
            <Image alt="" fill src={"/images/icons/linkedInLogo.svg"} />
          </Link>
          <Link href={"https://www.twitter.com"}>
            <Image alt="" fill src={"/images/icons/xLogo.svg"} />
          </Link>
          <Link href={"https://www.instagram.com"}>
            <Image alt="" fill src={"/images/icons/instagramLogo.svg"} />
          </Link>
          <Link href={"https://www.facebook.com"}>
            <Image alt="" fill src={"/images/icons/facebookLogo.svg"} />
          </Link>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
