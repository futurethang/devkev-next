"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { mainWidthStyles, posth4Style } from "@/styles/tailwindStyles";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { images } from "@/public/case-study-images/index.js";
import ScrollCarousel from "@/components/ScrollCarousel";

const CaseStudyPage = () => {
  const headerStyle = (text: string) => {
    return (
      <div className="relative inline-block w-fit text-white p-2 pb-0 my-12">
        <h4 className={`${posth4Style} relative z-10`}>{text}</h4>
        <span
          className="absolute top-[20px] left-[20px] h-6 xl:h-12 inset-0 bg-blue-700"
          style={{ transform: "translate(10px, 10px)" }}
        ></span>
      </div>
    );
  };

  return (
    <>
      <div className="flex-1 bg-slate-900">
        <div
          className={`my-2 mx-auto p-2 ${mainWidthStyles} bg-[#0c1a1f] rounded-xl`}
        >
          <Nav includeTitle />
        </div>
        <article>
          <h1>Illuminate Finance</h1>
          <p>A case study of Product development, UX, and UI design</p>
          <section>
            {headerStyle("Introduction")}
            <div className="images left">
              <Image
                src={images.illuminateBanner.src}
                alt={images.illuminateBanner.alt}
                width={images.illuminateBanner.width}
                height={images.illuminateBanner.height}
              />
            </div>
            <p>
              From 2021 to 2024 I led UX design for a blockchain fintech
              company. Alongside feature development for our flagship product
              <em> Swivel Finance</em>, I executed a design lifecycle from
              concept to launch for our new protocol,{" "}
              <em>Illuminate Finance</em>. This is a case study of the product's
              design process, challenges, solutions, and lessons.
            </p>
          </section>
          <section>
            {headerStyle("DeFi's UX Deficiencies")}
            <div className="split">
              <div className="left">
                <p>
                  DeFi is a niche domain, characterized by perpetual innovation
                  and disruption driven by a digital native user base. In our
                  product space of fixed rate lending, the niche is even deeper.
                </p>
                <p>
                  White papers and hackathons help create alignment on smart
                  contract mechanisms and the core composability of the
                  derivatives that make fixed rate lending possible, however the
                  similarities end there.
                </p>
                <p>
                  The user experience of understanding and lending assets for
                  fixed rate returns is fragmented across dozens of protocols,
                  each with a novel market mechanism, incentive structures, and
                  interface design. Variance in nuance and esoteric language
                  leaves traders confused and frustrated.
                </p>
                <p>
                  Getting fixed rates in DeFi right unlocks massive market
                  potential, but misalignment across the space and hectic,
                  confounding UX leaves the premise broken.
                </p>
              </div>
              <ScrollCarousel>
                <Image
                  src={images.defiComplexity01.src}
                  alt={images.defiComplexity01.alt}
                  width={images.defiComplexity01.width}
                  height={images.defiComplexity01.height}
                  layout="responsive"
                />
                <Image
                  src={images.defiComplexity02.src}
                  alt={images.defiComplexity02.alt}
                  width={images.defiComplexity02.width}
                  height={images.defiComplexity02.height}
                  layout="responsive"
                />
                <Image
                  src={images.defiComplexity03.src}
                  alt={images.defiComplexity03.alt}
                  width={images.defiComplexity03.width}
                  height={images.defiComplexity03.height}
                  layout="responsive"
                />
              </ScrollCarousel>
            </div>
          </section>
          <section>
            {headerStyle("Illuminate's UX Goals")}
            <p>
              Swivel offered one of many novel approaches to trading yield
              derivatives to get fixed rates. But with liquidity spread all over
              the dozens of other protocols, traders must spend a lot of time
              seeking out, understanding, and comparing rates to find the best
              return for their assets.
            </p>
            <p>
              Illuminate is a singular entryway for any lender, whether niche
              trader or simple retail customer, to lend their assets at the
              guaranteed best rate available across all competing protocols.
              This is possible from the novel engineering solutions new smart
              contract standards our business and software development teams
              built. Were once was a fragmented ecosystem there is now a robust
              aggregator that always returns the best rate.
            </p>
            <p>
              Our tech stack abstracted away a great deal of complexity. To fix
              the experience, we set some clear UI goals:
            </p>
            <ul>
              <li>The UI should be exceptionally clean and simple</li>
              <li>
                It should guide lenders through the complete process clearly, in
                as few steps as possible
              </li>
              <li>
                The language should be clear and consistent, with ample help for
                understanding domain specific terminology when applicable
              </li>
              <li>
                The feel of the interface should be positive, welcoming, and
                friendly
              </li>
            </ul>
            <div className="image">
              <Image
                src={images.lofi01.src}
                alt="Momentum"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </section>
          <section>
            {headerStyle("Research, Workflows, and Wireframes")}
            <p>
              From building Swivel and consistent discourse with out community
              and partners, we knew that there was a big desire for a more
              simplified fixed lending experience.
            </p>
            <p>
              A-list protocols like Uniswap lead the way in crafting easy to use
              and understand, minimal step transaction UI familiar to anyone
              using DeFi. We took inspiration for this kind of transaction flow,
              and had to adapt the most useful aspects to a more complex set of
              markets and derivatives.
            </p>
            <p>
              With a handful of conventions in mind, we sketched out the primary
              user workflows necessary to enter and exit lending positions. This
              was a complete team effort involving our business development
              experts and engineers, so that we could carefully consider unique
              technical challenges and idiosyncrasies of blockchain transaction
              settlement.
            </p>
            <ul>
              <li>
                What market information can be cached or fetched rapidly on the
                initial page view?
              </li>
              <li>
                What is the primary driver for market selection? Asset? Maturity
                Date? Estimated Rate?
              </li>
              <li>How and when do we calculaterate estimates?</li>
              <li>
                Where are we unable to avoid blockchain network latency? How do
                we present long waiting periods gracefully?
              </li>
              <li>
                What information is needed, and at what steps to aid transaction
                decisions?
              </li>
            </ul>
            <div className="image">
              <Image
                src={images.lofi01.src}
                alt="Momentum"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </section>

          <section>
            {headerStyle("Interactive Prototypes and User Testing")}
            <p>
              Several rounds of low fidelity designs helped resolve some initial
              sticking points. We iterated on the order of user selections,
              domain language, combining inputs versus progressive reveal in a
              wizard pattern, and so on.
            </p>
            <p>
              These rounds of revision, alongside Illuminate brand development,
              led to high fidelity interactive prototypes we could use for
              successive rounds of user testing. We conducted a number of
              interviews and task flow sessions with traders of all levels as
              well as our advisors and partners, and discovered many insights
              that helped enhance both the overall workflows and domain
              language, but several of the micro-interactions as well.
            </p>
            <div className="image">
              <Image
                src={images.lofi01.src}
                alt="Momentum"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </section>
          <section>
            {headerStyle("Revise, Refine, and Reimagine")}
            <p>
              The road to launch passed through this cycle many times over for
              each product feature.
            </p>
            <ul>
              <li>
                Review a workflow for steps, tasks, information requirements and
                possible end states
              </li>
              <li>Design initial UI at current level of fidelity</li>
              <li>
                Present interactive prototypes to users and iterate on feedback
              </li>
              <li>
                Drill down to find and address edge cases, scaled states, and
                micro-interactions
              </li>
            </ul>
            <p>
              As the UX lead and UI designer, I kept track of these
              progressions. As a front-end developer, I vetted every decision
              with our Front End engineer lead, identifying the technical
              limitations and opportunities for innovation well ahead of costly
              pivots and re-writes. This practice of cross-collaboration
              extended to our backend and smart contract engineers as well,
              because behind every UX discovery and decision lay a potential
              technical challenge that could be worked around or addressed
              directly.
            </p>
            <p>
              Any of these features could be a mini case study itself, and I
              look forward to future deep dives!
            </p>
            <p>
              In addition to my design and developer roles, I maintained our
              project timeline and played the mediator between emerging
              requirements changes, feature additions, and our existing
              development schedule. I am proud to say we kept relatively clear
              of scope creep, and used delays in strategic launch dates to
              implement safe bonus features without detriment to the production
              build.
            </p>
            <div className="image">
              <Image
                src={images.lofi01.src}
                alt="Momentum"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </section>
          <section>
            {headerStyle("Outcomes and Lessons")}
            <p>
              In the end, we shipped Illuminate V1 in January of 2023 and V2
              before the end of the year, expanding on the possible trade
              options lenders can make. We received excellent feedback on the
              quality of the UI and overall design sensibility. Users loved the
              simplicity of the UI and the product offering of an aggregator for
              the complex and confusing fixed rate space.
            </p>
            <p>
              In terms of product success, it's been a rough couple of years
              leading up to the most recent rally. Like many of our partners and
              competitors, we spent much of our time heads down building product
              in anticipation of an upturn in transaction activity and
              liquidity. Expanding the user base and successfully marketing a
              niche product in that environment was extremely difficult.
              Illuminate remains live on Ethereum mainnet with no plans to shut
              down, although the team behind it has since been defunded.
            </p>
            <h3>Design Lessons</h3>
            <ul>
              <li>
                Embrace unknowns and the chaos of creation. Beginning with a
                blank page is difficult, and beginning with complex niche
                blockchain finance derivatives in a widely fragmented space was
                overwhelming. But discovery followed those first several dozen
                clumsy attempts to find a way in the darkeness.
              </li>
              <li>
                No design idea is too precious to move beyond. many times during
                the process I felt I had devised clever solutions to large
                problems and micro interactions, but feedback form colleagues
                and customers gave the precedent to humility and many returns to
                the drawing board.
              </li>
              <li>
                Keep engineering close to the design conversation! Speaking the
                language of every stakeholder is crucial to learn about the
                array of difficulties behind any UX objective. I strove for the
                balance between designing as though anything is possible, and
                designing for what I knew was absolutely possible. In the back
                and forth between those poles lies innovative ideas and
                technical solutions that make the UX possible. There is also
                goodwill and a respect for others' process and ability to build
                quality, reliable software.
              </li>
            </ul>

            <div className="image">
              <Image
                src={images.lofi01.src}
                alt="Momentum"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </section>
          <section>
            {headerStyle("Conclusion")}
            <p>
              This has been a high level overview of the design of Illuminate
              Finance. I’m extremely proud of my contributions and the talent of
              the team I worked alongside to bring it to life through so many
              rounds of planning, prototyping, iteration and version
              improvements.
            </p>
            <p>
              This can only scratch the surface of the depth of work and detail
              that went into the process, so please visit my site again for
              future deep dives on specific feature problems that I worked on
              while services as head of UX at Illuminate.
            </p>
            <div className="image">
              <Image
                src={images.lofi01.src}
                alt="Momentum"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </section>
        </article>
      </div>
      <Footer />
    </>
  );
};

export default CaseStudyPage;
