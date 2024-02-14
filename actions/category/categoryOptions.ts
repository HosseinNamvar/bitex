"use server";

import { z } from "zod";
import { db } from "@/lib/db";
import { PrismaClient } from "@prisma/client/extension";

const AddOption = z.object({
  name: z.string().min(3),
  type: z.enum(["TEXT", "COLOR"]),
  categoryOptionId: z.string(),
});

const GetCategoryOption = z.object({
  id: z.string(),
  options: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      type: z.enum(["TEXT", "COLOR"]),
      textOptions: z.array(
        z.object({
          id: z.string(),
          name: z.string(),
        })
      ),
      colorOptions: z.array(
        z.object({
          id: z.string(),
          name: z.string(),
        })
      ),
    })
  ),
});

const AddTextOption = z.object({
  optionId: z.string(),
  name: z.string().min(3),
});

const AddColorOption = z.object({
  optionId: z.string(),
  name: z.string().min(3),
  color: z.string().min(3),
});
const ActivateOptions = z.object({
  type: z.enum(["group", "category", "subCategory"]),
  parentCatId: z.string(),
});

export type TAddOption = z.infer<typeof AddOption>;
export type TGetCategoryOption = z.infer<typeof GetCategoryOption>;
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
        options: {
          select: {
            id: true,
            name: true,
            type: true,
            textOptions: {
              select: {
                id: true,
                name: true,
              },
            },
            colorOptions: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });
    if (GetCategoryOption.safeParse(result).success) {
      if (result) {
        return { res: result };
      } else {
        return { error: "not found" };
      }
    }
    return { error: "Invalid DB Data" };
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

export const getOptions = async (categoryId: string) => {
  if (!categoryId || categoryId === "")
    return {
      error: "Invalid ID",
    };

  try {
    const result = await db.option.findMany({
      where: {
        categoryOptionId: categoryId,
      },
      select: {
        id: true,
        name: true,
        type: true,
      },
    });
    if (result) {
      return { res: result };
    } else {
      return { error: "not found" };
    }
  } catch (error) {
    return { error: "database error" };
  }
};

export const addOption = async (data: TAddOption) => {
  if (!AddOption.safeParse(data).success) return { error: "Invalid Data!" };
  console.log(data);
  try {
    const result = await db.option.create({
      data: {
        type: data.type,
        name: data.name,
        categoryOptionId: data.categoryOptionId,
      },
    });

    if (result) return { res: JSON.stringify(result) };
    return { error: JSON.stringify(result) };
  } catch (error) {
    return { error: JSON.stringify(error) };
  }
};

export const addTextOption = async (data: TAddTextOption) => {
  if (!AddTextOption.safeParse(data).success) return { error: "Invalid Data!" };

  try {
    const result = await db.textOption.create({
      data: {
        name: data.name,
        optionId: data.optionId,
      },
    });

    if (result) return { res: JSON.stringify(result) };
    return { error: JSON.stringify(result) };
  } catch (error) {
    return { error: JSON.stringify(error) };
  }
};

export const addColorOption = async (data: TAddColorOption) => {
  if (!AddTextOption.safeParse(data).success) return { error: "Invalid Data!" };

  try {
    const result = await db.colorOption.create({
      data: {
        name: data.name,
        color: data.color,
        optionId: data.optionId,
      },
    });

    if (result) return { res: JSON.stringify(result) };
    return { error: JSON.stringify(result) };
  } catch (error) {
    return { error: JSON.stringify(error) };
  }
};
