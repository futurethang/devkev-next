
import React from 'react'
import urlFor from '@/cms-utils/urlFor'
import Image from 'next/image'
import ClientSideRoute from '@/components/clientSideRoute'

export default function BlogList(props) {
  const { posts } = props
  // console.log("ASS", props.posts[0].schemaType)

  return (
    <>
      <h2>posts</h2>
      {posts.length > 0 && (
        <div className='grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24'>
          {posts.map((post) => (
            <ClientSideRoute key={post._id} route={`/posts/${post.slug.current}`}>
              <div className='flex flex-col group cursor-pointer' >
                <h3>{post?.title && post.title}</h3>
                {post.mainImage && (
                  <div className='relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out'>
                    <Image
                      className='object-cover object-left lg:object-center'
                      src={urlFor(post.mainImage).url()}
                      alt={post.mainImage.alt || "portfolio item preview"}
                      fill
                    />
                  </div>
                )}
              </div>
            </ClientSideRoute>
          ))}
        </div>
      )}
      {posts.length == 0 && <p>No posts to show</p>}
    </>
  )
}
