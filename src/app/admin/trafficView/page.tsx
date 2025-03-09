"use client";
import styles from "./trafficView.module.scss";

import Button from "@/components/UI/button";

import {
  TTrafficListItem,
  deleteTraffic,
  getTrafficReport,
} from "@/actions/pageVisit/pageVisitServices";
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
    <div className={styles.trafficView}>
      {trafficList.length > 0 ? (
        trafficList.map((item) => (
          <div key={item.id} className={styles.row}>
            <div className={styles.leftCol}>
              <div className={styles.time}>
                {item.time ? convertTime(item.time) : ""}
              </div>
              <div className={styles.pageType}>{item.pageType}</div>
              <div className={styles.pagePath}>{item.pagePath}</div>
              <div className={styles.deviceRes}>{item.deviceResolution}</div>
              <div>
                {item.product &&
                  item.product?.category.name + " / " + item.product?.name}
              </div>
            </div>
            <div className={styles.rightCol}>
              <Button
                text="Delete"
                onClick={() => handleDeleteTraffic(item.id)}
                disabled={isLoading}
              />
            </div>
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default TrafficView;
