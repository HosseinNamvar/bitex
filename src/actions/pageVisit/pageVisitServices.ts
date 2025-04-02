"use server";
import { z } from "zod";
import { db } from "@/lib/db";
import { TAddPageVisit } from "@/types/common";
import { PageType } from "@prisma/client";
import { TRAFFIC_LIST_PAGE_SIZE } from "@/shared/constants/admin/trafficView";

const ValidatePageVisit = z.object({
  pageType: z.enum(["MAIN", "LIST", "PRODUCT"]),
});

export type TTrafficListItem = {
  id: string;
  time: Date | null;
  pageType: PageType;
  pagePath: string | null;
  productID: string | null;
  deviceResolution: string | null;
  product: {
    name: string;
    category: {
      name: string;
    };
  } | null;
};

export const addVisit = async (data: TAddPageVisit) => {
  if (process.env.NODE_ENV !== "production") return { error: "Invalid ENV!" };

  if (!ValidatePageVisit.safeParse(data).success) return { error: "Invalid Data!" };

  try {
    const result = await db.pageVisit.create({
      data: {
        pageType: data.pageType,
        pagePath: data.pagePath,
        productID: data.productID,
        deviceResolution: data.deviceResolution,
      },
    });

    if (!result) return { error: "Invalid Data!" };
    return { res: result };
  } catch (error) {
    return { error: JSON.stringify(error) };
  }
};

export const getTrafficReport = async (skip: number = 0) => {
  try {
    const [list, totalCount] = await Promise.all([
      db.pageVisit.findMany({
        skip: skip,
        take: TRAFFIC_LIST_PAGE_SIZE,
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
      }),
      db.pageVisit.count(),
    ]);
    if (!list) return { error: "Can not read Data!" };
    return { res: { list, totalCount } };
  } catch (error) {
    return { error: JSON.stringify(error) };
  }
};

export const deleteTraffic = async (id: string) => {
  if (!id || id === "") return { error: "Invalid Data!" };

  try {
    const result = await db.pageVisit.delete({
      where: {
        id,
      },
    });
    if (!result) return { error: "Can not read Data!" };
    return { res: result };
  } catch (error) {
    return { error: JSON.stringify(error) };
  }
};
