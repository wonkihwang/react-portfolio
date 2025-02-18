import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              * {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        {demo.length > 0 ? (
          <a
            href={demo}
            className={`${styles.link} ${styles.activelink}`}
            target="_blank"
          >
            Demo Link
          </a>
        ) : (
          <a className={`${styles.link} ${styles.emptylink}`}>Demo Link</a>
        )}
        {source.length > 0 ? (
          <a
            href={source}
            className={`${styles.link} ${styles.activelink}`}
            target="_blank"
          >
            Source
          </a>
        ) : (
          <a className={`${styles.link} ${styles.emptylink}`}>Source</a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
