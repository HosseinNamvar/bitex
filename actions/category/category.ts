"use server";
import { z } from "zod";
import { db } from "@/lib/db";

const GetAllCategories = z.object({
  id: z.string(),
  parentID: z.string().min(6).nullable(),
  name: z.string().min(3),
  url: z.string().min(3),
  iconSize: z.array(z.number().int()),
  iconUrl: z.string().min(3).nullable(),
});

const AddCategory = z.object({
  parentID: z.string().min(6).nullable(),
  name: z.string().min(3),
  url: z.string().min(3),
  iconSize: z.array(z.number().int()),
  iconUrl: z.string().min(3).nullable(),
});

const UpdateCategory = z.object({
  id: z.string(),
  name: z.string().min(3).optional(),
  url: z.string().min(3).optional(),
  iconSize: z.array(z.number().int()),
  iconUrl: z.string().min(3).optional(),
});

export type TGetAllCategories = z.infer<typeof GetAllCategories>;
export type TAddCategory = z.infer<typeof AddCategory>;
export type TUpdateCategory = z.infer<typeof UpdateCategory>;

export const getAllCategories = async () => {
  try {
    const result = await db.category.findMany();

    if (!result) return { error: "Can't read categories" };
    return { res: result };
  } catch (error) {
    return { error: "Cant read Category Groups" };
  }
};

export const addCategory = async (data: TAddCategory) => {
  if (!AddCategory.safeParse(data).success) return { error: "Invalid Data!" };

  try {
    const result = await db.category.create({
      data: {
        parentID: data.parentID,
        name: data.name,
        url: data.url,
        iconSize: [...data.iconSize],
        iconUrl: data.iconUrl,
      },
    });
    if (!result) return { error: "cant add to database" };
    return { res: result };
  } catch (error) {
    return { error: JSON.stringify(error) };
  }
};

export const updateCategory = async (data: TUpdateCategory) => {
  if (!UpdateCategory.safeParse(data).success)
    return { error: "Data is no valid" };

  const { id, iconSize, ...values } = data;

  try {
    let result = await db.category.update({
      where: {
        id,
      },
      data: {
        iconSize: [...iconSize],
        ...values,
      },
    });
    if (result) return { res: result };
    return { error: "Can't update it" };
  } catch (error) {
    return {
      error: JSON.stringify(error),
    };
  }
};

export const deleteCategory = async (id: string) => {
  if (!id) return { error: "Can't delete it!" };

  try {
    const hasParent = await db.category.findFirst({
      where: {
        parentID: id,
      },
    });
    if (!hasParent) {
      const result = await db.category.delete({
        where: {
          id,
        },
      });

      if (!result) return { error: "Can't delete it!" };
      return { res: JSON.stringify(result) };
    }
    return { error: "It has child!" };
  } catch (error) {
    return { error: "Can't delete it!" };
  }
};
