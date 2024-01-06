"use client";

import { useEffect, useState } from "react";
import styles from "./bag.module.css";
import { useShoppingBag } from "./context/bag-context";
import { Button } from "../button/button";
import IconTrash from "./icon-trash";
import { BagIcon } from "./bag-icon";

export const ShoppingBag = () => {
  const { plan, toggleShowPlanDetails, removePlan } = useShoppingBag();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (plan && !open) {
      setOpen(true);
    }
  }, [plan]);

  return (
    <span className={styles.bag} onClick={() => setOpen(!open)}>
      <BagIcon />

      <span className={styles.count}>{plan ? 1 : 0}</span>

      {open && (
        <div className={`${styles.popover} ${open && styles.popoverPlan}`}>
          {!plan && (
            <span className={styles.noPlan}>
              <p>Nenhum plano adicionado!</p>
            </span>
          )}

          {plan && (
            <div className={styles.planContent}>
              <p>
                <span className={styles.badge}>Plano adicionado</span>:{" "}
                <h3>{plan.name}</h3>
              </p>
              <p>
                <span className={styles.badge}>Preço:</span>
                <h3>{plan.price}</h3>
              </p>

              <div className={styles.action}>
                <Button onClick={toggleShowPlanDetails}>
                  Detalhes do plano
                </Button>
                <div onClick={removePlan}>
                  <IconTrash />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      {open && (
        <div className={styles.backdrop} onClick={() => setOpen(false)} />
      )}
    </span>
  );
};
