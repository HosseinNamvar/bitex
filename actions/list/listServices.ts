"use server";
import { z } from "zod";
import { db } from "@/lib/db";
import { TFilters, TListItem, TProductPath } from "@/types/product";
import { TListSort } from "@/types/list";

const ValidateSort = z.object({
  sortName: z.enum(["id", "price", "name"]),
  sortType: z.enum(["asc", "desc"]),
});

export const getList = async (
  path: string,
  sortData: TListSort,
  filters: TFilters
) => {
  if (!ValidateSort.safeParse(sortData).success)
    return { error: "Invalid Path" };
  if (!path || path === "") return { error: "Invalid Path" };
  const pathArray = pathToArray(path);
  if (!pathArray || pathArray.length > 3 || pathArray.length === 0)
    return { error: "Invalid Path" };

  const categoryID = await findCategoryFromPathArray(pathArray);
  if (categoryID === "") return { error: "Invalid Path Name" };

  const subCategories: TProductPath[] | null = await getSubCategories(
    categoryID
  );
  if (!subCategories) return { error: "Invalid Sub Categories" };

  const allRelatedCategories = await findCategoryChildren(
    categoryID,
    pathArray.length
  );
  if (!allRelatedCategories || allRelatedCategories.length === 0)
    return { error: "Invalid Path Name" };

  const result = await getProductsByCategories(
    allRelatedCategories,
    sortData,
    filters
  );
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

const getProductsByCategories = async (
  categories: string[],
  sortData: TListSort,
  filters: TFilters
) => {
  const brands: string[] | null = filters.brands.length > 0 ? [] : null;
  if (brands) {
    filters.brands.forEach((brand) => {
      if (brand.isSelected) return brands.push(brand.id);
    });
  }

  let isAvailable: boolean | null = null;
  if (filters.stockStatus === "inStock") isAvailable = true;
  if (filters.stockStatus === "outStock") isAvailable = false;

  const isInitialPrice = filters.priceMinMax[1] === 0;

  try {
    const result: TListItem[] | null = await db.product.findMany({
      where: {
        AND: [
          {
            categoryID: { in: categories },
          },
          isAvailable !== null
            ? {
                isAvailable: isAvailable,
              }
            : {},
          brands
            ? {
                brandID: { in: brands },
              }
            : {},
          !isInitialPrice
            ? {
                price: {
                  gt: filters.priceMinMax[0],
                  lte: filters.priceMinMax[1],
                },
              }
            : {},
        ],
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
      orderBy: {
        [sortData.sortName]: sortData.sortType,
      },
    });
    if (!result) return null;
    return result;
  } catch (error) {
    return null;
  }
};

const pathToArray = (path: string) => {
  const pathWithoutList = path.split("/list/")[1];
  const pathArray = pathWithoutList.split("/");
  return pathArray;
};
