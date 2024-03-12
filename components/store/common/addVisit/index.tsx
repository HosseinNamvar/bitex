"use client";

import { addVisit } from "@/actions/pageVisit/pageVisitServices";
import { TAddPageVisit } from "@/types/common";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const AddVisit = () => {
  const pathName = usePathname();
  useEffect(() => {
    const addingVisit = async () => {
      const deviceResolution =
        window.screen.width.toString() +
        " x " +
        window.screen.height.toString();

      const data: TAddPageVisit = {
        pageType: "MAIN",
        deviceResolution: deviceResolution,
      };

      if (pathName.includes("/list/")) {
        data.pageType = "LIST";
        const pathArr = pathName.split("/list/");
        data.pagePath = pathArr[pathArr.length - 1];
      }
      if (pathName.includes("/product")) {
        data.pageType = "PRODUCT";
        const pathArr = pathName.split("/product/");
        data.productID = pathArr[pathArr.length - 1];
      }
      const response = await addVisit(data);
    };
    addingVisit();
  }, [pathName]);
  return <></>;
};

export default AddVisit;
