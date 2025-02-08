"use client";
import AboutMeSection from "@/components/sections/AboutMe";
import "@/styles/globals.css";
import { useEffect, useState } from "react";

export default function Home() {
  const pageTitle = "\\.:THE Yukiko-Webspace.:/";
  const [matrixText, setMatrixText] = useState(pageTitle);

  useEffect(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let targetText = pageTitle;
    let iteration = 0;

    const interval = setInterval(() => {
      setMatrixText((prev) =>
        prev
          .split("")
          .map((char, index) =>
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
    <>
      <h1>{matrixText}</h1>
      <AboutMeSection></AboutMeSection>
    </>
  );
}
