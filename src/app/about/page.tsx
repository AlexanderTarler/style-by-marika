import React from "react";
import Head from "next/head";
import styles from "../../../public/styles/about.module.css";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Head>
        <title>Style By Marika - Om Oss</title>
        <meta
          name="description"
          content="Välkommen till Style By Marika. Din destination för naglar och fransar i Uddevalla."
        />
      </Head>
      <main id="about">
        <Link href="/" passHref>
          <h1 className={styles.aboutTitle}>Style By Marika</h1>{" "}
        </Link>
        <h2 className={styles.aboutText}>Info om företaget här</h2>
      </main>
    </>
  );
}
