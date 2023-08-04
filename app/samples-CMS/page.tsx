import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import ClientSideRoute from '@/components/clientSideRoute';
import urlFor from '@/cms-utils/urlFor';
import Footer from '../../components/Footer';
import styles from '@/styles/Home.module.css'
import style from '@/styles/Samples.module.css'
import { getSamplePosts } from '@/cms-utils/sanity-sample-posts';

async function Samples() {

    const posts = await getSamplePosts()
    console.log("Samples", posts)

    return (
        <>
            <Head>
                <title>Work Samples</title>
            </Head>
            <main className={styles.main}>
                <h1 style={{ fontSize: '4rem', margin: '1rem 0' }}>Work Samples</h1>
                <nav>
                    <Link href={'/'}>👈 Back</Link>
                </nav>
                <div>
                    <section className={style.sampleSection} >
                        <div className='grid grid-cols-1 md:grid-cols-1 gap-10 gap-y-16 p-8 bg-slate-800 rounded-lg'>
                            {posts.map((post: any) => (
                                <ClientSideRoute key={post._id} route={`/samples-CMS/${post.slug.current}`}>
                                    <div className='flex flex-col group cursor-pointer' >
                                        <h3>{post?.title && post.title}</h3>
                                        <p>{post.description}</p>
                                        {post.mainImage && (
                                            <div className='relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out'>
                                                <Image
                                                    className='object-cover object-center lg:object-center rounded-md'
                                                    src={urlFor(post.mainImage).url()}
                                                    alt={post.mainImage.alt || "portfolio item preview"}
                                                    fill
                                                />
                                            </div>
                                        )}
                                    </div>
                                </ClientSideRoute>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Samples;