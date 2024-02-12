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
const UpdateCategoryGroup = z.object({
  name: z.string().min(3).optional(),
  url: z.string().min(3).optional(),
  iconSize: z
    .tuple([z.number().min(3).int(), z.number().min(3).int()])
    .optional(),
  iconUrl: z.string().min(3).optional(),
});

export type TReadGroup = {
  id: string;
  name: string;
  categories: {
    id: string;
    name: string;
    url: string;
    subCategories?: {
      id: string;
      name: string;
      url: string;
    }[];
  }[];
};

export const getAllGroups = async () => {
  try {
    const allGroups: TReadGroup[] = await db.categoryGroup.findMany({
      select: {
        id: true,
        name: true,
        categories: {
          select: {
            id: true,
            name: true,
            url: true,
            subCategories: {
              select: {
                id: true,
                name: true,
                url: true,
              },
            },
          },
        },
      },
      orderBy: {
        id: "asc",
      },
    });

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
    if (data.name && data.url && data.iconSize && data.iconUrl) {
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
    }
    return false;
  } catch (error) {
    return false;
  }
};

export const updateGroup = async (data: TCategoryGroup) => {
  if (!UpdateCategoryGroup.safeParse(data).success)
    return { error: "Data is no valid" };
  console.log("values");

  const { id, ...values } = data;

  try {
    let updated = await db.categoryGroup.update({
      where: {
        id,
      },
      data: {
        name: values.name,
        iconUrl: values.iconUrl,
        url: values.url,
        iconSize: values.iconSize,
      },
    });
    if (updated) return { res: JSON.stringify(updated) };
    return { error: "Can't update it" };
  } catch (error) {
    return {
      error: error,
    };
  }
};

export const deleteGroup = async (id: string) => {
  if (!id) return { error: "Can't delete it!" };

  try {
    const deleteItem = await db.categoryGroup.delete({
      where: {
        id,
      },
    });

    if (!deleteItem) return { error: "Can't delete it!" };
    return { res: JSON.stringify(deleteItem) };
  } catch (error) {
    return { error: "Can't delete it!" };
  }
};
