import styles from "./reason.module.css";

export const Reason = () => {
  return (
    <section className={styles.reason}>
      <div className="container">
        {options.map((item, current) => (
          <div key={current}>
            <img src={`./${item.icon}.svg`} />
            <div>
              <h4>Crescimento</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto iure explicabo officia aut reiciendis.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const options = [
  {
    icon: "shop",
    title: "Crescimento",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: "shop",
    title: "Crescimento",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    icon: "shop",
    title: "Crescimento",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: "shop",
    title: "Crescimento",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elits.",
  },
];
