import React from "react";

import styles from "./Contact.module.css";
import Typewriter from "typewriter-effect";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact Me</h2>
        <ul>
          <li>
        <img
            src={getImageUrl("contact/contactus.png")}
            alt="Contactus icon"
          />
          </li>
          <li>
        <img
            src={getImageUrl("contact/phone.png")}
            alt="Phone icon"
          />
          </li>
          <li>
        <img
            src={getImageUrl("contact/world.png")}
            alt="world icon"
          />
          </li>
          <li>
        <img
            src={getImageUrl("contact/communicate.png")}
            alt="Communication icon"
          />
          </li>
        </ul>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:MichaelJamesJr91@gmail.com" target="_blank" >Email</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/michaeljamesjr91" target="_blank" >Linkedin</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/myname" target="_blank" >Github</a>
        </li>
      </ul>
    </footer>
  );
};
