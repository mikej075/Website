import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/computer.png")}
          alt="My Cover Image"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I have on job experience building professional webpages all fully responsive, while working with basic HTML/CSS, JAVASCRIPT, React, Jquery, Shopify, and Wordpress for both new and established companies.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Server Maintenance</h3>
              <p>
                I have on job experience maintaining application servers, running installs and updates by running Scripts, configuring autoschedulers, setting up SFTP to send data to offsite servers.
              </p>
            </div>
          </li>
             <li className={styles.aboutItem}>
            <img src={getImageUrl("about/DBIcon.png")} alt="DB icon" />
            <div className={styles.aboutItemText}>
              <h3>Database Engineer</h3>
              <p>
                I have experience creating SQL Queries and Powerqueries to pull data from the Oracle database.
                  I also have experience using MYSQL and setting up cloud databases from personal projects.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
