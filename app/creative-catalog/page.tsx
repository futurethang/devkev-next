import Footer from "@/components/Footer";
import { getArtworks } from '@/cms-utils/sanity-art-posts';
import { h1Style, h3Style, linkStyles, backLinkStyle, mainWidthStyles } from '@/styles/tailwindStyles';
import Nav from '@/components/Nav';
import Link from 'next/link';
import Image from "next/image";
import urlFor from '@/cms-utils/urlFor';
import { Metadata } from 'next';
import ArtGrid from "./ArtGrid";

interface Post {
  _createdAt: string,
  _id: string,
  _rev: string,
  _type: string,
  _updatedAt: string,
  title: string,
}

const transformPostImage = (posts: any) => {
  return posts.map((post: { mainImage: { asset: any; }; }) => {
    if (post.mainImage && post.mainImage.asset) {
      return {
        ...post,
        mainImage: urlFor(post.mainImage).url()
      };
    }
    return post; // Return unchanged post if no mainImage to transform
  });
};


export const metadata: Metadata = {
  title: 'Fun',
  description: 'Some neat things made by Kevin Hyde',
}

export default async function Blog() {

  const posts = await getArtworks()

  const transformedPosts = transformPostImage(posts)

  return (
    <>
      <div className='flex-1'>
        <div className={`my-2 mx-auto p-2 ${mainWidthStyles} bg-slate-900 rounded-xl`}>
          <Nav includeTitle />
        </div>
        <main className={mainWidthStyles} >
          <h1 className={h1Style}>Fun</h1>

          <p>I've got more creativity in me than I can use up at work, so here's some of the spill-over.</p>
          <h3 className={h3Style}>Making Music with these Bands:</h3>
          <ul>
            <li>
              <a className={linkStyles} href="https://www.shadowpattern.com" target="_blank">Shadow Pattern</a>
            </li>
            <li>
              <a className={linkStyles} href="http://theholyalimonies.band/" target="_blank">The Holy Alimonies</a>
            </li>
            <li>
              <a className={linkStyles} href="https://waistcoatfling.bandcamp.com/album/no-awful-oblivion" target="_blank">Waistcoat Fling</a>
            </li>
          </ul>
          <h3 className={h3Style}>Sketches & Gifs:</h3>
          <p className="lg:w-10/12">There's always fun in dabbling. Here's some fun stuff I've made using Photoshop, Illustrator, Fresco, Procreate, and animation tools.</p>
          <Link href="https://futurethang.github.io/Cretins-Site/" target='blank' className='block my-3 font-bold py-4 px-8 w-fit text-yellow-300 bg-slate-800 hover:bg-slate-700 transition-all 400 rounded-lg'>
            <span className='text-blue-300'>Cretins</span>  ➹
          </Link>
          <ArtGrid posts={transformedPosts} />
        </main>
      </div>
      <Footer />
    </>
  )
}
