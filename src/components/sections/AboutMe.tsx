import React from "react";
import styles from "@/styles/components/AboutMe.module.css";

const AboutMeSection: React.FC = () => {
  return (
    <div className={styles.aboutMe}>
      <h2>whoami</h2>
      <img src="/profilepic.jpg" alt="very cool and epic profile picture" />
      <p>Hi! I am Yukiko and welcome to my little corner on the web</p>
      <p>I have many interests, which include:</p>
      <ul>
        <li>programming and hacking</li>
        <li>videogames</li>
        <li>music</li>
        <li>alternative fashion</li>
        <li>internet and irl subcultures</li>
      </ul>
    </div >
  );
};

export default AboutMeSection;
