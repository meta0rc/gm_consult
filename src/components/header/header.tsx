import Image from "next/image";
import styles from "./header.module.css";
import { HeaderNav } from "./header-nav";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        src="/logo.png"
        alt="Vercel Logo"
        width={200}
        height={40}
        priority
      />
      <HeaderNav />
    </header>
  );
};
