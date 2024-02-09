"use server";
import { db } from "@/lib/db";
import { z } from "zod";

const AddCategoryGroup = z.object({
  name: z.string().min(3),
  url: z.string().min(3),
  iconSize: z.tuple([z.number().min(3).int(), z.number().min(3).int()]),
  iconUrl: z.string().min(3),
});

type TAddCategoryGroup = z.infer<typeof AddCategoryGroup>;

export const addGroup = async (data: TAddCategoryGroup) => {
  if (!AddCategoryGroup.safeParse(data).success) return false;
  try {
    const newCategory = await db.categoryGroup.create({
      data: {
        name: data.name,
        url: data.url,
        iconSize: data.iconSize,
        iconUrl: data.iconUrl,
      },
    });
    if (!newCategory) return "cant add to database";
    return true;
  } catch (error) {
    return false;
  }
};
