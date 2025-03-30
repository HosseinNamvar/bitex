"use client";

import Button from "@/components/UI/button";

import { TTrafficListItem, deleteTraffic, getTrafficReport } from "@/actions/pageVisit/pageVisitServices";
import { useEffect, useState } from "react";

const convertTime = (time: Date) => {
  return (
    time.getFullYear() +
    "." +
    (time.getMonth() + 1).toLocaleString("en-us", { minimumIntegerDigits: 2 }) +
    "." +
    time.getDate().toLocaleString("en-us", { minimumIntegerDigits: 2 }) +
    "  --  " +
    time.getHours().toLocaleString("en-us", { minimumIntegerDigits: 2 }) +
    ":" +
    time.getMinutes().toLocaleString("en-us", { minimumIntegerDigits: 2 }) +
    ":" +
    time.getSeconds().toLocaleString("en-us", { minimumIntegerDigits: 2 })
  );
};

const TrafficView = () => {
  const [trafficList, setTrafficList] = useState<TTrafficListItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getTraffic = async () => {
    setIsLoading(true);
    const response = await getTrafficReport();
    if (response.res) {
      setTrafficList(response.res);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getTraffic();
  }, []);

  const handleDeleteTraffic = async (id: string) => {
    setIsLoading(true);
    const response = await deleteTraffic(id);
    if (response.res) {
      getTraffic();
    }
  };

  return (
    <div className="text-sm text-gray-800 flex flex-col overflow-y-scroll">
      {trafficList.length ? (
        trafficList.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-12 items-center justify-between gap-4 p-3 rounded-lg even:bg-gray-100"
          >
            <span className="w-[180px] col-span-2 text-center py-1 bg-white rounded-md border border-gray-400">
              {item.time ? convertTime(item.time) : ""}
            </span>
            <span className="w-[160px] col-span-2 text-center py-1 text-gray-600 rounded-md border border-gray-300">
              {item.pageType}
            </span>
            <span className="col-span-2 text-nowrap overflow-hidden">{item.pagePath}</span>
            <div className="w-[110px] col-span-2 text-center py-1 rounded-md border border-gray-400">
              {item.deviceResolution}
            </div>
            <div className="col-span-3">{item.product && item.product?.category.name + " / " + item.product?.name}</div>
            <Button onClick={() => handleDeleteTraffic(item.id)} disabled={isLoading}>
              Delete
            </Button>
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default TrafficView;
