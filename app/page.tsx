import TechIcons from '../components/TechIcons'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Marquee from '../components/Marquee';
import styles from '@/styles/Home.module.css'
import { h1Style, h3Style, mainWidthStyles } from '@/styles/tailwindStyles';
import Link from 'next/link';
import { Metadata } from 'next';
import { getReadingList } from '@/cms-utils/sanity-reading-list';

export const metadata: Metadata = {
  title: 'Kevin Hyde',
  description: 'Professional Portfolio site for Kevin Hyde',
}

export default async function Home() {
  const features = await getReadingList();

  type Article = {
    _createdAt: string;
    title: string;
    link: string | null;
    previewImage: any;
    shortSummary: string | null;
    detailedSummary: string | null;
    tags: string[];
    featured: boolean | null;
    _id: string;
};

const getFeaturedArticles = (data: Article[]): Record<string, Article | undefined> => {
    const requiredTags = ['Development', 'Design', 'AI'];
    const results: Record<string, Article | undefined> = {};

    requiredTags.forEach(tag => {
        const filteredArticles = data
            .filter(article => article.tags.includes(tag) && article.featured === true)
            .sort((a, b) => (new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime()));

        if (filteredArticles.length > 0) {
            results[tag] = filteredArticles[0];
        }
    });

    return results;
};

const data: Article[] = features;

const articles = getFeaturedArticles(data);
console.log(articles);


  return (
    <>
      <main className={mainWidthStyles}>
        <div className={styles.description}>
          <h1 className={h1Style}><span className='kern'>K</span>evin Hyde</h1>
          <h2 className='my-4 w-full md:w-1/2'><Marquee>developer / designer / product nerd / developer advocate / UX researcher / avid reader / polyglot / prompt engineer</Marquee></h2>
          <p>
            Building a great product invariably presents those sticky spots where <b>What's Possible!™️</b> butts heads with <b>&lt;whats-possible&gt;</b></p>
          <p>
            Whether you're looking for a developer that 'speaks designer' or a designer that 'speaks developer', we'll have plenty to talk about together.
          </p>
        </div>
        <Link className='block w-fit py-4 px-6 my-8 text-bold hover:text-white bg-blue-700 hover:bg-blue-500 rounded-lg transition-all' key="resume" href='/html/resume.html'>Resume 📄</Link>
        <Nav isHomePage />

        <section>
          <h3 className={h3Style}>What Do I Do?</h3>
          <h4 className='hat'>Product Design</h4>
          <h4 className='hat'>Interface & Experience Design</h4>
          <h4 className='hat'>UX Engineering</h4>
          <h4 className='hat'>Front End Development</h4>
          <h4 className='hat'>Team Leadership</h4>
        </section>

        <section>
          <TechIcons featuredArticles={articles} />
        </section>

      </main>
      <Footer />
    </>
  )
}
