import { Avatar } from "@/components/avatar/avatar";
import { Stars } from "@/components/stars/stars";
import styles from "./reviews.module.css";

export const Reviews = () => {
  return (
    <section className={styles.reviews} id="reviews">
      <h2 className="section-title">
        Algumas das principaias avaliações de quem contratou os nossos serviços
      </h2>
      <div className={styles.reviewContainaer}>
        {reviews.map((review, current) => (
          <div key={review.name} className={styles.reviewItem}>
            <Avatar image={`./review${current + 1}.jpg`} />

            <div className={styles.reviewContent}>
              <div className={styles.topReview}>
                <Stars rate={review.rate} />
                <p className={styles.reviewName}>{review.name}</p>
                <caption>{review.ago}</caption>
              </div>
              <p>{review.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const reviews = [
  {
    ago: "5 meses atrás",
    name: "Marcos Perez",
    rate: 4.5,
    comment:
      "Eu precisava muito de um profissioal de SEO para minha empresa e a solução com GM Consult foi impressionante. Agradeço a todos pelo trabalho e colaboração",
  },
  {
    ago: "6 meses atrás",
    name: "Thamires Oliveira",
    rate: 5,
    comment:
      "Normalmente os profissionais de SEO custam muito caro, eu consegui fazer tudo que precisava para minha empresa com um custo beneficio assecivel contratando a gm.",
  },
  {
    ago: "3 meses atrás",
    name: "Juliano Kawasaki",
    rate: 4.5,
    comment:
      "Eu precisava muito de um profissioal de SEO para minha empresa e a solução com GM Consult foi impressionante. Agradeço a todos pelo trabalho e colaboração",
  },
];
