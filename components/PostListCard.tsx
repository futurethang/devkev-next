import { Post } from "@/app/page";
import urlFor from "@/cms-utils/urlFor";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { format, parseISO } from "date-fns";
import { h1Style, h3Style, mainWidthStyles } from "@/styles/tailwindStyles";
import { Tags } from "@/components/Tags";

export default function PostListCard({ post }: { post: any }) {
  const { mainImage } = post;
  console.log(post);
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
      <div className="flex flex-col h-full w-full">
        <h3 className={`${h3Style} mt-0 mb-2`}>{post.title}</h3>
        <p className="mb-2">{post.description}</p>
        <div className="grow flex justify-end">
          {post.tags ? <Tags tags={post.tags} /> : null}
          <span className="text-sm text-slate-400 self-end">
            {`posted ${format(parseISO(post.publishedAt), "MMM d yyyy")}`}
          </span>
        </div>
      </div>
    </Link>
  );
}