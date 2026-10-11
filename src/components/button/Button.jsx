import styles from "./button.module.css";

export const Button = ({
  className = "",
  isLink = false,
  href = undefined,
  type = "button",
  ariaLabel = undefined,
  children,
}) => {
  const Component = isLink ? "a" : "button";

  return (
    <Component
      className={`${styles.button} ${className}`.trim()}
      {...(isLink ? { href } : { type })}
      aria-label={ariaLabel}
    >
      {children}
    </Component>
  );
};
