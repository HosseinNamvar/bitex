"use server";

import { z } from "zod";
import { db } from "@/lib/db";
import { PrismaClient } from "@prisma/client/extension";

const AddTextOption = z.object({
  categoryOptionId: z.string(),
  name: z.string().min(3),
});

const AddColorOption = z.object({
  categoryOptionId: z.string(),
  name: z.string().min(3),
  color: z.string().min(3),
});
const ActivateOptions = z.object({
  type: z.enum(["group", "category", "subCategory"]),
  parentCatId: z.string(),
});

export type TAddTextOption = z.infer<typeof AddTextOption>;
export type TAddColorOption = z.infer<typeof AddColorOption>;
export type TActivateOptions = z.infer<typeof ActivateOptions>;

export const getCategoryOptions = async (id: string) => {
  if (!id || id === "")
    return {
      error: "Invalid ID",
    };

  try {
    const result = await db.categoryOption.findFirst({
      where: {
        OR: [
          {
            categoryGroupId: id,
          },
          {
            categoryId: id,
          },
          {
            subCategoryId: id,
          },
        ],
      },
      select: {
        id: true,
      },
    });
    if (result) {
      return { res: JSON.stringify(result) };
    } else {
      return { error: "not found" };
    }
  } catch (error) {
    return { error: "database error" };
  }
};

export const activateCategoryOptions = async (data: TActivateOptions) => {
  if (!ActivateOptions.safeParse(data).success)
    return { error: "Invalid Data!" };

  let dbObject: PrismaClient;

  try {
    switch (data.type) {
      case "group":
        dbObject = db.categoryGroup;
        break;
      case "category":
        dbObject = db.category;
        break;
      case "subCategory":
        dbObject = db.subCategory;
        break;

      default:
        return { error: "Invalid Data" };
    }
    const result = await dbObject.update({
      where: {
        id: data.parentCatId,
      },
      data: {
        options: {
          create: {},
        },
      },
    });

    if (!result) return { error: JSON.stringify(result) };
    return { res: JSON.stringify(result) };
  } catch (error) {
    return { error: JSON.stringify(error) };
  }
};
