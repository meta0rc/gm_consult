"use client";

import { useState } from "react";
import styles from "./header.module.css";
import { ShoppingBag } from "../bag/bag";

export const HeaderNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.mobileControl}>
        <ShoppingBag />
        <button onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {open && (
        <div className={styles.backdrop} onClick={() => setOpen(false)} />
      )}

      <nav className={open ? styles.navActive : "nav"}>
        {open && <button onClick={() => setOpen(!open)}>x</button>}
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
          <li className={styles.bag}>
            <ShoppingBag />
          </li>
        </ul>
      </nav>
    </>
  );
};
