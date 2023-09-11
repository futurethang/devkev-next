import Head from 'next/head';
import Link from 'next/link';
import ClientSideRoute from '@/components/ClientSideRoute';
import Footer from "@/components/Footer";
import Image from 'next/image';
import { getBlogPosts } from '@/cms-utils/sanity-blog-posts';
import { h1Style, h3Style, mainWidthStyles, backLinkStyle } from '@/styles/tailwindStyles';
import Nav from '@/components/Nav';
import { Metadata } from 'next';
import urlFor from '@/cms-utils/urlFor';

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Blog page for Kevin Hyde',
}

export default async function Blog() {

    const posts = await getBlogPosts()

    return (
        <>
            <div className="flex-1">

                <div className={`my-2 mx-auto p-2 ${mainWidthStyles} bg-slate-900 rounded-xl`}>
                    <Nav includeTitle />
                </div>
                <main className={mainWidthStyles} >
                    <h1 className={h1Style}>Writing List</h1>
                    <p>I sometimes write about code, design, and other things.</p>
                    {posts.length > 0 && (
                        <div className='grid grid-cols-1 gap-4 pb-24'>
                            {posts.map((post: any) => {
                                const { mainImage } = post
                                console.log(post)

                                return (
                                    <Link href={`/blog/${post.slug.current}`} key={post._id} className="flex flex-start gap-8 items-start bg-slate-700 p-4 shadow-md rounded-sm">
                                        <div>
                                            {mainImage && (
                                                <div className='p-2 md:p-6 bg-slate-800 rounded-lg relative w-40 h-40 drop-shadow-xl'>
                                                    <Image
                                                        className='object-contain object-center rounded-md'
                                                        src={urlFor(mainImage).url()}
                                                        alt={mainImage.alt || "blog main image"}
                                                        fill
                                                    />
                                                </div>
                                            )}

                                        </div>
                                        <div>
                                            <h3 className={`${h3Style} mt-0 mb-2`}>{post.title}</h3>
                                            <p className="mb-2">{post.description}</p>
                                            {/* <div>
                                                {tags.map((tag, index) => {
                                                    return <span key={index} className="p-1 px-2 bg-slate-400 text-slate-900 text-xs rounded-md">{tag}</span>
                                                })}
                                            </div> */}
                                        </div>
                                    </Link>
                                    // <ClientSideRoute key={post._id} route={`/blog/${post.slug.current}`}>
                                    //     <div className='flex flex-col group cursor-pointer hover:scale-105 transition-all' >
                                    //         <h3 className={h3Style}>{post?.title && post.title}</h3>
                                    //         <span>{formattedDate} 👉</span>
                                    //     </div>
                                    // </ClientSideRoute>
                                )
                            })}
                        </div>
                    )}
                    {posts.length == 0 && <p>No posts to show</p>}
                </main>
            </div>
            <Footer />
        </>
    )
}
