"use server";
import { db } from "@/lib/db";

export const getAllGroups = async () => {
  try {
    const allGroups = await db.categoryGroup.findMany();
    return allGroups;
  } catch (error) {
    console.log(error);
    return "Cant read Category Groups";
  }
};
