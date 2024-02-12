"use client";
import styles from "./categoryOptions.module.scss";

import { CategoriesData } from "@/data/categories";

import RadioButton from "@/components/UI/radioButton";
import Button from "@/components/UI/button";
import { useState } from "react";

interface IProps {
  onClose: () => void;
}

const CategoryOptions = ({ onClose }: IProps) => {
  const [isOption, setIsOption] = useState(true);
  return (
    <div className={styles.categoryOptions}>
      <div className={styles.background} onClick={onClose} />
      <div className={styles.optionsWindow}>
        <div className={styles.header}>
          <h2>Category Options/Specifications</h2>
          <div>
            <h3
              className={isOption ? styles.active : ""}
              onClick={() => setIsOption(true)}
            >
              Options
            </h3>
            <h3
              className={!isOption ? styles.active : ""}
              onClick={() => setIsOption(false)}
            >
              Specifications
            </h3>
          </div>
        </div>

        {isOption ? (
          // ------------------ OPTIONS SECTION ------------------
          <div className={styles.tabContainer}>
            <div className={styles.optionRow}>
              <div className={styles.col1}>Storage Capacity</div>
              <div className={styles.col2}>
                <div className={styles.textRow}>
                  <span>128GB</span>
                  <div>
                    <Button text="edit" onClick={() => console.log("edit")} />
                    <Button
                      text="delete"
                      onClick={() => console.log("delete")}
                    />
                  </div>
                </div>
                <div className={styles.textRow}>
                  <span>256GB</span>
                  <div>
                    <Button text="edit" onClick={() => console.log("edit")} />
                    <Button
                      text="delete"
                      onClick={() => console.log("delete")}
                    />
                  </div>
                </div>
                <div className={styles.textAdd}>
                  <input type="text" />
                  <Button text="Add" onClick={() => console.log("Add")} />
                </div>
              </div>
            </div>
            <div className={styles.optionRow}>
              <div className={styles.col1}>Color</div>
              <div className={styles.col2}>
                <div className={styles.colorRow}>
                  <div>
                    <span>Red</span>
                    <span>#000000</span>
                  </div>
                  <div>
                    <Button text="edit" onClick={() => console.log("edit")} />
                    <Button
                      text="delete"
                      onClick={() => console.log("delete")}
                    />
                  </div>
                </div>
                <div className={styles.colorRow}>
                  <div>
                    <span>Blue</span>
                    <span>#000000</span>
                  </div>{" "}
                  <div>
                    <Button text="edit" onClick={() => console.log("edit")} />
                    <Button
                      text="delete"
                      onClick={() => console.log("delete")}
                    />
                  </div>
                </div>
                <div className={styles.colorAdd}>
                  <div>
                    <input type="text" />
                    <input type="text" />
                  </div>
                  <Button text="Add" onClick={() => console.log("Add")} />
                </div>
              </div>
            </div>
            <div className={styles.optionsAdd}>
              <div>
                <span>Add:</span>
                <input type="text" />
              </div>
              <div>
                <span>type</span>
                <RadioButton id="1" value="color" groupName="addOptions" />
                <RadioButton id="2" value="type" groupName="addOptions" />
              </div>
              <Button text="Add" onClick={() => console.log("Add")} />
            </div>
          </div>
        ) : (
          // ------------------ SPECIFICATION SECTION ------------------
          <div className={styles.tabContainer}>
            <div className={styles.specGroup}>
              <div className={styles.specTitle}>
                <span>Overall</span>
                <div>
                  <Button text="edit" onClick={() => console.log("")} />
                  <Button text="edit" onClick={() => console.log("")} />
                </div>
              </div>
              <div className={styles.specRow}>
                <span>Dimension</span>
                <div>
                  <Button text="edit" onClick={() => console.log("")} />
                  <Button text="edit" onClick={() => console.log("")} />
                </div>
              </div>
              <div className={styles.specRow}>
                <span>SimCard</span>
                <div>
                  <Button text="edit" onClick={() => console.log("")} />
                  <Button text="delete" onClick={() => console.log("")} />
                </div>
              </div>
              <div className={styles.specAdd}>
                <input type="text" />
                <Button text="Add" onClick={() => console.log("")} />
              </div>
            </div>
            <div className={styles.specGroupAdd}>
              <div>
                <span>Add Group:</span>
                <input type="text" />
              </div>
              <Button text="Add" onClick={() => console.log("")} />
            </div>
          </div>
        )}

        <div className={styles.windowControl}>
          <Button text="cancel" onClick={() => console.log("")} />
          <Button text="Save" onClick={() => console.log("")} />
        </div>
      </div>
    </div>
  );
};

export default CategoryOptions;
