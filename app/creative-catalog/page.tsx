import Footer from "@/components/Footer";
import { getArtworks } from '@/cms-utils/sanity-art-posts';
import { h1Style, h3Style, linkStyles, backLinkStyle, mainWidthStyles } from '@/styles/tailwindStyles';
import Nav from '@/components/Nav';
import Link from 'next/link';
import Image from "next/image";
import urlFor from '@/cms-utils/urlFor';
import { Metadata } from 'next';

interface Post {
  _createdAt: string,
  _id: string,
  _rev: string,
  _type: string,
  _updatedAt: string,
  title: string,
}

export const metadata: Metadata = {
  title: 'Neat Stuff',
  description: 'Some neat things made by Kevin Hyde',
}

export default async function Blog() {

  const posts = await getArtworks()

  return (
    <>
      <div className='flex-1'>
        <div className={`my-2 mx-auto p-2 ${mainWidthStyles} bg-slate-900 rounded-xl`}>
          <Nav includeTitle />
        </div>
        <main className={mainWidthStyles} >
          <h1 className={h1Style}>Neat Stuff</h1>

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
            <li>
              <a className={linkStyles} href="https://futurethang.github.io/Cretins-Site/" target="_blank">Cretins</a>
            </li>
          </ul>
          <h3 className={h3Style}>Artworks:</h3>
          <p className="lg:w-10/12">There's always fun in dabbling. Here's some fun stuff I've made using Photoshop, Illustrator, Fresco, Procreate, and animation tools.</p>
          <div className='grid grid-cols-2 gap-4 md:grid-cols-3' >
            {posts.map((post: any) => (
              <Link key={post._id} href={`/creative-catalog/${post.slug.current}`}>
                {post.mainImage && (
                  <div className='p-24 relative drop-shadow-xl hover:scale-105 transition-transform duration-200 ease-out rounded-md'>
                    <Image
                      className='object-cover rounded-md'
                      src={urlFor(post.mainImage).url()}
                      alt={post.mainImage.alt || "portfolio item preview"}
                      fill
                    />
                  </div>
                )}
              </Link>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}
