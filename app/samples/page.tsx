import React from "react";
import Nav from "@/components/Nav";
import Footer from "../../components/Footer";
import style from "@/styles/Samples.module.css";
import { getSamplePosts } from "@/cms-utils/sanity-sample-posts";
import { h1Style, mainWidthStyles } from "@/styles/tailwindStyles";
import { Metadata } from "next";
import PostListCard from "@/components/PostListCard";

export const metadata: Metadata = {
  title: "Work Samples",
  description: "Work Samples for Kevin Hyde",
};

async function Samples() {
  const posts = await getSamplePosts();

  return (
    <>
      <div className="flex-1">
        <div
          className={`my-2 mx-auto p-2 ${mainWidthStyles} bg-[#0c1a1f] rounded-xl`}
        >
          <Nav includeTitle />
        </div>
        <main className={mainWidthStyles}>
          <h1 className={h1Style}>Work Samples</h1>
          <div>
            <section className={style.sampleSection}>
              <div className="grid grid-cols-1 gap-4 pb-24">
                {posts.map((post: any) => (
                  <PostListCard key={post.id} post={post} />
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Samples;
