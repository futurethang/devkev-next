"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import * as img from "@/public/sample-images/index.js";
import { h1Style, mainWidthStyles, posth4Style } from "@/styles/tailwindStyles";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const CaseStudyPage = () => {
  // Placeholder for images, replace with actual image paths
  const images = {
    problemStatement: img.momentum1,
    targetAudience: img.momentum1,
    yourRole: img.momentum1,
  };

  // Lazy loading state
  const [imageLoaded, setImageLoaded] = useState({
    problemStatement: false,
    targetAudience: false,
    yourRole: false,
  });

  // Function to handle image load
  const handleImageLoad = (key: keyof typeof imageLoaded) => {
    setImageLoaded({ ...imageLoaded, [key]: true });
  };

  const headerStyle = (text: string) => {
    return (
      <div className="relative inline-block text-white p-2 pb-0 my-12">
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
        <article className="case-study p-8 xl:p-16 text-slate-100 bg-slate-900">
          <div className="max-w-5xl mx-auto">
            <h1 className={h1Style}>Illuminate Finance</h1>
            <section className="mb-10 p-8  rounded-3xl">
              {headerStyle("Introduction")}
              <p className="font-serif">
                From 2021 to 2024 I led UX design for a blockchain fintech
                company. Alongside feature development Swivel Finance, I
                executed a top to bottom design lifecycle for our new protocol,
                Illuminate Finance. This is a case study of the product’s design
                process, challenges, solutions, and lessons.
              </p>
            </section>

            <section className="mb-10  p-8 rounded-3xl ">
              {/* <h2 className="text-3xl font-bold mb-4">Problem Statement</h2> */}
              {headerStyle("Product Domain")}

              <p>
                The DeFi ecosystem is comprised of countless innovative projects
                that imagine new ways of managing wealth with digital assets,
                from basic borrowing and lending protocols to complex
                derivatives. One cornerstone of a robust trading ecosystem is
                the ability to lend assets for fixed rates and lower risk. Our
                flagship product, Swivel Finance, offered a novel approach to
                providing a marketplace for trading yield derivatives.
              </p>
              <p>
                Swivel was only one among several protocols with similar
                mechanisms and the shared objective of bringing secure, robust,
                highly liquid fixed rate lending into the mainstream. Although
                they shared goals and fundamental token mechanics, the diversity
                of platforms created a variance of specialized domain language
                sets, different approaches to UX, disparate market lengths and
                maturity dates, and contributed to an extremely fragmented
                market. This led to a very onerous user experience to identify
                where an asset could be lent, where the best rate was available,
                and created inefficient liquidity fragmentation. The fixed rate
                ecosystem in DeFi was essentially broken with no clear rally
                point.
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: imageLoaded.problemStatement ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={images.problemStatement}
                  alt="Problem Statement"
                  width={600}
                  height={400}
                  onLoad={() => handleImageLoad("problemStatement")}
                />
              </motion.div>
            </section>

            {/* ... other sections ... */}

            <section className="mb-10  p-8 rounded-3xl">
              <h2 className="text-3xl font-bold mb-4">Target Audience</h2>
              {headerStyle("Introduction")}
              <p>
                We developed Swivel to give traders a professional trading
                experience, catering to savvy yield farmers who want to purchase
                leveraged positions on variable rate exposure, and also hedge
                their positions with a guaranteed rate of return. We made this
                possible with an order book UX, giving a great deal of
                flexibility to market makers, however increasing the complexity
                of the app's use.
              </p>
              <p>
                Swivel did provide a 'simple' interface for novice users just
                seeking a good fixed rate, and while that offering was less
                complex it still relied upon some niche domain knowledge that
                may be confusing to the retail customer.
              </p>
              <p>
                With Illuminate, we set out to make fixed rate lending as
                painless and direct as possible, helping users access a complex
                ecosystem and rallying all projects towards common markets and
                shared liquidity, rising all boats with a more interconnected
                fixed rate ecosystem. Illuminate's UX objective was 2-fold:
              </p>
              <ol>
                <li>
                  1. Aggregate the best fixed rates across all of the available
                  protocols, giving users fast, direct access to the entire
                  marketplace
                </li>
                <li>
                  2. Make lending transactions simple, friendly, and fast.
                </li>
              </ol>
            </section>

            {/* ... continue with the rest of the content ... */}
            <section className="mb-10  p-8 rounded-3xl">
              <h1 className="text-4xl font-bold mb-4">
                My Role and Contribution
              </h1>
              <p>
                Alongside feature development and promotion of Swivel Finance, I
                led a complete product design lifecycle for Illuminate’s
                branding and UX from scratch.
              </p>
              <p>
                The core business case and protocol logic was developed by
                founder and CEO Julian Traversa, building upon his extensive
                experience building for DeFi. The concept for Illuminate
                graduated from a white paper thesis and vetting among our
                partners across the ecosystem to Solidity code in the initial
                smart contracts.
              </p>
              <p>
                Julian and I collaborated intensively on translating the
                protocol concept into early prototypes. Some goals were very
                clear from the beginning:
              </p>
              <ol>
                <li>
                  1. The UI should be extremely simple, clear, and have a
                  lighter, more friendly aesthetic (compared to the prevalent
                  edgy hacker vibes of popular protocols at the time).
                  <li>
                    2. The product should be ready for retail customers, users
                    who are less interested in the theory or complexity and just
                    coming for a good return on their investments
                  </li>
                  <li>
                    3. The UI should offer sufficient information and
                    affordances to dive deeper so that trust and transparency
                    are not lost at the expense of simplicity.
                  </li>
                  <li>
                    4. Handle the unique UX variables inherent in Web3
                    applications, like long wait times for on-chain activity to
                    resolve, failed transactions, wallet connections, and so on.
                  </li>
                </li>
              </ol>
              <p>
                I led the design through progressive iterations, through wire
                framing, prototypes of increasing fidelity and interactivity,
                and fully functioning testnet deployments. At every step we
                gathered input from colleagues, investing partners, other DeFi
                leaders and builders, and members of the crypto trading
                community.
              </p>
              <p>
                Development and testing of the smart contracts continued
                alongside the design of the UX, and we benefitted from a small,
                lean team to respond to changes along the way. Our assumptions
                were often tested, making adjustments for the evolution of the
                market fit and limitations or security vulnerabilities of the
                technology. I tested many variations on workflows and interfaces
                to find balance where simplicity and transparency could
                coincide.
              </p>
            </section>

            <section className="mb-10  p-8 rounded-3xl ">
              <h2 className="text-3xl font-bold mb-4">Solution</h2>
              <p>
                So what is Illuminate doing under the hood? Let’s begin with
                Swivel and other fixed rate protocols that are aggregated under
                Illuminate. In order to facilitate fixed rate lending, users’
                deposits are invested into a variable yield protocol and then
                split into dual tokens, a Principal Token (or PT) and a Yield
                Token (YT), and given a date of maturity. The PT represents the
                funds deposited and is redeemable in full on or after the
                maturity date. The Yield token is a claim to all generated yield
                that flows from the variable rate of the deposit. Protocols like
                Swivel facilitate the buying and selling of the Yield bearing
                token, and a user can get a definite return by selling their YT,
                leading to a fixed rate of return on the deposit made.{" "}
              </p>
              <p>
                All protocols share this dual token mechanism (though their
                market mechanics and customization of control varies widely). As
                a result, PTs can be sold at a discount prior to their maturity
                date, giving the buyers a guaranteed return on investment.
              </p>
              <p>Here’s an example:</p>
              <p>
                I own an investment that can be redeemed for $100 in 6 months. I
                wish to exit the position so I seek a buyer. The market puts a
                discount on the investment based upon its time to maturity, and
                I sell it to you for $97. I get to exit my position, and you
                bought the future value of $100 for $97. That’s a fixed rate of
                return of approximately 3.1%
              </p>
              Back to Illuminate:
              <p>
                Illuminate has both on-chain and off-chain tools that gather the
                current prices of all PTs on the market for a certain asset.
                When a user comes to Illuminate to lend USDC their request will
                retrieve the prices for USDC Principal Tokens on Ethereum, and
                facilitate a trade with the protocol offering the highest rate.
              </p>
              <p>
                This is a surface deep explanation of how Illuminate works, and
                achieving accurate and up to date estimates has been a
                remarkable engineering feat courtesy of an extremely talented
                engineering team building innovative backends that are lightning
                fast and extremely scalable, interfacing with whole sets of
                smart contracts built in-house and by friends and competitors
                across the space. Please feel free to peruse our docs and blog
                articles for deeper dives into the hard technical details!
              </p>
              <p>
                This just begins to illustrate some of the complexity inherent
                in DeFi and the challenges it presents in effectively
                communicating to users what happens to their money when lent on
                Illuminate. How much information is enough? Or too much? What
                can we assume about a users’ DeFi literacy? How do we convey the
                appropriate amount of responsible investment caution while also
                not intimidating or misleading? These were some of the deeply
                interesting challenges in the design of the best UX in fixed
                rate lending.
              </p>
              <p>
                While working on feature development for Swivel, we established
                a strong culture around Domain Driven Language, and implemented
                in-house documentation of Ubiquitous Language so that as a
                complete organization we shared in precise terminology across
                the entire stack. This was often challenging as we incorporated
                huge sets of other protocols’ code, full of their own chosen
                language, which was often comprised of thematic jargon (like
                Wizards and Cauldrons) and dank-meme crypto culture slang. With
                the ambition to the be front door to the fixed rate space and a
                standard setter in the industry, we kept the vibe friendly, but
                the language direct and domain driven.
              </p>
              <p>
                We experimented with numerous workflows to find the path of
                least resistance and most clarity from asset choice to
                transaction submission. This design process required a balance
                of offering affordances and context without cluttering the UI,
                but also extreme collaboration with engineering to keep careful
                consideration of network requests, caching, and on-chain reads
                that greatly effect the web app’s performance and UX loading
                states.
              </p>
              <p>
                Through user research and interviews we tested fine details of
                the workflow.
              </p>
              <ul>
                <li>
                  - Does a Lend workflow begin with market dates or asset
                  selection?
                </li>
                <li>
                  - Do we preview current rates at each step of the flow? Is
                  this technically feasible without slow and heavy network
                  requests?
                </li>
                <li>
                  - What affordances are available for changing your mind,
                  undoing recent actions?
                </li>
                <li>
                  - How can we make it clear that the user is getting the
                  highest of several compared rates?
                </li>
              </ul>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: imageLoaded.problemStatement ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="https://cdn.sanity.io/images/rkukjvpf/production/f9ba7b757e8a64b20376cf3136f346de8e2f25fe-1024x1024.png"
                  alt="Problem Statement"
                  width={600}
                  height={400}
                  onLoad={() => handleImageLoad("problemStatement")}
                />
              </motion.div>
            </section>

            <section className="mb-10  p-8 rounded-3xl">
              <h1 className="text-4xl font-bold mb-4">Introduction</h1>
              <p>
                Illuminate Finance is a DeFi app that aggregates fixed lending
                rates across several lending platforms, ensuring that users have
                easy access to high rates and good liquidity without the usual
                difficulties of using Decentralized Finance.
              </p>
            </section>

            <section className="mb-10  p-8 rounded-3xl ">
              <h2 className="text-3xl font-bold mb-4">Problem Statement</h2>
              <p>
                The DeFi ecosystem is comprised of countless innovative
                projects...
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: imageLoaded.problemStatement ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={images.problemStatement}
                  alt="Problem Statement"
                  width={600}
                  height={400}
                  onLoad={() => handleImageLoad("problemStatement")}
                />
              </motion.div>
            </section>
            <section className="mb-10  p-8 rounded-3xl ">
              <h2 className="text-3xl font-bold mb-4">Impact</h2>
              <p>
                Illuminate received an extremely good reaction from our
                community, partners, investors, and defi community. There was
                significant appetite for its simplicity and we received many
                compliments to our clean UI. Unfortunately it is difficult to
                gain much quantitative insight besides the liquidity of our
                Pools. DeFi is pseudo-anonymous as a feature, making it
                difficult to follow up with distinctive users. We also launched
                Illuminate over a sustained period of poor market conditions
                (aka “Crypto Winter”) that was a consistent hamper to our
                marketing efforts.
              </p>
              <p>
                Illuminate remains live on Ethereum mainnet as market conditions
                evolve and the investment landscape shifts. Users can still come
                to lend the ETH on current markets, and still benefit from
                market-wide aggregation for the highest fixed rates.
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: imageLoaded.problemStatement ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={images.problemStatement}
                  alt="Problem Statement"
                  width={600}
                  height={400}
                  onLoad={() => handleImageLoad("problemStatement")}
                />
              </motion.div>
            </section>
            <section className="mb-10  p-8 rounded-3xl ">
              <h2 className="text-3xl font-bold mb-4">Lessons Learned</h2>
              <p>
                Building Illuminate was a long and very in depth process that
                touched every layer of Web3 product development. We began the
                design and development with a strong vision and stayed very
                close to the core of the fixed rate aggregator value
                proposition. But we learned so much along the way, adjusting for
                the users and the markets to arrive at a UX that informs but
                does not overwhelm.
              </p>
              <p>
                For me the experience of carrying a product’s design from thesis
                to production was a masterclass in the Design process. Carefully
                incrementing through the complexities of defi derivatives,
                molding user workflows around them, and engaging in several
                rounds of research and user testing to refine the UX into a
                polished application.
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: imageLoaded.problemStatement ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={images.problemStatement}
                  alt="Problem Statement"
                  width={600}
                  height={400}
                  onLoad={() => handleImageLoad("problemStatement")}
                />
              </motion.div>
            </section>
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
};

export default CaseStudyPage;
