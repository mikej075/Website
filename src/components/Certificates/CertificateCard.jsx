import React from "react";
import styles from "./CertificateCard.module.css";

import { getImageUrl } from "../../utils";

export const CertificateCard = ({
  certificate: { title, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
     
      <h3 className={styles.title}>{title}</h3>
      <img
        src={getImageUrl(demo)}

      />
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={source} target="_blank" className={styles.link}>
          Click Here
        </a>
      </div>
    </div>
  );
};
