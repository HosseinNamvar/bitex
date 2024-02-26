"use client";
import styles from "./productPage.module.scss";

import Link from "next/link";
import { useEffect, useState } from "react";
import { redirect, useParams } from "next/navigation";

import ProductCard from "@/components/store/common/productCard";
import { TopProducts } from "@/data/homepageData";

import { OneProduct as product } from "@/data/products";

import ProductBoard from "@/components/store/productPage/productBoard";
import { LikeIcon, MinusIcon } from "@/components/icons/svgIcons";
import Gallery from "@/components/store/productPage/gallery";

import { getOneProduct } from "@/actions/product/product";
import { TProductPageInfo } from "@/types/product";
import Image from "next/image";

const ProductPage = () => {
  const { productId } = useParams<{ productId: string[] }>();
  const [productInfo, setProductInfo] = useState<TProductPageInfo>();
  if (!productId) redirect("/");

  useEffect(() => {
    const getProductFromDB = async () => {
      const response = await getOneProduct(productId.toString());
      if (response.error || !response.res) redirect("/");
      setProductInfo(response.res);
    };
    getProductFromDB();
  }, [productId]);

  if (productInfo === undefined) return "";

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
            <Gallery images={productInfo.images} />
          </div>
          <div className={styles.rightSection}>
            <ProductBoard
              boardData={{
                id: productInfo.id,
                defaultQuantity: 1,
                name: productInfo.name,
                price: productInfo.price,
                dealPrice: productInfo.salePrice || undefined,
                shortDesc: productInfo.desc || "",
                specialFeatures: productInfo.specialFeatures,
              }}
            />
          </div>
        </div>
        <div className={styles.lowerSection}>
          <div className={styles.leftSection}>
            {/* ----------------- SPECIFICATION SECTION ----------------- */}
            <div className={styles.specification}>
              <h2>Specification</h2>
              {productInfo.specifications.map((spec, index) => (
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
                        <span>{row.name}</span>
                      </div>
                      <div className={styles.rightCol}>
                        <span key={index}>{row.value}</span>
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
                    {`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Temporibus suscipit debitis reiciendis repellendus! Repellat rem beatae quo quis 
                    tenetur. Culpa quae ratione delectus id odit in nesciunt saepe pariatur vitae.`}
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
