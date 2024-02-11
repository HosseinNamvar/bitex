"use server";
import { z } from "zod";
import { db } from "@/lib/db";

const AddCategory = z.object({
  groupId: z.string(),
  name: z.string().min(3),
  url: z.string().min(3),
});

export type TAddCategoryAction = z.infer<typeof AddCategory>;

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
        categoryGroupId: data.groupId,
      },
    });

    if (!result) return { error: "can not add category" };

    return { res: JSON.stringify(result) };
  } catch (error) {
    return { error: JSON.stringify(error) };
  }
};
