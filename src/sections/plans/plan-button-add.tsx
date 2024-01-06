"use client";

import { useShoppingBag } from "@/components/bag/context/bag-context";
import { Button } from "@/components/button/button";

export const PlanAdd = ({ plan }: { plan: any }) => {
  const { addPlan } = useShoppingBag();

  return (
    <Button onClick={() => addPlan(plan)}>
      <h3>Adicionar já</h3>
    </Button>
  );
};
