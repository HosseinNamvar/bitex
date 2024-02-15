"use server";

import { z } from "zod";
import { db } from "@/lib/db";
import { TOptionSet, TSingleOption } from "@/types/common";
import { OptionSetType } from "@prisma/client";

const AddOptionSet = z.object({
  name: z.string().min(3),
  type: z.enum([OptionSetType.COLOR, OptionSetType.TEXT]),
});

const SingleOption = z.object({
  optionSetID: z.string().min(6),
  name: z.string().min(3),
  value: z.string().min(3),
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

export const deleteOptionSet = async (id: string) => {
  if (!id || id === "") return { error: "Invalid Data" };

  try {
    const result = await db.optionSet.delete({
      where: {
        id,
      },
    });
    if (!result) return { error: "failed" };
    return { res: result };
  } catch (error) {
    return { res: JSON.stringify(error) };
  }
};

// ------------------------- SINGLE OPTION -------------------------
export const addSingleOption = async (data: TSingleOption) => {
  if (!SingleOption.safeParse(data).success) return { error: "Invalid Data!" };

  try {
    const result = await db.optionSet.update({
      where: {
        id: data.optionSetID,
      },
      data: {
        options: {
          push: {
            name: data.name,
            value: data.value,
          },
        },
      },
    });

    if (!result) return { error: "Can't Insert!" };
    return { res: result };
  } catch (error) {
    return { error: JSON.stringify(error) };
  }
};
export const deleteSingleOption = async (data: TSingleOption) => {
  if (!SingleOption.safeParse(data).success) return { error: "Invalid Data!" };

  try {
    const result = await db.optionSet.update({
      where: {
        id: data.optionSetID,
      },
      data: {
        options: {
          deleteMany: {
            where: {
              name: data.name,
              value: data.name,
            },
          },
        },
      },
    });

    if (!result) return { error: "Can't Delete!" };
    return { res: result };
  } catch (error) {
    return { error: JSON.stringify(error) };
  }
};
