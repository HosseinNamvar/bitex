"use server";
import { z } from "zod";
import { db } from "@/lib/db";

// export const getOneGroup = async (id: string) => {
//   try {
//     const group = await db.categoryGroup.findFirst({
//       where: {
//         id,
//       },
//     });
//     if (!group) return { error: "Can't find the group" };
//     const groupData: TCategoryGroup = {
//       ...group,
//       iconSize: [group.iconSize[0], group.iconSize[1]] as const,
//     };
//     return { res: groupData };
//   } catch (error) {
//     return { error: "Can't find the group" };
//   }
// };
