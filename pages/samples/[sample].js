import React from 'react'
import { useState } from 'react';
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
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
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
        <nav>
          <Link href={'/samples'}>👈 Back</Link>
        </nav>
        <div className={sampleStyles.preview}>
          <h2>{sampleItem.title}</h2>
          {/* <div className={sampleStyles.imgwrap}> */}
          {/* <img src={sampleItem.thumbnail.src} alt={sampleItem.title} loading='lazy' /> */}
          {/* </div> */}
          <ReactMarkdown>{sampleItem.bodyCopy}</ReactMarkdown>
          <div className={sampleStyles.images}>
            {sampleItem.images.map((image, index) => {
              console.log(image.src.src)
              return (
                // <div key={index} className={sampleStyles.imgwrap}>
                <img src={image.src.src} alt={image.alt} key={`image-${index}`} loading='lazy' onClick={() => {
                  setSelectedImage(image);
                  setShowModal(true);
                }} />
                // </div>
              )
            })}

          </div>
        </div>
      </main>
      {showModal &&
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
            zIndex: 1000
          }}
          onClick={() => setShowModal(false)}
        >
          <img src={selectedImage.src.src} alt="Selected" style={{ maxWidth: '90%', maxHeight: '90%' }} />
          <caption>{selectedImage.alt}</caption>
        </div>
      }
      <Footer />
    </>
  )
}
