import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router';
import { samples } from '../../constants/samples';
import Nav from '../../components/nav'
import Header from '../../components/header'
import Footer from '../../components/footer'
import styles from '@/styles/Home.module.css'

export default function Sample() {
    const router = useRouter();
    const sample = router.query.sample;

    // Find the right sample from the samples array
    const sampleItem = samples.find(s => s.link === sample);

    if (!sampleItem) {
        return <div>laoding...</div>
    }

    return (
        <>
            <Head>
                <title>{sampleItem.title}</title>
            </Head>
            <main className={styles.main}>
                <Header />
                <Nav />
                <div>
                    <h2>{sample}</h2>

                    <h2>{sampleItem.title}</h2>
                    <p>{sampleItem.copy}</p>
                </div>
            </main>
            <Footer />
        </>
    )
}
