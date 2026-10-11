import { useEffect, useRef } from "react";

import { TaskList } from "@/components/taskList/TaskList";
import { Footer } from "@/components/footer/Footer";

import styles from "./incomingTasks.module.css";
import { noTopPadding as noTopPaddingClass } from "@/components/incomingTasksPlaceholder/incomingTasksPlaceholder.module.css";

export const IncomingTasks = () => {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scrollerElement = scrollerRef.current;

    if (!scrollerElement) {
      return;
    }

    const placeholderElement = scrollerElement.querySelector(
      "[data-incoming-tasks-placeholder]",
    );

    if (!placeholderElement) {
      return;
    }

    const removePaddingTop = () => {
      const hasOverflow =
        scrollerElement.scrollHeight > scrollerElement.clientHeight;

      placeholderElement.classList.toggle(noTopPaddingClass, hasOverflow);
    };

    removePaddingTop();

    const ro = new ResizeObserver(removePaddingTop);
    ro.observe(scrollerElement);
    ro.observe(placeholderElement);

    return () => {
      ro.disconnect();
      placeholderElement.classList.remove(noTopPaddingClass);
    };
  }, []);

  return (
    <div
      ref={scrollerRef}
      className={styles.main}
    >
      <main className={styles.mainContainer}>
        <h2 className={`${styles.title} h1`}>Входящие</h2>
        <TaskList />
        <Footer />
      </main>
    </div>
  );
};
