// pages/dev.js

import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
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
        <h2>Design</h2>
        <p>Get in touch with us using the form below:</p>
        {/* Add your contact form here */}
      </div>
      </main>
      <Footer />
    </>
  );
}

export default Design;
