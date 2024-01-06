"use client";

import { useState } from "react";
import styles from "./header.module.css";
import { ShoppingBag } from "../bag/bag";

export const HeaderNav = () => {
  const [open, setOpen] = useState(false);

  const navs = [
    { link: "#home", name: "Ínicio" },
    { link: "#motives", name: "Nós" },
    { link: "#plans", name: "Planos" },
    { link: "#reviews", name: "Avaliações" },
    { link: "#contact", name: "Contato" },
  ];

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
          {navs.map((item) => (
            <li key={item.name} onClick={() => setOpen(false)}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}

          <li className={styles.bag}>
            <ShoppingBag />
          </li>
        </ul>
      </nav>
    </>
  );
};
