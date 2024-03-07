import Footer from "@/components/Footer";
import { getArtworks } from "@/cms-utils/sanity-art-posts";
import {
  h1Style,
  h3Style,
  linkStyles,
  backLinkStyle,
  mainWidthStyles,
} from "@/styles/tailwindStyles";
import Nav from "@/components/Nav";
import Link from "next/link";
import Image from "next/image";
import urlFor from "@/cms-utils/urlFor";
import { Metadata } from "next";

interface Post {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  title: string;
}

export const metadata: Metadata = {
  title: "Neat Stuff",
  description: "Some neat things made by Kevin Hyde",
};

export default async function Blog() {
  const posts = await getArtworks();

  return (
    <>
      <div className="flex-1">
        <div
          className={`my-2 mx-auto p-2 ${mainWidthStyles} bg-[#0c1a1f] rounded-xl`}
        >
          <Nav includeTitle />
        </div>
        <main className={mainWidthStyles}>
          <h1 className={h1Style}>Creative Hobbies</h1>

          <p>Stay weird, make stuff, repeat.</p>
          <h3 className={h3Style}>Making Music:</h3>
          <ul>
            <li>
              <a
                className={linkStyles}
                href="https://www.shadowpattern.com"
                target="_blank"
              >
                Shadow Pattern
              </a>
            </li>
            <li>
              <a
                className={linkStyles}
                href="http://theholyalimonies.band/"
                target="_blank"
              >
                The Holy Alimonies
              </a>
            </li>
            <li>
              <a
                className={linkStyles}
                href="https://waistcoatfling.bandcamp.com/album/no-awful-oblivion"
                target="_blank"
              >
                Waistcoat Fling
              </a>
            </li>
          </ul>
          <h3 className={h3Style}>Digital Art:</h3>
          <Link
            href="https://futurethang.github.io/Cretins-Site/"
            target="blank"
            className="block my-3 font-bold py-4 px-8 w-fit text-yellow-300 bg-slate-800 hover:bg-slate-700 transition-all 400 rounded-lg"
          >
            <span className="text-blue-300">Cretins: a Drawing Project</span> ➹
          </Link>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
            {posts.map((post: any) => (
              <Link
                key={post._id}
                href={`/creative-catalog/${post.slug.current}`}
              >
                {post.mainImage && (
                  <div className="p-12 md:p-24 relative drop-shadow-xl hover:scale-105 transition-transform duration-200 ease-out rounded-md">
                    <Image
                      className="object-cover rounded-md"
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
  );
}
