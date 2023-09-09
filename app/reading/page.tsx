import Footer from "@/components/Footer";
import Nav from '@/components/Nav';
import { Metadata } from 'next';
import { getReadingList } from '@/cms-utils/sanity-reading-list';
import { mainWidthStyles, h1Style } from '@/styles/tailwindStyles';

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Blog page for Kevin Hyde',
}

export default async function Blog() {

    const posts = await getReadingList()
    console.log(posts)

    return (
        <>
            <div className="flex-1">

                <div className={`my-2 mx-auto p-2 ${mainWidthStyles} bg-slate-900 rounded-xl`}>
                    <Nav includeTitle />
                </div>
                <main className={mainWidthStyles} >
                    <h1 className={h1Style}>Reading List</h1>
                    {posts.length > 0 && (
                        <div className='grid grid-cols-1 px-4 gap-10 gap-y-16 pb-24'>
                        </div>
                    )}
                    {posts.length == 0 && <p>No posts to show</p>}
                </main>
            </div>
            <Footer />
        </>
    )
}
