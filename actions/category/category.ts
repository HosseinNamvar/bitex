"use server";
import { z } from "zod";
import { db } from "@/lib/db";

const AddCategory = z.object({
  groupId: z.string(),
  name: z.string().min(3),
  url: z.string().min(3),
});

const UpdateCategory = z.object({
  catId: z.string(),
  name: z.string().min(3).optional(),
  url: z.string().min(3).optional(),
});

export type TAddCategoryAction = z.infer<typeof AddCategory>;
export type TUpdateCategoryAction = z.infer<typeof UpdateCategory>;

export const addCategory = async (data: TAddCategoryAction) => {
  if (!AddCategory.safeParse(data).success)
    return { error: "Data is not Valid" };
  console.log("Try to insert");
  try {
    const categoryGroup = db.categoryGroup.findUnique({
      where: {
        id: data.groupId,
      },
      select: {
        id: true,
      },
    });

    if (!categoryGroup) return { error: "Category Group not found!" };

    const result = await db.category.create({
      data: {
        name: data.name,
        url: data.url,
        CategoryGroup: {
          connect: {
            id: data.groupId,
          },
        },
      },
    });

    if (!result) return { error: "can not add category" };

    return { res: JSON.stringify(result) };
  } catch (error) {
    return { error: JSON.stringify(error) };
  }
};

export const updateCategory = async (data: TUpdateCategoryAction) => {
  if (!UpdateCategory.safeParse(data).success)
    return { error: "Data is not valid!" };

  try {
    const { catId, ...values } = data;
    const result = await db.category.update({
      where: {
        id: data.catId,
      },
      data: {
        ...values,
      },
    });

    if (!result) return { error: "Cant' update!" };
    return { res: JSON.stringify(result) };
  } catch (err) {
    return { error: JSON.stringify(err) };
  }
};

export const deleteCategory = async (id: string) => {
  if (!id) return { error: "Can't delete it!" };

  try {
    const result = await db.category.delete({
      where: {
        id,
      },
    });

    if (!result) return { error: "Can't delete it!" };
    return { res: JSON.stringify(result) };
  } catch (error) {
    return { error: "Can't delete it!" };
  }
};
