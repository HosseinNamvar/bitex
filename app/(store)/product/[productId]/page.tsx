import Link from "next/link";
import Image from "next/image";

import ProductCard from "@/components/store/common/productCard";
import { TopProducts } from "@/data/homepageData";
import styles from "./productPage.module.scss";

import { OneProduct as product } from "@/data/products";
import ProductBoard from "@/components/store/productPage/productBoard";

const ProductPage = () => {
  return (
    <div className={styles.productPage}>
      <div className={styles.upperSection}>
        <div className={styles.leftSection}>
          <div className={styles.path}>
            {product.path.map((path, index) => (
              <Link href={path.url} key={index}>
                {path.label}
              </Link>
            ))}
          </div>
          <div className={styles.gallery}>
            <div className={styles.imageList}>
              {product.gallery.map((image, index) => (
                <Image
                  src={"/images/products/" + image}
                  alt=""
                  width={64}
                  height={64}
                  key={index}
                />
              ))}
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src={"/images/products/" + product.gallery[0]}
                alt=""
                fill
              />
            </div>
          </div>
        </div>
        <div className={styles.rightSection}>
          <ProductBoard boardData={product.board} />
        </div>
      </div>
      <div className={styles.lowerSection}>
        <div className={styles.leftSection}>
          <div className={styles.specification}>
            <h2>Specification</h2>
            <section className={styles.specGroup}>
              <div className={styles.specGroupHead}>
                <button>-</button>
                <h3>Overall</h3>
              </div>
              <div className={styles.row}>
                <div className={styles.leftCol}>
                  <span>Dimension</span>
                </div>
                <div className={styles.rightCol}>
                  <span>160.8 x 78.1 x 7.4 mm</span>
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.leftCol}>
                  <span>SimCard</span>
                </div>
                <div className={styles.rightCol}>
                  <span>Nano Sim Cards (8.8 × 12.3 mm)</span>
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.leftCol}>
                  <span>Weight</span>
                </div>
                <div className={styles.rightCol}>
                  <span>228 gram</span>
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.leftCol}>
                  <span>Body Spec</span>
                </div>
                <div className={styles.rightCol}>
                  <span>Metal and Glass</span>
                  <span>IP68 Standard</span>
                  <span>Gorilla Glass</span>
                  <span>Oleophobic cover for display</span>
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.leftCol}>
                  <span>Special Features</span>
                </div>
                <div className={styles.rightCol}>
                  <span>
                    Great for: Gaming, Photography, Selfie, Waterproof,
                    Resistance Body, Face detection sensor
                  </span>
                </div>
              </div>
            </section>
            <section className={styles.specGroup}>
              <div className={styles.specGroupHead}>
                <button>-</button>
                <h3>Display</h3>
              </div>
              <div className={styles.row}>
                <div className={styles.leftCol}>
                  <span>Colored display</span>
                </div>
                <div className={styles.rightCol}>
                  <span>Yes</span>
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.leftCol}>
                  <span>Touchscreen</span>
                </div>
                <div className={styles.rightCol}>
                  <span>Yes</span>
                </div>
              </div>
            </section>
            <section className={styles.specGroup}>
              <div className={styles.specGroupHead}>
                <button>-</button>
                <h3>Display</h3>
              </div>
              <div className={styles.row}>
                <div className={styles.leftCol}>
                  <span>Colored display</span>
                </div>
                <div className={styles.rightCol}>
                  <span>Yes</span>
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.leftCol}>
                  <span>Touchscreen</span>
                </div>
                <div className={styles.rightCol}>
                  <span>Yes</span>
                </div>
              </div>
            </section>
          </div>
          <div className={styles.userReviews}>
            <div className={styles.header}>
              <h2>User Reviews</h2>
              <button>New Review</button>
            </div>
            <div className={styles.reviewWrapper}>
              <div className={styles.head}>
                <div className={styles.user}>
                  <Image src={""} alt="" width={32} height={32} />
                  <span>T. Mihai</span>
                </div>
                <span>Verified Purchase</span>
                <div className={styles.date}>30 November 2023</div>
                <div className={styles.likeInteraction}>
                  <button className={styles.like}>0</button>
                  <button className={styles.dislike}>0</button>
                </div>
              </div>
              <div className={styles.body}>
                <span>
                  {`It took awhile to find the right pillow. All of the ones I
                  have tried were not "true" memory foam. Memory foam is dense
                  and not light weight. So all of the other pillows were too
                  soft and did not support my head correctly. I have slept so
                  well on this pillow that am waking up in more pain because my
                  apine is re-adjusting to its proper position`}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightSection}>
          <ProductBoard boardData={product.board} />
        </div>
      </div>
      <div className={styles.similarProductSection}>
        <h2>Similar Products</h2>
        <div className={styles.cardsContainer}>
          {TopProducts.map((product, index) => (
            <ProductCard
              key={index}
              imgUrl={product.imgUrl}
              name={product.name}
              price={product.price}
              specs={product.specs}
              url={product.url}
              dealPrice={product.dealPrice}
              staticWidth
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
