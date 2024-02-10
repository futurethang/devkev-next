import Footer from "@/components/Footer";
import { getBlogPosts } from "@/cms-utils/sanity-posts-list";
import { h1Style, mainWidthStyles } from "@/styles/tailwindStyles";
import Nav from "@/components/Nav";
import { Metadata } from "next";
import PostListCard from "@/components/PostListCard";

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

                return <PostListCard key={post.id} post={post} />;
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
