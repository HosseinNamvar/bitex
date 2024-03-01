"use server";
import { z } from "zod";
import { db } from "@/lib/db";
import { TAddPageVisit } from "@/types/common";

const ValidatePageVisit = z.object({
  pageType: z.enum(["MAIN", "LIST", "PRODUCT"]),
});

export const addVisit = async (data: TAddPageVisit) => {
  if (process.env.NODE_ENV !== "production") return { error: "Invalid ENV!" };

  if (!ValidatePageVisit.safeParse(data).success)
    return { error: "Invalid Data!" };

  try {
    const result = await db.pageVisit.create({
      data: {
        pageType: data.pageType,
        pagePath: data.pagePath,
        productID: data.productID,
      },
    });

    if (!result) return { error: "Invalid Data!" };
    return { res: result };
  } catch (error) {
    return { error: JSON.stringify(error) };
  }
};

export const getTrafficReport = async () => {
  try {
    const result = await db.pageVisit.findMany({
      include: {
        product: {
          select: {
            name: true,
            category: {
              select: {
                name: true,
              },
            },
          },
        },
      },
      orderBy: {
        id: "desc",
      },
    });
    if (!result) return { error: "Can not read Data!" };
    return { res: result };
  } catch (error) {
    return { error: JSON.stringify(error) };
  }
};
