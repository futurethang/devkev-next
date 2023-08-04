import Head from 'next/head';
import Link from 'next/link';
import Footer from "@/components/footer";
import BlogList from "@/components/blogList";
import styles from '@/styles/Home.module.css'
import { getSanityClient } from "@/cms-utils/sanity-util";

interface Post {
    _createdAt: string,
    _id: string,
    _rev: string,
    _type: string,
    _updatedAt: string,
    title: string,
    body: any,
    mainImage: any,
    slug: any,
    categories: any,
}

export default async function Blog() {

    const data = await getSanityClient()
    console.log(data.posts)

    return (
        <>
            <Head>
                <title>Blog</title>
            </Head>
            <main className={styles.main} >
                <h1>Blog</h1>
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
