import React from "react";
import styles from "@/styles/components/NavigationBar.module.css"

const NavigationBar: React.FC = () => {
  return (
    <div>
      <ul className={styles.linksList}>
        <li><a>link one</a></li>
        <li><a>link one</a></li>
        <li><a>link one</a></li>
      </ul>
    </div>
  )
}

export default NavigationBar;
