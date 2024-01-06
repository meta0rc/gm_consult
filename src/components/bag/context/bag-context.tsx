"use client";

import { createContext, useContext, useState } from "react";

interface IBagContext {
  plan: Plan;
  addPlan: (newPlan: Plan) => void;
  toggleShowPlanDetails: VoidFunction;
  removePlan: VoidFunction;
  details: boolean;
}

export const BagContext = createContext<IBagContext>(null!);

type Plan = any;

export const BagShoppingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [plan, setPlan] = useState<Plan>(null);
  const [details, setDetails] = useState(false);

  const addPlan = (newPlan: any) => {
    window.scrollTo(0, 0);
    setPlan(newPlan);
  };

  const removePlan = () => {
    setPlan(null);
  };

  const toggleShowPlanDetails = () => {
    setDetails(!details);
  };

  return (
    <BagContext.Provider
      value={{
        plan,
        details,
        toggleShowPlanDetails,
        addPlan,
        removePlan,
      }}
    >
      {children}
    </BagContext.Provider>
  );
};

export const useShoppingBag = () => useContext(BagContext);
