import styles from "./avatar.module.css";

type Props = {
  image: string;
};
export const Avatar = ({ image }: Props) => (
  <div
    className={styles.avatar}
    style={{
      backgroundImage: `url("${image}")`,
    }}
  />
);
