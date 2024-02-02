"use client";
import Link from "next/link";
import Image from "next/image";

import ProductCard from "@/components/store/common/productCard";
import { TopProducts } from "@/data/homepageData";
import styles from "./productPage.module.scss";

import { OneProduct as product } from "@/data/products";
import ProductBoard from "@/components/store/productPage/productBoard";
import { LikeIcon, MinusIcon } from "@/components/icons/svgIcons";
import { redirect, useParams } from "next/navigation";

const ProductPage = () => {
  const { productId } = useParams<{ productId: string[] }>();
  if (!productId || productId.length !== 1) redirect("/");

  return (
    <div className="storeContainer">
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
                    className={index === 0 ? styles.active : ""}
                  />
                ))}
              </div>
              <div className={styles.imageWrapper}>
                <Image
                  src={"/images/products/" + product.gallery[0]}
                  alt=""
                  fill
                  sizes="(max-width:700px)"
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
            {/* ----------------- SPECIFICATION SECTION ----------------- */}
            <div className={styles.specification}>
              <h2>Specification</h2>
              {product.specification.map((spec, index) => (
                <section key={index} className={styles.specGroup}>
                  <div className={styles.specGroupHead}>
                    <button>
                      <MinusIcon width={12} />
                      <MinusIcon width={12} />
                    </button>
                    <h3>{spec.groupName}</h3>
                  </div>
                  {spec.specs.map((row, index) => (
                    <div key={index} className={styles.row}>
                      <div className={styles.leftCol}>
                        <span>{row.label}</span>
                      </div>
                      <div className={styles.rightCol}>
                        {row.data.map((d, index) => (
                          <span key={index}>{d}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </section>
              ))}
            </div>

            {/* ----------------- USER REVIEWS ----------------- */}
            <div className={styles.userReviews}>
              <div className={styles.header}>
                <h2>User Reviews</h2>
                <button>New Review</button>
              </div>
              <div className={styles.reviewWrapper}>
                <div className={styles.head}>
                  <div className={styles.user}>
                    <Image
                      src={"/images/images/defaultUser.png"}
                      alt=""
                      width={32}
                      height={32}
                    />
                    <span>T. Mihai</span>
                  </div>
                  <span className={styles.isVerified}>Verified Purchase</span>
                  <div className={styles.dateAndLikeSection}>
                    <div className={styles.date}>30 November 2023</div>
                    <div className={styles.likeInteraction}>
                      <button className={styles.like}>
                        <LikeIcon width={16} />0
                      </button>
                      <button className={styles.dislike}>
                        <LikeIcon width={16} /> 0
                      </button>
                    </div>
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
    </div>
  );
};

export default ProductPage;
