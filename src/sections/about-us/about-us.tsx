import Image from "next/image";
import idea from "./idea.png";
import styles from "./about-us.module.css";

export const About = () => (
  <section className={styles.about}>
    <div className="container">
      <div>
        <h2>Nossas soluções podem fazer o seu negócio alavancar</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
          error, minus, reprehenderit nesciunt dolorum pariatur accusamus ea
          dolor enim totam ad distinctio quaerat cupiditate ipsa doloribus
          exercitationem debitis beatae harum!
        </p>
      </div>
      <div>
        <Image src={idea} alt="solutions" priority />
      </div>
    </div>
  </section>
);
