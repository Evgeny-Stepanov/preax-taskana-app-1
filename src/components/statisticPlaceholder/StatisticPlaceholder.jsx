import { BASE_URL } from "@/assets/constants";

import styles from "./statisticPlaceholder.module.css";

export const StatisticPlaceholder = () => {
  return (
    <div className={styles.placeholder}>
      <svg
        width={233}
        height={168}
        aria-hidden="true"
        className={styles.image}
      >
        <use href={`${BASE_URL}sprite.svg#statisticPlaceholder`} />
      </svg>
      <p className={styles.text}>
        Здесь мы поможем тебе управлять твоими задачами, отслеживать статистику
        <br />и самочувствие.
      </p>
    </div>
  );
};
