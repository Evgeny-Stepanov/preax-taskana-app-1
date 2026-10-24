import { MainContainer } from "@/components/mainContainer/MainContainer";
import { Footer } from "@/components/footer/Footer";

import styles from "./incomingTasks.module.css";

export const IncomingTasks = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <MainContainer />
        <Footer />
      </div>
    </main>
  );
};
