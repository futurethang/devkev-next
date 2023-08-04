import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import urlFor from '@/cms-utils/urlFor';
import ClientSideRoute from '@/components/clientSideRoute';
import Footer from "@/components/footer";
import styles from '@/styles/Home.module.css'
import { getBlogPosts } from '@/cms-utils/sanity-blog-posts';

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

    const data = await getBlogPosts()
    console.log(data.posts)
    const posts = data

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
                    <div className='grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24'>
                        {posts.map((post: any) => (
                            <ClientSideRoute key={post._id} route={`/posts/${post.slug.current}`}>
                                <div className='flex flex-col group cursor-pointer' >
                                    <h3>{post?.title && post.title}</h3>
                                    {post.mainImage && (
                                        <div className='relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out'>
                                            <Image
                                                className='object-cover object-left lg:object-center'
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
                )}
                {posts.length == 0 && <p>No posts to show</p>}
            </main>
            <Footer />
        </>
    )
}
