import styles from "./trafficView.module.scss";
import { getTrafficReport } from "@/actions/pageVisit/pageVisitServices";

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

const TrafficView = async () => {
  const response = await getTrafficReport();
  console.log(response.res);
  return (
    <div className={styles.trafficView}>
      {response.res &&
        response.res.map((item) => (
          <div key={item.id} className={styles.row}>
            <div className={styles.time}>
              {item.time ? convertTime(item.time) : ""}
            </div>
            <div className={styles.pageType}>{item.pageType}</div>
            <div className={styles.pagePath}>{item.pagePath}</div>
            <div>
              {item.product &&
                item.product?.category.name + " / " + item.product?.name}
            </div>
          </div>
        ))}
    </div>
  );
};

export default TrafficView;
