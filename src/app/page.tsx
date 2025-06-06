"use client";

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  console.log("Rendering Home Page");

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to My Next.js App</h1>
        <p className={styles.description}>
          This is a simple example of a Next.js application.
        </p>
      </main>
    </div>
  );
}
