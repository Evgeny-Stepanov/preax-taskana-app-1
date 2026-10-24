import { Logo } from "../logo/Logo";
import { Button } from "../button/Button";
import { Icon } from "../icon/Icon";

import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <a
        href="#"
        aria-label="Заглушка"
      >
        <Logo />
      </a>

      <Button
        className={styles.button}
        ariaLabel="Создать задачу"
      >
        <Icon iconSpriteId="plus" />
        <span>Создать</span>
      </Button>
    </header>
  );
};
