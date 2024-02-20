"use server";
import { db } from "@/lib/db";
import { SpecGroup } from "@prisma/client";

export const getCategorySpecs = async (categoryID: string) => {
  if (!categoryID || categoryID === "") return { error: "Invalid Category ID" };

  const specifications: SpecGroup[] = [];
  let shouldRepeat = true;
  let catIdToSearch: string | null = categoryID;

  const getSpecsAndParentID = async (catID: string) => {
    const result = await db.category.findFirst({
      where: {
        id: catID,
      },
      select: {
        parentID: true,
        Category_SpecGroup: {
          select: {
            specGroup: {
              select: {
                id: true,
                title: true,
                specs: true,
              },
            },
          },
        },
      },
    });
    return result;
  };

  const getSpecGroup = async () => {
    if (catIdToSearch) {
      const result = await getSpecsAndParentID(catIdToSearch);
      if (!result) return false;
      if (result.Category_SpecGroup.length > 0) {
        result.Category_SpecGroup.forEach((specGroup) =>
          specifications.unshift(specGroup.specGroup)
        );
      }
      if (!result.parentID) return false;
      catIdToSearch = result.parentID;
      return true;
    }
    return false;
  };

  try {
    do {
      shouldRepeat = await getSpecGroup();
    } while (shouldRepeat);

    return { res: specifications };
  } catch (error) {
    return { error: JSON.stringify(error) };
  }
};
