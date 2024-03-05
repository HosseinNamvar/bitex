"use client";
import { useEffect, useState } from "react";
import styles from "./brands.module.scss";

import Button from "@/components/UI/button";
import {
  addBrand,
  deleteBrand,
  getAllBrands,
  updateBrand,
} from "@/actions/brands/brands";
import { TBrand } from "@/types/product";
import Popup from "@/components/UI/popup";

let selectedBrandID = "";
const Brand = () => {
  const [addValue, setAddValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isListLoading, setIsListLoading] = useState(true);
  const [brandList, setBrandList] = useState<TBrand[]>([]);
  const [errorMsg, setErrorMsg] = useState("");

  const [showEdit, setShowEdit] = useState(false);
  const [editValue, setEditValue] = useState("");
  const [showDelete, setShowDelete] = useState(false);

  const fetchBrands = async () => {
    const response = await getAllBrands();
    if (response.error) {
    }
    if (response.res) {
      setIsListLoading(false);
      setBrandList(response.res);
    }
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  const handleAdd = async () => {
    if (addValue !== "") {
      setIsLoading(true);
      const response = await addBrand(addValue);
      if (response.error) {
        setIsLoading(false);
      }
      if (response.res) {
        setIsLoading(false);
        setAddValue("");
        fetchBrands();
      }
    }
  };

  const handleShowEdit = (data: TBrand) => {
    selectedBrandID = data.id;
    setEditValue(data.name);
    setErrorMsg("");
    setShowEdit(true);
  };
  const handleUpdate = async () => {
    if (selectedBrandID !== "" && editValue !== "") {
      setIsLoading(true);
      const response = await updateBrand({
        id: selectedBrandID,
        name: editValue,
      });
      if (response.error) {
        setIsLoading(false);
        setErrorMsg(response.error);
      }
      if (response.res) {
        setIsLoading(false);
        setShowEdit(false);
        fetchBrands();
      }
    }
  };

  const handleShowDelete = (id: string) => {
    selectedBrandID = id;
    setShowDelete(true);
  };
  const handleDelete = async () => {
    if (selectedBrandID !== "") {
      setIsLoading(true);
      const response = await deleteBrand(selectedBrandID);
      if (response.error) {
        setIsLoading(false);
      }
      if (response.res) {
        setIsLoading(false);
        setShowDelete(false);
        fetchBrands();
      }
    }
  };

  return (
    <div className={styles.brands}>
      <div className={styles.addingSection}>
        <input
          type="text"
          value={addValue}
          onChange={(e) => setAddValue(e.currentTarget.value)}
        />
        <Button text="Add New Brand" disabled={isLoading} onClick={handleAdd} />
      </div>
      <div className={styles.brandsList}>
        {isListLoading ? (
          <div>LOADING...</div>
        ) : (
          <div className={styles.list}>
            {brandList.length === 0 && <div>There is No Brand!</div>}
            {brandList.map((brand) => (
              <div key={brand.id} className={styles.row}>
                <span>{brand.name}</span>
                <div className={styles.buttonsWrapper}>
                  <Button text="Edit" onClick={() => handleShowEdit(brand)} />
                  <Button
                    text="Delete"
                    onClick={() => handleShowDelete(brand.id)}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {showEdit && (
        <Popup
          width="400px"
          title="Edit Brand Name"
          content={
            <div className={styles.editSection}>
              <div>
                <span>Brand Name:</span>
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.currentTarget.value)}
                />
              </div>
              <span>{errorMsg}</span>
            </div>
          }
          isLoading={isLoading}
          onCancel={() => setShowEdit(false)}
          onClose={() => setShowEdit(false)}
          onSubmit={() => handleUpdate()}
          cancelBtnText="No"
          confirmBtnText="Yes"
        />
      )}
      {showDelete && (
        <Popup
          width="300px"
          content={<div className={styles.deleteMsg}>Are You Sure?</div>}
          isLoading={isLoading}
          onCancel={() => setShowDelete(false)}
          onClose={() => setShowDelete(false)}
          onSubmit={() => handleDelete()}
          cancelBtnText="No"
          confirmBtnText="Yes"
        />
      )}
    </div>
  );
};

export default Brand;
