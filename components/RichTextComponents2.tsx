import Image from "next/image";
import urlFor from "@/cms-utils/urlFor";
import { ImageWithModal } from "./ImageWithModal";
import { h2Style, h3Style } from "@/styles/tailwindStyles";

const myPortableTextComponents2 = {
  types: {
    image: ({ value }: any) => {
      const src = urlFor(value).url();

      return <ImageWithModal src={src} />;
    },
  },

  block: {
    h2: ({ children }: any) => <h2 className={h2Style}>{children}</h2>,
    h4: ({ children }: any) => <h4 className={h3Style}>{children}</h4>,
  },

  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a href={value.href} rel={rel}>
          {children}
        </a>
      );
    },
  },
};

export default myPortableTextComponents2;
