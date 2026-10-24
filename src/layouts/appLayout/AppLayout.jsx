import { Header } from "@/components/header/Header";

import styles from "./appLayout.module.css";

export const AppLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <h1 className="visually-hidden">Taskana App - приложение задач</h1>
      <Header />
      {children}
    </div>
  );
};
