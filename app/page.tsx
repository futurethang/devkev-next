import TechIcons from "../components/TechIcons";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Marquee from "../components/Marquee";
import styles from "@/styles/Home.module.scss";
import {
  h1Style,
  h3Style,
  homeH4Style,
  mainWidthStyles,
} from "@/styles/tailwindStyles";
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
        <div className="flex flex-col sm:flex-row sm:gap-4 xl:gap-8 w-full justify-start items-center mb-2">
          <h1 className={`${h1Style}`}>Kevin Hyde</h1>
          <Nav isHomePage />
        </div>
        <div className={styles.description}>
          <p>
            I'm a{" "}
            <b>
              <Link
                href={"https://maggieappleton.com/design-engineers"}
                target="_blank"
              >
                Design Engineer
              </Link>
            </b>{" "}
            based in Seattle WA.
          </p>
          <p>
            I build digital products with experience from{" "}
            <b>Planning and Research</b> to <b>UX/UI design</b> to{" "}
            <b>Front End Engineering</b>
          </p>
          <p>
            Whether you're looking for a developer that <b>'speaks designer'</b>{" "}
            or a designer that <b>'speaks developer'</b>, I help
            <br />
            <b>What's Possible!™️</b> get to{" "}
            <b>
              <Link
                href={
                  "https://github.com/momentum-design/momentum-ui/blob/master/web-components/WEB_COMPONENTS_CRASH_COURSE.md"
                }
                target="_blank"
              >
                &lt;whats-possible&gt;
              </Link>
            </b>
          </p>
        </div>
        <Link
          className="block w-fit py-4 px-6 my-8 xl:text-3xl text-bold hover:text-white bg-blue-700 hover:bg-blue-500 rounded-lg transition-all"
          key="resume"
          href="/html/resume_sr_UI_engineer.html"
          target="_blank"
        >
          Resume 📄
        </Link>
        <Link
          className="block w-fit py-4 px-6 my-8 xl:text-3xl text-bold hover:text-white bg-blue-700 hover:bg-blue-500 rounded-lg transition-all"
          key="resume"
          href="/caseStudy"
        >
          Illuminate UX Case Study 📑
        </Link>

        <section className="gap-2">
          <h3 className={h3Style}>Ask me about . . .</h3>
          <h4 className={homeH4Style}>UX & UI Design</h4>
          <h4 className={homeH4Style}>Leadership</h4>
          <h4 className={homeH4Style}>Product Design</h4>
          <h4 className={homeH4Style}>Full Stack Development</h4>
        </section>
        <section className="gap-2">
          <h3 className={h3Style}>What about AI?</h3>
          <p>
            A lot's changed very quickly, and the familiar skills and modes of
            work in tech professions are evolving. I am forward looking, and
            with education and experimentation have found incredible utility in
            AI tools, as well as limitations and flaws.
          </p>
          <p>
            I use this technology as a multiplier. With a solid core of design
            and software development knowledge and expertise, I steer my AI
            assistance thoughtfully. I carefully consider requirements to arrive
            at appropriate solutions, and scrutinize generative output for
            hallucinations or poor quality that AI sometimes returns.
          </p>
          <p>
            When we work together, you can expect me to make responsible and
            transparent use of all the tools at my disposal to get the best
            outcomes, and I'm eager to share my knowledge and efficiency gains
            with colleagues!
          </p>
        </section>

        <section className="mb-0 gap-4 items-start">
          <TechIcons />
        </section>
      </main>
      <Footer />
    </>
  );
}
