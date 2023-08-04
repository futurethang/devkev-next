import Image from "next/image";
import urlFor from "@/cms-utils/urlFor";

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative h-64 w-full m-10 mx-auto">
          <Image
            className="object-contain object-left shadow-lg rounded align-middle border-none"
            src={urlFor(value).url()}
            alt="Blog Image"
            fill
          />
        </div>
      )
    },
  },

  block: {
    h4: ({ children }: any) => <h4 className="text-2xl font-bold text-yellow-400">{children}</h4>,
  },

  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a href={value.href} rel={rel}>
          {children}
        </a>
      )
    },
  },
}

export default myPortableTextComponents