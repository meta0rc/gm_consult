import Image from "next/image";
import idea from "./idea.png";
import styles from "./about-us.module.css";

export const About = () => (
  <section className={styles.about}>
    <div className={styles.container}>
      <div>
        <h2>Conferiu nossas soluções?</h2>
        {/* <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
          molestiae cupiditate inventore natus vitae similique temporibus,
          voluptate perspiciatis est quae id aliquid nemo vel quasi deleniti
          minus labore sapiente eos?
        </p> */}
      </div>
      <div>
        <Image src={idea} alt="solutions" priority />
      </div>
    </div>
  </section>
);
