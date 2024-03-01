"use server";
import { z } from "zod";
import { db } from "@/lib/db";
import { PageVisit } from "@prisma/client";

const ValidatePageVisit = z.object({
  pageType: z.enum(["MAIN", "LIST", "PRODUCT"]),
  pageID: z.string().min(6),
});

export const addVisit = async (data: PageVisit) => {
  if (!ValidatePageVisit.safeParse(data).success)
    return { error: "Invalid Data!" };

  try {
    const result = await db.pageVisit.create({
      data: {
        pageID: data.pageID,
        pageType: data.pageType,
      },
    });

    if (!result) return { error: "Invalid Data!" };
    return result;
  } catch (error) {
    return { error: JSON.stringify(error) };
  }
};
