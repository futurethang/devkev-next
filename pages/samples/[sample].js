import React, { useEffect, useState, useRef } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import Head from 'next/head'
import { useRouter } from 'next/router';
import { samples } from '../../constants/samples';
import Link from 'next/link';
import Footer from '../../components/footer'
import styles from '@/styles/Home.module.css'
import sampleStyles from '@/styles/Samples.module.css'

export default function Sample() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const sample = router.query.sample;
  const modalRef = useRef();  // New ref for the modal

  // Find the right sample from the samples array
  const sampleItem = samples.find(s => s.link === sample);

  if (!sampleItem) {
    return <div>Loading...</div>
  }

  const nextImage = () => {
    setSelectedIndex((selectedIndex + 1) % sampleItem.images.length);
  };

  const prevImage = () => {
    setSelectedIndex((selectedIndex - 1 + sampleItem.images.length) % sampleItem.images.length);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape' && showModal) setShowModal(false);
  };
  
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex]);

  const handleOverlayClick = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };

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
          <ReactMarkdown>{sampleItem.bodyCopy}</ReactMarkdown>
          <div className={sampleStyles.images}>
            {sampleItem.images.map((image, index) => {
              return (
                <img src={image.src.src} alt={image.alt} key={`image-${index}`} loading='lazy' onClick={() => {
                  setSelectedIndex(index);
                  setShowModal(true);
                }} />
              )
            })}
          </div>
        </div>
      </main>
      {showModal &&
        <div
          ref={modalRef}
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
          onClick={handleOverlayClick}
        >
          <button onClick={prevImage} style={{ position: 'absolute', left: '5%' }}>⬅️</button>
          <img src={sampleItem.images[selectedIndex].src.src} alt="Selected" style={{ maxWidth: '90%', maxHeight: '90%' }} />
          <caption>{sampleItem.images[selectedIndex].alt}</caption>
          <button onClick={nextImage} style={{ position: 'absolute', right: '5%' }}>➡️</button>
          <button onClick={() => setShowModal(false)} style={{ position: 'absolute', right: '5%', top: '5%' }}>❌</button>  {/* Add close button here */}
        </div>
      }
      <Footer />
    </>
  )
} 
