"use client";

import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { TTrafficListItem, deleteTraffic, getTrafficReport } from "@/actions/pageVisit/pageVisitServices";
import Button from "@/components/UI/button";
import { SK_Box } from "@/components/UI/skeleton";
import { Pagination } from "@/components/UI/table/pagination";
import { TRAFFIC_LIST_PAGE_SIZE } from "@/shared/constants/admin/trafficView";
import { getFullTimeString } from "@/shared/utils/formatting/time";
import { cn } from "@/shared/utils/styling";
import { calculateTablePagination } from "@/shared/utils/tablesCalculation";

const TrafficView = () => {
  const [trafficList, setTrafficList] = useState<TTrafficListItem[]>([]);
  const { pageNumber } = useParams<{ pageNumber: string }>();
  const pageNumberInt = Number(pageNumber);

  const [totalNumber, setTotalNumber] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const getTraffic = useCallback(async () => {
    setIsLoading(true);

    const currentPage = Number(pageNumber);

    if (isNaN(currentPage)) {
      setIsLoading(false);
      throw new Error("Page number is not valid");
    }

    const response = await getTrafficReport((currentPage - 1) * 20);

    if (response.error) {
      setIsLoading(false);
      throw new Error(response.error);
    }

    if (response?.res?.list && response?.res?.totalCount) {
      setTrafficList(response.res.list);
      setTotalNumber(response.res.totalCount);
    }

    setIsLoading(false);
  }, [pageNumber]);

  useEffect(() => {
    getTraffic();
  }, [getTraffic]);

  const handleDelete = async (id: string) => {
    setDeletingId(id);
    const response = await deleteTraffic(id);

    if (response.res) {
      getTraffic();
    }

    setDeletingId(null);
  };

  const paginationList = calculateTablePagination(totalNumber, pageNumberInt, TRAFFIC_LIST_PAGE_SIZE, 10);

  return (
    <div className="text-sm text-gray-800 flex flex-col overflow-y-scroll">
      <span className="mb-4">Total visits: {totalNumber || 0}</span>
      {isLoading ? (
        <div className="grid grid-cols-12 items-center justify-between gap-4 p-3 rounded-lg bg-gray-50">
          <SK_Box width="100%" height="16px" />
          <SK_Box width="100%" height="16px" />
          <SK_Box width="100%" height="16px" />
        </div>
      ) : trafficList.length ? (
        <div className="flex flex-col">
          {trafficList.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-12 items-center justify-between gap-4 p-3 rounded-lg even:bg-gray-100"
            >
              <span className="w-[180px] col-span-2 text-center py-1 bg-white rounded-md border border-gray-400">
                {item.time ? getFullTimeString(item.time) : ""}
              </span>
              <span className="w-[160px] col-span-2 text-center py-1 text-gray-600 rounded-md border border-gray-300">
                {item.pageType}
              </span>
              <span className="col-span-2 text-nowrap overflow-hidden">{item.pagePath}</span>
              <div className="w-[110px] col-span-2 text-center py-1 rounded-md border border-gray-400">
                {item.deviceResolution}
              </div>
              <div className="col-span-3">
                {item.product && item.product?.category.name + " / " + item.product?.name}
              </div>
              <Button
                onClick={() => handleDelete(item.id)}
                disabled={deletingId === item.id}
                className={cn({ "opacity-50": deletingId === item.id })}
              >
                Delete
              </Button>
            </div>
          ))}
          <Pagination currentPage={pageNumberInt} routeBase="/admin/trafficView/" pagesList={paginationList} />
        </div>
      ) : (
        <div>There is no traffic data</div>
      )}
    </div>
  );
};

export default TrafficView;
