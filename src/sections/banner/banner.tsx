import { Button } from "@/components/button/button";
import styles from "./banner.module.css";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <h1>Soluções personalizadas</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, dolorem.
          Architecto aut, doloremque quod corporis nostrum libero esse pariatur
          harum quis nobis eius dignissimos sequi illum aspernatur, atque
          cupiditate sit.
        </p>
        <Button>Confira já</Button>
      </div>
    </div>
  );
}
