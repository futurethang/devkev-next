// pages/dev.js

import Head from 'next/head';
import Header from '../components/header';
import styles from '@/styles/Home.module.css'


function Design() {
  return (
    <>
      <Head>
        <title>Design</title>
      </Head>
      <main className={styles.main}>

      <Header />
      <div>
        <h1>Design</h1>
        <p>Get in touch with us using the form below:</p>
        {/* Add your contact form here */}
      </div>
      </main>
    </>
  );
}

export default Design;
