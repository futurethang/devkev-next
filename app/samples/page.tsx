import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import ClientSideRoute from '@/components/ClientSideRoute';
import Nav from '@/components/Nav';
import urlFor from '@/cms-utils/urlFor';
import Footer from '../../components/Footer';
import style from '@/styles/Samples.module.css'
import { getSamplePosts } from '@/cms-utils/sanity-sample-posts';
import { h1Style, h3Style, mainWidthStyles } from '@/styles/tailwindStyles';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Work Samples',
    description: 'Work Samples for Kevin Hyde',
}

async function Samples() {

    const posts = await getSamplePosts()

    return (
        <>
            <div className="flex-1">
                <div className={`my-2 mx-auto p-2 ${mainWidthStyles} bg-slate-900 rounded-xl`}>
                    <Nav includeTitle />
                </div>
                <main className={mainWidthStyles}>
                    <h1 className={h1Style}>Work Samples</h1>
                    <div>
                        <section className={style.sampleSection} >
                            <div className='grid grid-cols-1 gap-10 gap-y-16 '>
                                {posts.map((post: any) => (
                                    <ClientSideRoute key={post._id} route={`/samples/${post.slug.current}`}>
                                        <div className='flex flex-col group cursor-pointer' >
                                            <h3 className={h3Style}>{post?.title && post.title}</h3>
                                            <p>{post.description}</p>
                                            {post.mainImage && (
                                                <div className='p-2 md:p-6 bg-slate-800 rounded-lg relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out'>
                                                    <Image
                                                        className='object-contain object-center rounded-md'
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
            </div>
            <Footer />
        </>
    );
}

export default Samples;