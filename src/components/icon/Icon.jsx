import { BASE_URL } from "@/assets/constants";

import styles from "./icon.module.css";

export const Icon = ({ iconSpriteId, iconWrapperSize = 24 }) => {
  return (
    <span
      className={styles.icon}
      style={{ "--icon-wrapper-size": `${iconWrapperSize}px` }}
    >
      <svg aria-hidden="true">
        <use href={`${BASE_URL}sprite.svg#${iconSpriteId}`} />
      </svg>
    </span>
  );
};
