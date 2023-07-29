import { useState, useEffect } from "react";
import Head from 'next/head';
import Link from 'next/link';
import Footer from "@/components/footer";
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
                <title>Blog</title>
            </Head>
            <main className={styles.main} >
                <h1>Blog</h1>
                <nav>
                    <Link href={'/'}>👈 Back</Link>
                </nav>
                <h2>🚧 Under Construction 🚧</h2>
                <h2>posts</h2>
                {posts.length > 0 && (
                    <ul>
                        {posts.map((post) => (
                            <li key={post._id}>{post?.title}</li>
                        ))}
                    </ul>
                )}
                {posts.length == 0 && <p>No posts to show</p>}
                {posts.length > 0 && (
                    <div>
                        <pre>{JSON.stringify(posts, null, 2)}</pre>
                    </div>
                )}
                {posts.length == 0 && (
                    <div>
                        <div>¯\_(ツ)_/¯</div>
                        <p>
                            Your data will show up here when you've configured everything
                            correctly
                        </p>
                    </div>
                )}
            </main>
            <Footer />
        </>
    )
}
