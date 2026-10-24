import { NavBar } from "../navBar/NavBar";
import { IncomingTasks } from "@/pages/incomingTasks/IncomingTasks";
import { SideBar } from "../sideBar/SideBar";

import styles from "./content.module.css";

export const Content = () => {
  return (
    <div className={styles.content}>
      <NavBar />
      <IncomingTasks />
      <SideBar />
    </div>
  );
};
