import TechIcons from "../components/TechIcons";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Marquee from "../components/Marquee";
import styles from "@/styles/Home.module.css";
import { h1Style, h3Style, mainWidthStyles } from "@/styles/tailwindStyles";
import Link from "next/link";
import { Metadata } from "next";
import { getArticleList } from "@/cms-utils/sanity-posts-list";

export const metadata: Metadata = {
  title: "Kevin Hyde",
  description: "Professional Portfolio site for Kevin Hyde",
};

type Tag = {
  [key: string]: string;
};

export type Post = {
  _createdAt: string;
  publishedAt: string;
  title: string;
  link: string | null;
  mainImage: any;
  description: string | null;
  body: string | null;
  tags: Tag[];
  featured: boolean | null;
  _id: string;
};

export default async function Home() {
  return (
    <>
      <main className={mainWidthStyles}>
        <div className="flex flex-col sm:flex-row sm:gap-4 w-full justify-start items-center mb-2">
          <h1 className={`${h1Style}`}>Kevin Hyde</h1>
          <Nav isHomePage />
        </div>
        <div className={styles.description}>
          {/* <h2 className="my-4 w-full md:w-full">
            <Marquee>
              developer / designer / product nerd / developer advocate / UX
              researcher / avid reader / polyglot / prompt engineer
            </Marquee>
          </h2> */}
          <p>
            Building a great product invariably presents those sticky spots
            where <b>What's Possible!™️</b> butts heads with{" "}
            <b>&lt;whats-possible&gt;</b>
          </p>
          <p>
            Whether you're looking for a developer that 'speaks designer' or a
            designer that 'speaks developer', we'll have plenty to talk about.
          </p>
        </div>

        <section>
          <h3 className={h3Style}>Ask me about . . .</h3>
          <h4 className="font-mono">Full Stack Development</h4>
          <h4 className="font-mono">UX & UI Design</h4>
          <h4 className="font-mono">Product Design</h4>
          <h4 className="font-mono">Team Leadership</h4>
        </section>

        <Link
          className="block w-fit py-4 px-6 my-8 text-bold hover:text-white bg-blue-700 hover:bg-blue-500 rounded-lg transition-all"
          key="resume"
          href="/html/resume_UX_II.html"
        >
          Resume 📄
        </Link>

        <section>
          <TechIcons />
        </section>
      </main>
      <Footer />
    </>
  );
}
