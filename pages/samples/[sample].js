import React from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import Head from 'next/head'
import { useRouter } from 'next/router';
import { samples } from '../../constants/samples';
import Link from 'next/link';
import Header from '../../components/header'
import Footer from '../../components/footer'
import styles from '@/styles/Home.module.css'
import sampleStyles from '@/styles/Samples.module.css'

export default function Sample() {
    const router = useRouter();
    const sample = router.query.sample;

    // Find the right sample from the samples array
    const sampleItem = samples.find(s => s.link === sample);

    if (!sampleItem) {
        return <div>laoding...</div>
    }

    console.log(sampleItem.thumbnail.src)

    return (
        <>
            <Head>
                <title>{sampleItem.title}</title>
            </Head>
            <main className={styles.main}>
                <Header />
                <nav>
                    <Link href={'/samples'}>👈 Back</Link>
                </nav>
                <div className={sampleStyles.preview}>
                    <h2>{sampleItem.title}</h2>
                    {/* <div className={sampleStyles.imgwrap}> */}
                    <img src={sampleItem.thumbnail.src} alt={sampleItem.title} loading='lazy' />
                    {/* </div> */}
                    <ReactMarkdown>{sampleItem.bodyCopy}</ReactMarkdown>
                    <div className={sampleStyles.images}>
                        {sampleItem.images.map((image, index) => {
                          console.log(image.src.src)
                            return (
                                // <div key={index} className={sampleStyles.imgwrap}>
                                    <img src={image.src.src} alt={image.alt} loading='lazy' />
                                // </div>
                            )
                        })}

                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
