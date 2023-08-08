import Head from 'next/head';
import Link from 'next/link';
import ClientSideRoute from '@/components/ClientSideRoute';
import Footer from "@/components/Footer";
import { getBlogPosts } from '@/cms-utils/sanity-blog-posts';
import { h1Style, h3Style, mainWidthStyles, backLinkStyle } from '@/styles/tailwindStyles';
import Nav from '@/components/Nav';

export default async function Blog() {

    const posts = await getBlogPosts()

    return (
        <>
            <Head>
                <title>Blog</title>
            </Head>
            <div className={`my-2 mx-auto p-2 ${mainWidthStyles} bg-slate-900 rounded-xl`}>
                <Nav />
            </div>
            <main className={mainWidthStyles} >
                <h1 className={h1Style}>Kev Blog</h1>
                {posts.length > 0 && (
                    <div className='grid grid-cols-1 px-4 gap-10 gap-y-16 pb-24'>
                        {posts.map((post: any) => {
                            const inputDate = new Date(post?._createdAt);
                            const formattedDate = new Intl.DateTimeFormat("en-US", {
                                month: "long",
                                day: "numeric",
                                year: "numeric"
                            }).format(inputDate);
                            return (
                                <ClientSideRoute key={post._id} route={`/blog/${post.slug.current}`}>
                                    <div className='flex flex-col group cursor-pointer hover:scale-105 transition-all' >
                                        <h3 className={h3Style}>{post?.title && post.title}</h3>
                                        <span>{formattedDate} 👉</span>
                                    </div>
                                </ClientSideRoute>
                            )
                        })}
                    </div>
                )}
                {posts.length == 0 && <p>No posts to show</p>}
            </main>
            <Footer />
        </>
    )
}
