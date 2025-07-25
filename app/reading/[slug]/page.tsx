import { client } from "@/cms-utils/sanity-client";
import urlFor from "@/cms-utils/urlFor";
import Image from "next/image";
import { groq } from "next-sanity";
import React from "react";
import { PortableText } from "@portabletext/react";
import myPortableTextComponents from "@/components/RichTextComponents";

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
    <article>
      <section className="space-y-2">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="relative h-64 w-full">
            <Image
              className="shadow-lg rounded align-middle border-none"
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
              objectFit="contain"
              objectPosition="center"
              priority
            ></Image>
          </div>
        </div>
      </section>

      <section>
        <div>
          <div>
            <h1 className="text-4xl font-extrabold">{post.title}</h1>
            <p>
              {new Date(post._createdAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      </section>

      <PortableText value={post.body} components={myPortableTextComponents} />
    </article>
  );
}
