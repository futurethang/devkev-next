import Head from 'next/head';
import Header from '../../components/header';
import Footer from '../../components/footer';
import SamplePreview from '../../components/samplePreview';
import styles from '@/styles/Home.module.css'
import style from '@/styles/Samples.module.css'
import { samples } from '../../constants/samples'
import { useState, useLayoutEffect } from 'react';

function Samples2() {

    const renderSample = (sample, i) => {
        return (
            <SamplePreview sample={sample} key={`sample-${i}`} />
        )
    }

    return (
        <>
            <Head>
                <title>Work Samples</title>
            </Head>
            <main className={styles.main}>
                <Header />
                <div>
                    <h2>Work Samples</h2>
                    <p>Dig into some samples and case studies of my efforts as a product polymath.</p>
                    <section className={style.sampleSection} >
                        {samples.map((sample, i) => {
                            return (
                                renderSample(sample, i)
                            )
                        })}
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Samples2;