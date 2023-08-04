import Head from 'next/head';
import Link from 'next/link';
import Footer from "@/components/Footer";
import BlogList from "@/components/blogList";
import styles from '@/styles/Home.module.css'
import { getArtworks } from '@/cms-utils/sanity-art-posts';

export default async function Blog() {

    const data = await getArtworks()
    console.log("ART", data.posts)

    return (
        <>
            <Head>
                <title>Arts</title>
            </Head>
            <main className={styles.main} >
                <h1>Arts</h1>
                <nav>
                    <Link href={'/'}>👈 Back</Link>
                </nav>
                <h2>🚧 Under Construction 🚧</h2>
                <BlogList posts={data} />
            </main>
            <Footer />
        </>
    )
}
