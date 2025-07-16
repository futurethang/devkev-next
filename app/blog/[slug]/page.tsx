import { client } from "@/cms-utils/sanity-client";
import urlFor from "@/cms-utils/urlFor";
import Image from "next/image";
import { groq } from "next-sanity";
import React from "react";
import { PortableText } from "@portabletext/react";
import myPortableTextComponents from "@/components/RichTextComponents";
import { h1Style } from "@/styles/tailwindStyles";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const fallback =
  "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg";

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

  const imgSrc = post.mainImage ? urlFor(post.mainImage).url() : fallback;

  return (
    <article>
      <h1 className={h1Style}>{post.title}</h1>
      <section className="space-y-2">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="relative h-64 w-full">
            <Image
              className="shadow-lg rounded align-middle border-none"
              src={imgSrc}
              alt={post.author.name}
              fill
              objectFit="contain"
              objectPosition="left"
              priority
            ></Image>
          </div>
        </div>
      </section>

      <section>
        <div>
          {/* <p>
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p> */}
        </div>
        <div className="w-full sm:w-9/12 max-w-[70ch]">
          <PortableText
            value={post.body}
            components={myPortableTextComponents}
          />
        </div>
      </section>
    </article>
  );
}
