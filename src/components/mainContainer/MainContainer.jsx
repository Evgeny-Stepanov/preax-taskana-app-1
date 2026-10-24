import { TaskList } from "../taskList/TaskList";

import styles from "./mainContainer.module.css";

export const MainContainer = () => {
  return (
    <>
      <h2 className={`${styles.title} h1`}>Входящие</h2>
      <TaskList />
    </>
  );
};
