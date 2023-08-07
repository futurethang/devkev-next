import { client } from '@/cms-utils/sanity-client'
import urlFor from '@/cms-utils/urlFor'
import Image from 'next/image'
import { groq } from 'next-sanity'
import React from 'react'
import { PortableText } from '@portabletext/react'
import myPortableTextComponents from '@/components/RichTextComponents'

type Props = {
  params: {
    slug: string
  }
}

export default async function Post({ params: { slug } }: Props) {

  const query = groq`
    *[_type == "post" && slug.current == $slug][0]{
      ...,
      author->,
      categories[]->
    }
  `;

  const post = await client.fetch(query, { slug });

  console.log("POST", post)

  return (
    <article className='px-10 pb-8'>
      <section className='space-y-2'>
        <div className='flex flex-col md:flex-row justify-between'>
          <div className='relative h-64 w-full'>
            <Image
              className='object-contain object-center shadow-lg rounded align-middle border-none'
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
              priority
            >
            </Image>
          </div>
        </div>
      </section>

      <section>
        <div>
          <div>
            <h1 className='text-4xl font-bold text-yellow-400'>
              {post.title}
            </h1>
            <p>
              {new Date(post._createdAt).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </p>
          </div>
        </div>
      </section>

      <PortableText value={post.body} components={myPortableTextComponents} />

    </article>
  )
}
