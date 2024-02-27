"use server";
import { z } from "zod";
import { db } from "@/lib/db";
import { TListItem, TProductPath } from "@/types/product";

export const getList = async (pathList: string[]) => {
  if (!pathList || pathList.length > 3 || pathList.length === 0)
    return { error: "Invalid Path" };

  const categoryID = await findCategoryFromPathArray(pathList);
  if (categoryID === "") return { error: "Invalid Path Name" };

  const subCategories: TProductPath[] | null = await getSubCategories(
    categoryID
  );
  if (!subCategories) return { error: "Invalid Sub Categories" };

  const allRelatedCategories = await findCategoryChildren(
    categoryID,
    pathList.length
  );
  if (!allRelatedCategories || allRelatedCategories.length === 0)
    return { error: "Invalid Path Name" };

  const result = await getProductsByCategories(allRelatedCategories);
  if (!result) return { error: "Can't Find Product!" };

  return { products: result, subCategories: subCategories };
};

const getSubCategories = async (catID: string) => {
  try {
    const result = await db.category.findMany({
      where: {
        parentID: catID,
      },
    });
    if (!result) return null;
    const subCategories: TProductPath[] = [];
    result.forEach((cat) => {
      subCategories.push({
        label: cat.name,
        url: cat.url,
      });
    });
    return subCategories;
  } catch (error) {
    return null;
  }
};

const findCategoryFromPathArray = async (pathArray: string[]) => {
  try {
    const result = await db.category.findMany();
    if (!result) return "";

    let parentID: string | null = null;
    let categoryID = "";
    pathArray.forEach((path) => {
      categoryID =
        result.filter((cat) => cat.parentID === parentID && cat.url === path)[0]
          .id || "";
      parentID = categoryID;
    });
    return categoryID;
  } catch (error) {
    return "";
  }
};

const findCategoryChildren = async (catID: string, numberOfParents: number) => {
  try {
    if (numberOfParents === 3) return [catID];
    const result = await db.category.findMany();
    if (!result) return null;

    let tempChildren: string[] = [];
    result.forEach((cat) => {
      if (cat.parentID === catID) {
        tempChildren.push(cat.id);
      }
    });

    if (numberOfParents === 1) {
      const lastChildren: string[] = [];
      result.forEach((cat) => {
        if (cat.parentID && tempChildren.includes(cat.parentID)) {
          lastChildren.push(cat.id);
        }
      });
      return tempChildren.concat([catID], lastChildren);
    }

    return tempChildren.concat([catID]);
  } catch (error) {
    return null;
  }
};

const getProductsByCategories = async (categories: string[]) => {
  try {
    const result: TListItem[] | null = await db.product.findMany({
      where: {
        categoryID: { in: categories },
      },
      select: {
        id: true,
        brand: {
          select: {
            id: true,
            name: true,
          },
        },
        images: true,
        name: true,
        price: true,
        salePrice: true,
        specialFeatures: true,
        isAvailable: true,
      },
    });
    if (!result) return null;
    return result;
  } catch (error) {
    return null;
  }
};
