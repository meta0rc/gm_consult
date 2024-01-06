import { Button } from "@/components/button/button";
import styles from "./plans.module.css";
import { PlanAdd } from "./plan-button-add";
export const Plans = () => {
  return (
    <section className={`${styles.plans} main`} id="plans">
      <div className="container">
        <h2 className="section-title">
          Nossos planos disponiveis para o seu negócio
        </h2>
      </div>
      <div className={`container al-baseline ${styles.cardList}`}>
        {planList.map((plan, current) => (
          <div
            key={current}
            className={`${styles.card} ${current === 1 && styles.blackCard}`}
          >
            <div className={styles.cardContent}>
              <h5>{plan.name}</h5>

              <h2>
                {plan.price}/<span>mês</span>
              </h2>

              <PlanBennefitList
                bennefits={plan.bennefits}
                iconColor={current === 1 ? "#000" : "#fff"}
              />
            </div>

            <PlanAdd plan={plan} />
          </div>
        ))}
      </div>
    </section>
  );
};

export const PlanBennefitList = ({
  bennefits,
  iconColor = "#fff",
}: {
  bennefits: string[];
  iconColor?: string;
}) => (
  <ul className={styles.bennefits}>
    {bennefits.map((itemBennefit, current) => (
      <li key={itemBennefit + "-" + current}>
        <Icon fill={iconColor} />
        {itemBennefit}
      </li>
    ))}
  </ul>
);
const planList = [
  {
    icon: "shop",
    name: "Comum",
    price: "R$ 99,00",
    bennefits: [
      "Reuniões Mensais",
      "Revisão simples",
      "Validação de requisitos",
      "Validação de integridade",
    ],
  },
  {
    icon: "shop",
    name: "Plus",
    price: "R$ 150,00",
    bennefits: [
      "Reuniões Mensais",
      "Analise profunda",
      "Revisão simples",
      "Validação de requisitos",
      "Reuniões Mensais",
      "Revisão simples",
      "Validação de requisitos",
    ],
  },
  {
    icon: "shop",
    name: "Premium",
    price: "R$ 200,00",

    bennefits: [
      "Reuniões Mensais",
      "Revisão simples",
      "Validação de integridade",
      "Validação de requisitos",
      "Validação de integridade",
    ],
  },
];

const Icon = (props: React.SVGAttributes<SVGElement>) => (
  <div className={styles["circle-check"]}>
    <svg
      width={10}
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 406.834 406.834"
      xmlSpace="preserve"
      {...props}
    >
      <polygon points="385.621,62.507 146.225,301.901 21.213,176.891 0,198.104 146.225,344.327 406.834,83.72 " />
    </svg>
  </div>
);
