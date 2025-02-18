import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, I'm Wonki Hwang</h1>
        <p className={styles.description}>
          I'm a full-stack | frontend | backend developer with 4 years of experience. Reach me out if you'd like to learn more!
        </p>
        <div>
          <a href="/#contact" className={`${styles.heroBtn} ${styles.contactBtn}`}>Contact Me</a>
          <a href={getImageUrl("files/wonki_hwang_resume.pdf")} download target="_blank" className={`${styles.heroBtn} ${styles.downloadBtn}`}>Download Resume</a>
        </div>
      </div>
      <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
