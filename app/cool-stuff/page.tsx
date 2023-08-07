import Head from 'next/head';
import Link from 'next/link';
import Footer from "@/components/Footer";
import styles from '@/styles/Home.module.css'
import { getSanityClient } from "@/cms-utils/sanity-util";
import { h1Style, h3Style, linkStyles, backLinkStyle } from '@/styles/tailwindStyles';

interface Post {
  _createdAt: string,
  _id: string,
  _rev: string,
  _type: string,
  _updatedAt: string,
  title: string,
}

export default async function Blog() {

  const posts: Post[] = await getSanityClient()

  return (
    <>
      <Head>
        <title>Cool Stuff</title>
      </Head>
      <main className={styles.main} >
        <h1 className={h1Style}>Cool Stuff</h1>

        <p>I've got more creativity in me than I can use up at work, so here's some of the spill-over.</p>
        <h3 className={h3Style}>Making Music with these Bands:</h3>
        <ul>
          <li>
            <a className={linkStyles} href="https://www.shadowpattern.com" target="_blank">Shadow Pattern</a>
          </li>
          <li>
            <a className={linkStyles} href="http://theholyalimonies.band/" target="_blank">The Holy Alimonies</a>
          </li>
        </ul>
        <h3 className={h3Style}>Making Artwork For the Fun of It:</h3>
        <p>Just a super browsable gallery of artworks</p>
        <nav className='mt-6'>
          <Link className={backLinkStyle} href={'/'}>👈 Back</Link>
        </nav>
      </main>
      <Footer />
    </>
  )
}
