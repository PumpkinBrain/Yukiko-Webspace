import React from "react";
import styles from "@/styles/components/NavigationBar.module.css"

const NavigationBar: React.FC = () => {
  return (
    <div>
      <ul className={styles.linksList}>
        <a href="">Home</a>
        <a href="">Portifolio</a>
        <a href="">Save The Internet!</a>
        <a href="">Other sites for you</a>
      </ul>
    </div>
  )
}

export default NavigationBar;
