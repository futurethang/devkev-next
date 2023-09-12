import Footer from "@/components/Footer";
import Nav from '@/components/Nav';
import Link from "next/link";
import Image from "next/image";
import { Metadata } from 'next';
import { getReadingList } from '@/cms-utils/sanity-reading-list';
import { mainWidthStyles, h1Style, h3Style } from '@/styles/tailwindStyles';
import { Article } from "../page";
import urlFor from "@/cms-utils/urlFor";

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Blog page for Kevin Hyde',
}

export default async function Blog() {

    const posts = await getReadingList()

    return (
        <>
            <div className="flex-1">

                <div className={`my-2 mx-auto p-2 ${mainWidthStyles} bg-slate-900 rounded-xl`}>
                    <Nav includeTitle />
                </div>
                <main className={mainWidthStyles} >
                    <h1 className={h1Style}>Reading List</h1>
                    <p>I can't possibly keep up with all the great articles that crop up every week, but here are some of the ones that really resonated with me, and maybe you'll enjoy them too!</p>
                    {posts.length > 0 && (
                        <div className='flex flex-col gap-4 pb-24'>
                            {posts.map((post: Article, index: number) => {
                                const { link, tags, featured, shortSummary, previewImage } = post
                                return (
                                    <Link href={link ? link : ""} key={index} className="flex flex-start gap-8 items-start bg-slate-700 p-4 shadow-md rounded-sm">
                                        <div>
                                            {previewImage && (
                                                <div className='p-2 md:p-6 bg-slate-800 rounded-lg relative w-10 h-10 sm:w-40 sm:h-40 drop-shadow-xl'>
                                                    <Image
                                                        className='object-contain object-center rounded-md'
                                                        src={urlFor(previewImage).url()}
                                                        alt={previewImage.alt || "portfolio item preview"}
                                                        fill
                                                    />
                                                </div>
                                            )}

                                        </div>
                                        <div>
                                            <h3 className={`${h3Style} mt-0 mb-2`}>{post.title}</h3>
                                            <p className="mb-2">{shortSummary}</p>
                                            <div>
                                                {tags.map((tag, index) => {
                                                    return <span key={index} className="p-1 px-2 bg-slate-400 text-slate-900 text-xs rounded-md">{tag}</span>
                                                })}
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    )}
                    {posts.length == 0 && <p>No posts to show</p>}
                </main >
            </div >
            <Footer />
        </>
    )
}
