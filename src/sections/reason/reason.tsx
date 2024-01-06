import styles from "./reason.module.css";

export const Reason = () => {
  return (
    <section className={styles.reason}>
      <div>
        {options.map((item, current) => (
          <div key={current} className={styles.itemReason}>
            <img src={`./icons/${item.icon}.png`} />
            <div>
              <h4>{item.title}</h4>
              {/* <p>{item.text}</p> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const options = [
  {
    icon: "analise",
    title: "Análise de mercado",
    text: "Com as melhores tecnologias, proporcionamos uma análise profunda para os seus negócios.",
  },
  {
    icon: "conexao",
    title: "Networking",
    text: "Conectando você as melhores soluções possiveis.",
  },
  {
    icon: "comunicacao",
    title: "Relacionamentos",
    text: "Estabelicimento de relacionamentos confiáveis e comunicação interina com você",
  },
  {
    icon: "crescimento",
    title: "Crescimento",
    text: "Promover crescimento e fazer você alcançar os seus objetivos",
  },
];
