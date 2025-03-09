"use client";
import styles from "./specGroup.module.scss";

import { useState } from "react";
import Button from "@/components/UI/button";
import { TSingleSpec, TSpecGroup } from "@/types/common";
import {
  addSingleSpec,
  deleteSingleSpec,
  deleteSpecGroup,
} from "@/actions/category/categoryOptions";

interface IProps {
  data: TSpecGroup;
  reloadRequest: () => void;
}

const SpecGroup = ({ data, reloadRequest }: IProps) => {
  const { id, title, specs } = data;
  const [isLoading, setIsLoading] = useState(false);
  const [specToAdd, setSpecToAdd] = useState("");
  const handleDeleteSpecGroup = async () => {
    if (!id) return;
    setIsLoading(true);
    const response = await deleteSpecGroup(id);
    if (response.error) {
      setIsLoading(false);
      return;
    }
    if (response.res) {
      setIsLoading(false);
      reloadRequest();
    }
  };

  const handleAddSingleSpec = async () => {
    if (!id || !specToAdd || specToAdd === "") return;

    setIsLoading(true);
    const data: TSingleSpec = {
      specGroupID: id,
      value: specToAdd,
    };

    const response = await addSingleSpec(data);
    if (response.error) {
      setIsLoading(false);
      return;
    }
    if (response.res) {
      setIsLoading(false);
      setSpecToAdd("");
      reloadRequest();
    }
  };

  const handleDeleteSingleSpec = async (spec: string) => {
    if (!id || !spec || spec === "") return;

    setIsLoading(true);
    const data: TSingleSpec = {
      specGroupID: id,
      value: spec,
    };

    const response = await deleteSingleSpec(data);
    if (response.error) {
      setIsLoading(false);
      return;
    }
    if (response.res) {
      setIsLoading(false);
      reloadRequest();
    }
  };

  return (
    <div className={styles.specGroup}>
      <div className={styles.header}>
        <div>
          <span>{title}</span>
          <Button
            disabled={isLoading}
            text="delete"
            onClick={() => handleDeleteSpecGroup()}
          />
        </div>
        <div>
          <input
            disabled={isLoading}
            type="text"
            value={specToAdd}
            onChange={(e) => setSpecToAdd(e.currentTarget.value)}
          />
          <Button
            disabled={isLoading}
            text="Add Spec"
            onClick={() => handleAddSingleSpec()}
          />
        </div>
      </div>
      {specs.length > 0 ? (
        <>
          {specs.map((spec, index) => (
            <div className={styles.specRow} key={index}>
              <span>{spec}</span>
              <Button
                disabled={isLoading}
                text="delete"
                onClick={() => handleDeleteSingleSpec(spec)}
              />
            </div>
          ))}
        </>
      ) : (
        <div className={styles.specRow}>
          <span>There is no specification!</span>
        </div>
      )}
    </div>
  );
};

export default SpecGroup;
