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

export const getAllGroups = async () => {
  try {
    const allGroups: TCategoryGroup[] = await db.categoryGroup.findMany();

    if (!allGroups) return { error: "Can't read categories" };

    return { res: allGroups };
  } catch (error) {
    return { error: "Cant read Category Groups" };
  }
};

export const getOneGroup = async (id: string) => {
  try {
    const group = await db.categoryGroup.findFirst({
      where: {
        id,
      },
    });
    if (!group) return { error: "Can't find the group" };
    const groupData: TCategoryGroup = {
      ...group,
      iconSize: [group.iconSize[0], group.iconSize[1]] as const,
    };
    return { res: groupData };
  } catch (error) {
    return { error: "Can't find the group" };
  }
};

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

export const updateGroup = async (data: TCategoryGroup) => {
  if (!AddCategoryGroup.safeParse(data).success)
    return { error: "Data is no valid" };

  try {
  } catch (error) {}
};

export const deleteGroup = async (data: TCategoryGroup) => {
  if (!AddCategoryGroup.safeParse(data).success)
    return { error: "Data is no valid" };

  try {
  } catch (error) {}
};
