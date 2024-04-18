import Image from "next/image";
import { mainWidthStyles, posth4Style } from "@/styles/tailwindStyles";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { images } from "@/public/case-study-images/index.js";
import ScrollCarousel from "@/components/ScrollCarousel";
import Link from "next/link";

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
        <article className="cs">
          <h1>Illuminate Finance</h1>
          <p>A case study of Product development, UX, and UI design</p>
          <section>
            {headerStyle("Introduction")}
            <p>
              From 2021 to 2024 I led UX design for a blockchain fintech
              company. Alongside feature development for our flagship product
              <em> Swivel Finance</em>, I executed a design lifecycle from
              concept to launch for our new protocol,{" "}
              <em>Illuminate Finance</em>. This is a case study of the product's
              design process, challenges, solutions, and lessons.
            </p>
            <div className="image">
              <Image
                src={images.illuminateBanner.src}
                alt={images.illuminateBanner.alt}
                width={images.illuminateBanner.width}
                height={images.illuminateBanner.height}
              />
            </div>
          </section>
          <section>
            {headerStyle("DeFi's UX Deficiencies")}
            <div>
              <div>
                <p>
                  DeFi is a niche domain, characterized by perpetual innovation
                  and disruption driven by a digital native user base. In our
                  product space of fixed rate lending, the niche is even deeper.
                </p>
                <p>
                  White papers and hackathons help create alignment on smart
                  contract mechanisms and the core composability of the
                  derivatives that make fixed rate lending possible; however,
                  the similarities end there.
                </p>
                <div className="right">
                  <iframe
                    style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                    width="800"
                    height="450"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F87VTlSPzeRCtyGEQvc9cOH%2FSwivel-%2526-Illuminate%3Ftype%3Ddesign%26node-id%3D32%253A25149%26mode%3Ddesign%26t%3DCoGd4gNzYwFneweb-1"
                    allowFullScreen
                  ></iframe>
                </div>
                <p>
                  The user experience for understanding and lending assets for
                  fixed rate returns is fragmented across dozens of protocols,
                  each with novel market mechanisms, incentive structures, and
                  interface designs. Variance in nuance and esoteric language
                  leaves traders confused and frustrated.
                </p>
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
                <p>
                  Getting fixed rates in DeFi right unlocks massive market
                  potential, but misalignment across the space and hectic,
                  confounding UX leaves the premise broken.
                </p>
              </div>
            </div>
          </section>
          <section>
            {headerStyle("Illuminate's UX Goals")}
            <p>
              Our flagship product, Swivel, offered one of many novel approaches
              to trading yield derivatives to get fixed rates. But with
              liquidity spread over dozens of other protocols, traders must
              spend a lot of time seeking out, understanding, and comparing
              rates to find the best returns.
            </p>
            <div className="image">
              <Image
                src={images.protocols.src}
                alt={images.protocols.alt}
                width={images.protocols.width}
                height={images.protocols.height}
                layout="responsive"
              />
            </div>
            <p>
              Illuminate is a singular entryway for any lender - niche trader or
              simple retail customer - to lend their assets at the guaranteed
              best rate available across all protocols. This is possible because
              of the novel engineering solutions and new smart contract
              standards our development team has built. Where once was a
              fragmented ecosystem there is now a robust aggregator that always
              returns the best rate.
            </p>
            <p>
              The tech stack handles a great deal of complexity, so in order to
              create a digestable user experience we set some clear UI goals:
            </p>
            <ul className="check">
              <li>The UI should be exceptionally clean and simple.</li>
              <li>
                The UI should guide lenders through the complete process easily
                in as few steps as possible.
              </li>
              <li>
                The language should be clear and consistent, with ample help for
                understanding domain-specific terminology.
              </li>
              <li>
                The look and feel of the interface should be positive,
                welcoming, and friendly.
              </li>
            </ul>
          </section>
          <section>
            {headerStyle("Research, Workflows, and Wireframes")}
            <p>
              From our experience building Swivel and with input from our
              community and partners, we knew that there was a major demans for
              a more simplified fixed lending experience.
            </p>
            <p>
              A-list protocols like Uniswap lead the way in designing a
              minimal-step transaction UI, which is easy to use and understand
              and familiar to most people using DeFi. We took inspiration from
              this type of transaction flow, but had to adapt the most useful
              aspects to a more complex set of markets and derivatives.
            </p>
            <div className="image w-7/12">
              <Image
                src={images.uniswap.src}
                alt={images.uniswap.alt}
                width={images.uniswap.width}
                height={images.uniswap.height}
                layout="responsive"
              />
            </div>
            <p>
              With a handful of conventions in mind, we sketched out the primary
              user workflows necessary to enter and exit lending positions.
            </p>
            <div className="image">
              <Image
                src={images.workflows.src}
                alt={images.workflows.alt}
                width={images.workflows.width}
                height={images.workflows.height}
                layout="responsive"
              />
            </div>

            <p>
              Design and Development overlapped in a complete team effort
              involving our business development experts and engineers, so that
              we could carefully consider new technical challenges and approach
              the idiosyncrasies of blockchain transactions thoughtfully.
            </p>
            <ul className="question">
              <li>
                What market information ccould we cache or fetch quickly for the
                initial page views?
              </li>
              <li>
                How do lenders make market selections? By ssset, maturity date,
                estimated rate, or other?
              </li>
              <li>
                How and when do we calculate rate estimates to be accurate and
                timely?
              </li>
              <li>
                When is blockchain network latency unavoidable? How do we
                display long waiting periods gracefully?
              </li>
            </ul>
          </section>

          <section>
            {headerStyle("Interactive Prototypes and User Testing")}
            <p>
              Several rounds of low fidelity designs helped resolve initial
              sticking points. We iterated on the order of user selections,
              domain-driven language sets, and UI patterns (e.g. combining
              inputs and selections versus progressive reveal within a wizard
              pattern), and so on.
            </p>
            <div className="images">
              <div className="image">
                <Image
                  src={images.wire01.src}
                  alt={images.wire01.alt}
                  width={images.wire01.width}
                  height={images.wire01.height}
                  layout="responsive"
                />
              </div>
              <div className="image">
                <Image
                  src={images.wire02.src}
                  alt={images.wire02.alt}
                  width={images.wire02.width}
                  height={images.wire02.height}
                  layout="responsive"
                />
              </div>
              <div className="image">
                <Image
                  src={images.wire03.src}
                  alt={images.wire03.alt}
                  width={images.wire03.width}
                  height={images.wire03.height}
                  layout="responsive"
                />
              </div>
            </div>
            <p>
              These rounds of revision, alongside Illuminate brand development,
              led to high fidelity interactive prototypes we used for successive
              rounds of user testing. We conducted several interviews and task
              flow sessions with traders of all levels (as well as our advisors
              and partners) and discovered many insights that helped enhance
              both the overall workflows and domain language, and several
              micro-interactions as well.
            </p>
            <h5>Click the image below to visit the interactive prototype</h5>
            <Link
              href="https://www.figma.com/proto/87VTlSPzeRCtyGEQvc9cOH/Swivel-and-Illuminate?type=design&node-id=4-32618&viewport=-5592%2C751%2C0.21&t=fjF0Nco0XcIp5mif-0&scaling=min-zoom&starting-point-node-id=4%3A32618&show-proto-sidebar=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="images">
                <div className="image hover:border-yellow-300 hover:border-2 transition-all duration-200">
                  <Image
                    src={images.prototype.src}
                    alt={images.prototype.alt}
                    width={images.prototype.width}
                    height={images.prototype.height}
                    layout="responsive"
                  />
                </div>
              </div>
            </Link>
          </section>
          <section>
            {headerStyle("Revise, Refine, and Reimagine")}
            <p>
              Heading toward launch, we passed through this cycle many times
              over for each product feature, continually refining UI for
              transaction flows, market selections, position management, error
              states, and wallet management (to name a few).
            </p>
            <aside>
              <b>Aside:</b> many of these features could be case studies of
              their own, and I look forward to future deep dives!
            </aside>
            <ul className="cycles">
              <li>
                Create detailed workflows to define steps, datapoints, and
                possible error or end states.
              </li>
              <li>Design UI iterations at the latest level of fidelity.</li>
              <li>
                Present interactive prototypes to users for feedback and
                discovery.
              </li>
              <li>
                Groom with engineers to address edge cases, scaled-up states,
                and delightful micro-interactions.
              </li>
            </ul>
            <ScrollCarousel>
              <Image
                src={images.appSteps01.src}
                alt={images.appSteps01.alt}
                width={images.appSteps01.width}
                height={images.appSteps01.height}
                layout="responsive"
              />
              <Image
                src={images.appSteps02.src}
                alt={images.appSteps02.alt}
                width={images.appSteps02.width}
                height={images.appSteps02.height}
                layout="responsive"
              />
              <Image
                src={images.appSteps03.src}
                alt={images.appSteps03.alt}
                width={images.appSteps03.width}
                height={images.appSteps03.height}
                layout="responsive"
              />
              <Image
                src={images.appSteps04.src}
                alt={images.appSteps04.alt}
                width={images.appSteps04.width}
                height={images.appSteps04.height}
                layout="responsive"
              />
              <Image
                src={images.appSteps05.src}
                alt={images.appSteps05.alt}
                width={images.appSteps05.width}
                height={images.appSteps05.height}
                layout="responsive"
              />
            </ScrollCarousel>
            <p>
              As UX lead and UI designer, I managed our movement through these
              progressions and maintained a vast Figma collection of ideas,
              prototypes, and settled production designs. As a developer, I
              vetted every decision with our Front End engineer lead,
              identifying technical limitations and opportunities for innovation
              well ahead of costly pivots and re-writes.
            </p>
            <p>
              This practice of cross-collaboration extended to our backend and
              smart contract engineers as well, because behind every UX
              discovery and decision lay a potential technical challenge that
              could be worked around or addressed directly.
            </p>

            <p>
              In addition to my design and developer roles, I maintained our
              project timeline and mediated changing requirements, new features,
              and our existing development schedule. I am proud to say we
              steered clear of scope creep, and used delays in strategic launch
              dates to implement safe bonus features without harming the
              production build.
            </p>
          </section>
          <section>
            {headerStyle("Outcomes and Lessons")}
            <p>
              We shipped Illuminate V1 in January of 2023, and V2 before the end
              of December. We received excellent feedback on the quality of the
              UI and overall design sensibility. Users love the simplicity of
              the UI and the product offering of an aggregator for the complex
              and confusing fixed rate space.
            </p>
            <p>
              It's been a rough couple of years in DeFi, leading up to the most
              recent rally. Like many of our partners and competitors, we spent
              much of our time heads down building product in anticipation of an
              upturn in transaction activity and liquidity. Our marketing team
              faced difficulty expanding the user base beyond a core group of
              power users. Illuminate is live on Ethereum mainnet with no plans
              to shut down, although the team behind it has since been defunded.
            </p>
            {/* <h3>Design Lessons</h3> */}
            {headerStyle("Design Lessons")}
            <ul className="lessons">
              <li>
                Embrace unknowns and the chaos of creation. Beginning with a
                blank page is difficult, but beginning with complex, niche,
                blockchain finance derivatives in a widely fragmented space is a
                challenge! Diving in and iterating quickly lit a path forward.
              </li>
              <li>
                No design idea is too precious to move beyond. Many times during
                the process I felt I had devised clever solutions to large
                problems and micro interactions, but feedback from colleagues
                and customers reinforced my humility and fueled many returns to
                the drawing board.
              </li>
              <li>
                <span>
                  Keep engineering close to the design conversation! Speaking
                  the language of every stakeholder is crucial to learn about
                  the difficulties behind every UX objective. I strove for the
                  balance between{" "}
                  <b>designing as though anything is possible</b>, and{" "}
                  <b>designing for what I knew was definitely possible</b>.
                  Between those poles lie innovative ideas and technical
                  solutions that make better UX possible. Goodwill and respect
                  for others' process led to quality, reliable software.
                </span>
              </li>
            </ul>
          </section>
          <section>
            {headerStyle("Conclusion")}
            <p>
              This is a high level overview of how I helped build Illuminate
              Finance. I'm extremely proud of my contributions and the talent of
              the team I worked alongside to bring it to life through so many
              rounds of planning, prototyping, iteration and version
              improvements.
            </p>
            <p>
              This only scratches the surface of the depth of work and detail
              that went into the process, so please visit my site again for
              future deep dives on specific feature problems that I worked on
              while head of UX at Illuminate.
            </p>
          </section>
        </article>
      </div>
      <Footer />
    </>
  );
};

export default CaseStudyPage;
