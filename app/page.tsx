import Head from 'next/head'
import TechIcons from '../components/TechIcons'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Marquee from '../components/Marquee';
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Kevin Hyde</title>
        <meta name="description" content="Professional Portfolio site for Kevin Hyde" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1><span className='kern'>K</span>evin Hyde</h1>
          <h2><Marquee>developer / designer / product nerd / developer advocate / UX researcher / avid reader / polyglot / prompt engineer</Marquee></h2>
          <p>
            Building a great product invariably presents those sticky spots where <b>What's Possible!™️</b> butts heads with <b>&lt;whats-possible&gt;</b></p>
          <p>
            Whether you're looking for a developer that 'speaks designer' or a designer that 'speaks developer', we'll have plenty to talk about together.
          </p>
        </div>
        <Nav />
        <section>
          <h3 className='section-header'>Professional Experience</h3>
          <details>
            <summary><h4 className='job-title'>DefiHedge Corp.</h4></summary>
            <div className="summary-content">
              <p>DefiHedge engineers EVM finance protocols to expand the fixed-rate lending and borrowing ecosystem of DeFi.</p>
              <p>
                In this startup team I put all my hats to use, mixing product management with project leadership, designing UX for novel applications, front end engineering, and across-the-board support for all operations.
              </p>
              <p>At DefiHedge, I put my full range of skills to use as a designer, developer, product manager, and project leader. With a focus on expanding the DeFi ecosystem, I designed innovative UX and front-end engineering solutions for our finance protocols.</p>
            </div>
          </details>
          <details>
            <summary><h4 className='job-title'>Cisco Systems Inc.</h4></summary>
            <div className="summary-content">
              <p>I was part of a new product incubator within Cisco's Webex team prototyping greenfield enterprise solutions, designing and engineering innovative UX/UI for rapid iteration.</p>
              <p>
                We relied upon Cisco's Momentum component library, where I played a core role re-engineering it as a Web Component based system for framework agnostic development.
              </p>
            </div>
          </details>
          <details>
            <summary><h4 className='job-title'>University of WA</h4></summary>
            <div className="sumary-content">
              <p>I lead the introductory course for UW's JavaScript Full Stack curriculum, introducing adult students to the fundamentals of JavaScript and developing for the browser.</p>
              <p>I prep course materials, lead lectures, encourage best practices and provide mentorship for career-readiness.
              </p>
            </div>
          </details>
          <details>
            <summary><h4 className='job-title'>Meeting Tomorrow</h4></summary>
            <p>Meeting Tomorrow is a Chicago startup that provides AV and Technology rental services worldwide.</p>
            <p>In my tenure I contributed across nearly every aspect of the business, from customer sales and support to internal resources, product development, vendor and warehouse logistics, marketing, and analytics.
            </p>
          </details>
        </section>
        <section>
          <h3 className='section-header'>What Do I Do?</h3>
          <h4 className='hat'>Front End Development</h4>
          <h4 className='hat'>Interface & Experience Design</h4>
          <h4 className='hat'>Product Direction</h4>
          <h4 className='hat'>Project Management</h4>
          <h4 className='hat'>Market & User Research</h4>
          <h4 className='hat'>Et Cetera</h4>
        </section>

        <section>
          <h3 className='section-header'>Technology Toolkit</h3>
          <p>
            I believe in big picture product thinking over specific tools, and have an undaunted attitude towards learning and adopting whatever knowledge, skills or toolkits are the best for the job.
          </p>
          <p>
            That said, here are some of the technologies I've had the privilege of getting the most familiar with over the course of my work experience.
          </p>
          <TechIcons />
        </section>

      </main>
      <Footer />
    </>
  )
}
