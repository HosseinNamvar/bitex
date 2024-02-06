"use server";
import { db } from "@/lib/db";

export const addCategory = async () => {
  try {
    const newCategory = await db.category.create({
      data: {
        name: "Computer",
        url: "test",
        iconSize: [19, 10],
        iconUrl: "url",
        subCategories: {},
      },
    });
    console.log(newCategory);
  } catch (error) {
    console.log(error);
  }
};
