import Link from "next/link";
import styles from "./category.module.scss";
import Image from "next/image";
import ProductCard from "@/components/store/common/productCard";
import { ProductsData } from "@/data/products";

const CategoryPage = () => {
  return (
    <div className={styles.categoryPage}>
      <div className={styles.header}>
        <h1>Mobile</h1>
        <div className={styles.links}>
          <Link href={"#"}>Home</Link>
          <Link href={"#"}>Mobile</Link>
        </div>
      </div>
      <div className="storeContainer">
        <div className={styles.mobileFilter}>
          <button>Filter</button>
          <select name="Sort" id="">
            <option value="Most Viewed">Most Viewed</option>
            <option value="Top Seller">Top Seller</option>
            <option value="Most Expensive">Most Expensive</option>
            <option value="Cheapest">Cheapest</option>
            <option value="Newest">Newest</option>
            <option value="Most Popular">Most Popular</option>
          </select>
        </div>
        <div className={styles.main}>
          <div className={styles.filtersContainer}>
            <div className={styles.eachFilter}>
              <div className={styles.header}>
                <h3>Availability</h3>
                <button />
              </div>
              <div className={styles.body}>
                <div>
                  <input type="checkbox" id="inStock" />
                  <label htmlFor="inStock">In stock</label>
                </div>
                <div>
                  <input type="checkbox" id="outOfStock" />
                  <label htmlFor="outOfStock">Out of stock</label>
                </div>
              </div>
            </div>
            <div className={styles.eachFilter}>
              <div className={styles.header}>
                <h3>Price</h3>
                <button />
              </div>
              <div className={styles.body}>
                <div className={styles.priceRange}>
                  <input type="range" />
                </div>
                <div className={styles.priceInputs}>
                  <div>
                    <label>From</label>
                    <input type="number" />
                  </div>
                  <hr />
                  <div>
                    <label>To</label>
                    <input type="number" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.eachFilter}>
              <div className={styles.header}>
                <h3>Colors</h3>
                <button />
              </div>
              <div className={styles.body}>
                <div className={styles.searchInput}>
                  <input type="text" placeholder="Search Color" />
                </div>
                <div className={styles.optionsList}>
                  <div>
                    <input type="checkbox" id="colorBlack" />
                    <label htmlFor="colorBlack">Black</label>
                    <div className={`${styles.colorBox} ${styles.black}`} />
                  </div>
                  <div>
                    <input type="checkbox" id="colorBlue" />
                    <label htmlFor="colorBlue">Blue</label>
                    <div className={`${styles.colorBox} ${styles.blue}`} />
                  </div>
                  <div>
                    <input type="checkbox" id="colorRed" />
                    <label htmlFor="colorRed">Red</label>
                    <div className={`${styles.colorBox} ${styles.red}`} />
                  </div>
                  <div>
                    <input type="checkbox" id="colorGreen" />
                    <label htmlFor="colorGreen">Green</label>
                    <div className={`${styles.colorBox} ${styles.green}`} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.eachFilter}>
              <div className={styles.header}>
                <h3>Options</h3>
                <button />
              </div>
              <div className={styles.body}>
                <div className={styles.searchInput}>
                  <input type="text" placeholder="Search Option" />
                </div>
                <div className={styles.optionsList}>
                  <div>
                    <input type="checkbox" id="option1" />
                    <label htmlFor="option1">Option 1</label>
                  </div>
                  <div>
                    <input type="checkbox" id="option2" />
                    <label htmlFor="option2">Option 2</label>
                  </div>
                  <div>
                    <input type="checkbox" id="option3" />
                    <label htmlFor="option3">Option 3</label>
                  </div>
                  <div>
                    <input type="checkbox" id="option4" />
                    <label htmlFor="option4">Option 4</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rightCol}>
            <div className={styles.sortContainer}>
              <Image
                src={"/images/icons/sortIcon.svg"}
                alt="Sort"
                width={16}
                height={12}
              />
              <span>Sort By:</span>
              <div className={styles.switchSort}>
                <span>Most Viewed</span>
                <span className={styles.active}>Top Seller</span>
                <span>Most Expensive</span>
                <span>Cheapest</span>
                <span>Newest</span>
                <span>Most Popular</span>
              </div>
            </div>
            <div className={styles.listContainer}>
              {ProductsData.map((product, index) => (
                <ProductCard
                  key={index}
                  imgUrl={product.imgUrl}
                  name={product.name}
                  price={product.price}
                  dealPrice={product.dealPrice}
                  specs={product.specs}
                  url={product.url}
                />
              ))}
            </div>
            <div className={styles.pagingContainer}>
              <button className={styles.first} />
              <button className={styles.numbers}>1</button>
              <button className={styles.numbers}>2</button>
              <button className={styles.numbers}>3</button>
              <button className={`${styles.numbers} ${styles.active}`}>
                4
              </button>
              <button className={styles.numbers}>5</button>
              <button className={styles.numbers}>6</button>
              <button className={styles.numbers}>7</button>
              <button className={styles.numbers}>8</button>
              <button className={styles.last} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
