import React from 'react'
import Head from 'next/head'
import Nav from '../../components/nav'
import Header from '../../components/header'
import Footer from '../../components/footer'
import styles from '@/styles/Home.module.css'

export default function swivL2() {
    return (
        <>
            <Head>
                <title>Swivel L2 Switching UI</title>
            </Head>
            <main className={styles.main}>
                <Header />
                <Nav />
                <div>
                    <h2>Swivel L2 Switching UI</h2>
                    <p>Get in touch with us using the form below:</p>
                </div>
            </main>
            <Footer />
        </>
    )
}
