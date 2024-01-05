import styles from "./button.module.css";

export const Button = ({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...props} className={styles.button}>
      <p>{children}</p>
    </button>
  );
};
