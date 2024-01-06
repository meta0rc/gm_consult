"use client";

import { createContext, useContext, useState } from "react";

interface IBagContext {
  plan: Plan;
  addPlan: (newPlan: Plan) => void;
  removePlan: VoidFunction;
}

export const BagContext = createContext<IBagContext>(null!);

type Plan = any;

export const BagShoppingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [plan, setPlan] = useState<Plan>(null);

  const addPlan = (newPlan: any) => {
    setPlan(newPlan);
  };

  const removePlan = () => {
    setPlan(null);
  };

  return (
    <BagContext.Provider
      value={{
        plan,
        addPlan,
        removePlan,
      }}
    >
      {children}
    </BagContext.Provider>
  );
};

export const useShoppingBag = () => useContext(BagContext);
