import Head from 'next/head';
import Link from 'next/link';
import Footer from "@/components/Footer";
import styles from '@/styles/Home.module.css'
import { getSanityClient } from "@/cms-utils/sanity-util";

interface Post {
  _createdAt: string,
  _id: string,
  _rev: string,
  _type: string,
  _updatedAt: string,
  title: string,
}

interface Props {
  posts: Post[];
}

export default async function Blog() {

  const posts: Post[] = await getSanityClient()

  return (
    <>
      <Head>
        <title>Cool Stuff</title>
      </Head>
      <main className={styles.main} >
        <h1>Cool Stuff</h1>
        <nav>
          <Link href={'/'}>👈 Back</Link>
        </nav>
        <h2>🚧 Under Construction 🚧</h2>
        <p>I've got more creativity in me than I can use up at work, so here's some of the spill-over.</p>
        <p>
          Look for links to the projects I've worked on, from music to art and gardening, and dabblin's galore.
        </p>
        <h3>Links</h3>
        <ul>
          <li>
            <a href="https://www.shadowpattern.com" target="_blank">Shadow Pattern</a>
          </li>
        </ul>
        <hr />
        <br />
        <h3>Creative Catalog</h3>
        <p>Just a super browsable gallery of artworks</p>
      </main>
      <Footer />
    </>
  )
}
