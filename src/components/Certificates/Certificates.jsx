import React from "react";

import styles from "./Certificates.module.css";

import certificates from "../../Data/certificates.json";
import { CertificateCard } from "./CertificateCard";

export const Certificates = () => {
  return (
    <section className={styles.container} id="certificates">
      <h2 className={styles.title}>Certificates</h2>
      <div className={styles.projects}>
        {certificates.map((certificate, id) => {
          return <CertificateCard key={id} certificate={certificate} />;
        })}
      </div>
    </section>
  );
};

