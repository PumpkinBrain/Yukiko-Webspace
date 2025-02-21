"use client";
import AboutMeSection from "@/components/sections/AboutMe";
import BlogsSection from "@/components/sections/Blogs";
import UpdatesAndTodos from "@/components/sections/UpdatesAndTodos";
import "@/styles/globals.css";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import NavigationBar from "@/components/sections/NavigationBar";

export default function Home() {
  const pageTitle = "\\.:THE Yukiko-Webspace.:/";
  const [matrixText, setMatrixText] = useState(pageTitle);

  useEffect(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    const targetText = pageTitle;
    let iteration = 0;

    const interval = setInterval(() => {
      setMatrixText((prev) =>
        prev
          .split("")
          .map((_char, index) =>
            index < iteration
              ? targetText[index]
              : chars[Math.floor(Math.random() * chars.length)]
          )
          .join("")
      );

      if (iteration >= targetText.length) clearInterval(interval);
      iteration++;
    }, 150); // Speed of the effect

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.main}>
      <h1>{matrixText}</h1>
      <div className={styles.sections}>
        <AboutMeSection />
        <div className={styles.middleSection}>
          <NavigationBar />
          <BlogsSection />
        </div>
        <UpdatesAndTodos />
      </div>
    </div >
  );
}
