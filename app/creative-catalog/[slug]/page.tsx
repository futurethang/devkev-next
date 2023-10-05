import { client } from "@/cms-utils/sanity-client";
import urlFor from "@/cms-utils/urlFor";
import Image from "next/image";
import { groq } from "next-sanity";
import React from "react";
import { PortableText } from "@portabletext/react";
import myPortableTextComponents2 from "@/components/RichTextComponents2";
import { h1Style } from "@/styles/tailwindStyles";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Post({ params: { slug } }: Props) {
  const query = groq`
    *[_type == "post" && slug.current == $slug][0]{
      ...,
      author->,
      categories[]->
    }
  `;

  const post = await client.fetch(query, { slug });

  return (
    <article id="sample-page">
      <section className="space-y-2">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="relative h-[600px] w-full">
            <Image
              className="object-contain object-center shadow-lg rounded align-middle border-none"
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
              priority
            ></Image>
          </div>
        </div>
      </section>

      <section>
        <div>
          <div className="text-center">
            <h1 className={h1Style}>{post.title}</h1>
          </div>
        </div>
      </section>

      {/* <PortableText value={post.body} components={myPortableTextComponents2} /> */}
    </article>
  );
}
