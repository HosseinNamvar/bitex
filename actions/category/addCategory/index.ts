"use server";
import { db } from "@/lib/db";
import { z } from "zod";

const CategoryGroup = z.object({
  name: z.string().min(3),
  url: z.string().min(3),
  iconSize: z.tuple([z.number().min(3).int(), z.number().min(3).int()]),
  iconUrl: z.string().min(3),
});

export type TCategoryGroup = z.infer<typeof CategoryGroup>;

export const addGroup = async (data: TCategoryGroup) => {
  if (!CategoryGroup.safeParse(data).success) return false;
  try {
    const newCategory = await db.categoryGroup.create({
      data: {
        name: data.name,
        url: data.url,
        iconSize: data.iconSize,
        iconUrl: data.iconUrl,
      },
    });
    if (newCategory) return true;
    console.log("cant add to database");
  } catch (error) {
    console.log(error);
    return false;
  }
};
