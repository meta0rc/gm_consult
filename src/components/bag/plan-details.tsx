"use client";

import { useShoppingBag } from "./context/bag-context";
import styles from "./bag-plan-details.module.css";
import { Stars } from "../stars/stars";
import { PlanBennefitList } from "@/sections/plans/plans";
import { Button } from "../button/button";
import { BagIcon } from "./bag-icon";

export const PlanDetails = () => {
  const { plan, details, toggleShowPlanDetails } = useShoppingBag();

  if (!details || !plan) return null;

  return (
    <div className={styles.planDetails}>
      <div className={styles.planContent}>
        <h2>{plan.name}</h2>
        <Stars rate={5} />
        <p>
          {plan.description ??
            `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo impedit
        repudiandae deserunt, culpa iure amet molestias dignissimos dolor
        blanditiis sit! Numquam, repellendus odio nam ipsum architecto nemo
        nesciunt tempore labore?`}
        </p>

        <PlanBennefitList bennefits={plan.bennefits} />

        <div className={styles.action}>
          <Button onClick={toggleShowPlanDetails}>Voltar</Button>
          <Button style={{ background: "#000", color: "#fff" }}>
            <BagIcon fill="#fff" />
            <strong style={{ fontWeight: "bold", marginLeft: "10px" }}>
              Pagar
            </strong>
          </Button>
        </div>
      </div>
    </div>
  );
};
