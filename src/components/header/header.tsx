"use client";

import Image from "next/image";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={100}
        height={24}
        priority
      />

      <nav>
        <ul>
          <li>
            <a href="#home">Ínicio</a>
          </li>
          <li>
            <a href="#motives">Porque nós?</a>
          </li>
          <li>
            <a href="#plans">Planos disponiveis</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
