import Image from "next/image";
import Link from "next/link";
import urlFor from "@/cms-utils/urlFor";

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => <img src={value.imageUrl} />,
    callToAction: ({ value, isInline }: any) =>
      isInline ? (
        <a href={value.url}>{value.text}</a>
      ) : (
        <div className="callToAction">{value.text}</div>
      ),
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