"use server";

import { z } from "zod";
import { db } from "@/lib/db";
import { TOptionSet } from "@/types/common";
import { OptionSetType } from "@prisma/client";

const AddOptionSet = z.object({
  name: z.string().min(3),
  type: z.enum([OptionSetType.COLOR, OptionSetType.TEXT]),
});

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

export const addOptionSet = async (data: TOptionSet) => {
  if (!AddOptionSet.safeParse(data).success) return { error: "Invalid Data" };

  try {
    const result = await db.category.update({
      where: {
        id: data.id,
      },
      data: {
        Category_Option: {
          create: {
            option: {
              create: {
                name: data.name,
                type: data.type,
              },
            },
          },
        },
      },
    });
    if (!result) return { error: "failed" };
    return { res: result };
  } catch (error) {
    return { res: JSON.stringify(error) };
  }
};

export const updateOptionSet = async () => {};
export const deleteOptionSet = async () => {};

// ------------------------- SINGLE OPTION -------------------------
export const addSingleOption = async () => {};
export const updateSingleOption = async () => {};
export const deleteSingleOption = async () => {};
