import { client } from "@/cms-utils/sanity-client";
import urlFor from "@/cms-utils/urlFor";
import Image from "next/image";
import { groq } from "next-sanity";
import React from "react";
import { PortableText } from "@portabletext/react";
import myPortableTextComponents2 from "@/components/RichTextComponents2";
import { h1Style } from "@/styles/tailwindStyles";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Post({ params }: Props) {
  const { slug } = await params;
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
        <div className="flex justify-start relative h-64 w-full">
          <Image
            className="shadow-lg rounded align-middle border-none"
            src={urlFor(post.mainImage).url()}
            alt={post.author.name}
            fill
            objectFit="contain"
            objectPosition="left"
            priority
          ></Image>
        </div>
      </section>

      <section>
        <div>
          <div>
            <h1 className={h1Style}>{post.title}</h1>
            {/* <p>
              {new Date(post._createdAt).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </p> */}
          </div>
        </div>
      </section>
      <div className="w-full sm:w-9/12 max-w-[70ch]">
        <PortableText
          value={post.body}
          components={myPortableTextComponents2}
        />
      </div>
    </article>
  );
}
