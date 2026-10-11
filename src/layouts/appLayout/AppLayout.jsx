import { Header } from "@/components/header/Header";
import { NavBar } from "@/components/navBar/NavBar";
import { IncomingTasks } from "@/pages/incomingTasks/IncomingTasks";
import { SideBar } from "@/components/sideBar/SideBar";

import styles from "./appLayout.module.css";

export const AppLayout = () => {
  return (
    <>
      <h1 className="visually-hidden">Taskana App - приложение задач</h1>
      <Header />
      <div className={styles.layout}>
        <NavBar />
        <IncomingTasks />
        <SideBar />
      </div>
    </>
  );
};
