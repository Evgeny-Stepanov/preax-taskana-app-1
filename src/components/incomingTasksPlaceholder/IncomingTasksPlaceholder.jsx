import { BASE_URL } from "@/assets/constants";

import styles from "./incomingTasksPlaceholder.module.css";

export const IncomingTaskPlaceholder = () => {
  return (
    <div className={styles.placeholder}>
      <h3 className="h2">Все твои задачи организованы как надо</h3>
      <p className={styles.text}>Отличная работа! Ты большой молодец!</p>
      <svg
        width={463}
        height={319}
        className={styles.image}
        aria-hidden="true"
      >
        <use href={`${BASE_URL}sprite.svg#incomingTasksPlaceholder`} />
      </svg>
    </div>
  );
};
