import Head from 'next/head';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Hero from '../components/Hero/Hero';
import Portfolio from '../components/Portfolio/Portfolio';
import Skills from '../components/Skills/Skills';
import Studies from '../components/Studies/Studies';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>simbolmina.dev</title>
        <meta
          name="description"
          content="This is my portfolio created using NextJS. Bilal ARKAN, a ReactJS, NodeJS, MongoDB, MERN Developer"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>
        <Hero />
        <About />
        <Skills />
        <Studies />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}
