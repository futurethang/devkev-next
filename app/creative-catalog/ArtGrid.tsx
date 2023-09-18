'use client'
import Link from 'next/link';
import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function ArtGrid({ posts }: any) {

  return (

    // <div className='grid grid-cols-2 gap-4 md:grid-cols-3' >
    <motion.ul
      className='container grid grid-cols-2 gap-4 md:grid-cols-3'
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {posts.map((post: any, index: number) => (
        <motion.li key={index} className="item" variants={item}>
          <Link key={post._id} href={`/creative-catalog/${post.slug.current}`}>
            {post.mainImage && (
              <div className='p-12 md:p-24 relative drop-shadow-xl hover:scale-105 transition-transform duration-200 ease-out rounded-md'>
                <Image
                  className='object-cover rounded-md'
                  src={post.mainImage}
                  alt={post.mainImage.alt || "portfolio item preview"}
                  fill
                />
              </div>
            )}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
    // </div>
  )
}