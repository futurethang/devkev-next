import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Image from "next/image";
import { Metadata } from "next";
import { getArticleList } from "@/cms-utils/sanity-article-list";
import { getBookList } from "@/cms-utils/sanity-book-list";
import {
  mainWidthStyles,
  h1Style,
  h2Style,
  cardh3Style,
  h3Style,
  h4Style,
} from "@/styles/tailwindStyles";
import { Post } from "../page";
import urlFor from "@/cms-utils/urlFor";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { Tags } from "@/components/Tags";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog page for Kevin Hyde",
};

export default async function Blog() {
  const articles = await getArticleList();
  const topArticles = articles.slice(0, 3);
  const bottomArticles = articles.slice(3);
  const books = await getBookList();
  const topBooks = books.slice(0, 3);
  const bottomBooks = topBooks.slice(3);
  const allPosts = [...bottomArticles, ...bottomBooks];

  return (
    <>
      <div className="flex-1">
        <div
          className={`my-2 mx-auto p-2 ${mainWidthStyles} bg-[#0c1a1f] rounded-xl`}
        >
          <Nav includeTitle />
        </div>
        <main className={mainWidthStyles}>
          <h1 className={h1Style}>Reading</h1>
          <p>
            Here are some books and articles I've enjoyed, and a few notes of my
            own.
          </p>
          <h2 className={h2Style}>Recent Articles</h2>
          <Cards posts={topArticles} />
          <h2 className={h2Style}>Recent Books</h2>
          <Cards posts={topBooks} />
          <h3 className={h3Style}>Older Posts</h3>
          <ul>
            {allPosts.map((article: Post, index: number) => {
              return (
                <li
                  key={index}
                  className="group flex flex-col flex-start justify-start items-start mb-1"
                >
                  <div className="flex flex-col mb-2">
                    <h4
                      className={`${h4Style} mb-0 group-hover:text-blue-400 transition-colors ease-out duration-300`}
                    >
                      {article.title}
                    </h4>
                    <span className="text-sm text-slate-400">
                      {`posted ${format(
                        parseISO(article.publishedAt),
                        "MMM d yyyy"
                      )}`}
                    </span>
                  </div>
                  <Tags tags={article.tags} />
                </li>
              );
            })}
          </ul>
        </main>
      </div>
      <Footer />
    </>
  );
}

const Cards = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-8">
      {posts.map((post: Post, index: number) => {
        const { link, tags, description, body, mainImage } = post;
        console.log(post.publishedAt);
        return (
          <div
            key={index}
            className="flex flex-col flex-start gap-2 justify-start items-start bg-slate-700 p-4 shadow-md rounded-md"
          >
            {mainImage && (
              <div className="p-2 md:p-6 bg-slate-800 rounded-lg relative w-10 h-10 sm:w-40 sm:h-40 drop-shadow-xl">
                <Image
                  className="object-contain object-center rounded-md"
                  src={urlFor(mainImage).url()}
                  alt={mainImage.alt || "portfolio item preview"}
                  fill
                />
              </div>
            )}
            <Link href={link ? link : ""} target="_blank">
              <h3 className={`${cardh3Style} mt-0 mb-2`}>{post.title}</h3>
            </Link>
            <p className="text-sm">{description}</p>
            <div className="flex gap-4 text-xs text-blue-300">
              <Link href={link ? link : ""} target="_blank">
                article 🔗
              </Link>
              <Link href={link ? link : ""} target="_blank">
                my notes 🗒️
              </Link>
            </div>
            <Tags tags={tags} />
            <span className="text-sm text-slate-400">
              {`posted ${format(parseISO(post.publishedAt), "MMM d yyyy")}`}
            </span>
          </div>
        );
      })}
    </div>
  );
};
