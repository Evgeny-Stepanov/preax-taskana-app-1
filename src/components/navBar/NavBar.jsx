import { BASE_URL } from "@/assets/constants";

import { Button } from "../button/Button";
import { Icon } from "../icon/Icon";

import styles from "./navBar.module.css";

export const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.list}>
        <li>
          <Button
            className={styles.link}
            isLink={true}
            href={`${BASE_URL}index.html`}
          >
            <Icon iconSpriteId="inbox" />
            Входящие
          </Button>
        </li>
      </ul>
    </nav>
  );
};
