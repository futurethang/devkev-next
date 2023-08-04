import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../../components/footer';
import SamplePreview from '../../components/samplePreview';
import styles from '@/styles/Home.module.css'
import style from '@/styles/Samples.module.css'
import { samples } from '../../constants/samples'

function Samples() {

    return (
        <>
            <Head>
                <title>Work Samples</title>
            </Head>
            <main className={styles.main}>
                {/* <Header /> */}
                <h1 style={{ fontSize: '4rem', margin: '1rem 0' }}>Work Samples</h1>
                <nav>
                    <Link href={'/'}>👈 Back</Link>
                </nav>
                <div>
                    <section className={style.sampleSection} >
                        {samples.map((sample, i) => {
                            return (
                                <SamplePreview sample={sample} key={`sample-${i}`} />
                            )
                        })}
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Samples;