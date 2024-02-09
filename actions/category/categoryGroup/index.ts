"use server";
import { z } from "zod";
import { db } from "@/lib/db";
import { TCategoryGroup } from "@/types/common";

const AddCategoryGroup = z.object({
  name: z.string().min(3),
  url: z.string().min(3),
  iconSize: z.tuple([z.number().min(3).int(), z.number().min(3).int()]),
  iconUrl: z.string().min(3),
});

export const addGroup = async (data: TCategoryGroup) => {
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
