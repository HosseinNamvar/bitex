"use server";
import { z } from "zod";
import { db } from "@/lib/db";
import { TAddProductFormValues } from "@/types/product";

const ValidateAddProduct = z.object({
  name: z.string().min(3),
  desc: z.string().optional(),
  images: z.array(z.string()),
  categoryID: z.string().min(6),
  price: z.string().min(1),
  salePrice: z.string(),
  specifications: z.array(
    z.object({
      specGroupID: z.string().min(6),
      specValues: z.array(z.string()),
    })
  ),
});

export const addProduct = async (data: TAddProductFormValues) => {
  if (!ValidateAddProduct.safeParse(data).success)
    return { error: "Invalid Data!" };

  try {
    const price = convertStringToFloat(data.price);
    const salePrice = data.salePrice
      ? convertStringToFloat(data.salePrice)
      : null;

    const result = db.category.update({
      where: {
        id: data.categoryID,
      },
      data: {
        products: {
          create: {
            name: data.name,
            desc: data.desc,
            price: price,
            salePrice: salePrice,
            images: [...data.images],
            specs: data.specifications,
          },
        },
      },
    });
    if (!result) return { error: "Can't Insert Data" };
    return { res: result };
  } catch (error) {
    return { error: JSON.stringify(error) };
  }
};

const convertStringToFloat = (str: string) => {
  str.replace(/,/, ".");
  return str ? parseFloat(str) : 0.0;
};
