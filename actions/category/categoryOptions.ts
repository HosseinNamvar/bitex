"use server";

import { z } from "zod";
import { db } from "@/lib/db";
import { TOptionSet } from "@/types/common";

export const getOptionSetByCatID = async (categoryID: string) => {
  if (!categoryID || categoryID === "") return { error: "Invalid Data!" };

  try {
    const result: TOptionSet[] = await db.optionSet.findMany({
      where: {
        Category_Option: {
          some: {
            categoryID: categoryID,
          },
        },
      },
    });

    if (!result) return { error: "Not Found!" };
    return { res: result };
  } catch (error) {
    return { error: JSON.stringify(error) };
  }
};

export const addOptionSet = async () => {};
export const updateOptionSet = async () => {};
export const deleteOptionSet = async () => {};

// ------------------------- SINGLE OPTION -------------------------
export const addSingleOption = async () => {};
export const updateSingleOption = async () => {};
export const deleteSingleOption = async () => {};
