import Image from "next/image";
import urlFor from "@/cms-utils/urlFor";
import {
  h2Style,
  h3Style,
  h4Style,
  posth4Style,
} from "@/styles/tailwindStyles";

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
      );
    },
  },

  block: {
    h2: ({ children }: any) => <h2 className={h2Style}>{children}</h2>,
    h3: ({ children }: any) => <h3 className={h3Style}>{children}</h3>,
    h4: ({ children }: any) => (
      <div className="relative inline-block text-white p-2 pb-0 my-12">
        <h4 className={`${posth4Style} relative z-10`}>{children}</h4>
        <span
          className="absolute top-[20px] left-[20px] h-6 xl:h-12 inset-0 bg-blue-700"
          style={{ transform: "translate(10px, 10px);" }}
        ></span>
      </div>
    ),
  },

  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a
          href={value.href}
          rel={rel}
          target="_blank"
          className="underline text-blue-300"
        >
          {children}
        </a>
      );
    },
  },
};

export default myPortableTextComponents;
