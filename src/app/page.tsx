import React from "react";
import Head from "next/head";
import styles from "../../public/styles/home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Style By Marika - Hem</title>
        <meta
          name="description"
          content="Välkommen till Style By Marika. Din destination för naglar och fransar i Uddevalla."
        />
        <link rel="stylesheet" href={"./globals.css"} />
      </Head>
      <main id="home">
        <Link href="/" passHref>
          <h1 className={styles.homeTitle}>Style By Marika</h1>{" "}
        </Link>
        <h2 className={styles.homeText}>Välkomnande text här</h2>
      </main>
    </>
  );
}
