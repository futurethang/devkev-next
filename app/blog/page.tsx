import Link from "next/link";
import Footer from "@/components/Footer";
import Image from "next/image";
import { getBlogPosts } from "@/cms-utils/sanity-posts-list";
import { h1Style, h3Style, mainWidthStyles } from "@/styles/tailwindStyles";
import Nav from "@/components/Nav";
import { Metadata } from "next";
import urlFor from "@/cms-utils/urlFor";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog page for Kevin Hyde",
};

export default async function Blog() {
  const posts = await getBlogPosts();

  return (
    <>
      <div className="flex-1">
        <div
          className={`my-2 mx-auto p-2 ${mainWidthStyles} bg-[#0c1a1f] rounded-xl`}
        >
          <Nav includeTitle />
        </div>
        <main className={mainWidthStyles}>
          <h1 className={h1Style}>Blog Posts</h1>
          <p>I sometimes write about code, design, and other things.</p>
          {posts.length > 0 && (
            <div className="grid grid-cols-1 gap-4 pb-24">
              {posts.map((post: any) => {
                const { mainImage } = post;

                return (
                  <Link
                    href={`/blog/${post.slug.current}`}
                    key={post._id}
                    className="flex flex-start gap-8 items-start bg-slate-700 p-4 shadow-md rounded-sm"
                  >
                    <div>
                      {mainImage && (
                        <div className="p-2 md:p-6 bg-slate-800 rounded-lg relative w-10 h-10 sm:w-40 sm:h-40 drop-shadow-xl">
                          <Image
                            className="object-contain object-center rounded-md"
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
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
          {posts.length == 0 && <p>No posts to show</p>}
        </main>
      </div>
      <Footer />
    </>
  );
}
