import React from 'react'
import {getImageUrl} from "../../utils";
import styles from "./Hero.module.css";
import Typewriter from "typewriter-effect";

export const Hero = () => {
    return ( <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Michael</h1>
            <div className={styles.titles}>
                <Typewriter
                options={{autoStart: true,
                loop: true,
            delay: 40,
        strings:["I'm a Web Developer.",
                "I'm a Software Engineer."],
    }}/> 
            </div>
            <p className={styles.description}>My future goal is to obtain a developer position where my problem-solving, adaptability, creativity, and experience can be utilized to 
contribute to company goals. I have extensive experience working in fast 
paced environments, with hard deadline dates.</p>
            <a href='https://drive.google.com/file/d/1zXjESOKV072lJu9N0fcEQN5x4B1QPt3Z/view?usp=drive_link'  target="_blank" className={styles.contactBtn} download >Resume</a>
        </div>
        <img src={getImageUrl("hero/profilepic2.png")} alt="Her" className={styles.heroimg} />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>

    );       
};