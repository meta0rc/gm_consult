import { Avatar } from "@/components/avatar/avatar";
import { Stars } from "@/components/stars/stars";

export const Reviews = () => {
  return (
    <section>
      <div className="container">
        {reviews.map((review, current) => (
          <div key={review.name}>
            <Avatar image={`./review${current + 1}.jpg`} />

            <div>
              <Stars rate={review.rate} />
              <p>{review.name}</p>
              <caption>5 meses atrás</caption>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const reviews = [
  {
    name: "Marcos Perez",
    rate: 4.5,
    comment:
      "Eu precisava muito de um profissioal de SEO para minha empresa e a solução com GM Consult foi impressionante. Agradeço a todos pelo trabalho e colaboração",
  },
  {
    name: "Thamires Oliveira",
    rate: 5,
    comment:
      "Normalmente os profissionais de SEO custam muito caro, eu consegui fazer tudo que precisava para minha empresa com um custo beneficio assecivel contratando a gm.",
  },
  {
    name: "Juliano Kawasaki",
    rate: 4.5,
    comment:
      "Eu precisava muito de um profissioal de SEO para minha empresa e a solução com GM Consult foi impressionante. Agradeço a todos pelo trabalho e colaboração",
  },
];
