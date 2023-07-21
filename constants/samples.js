import * as img from '../public/sample-images/index.js'

export const samples = [
    {
        title: "L2 switching on Swivel Finance",
        previewCopy: "To expand to other chains, our existing app required an intuitive menu design for switching between networks to interact with more markets.",
        bodyCopy: `
##### The Situation
Live already Ethereum Mainnet, we know that to capitalize on more markets and enjoy much lower transaction costs, we need to get users on to more L2s. Previously not included in the UI, we needed an interface that will make it intuitive and unmistakable for users to switch between networks and devnets within an increasingly crowded top-nav space.
##### The Solution
Without introducing an all-new selection component, we played with approaches to make the existing wallet actions dropdown more robust. The Network selection fits contextually within the existing space, and clear markings for the connected network.
        `,
        thumbnail: img.prevL2,
        alt: "",
        link: 'swiv-l2',
        images: [
            {
                src: img.l2Selector4,
                alt: "Open view showing difference depending on current network"
            },
            {
                src: img.l2Selector3,
                alt: "Interaction focus states for mouse and keyboard navigation"
            },
            {
                src: img.l2Selector2,
                alt: "Full app context view on Ethereum Mainnet"
            },
            {
                src: img.l2Selector,
                alt: "Full app context view on Arbitrum"
            },
            {
                src: img.l2Selector7,
                alt: "Large Display view on Arbitrum"
            },
        ],
        tags: ['web3', 'UXUI', 'Figma']
    },
    {
        title: "Multi-Market selector on Swivel Finance",
        previewCopy: "Our initial market selector design was poorly equipped to facilitate an expanding selection of markets, and needed design revisions.",
        bodyCopy: `
##### The Situation
The existing UI for browsing active markets in Swivel is suitable only for a handful of markets. But what would happen when we have several, or even dozens or hundreds of markets? We needed a way to make it easy for users to filter and find the markets they want to interact with.
##### The Solution
Without compromising or having to refactor the current interface drastically, we needed to add more context and dynamic filtering. By re-magining the list components that represent individual markets we boosted visual cues, adding more color and iconography to represent the tokens and protocols reflected. Additionally we implemented a typeahead search to filter the list by name, symbol, protocol, maturity, even current percentage rate.
##### The Result
We prevented the headache of needing to reimagine the broader UI to accomodate a more context rich market selection, and introduced a pattern that will scale no matter how many markets we ultimately support.
        `,
        thumbnail: img.prevMarket,
        alt: "",
        link: 'swiv-multi-market',
        tags: ['web3', 'UXUI', 'Figma'],
        images: [
            {
                src: img.marketSelect,
                alt: "Design iterations for multi market selector on Swivel Finance"
            },
            {
                src: img.marketSelect2,
                alt: "Final design implemented in live app"
            },
        ]
    },
    {
        title: "Orderbook Swivel Finance",
        previewCopy: "Swivel's novel on/off chain orderbook allows users to place any number limit orders, leading to a design challenge to balance complexity and simplicity.",
        bodyCopy: `
##### The Situation
Perhaps the most critical and differentiating features of Swivel is its use of a novel orderbook solution, allowing for the better rates and capital efficiency over competing protocols that rely upon AMMs. But with many possible order types, the complexity of the order grew rapidly. 
##### The Solution
By designing easily recognizable visual heuristics alongside careful consideration of our Domain Driven Language, not to mention a powerful state-machine based front end, we managed to create a delightfully reactive table view that can display all of a user's possible trades and key datapoints at a glance.
        `,
        thumbnail: img.prevOrders,
        alt: "",
        link: 'swiv-orderbook',
        tags: ['web3', 'UXUI', 'Figma'],
        images: [
            {
                src: img.orderbook1,
                alt: "Design variations for various order states on Swivel Finance"
            },
            {
                src: img.orderbook2,
                alt: "Transaction history states on Swivel Finance"
            },
        ]
    },
    {
        title: "Transaction UI on Illuminate",
        previewCopy: "Complex derivative contract interactions are abstracted enough to present a simple interface for retail users to lend without fuss.",
        bodyCopy: `
##### The Situation
While seasoned DeFi users might well understand the progression of financial derivatives Illuminate relies upon, retail users can be quickly confused by the complex derivative contracts that make up the Illuminate protocol. And even well versed traders benefit from a succinct and clear interface with just enough details to accurately represent transactions.
##### The Solution
Through a series of design iterations based upon competitor analysis, test-user input, and coinciding development of the product's domain language, we were able to distill the complexity of the transactions into a simple, intuitive interface that allows users to lend without having to confront the complexity of the underlying derivative contracts.

I progressed our UI designs towards interactive prototypes of high-fidelity designs and staged numerous demos and user interviews with members of our Discord community, investor partners, and other DeFi users. Gathering feedback and iterating on the designs, I worked closely with our front-end lead dev to ensure the designs were feasible and scalable.
##### The Result
Our live product has been received well, with numerous users commenting on the simplicity of the UI and the ease of use, not too mention good lookin' 😘. We have a long way to go, but we're off to a great start.
##### Why I Bring It Up
I saw our design process for a brand new product from the core idea - expressed in Solidity code and financial derivative theses - to a fully operable UI. Because of my knowledge and experience in Front End Web development, I was able to keep the design spec within realistic bounds so that moving them to code production was a smooth process. And because my FE dev counterpart is an absolute pro, we continued to uncover and address emergent UX and design issues as we built out the product.
        `,
        thumbnail: img.illTxn3,
        alt: "",
        link: 'illuminate-txn',
        tags: ['web3', 'UXUI', 'Figma'],
        images: [
            {
                src: img.illTxn1,
                alt: "Step 1: Selecting an asset to lend."
            },
            {
                src: img.illTxn2,
                alt: "Step 2: slecting an active market to lend into."
            },
            {
                src: img.illTxn3,
                alt: "Step 3: Entering an amount and reviewing the transaction."
            },
            {
                src: img.illTxn4,
                alt: "Step 3.5: Illuminate is all about aggregating for the best rate, and this bit of UI shows how well we did!"
            },
        ]
    },
    {
        title: "Momentum Web Components",
        previewCopy: "Framework agnostic collection of Web-Component based UI elements used by Cisco Systems Inc. to build enterprise platform GUIs.",
        bodyCopy: `
##### The Situation
The Webex family of products developed by Cisco Systems Inc. uses a design system called [Momentum UI](https://momentum.design/) to establish a cohesive visual language for related products, however the varying product teams had their own developement approaches, resulting in a bloated codebase that repeated the UI library in React, Angular, and Vue. The widening gaps of quality and difficulty of upkeep and ongoing development of the UI library was . . . a problem. Especially once work bagan on a new product that allows microservices to be built independently and deployed in one master dashboard. 
##### The Solution
What was needed was a new approach that could operate within any FE dev environment, and be consumed in projects regardless of chosen framework. Utilizing a light-weight library of helper classes called Lit, we built a broadened refresh of the Momentum UI system as a Web Component library. My team worked closely with the design team to groom new atomic and molecular UI elements to add to the library, while re-engineering exising components to be Web Components.
I personally tackled a number of complex components, and went deeeeep into the CSSOM and wizardy of the Shadow DOM to find a scalable solution to deploying a UI elements a la cart, _without_ a boatload of dependencies and a barge of unused CSS.
##### The Result
Through a lot of exploration and thesis validation, we built and simultaneously deployed new UI elements as Web Components to the new product and various React and Angular projects. 
##### Why I Bring It Up
This was relatively early in my developer career, and the task set for me was large and complex, requiring some still nascent technology and skills that are not as well documented. I approached the task undaunted by new or unfamiliar technologies, learned a great deal, and made a valuable contribution to the project's success.
        `,
        thumbnail: img.momentum1,
        alt: "",
        link: "momentum-ui",
        tags: ['UIKit', 'UXUI', 'Web Components', 'Enterprise', 'CSS'],
        images: [
            {
                src: img.momentum2,
                alt: "Momentum is a complete library of UI elements, from atomic to molecular, that can be used to build a wide variety of interfaces."
            },
        ]
    },
    {
        title: "Illuminate Landing Page",
        previewCopy: "A ground-up landing page for Illuminate protocol.",
        bodyCopy: `
##### The Situation
Illuminate protocol needed a ground-up landing page to promote the protocol and its features. Making a compelling value proposition for an 'easy to use' DeFi protocol that relies upon inherent complexity is a big challenge.
##### The Solution
Starting with design cues from the UI (that I also designed) and an evolving brand aesthetic, I built the page from the ground up, communicating the protocol's value proposition and mechanics through animations and graphics built using Figma and Adobe tools. Like a fully fledged web project, I had a lot of conversations with internal stakeholders and outside parties to push the content and design towards higher impact. After a series of design revisions and mocks I coded the page using HTML, CSS, and Javascript, relying on Web Components for reusable elements. [Illuminate.finance](https://illuminate.finance)
##### The Result
A sexy, screen-responsive landing page that draws visitors into our unique protocol, its features, and possible use cases.
##### Why I Bring It Up
This was another project that made use of my full stack of skills, from design to development. Not only did I spearhead all of the graphic elements and coding of the site, but I lead the conversations with stakeholders in marketing and business development to make sure the final result met clear stated goals.
        `,
        thumbnail: img.illLanding1,
        alt: "",
        link: "ill-landing",
        tags: ['web3', 'Web Design', 'Figma', 'Web Components', 'Marketing', 'CSS'],
        images: [
            {
                src: img.illLanding1,
                alt: "Above the fold on the Illuminate landing page."
            },
            {
                src: img.illLanding2,
                alt: "Samples of sectioning and graphics design."
            },
        ]
    },

    {
        title: "Brand Assets and Social Media",
        previewCopy: "Materials for business development and marketing teams that enforce branding and messaging for product offerings",
        bodyCopy: `
##### The Situation
When a startup is young and growing, it's important to have a consistent brand and message across all channels. This is especially important for business development and marketing teams who are trying to sell the product to new customers. But figuring out what your brand is, the voice and vibe of your company, and how to communicate that to the world is a difficult task.
##### The Solution
This is an ever-evolving project of mixed approaches. I have done a good deal of iterating on branding ideas myself for existing and upcoming product offerings, but acknowledge that it is difficult to develop a brand most effectively when you are so close to the project. I led efforts with a third party design firm to give our existing product a face lift for our upcoming Verison 3, include template assets for us to use for blog and social contents. 
##### The Result
The primary benefit of my branding efforts was to draw our team and our public vibe towards a more consistent, cohesive look and feel. We've applied the principals that we learned to new products and offerings, and have a better understanding of how to communicate our brand to the world.
        `,
        thumbnail: img.prevSocials,
        alt: "",
        link: "branding",
        tags: ['Design', 'Marketing', 'Photoshop', 'Illustrator', 'Figma'],
        images: [
            {
                src: img.l2Selector,
                alt: "L2 switching on Swivel Finance"
            },]
    },
//     {
//         title: "Trade Show Materials",
//         previewCopy: "From concepts through to event success, graphics, logistics and cost-saving for visually engaging environment and merchandise items.",
//         bodyCopy: `
// ##### The Situation
// The ETH community likes to get together and talk about all the cool stuff they are building. Naturally we wanted to be there to tell people about our cool stuff too. But being a young startup that ust happened to secure a booth, we were unprepared for the physical logistics of the event. We need to make a lot of stuff, get all the stuff we needed to the event, and make all our swag got handled and handed out.
// ##### The Solution
// Kevin. The first time around we had a one month lead time, so I rapidly switched contexts to tackle our needs from a logistics-driven work order. I started immediately by shopping out vendors who could deliver a few thousand T-shirts, a couple hundred hats, lots of little mint tins, roll up graphics stands and tablecloths, business cards for every member of the team attending, and more. Then I got busy creating designs for all the swag and booth graphics, leading discussions on what was possible, what was necessary, and what was just a nice-to-have. I also coordinated with the event organizers to make sure we had everything we needed to get our booth set up and ready to go, including our audio visual rentals and logistics.

// It's mentioned elsewhere but I also put together an animated video reel to hype the brand and explain the product.
// ##### The Result
// Holy 💩! It Worked! Not only did we pull off our first big-boothed event without anything pieces getting totally torpedoed, but I was able to keep the cost from eating up all of our runway. And now we had a collection of resources good for re-use and we were much more prepared for future events, which inevitably required all new kinds of swag and booth materials. 
// ##### Why I Bring It Up
// I got to flex a lot of my old dusty skills and knowledge across several domains, and picked up plenty of new experience along the way. My many years working in live event production and complex logistics at Meeting Tomorrow was a huge resource to identify how tight the timeline was and what we could realistically accomplish.
//         `,
//         thumbnail: img.prevIlluminate,
//         alt: "",
//         link: "trade-show",
//         tags: ['Design', 'Marketing', 'Photoshop', 'Illustrator', 'Figma', 'Logistics']
//     },
//     {
//         title: "Promotional Product Video Content",
//         previewCopy: "Showcasing product features and mechanics for promotion and education.",
//         bodyCopy: `
// ##### The Situation
// DefiHedge is a small operaton, just a handful of devs and biz dev folks. We needed a way to promote our products, educate users on complex DeFi concepts and protocol mechanics without blowing a lot of time and money on on a third party video production team that does not already have a native understanding of our domain. Also we had 1 month lead time to get everything ready for a promo booth at ETH NYC. 😬
// ##### The Solution
// As the primary graphics guy on the team working on our UI designs and branding materials, I flexed my existing After Effects skills paired with good asset management in the Adobe ecosystem, and A LOT of Googling to crank out some pretty nifty videos.
// ##### The Result
// We hit our deadline with compelling video content, walked away with promotional materials we could re-use, and the masses were dazzled at ETH NYC.
// ##### Why I Bring It Up
// It's a good example of leveraging my broad skills to meet a critical time-sensitive need and saving significant cost to our organization. After Effects is a beast of a program but I brushed off my chops and figured out all of my missing knowledge to get the job done.
//         `,
//         thumbnail: img.prevIlluminate,
//         alt: "",
//         link: "promo-video",
//         tags: ['Design', 'Marketing', 'Photoshop', 'Illustrator', 'Figma', 'After Effects']
//     },
    {
        title: "Storyboarding",
        previewCopy: "Concept outlines and scene setting for animation projects involving contracted video creators.",
        bodyCopy: `
##### The Situation
We needed some flashy animations for an upcoming market launch and had to outsource the animation work. But DeFi can be a complex topic to explain, and we needed to make sure the contracted animator had a clear understanding of the concepts and mechanics of our protocol.
##### The Solution
I took my graphics and video skills and created a series of storyboards to outline the concepts and mechanics of our protocol. This allowed us to communicate our vision to the animator and ensure that the final product would be on point.
##### The Result
We got some pretty sweet animations that helped us hype our protocol to the masses, and no one was hurt.
##### Why I Bring It Up
Mainly because it shows that I can switch hats and take on a new role when needed. 🥸 I'm a real problem solver ya know?
        `,
        thumbnail: img.prevStory,
        alt: "",
        link: "storyboarding",
        tags: ['Design', 'Marketing', 'Photoshop', 'Illustrator', 'Figma'],
        images: [
            {
                src: img.storyBoard1,
                alt: "Wireframe stages for a new market announcement"
            },
            {
                src: img.storyBoard2,
                alt: "Higher fidelity wireframe stages for a new product update announcement"
            },
        ]
    },
//     {
//         title: "Shadowpattern.com",
//         previewCopy: "An editable band homepage that allows all members to add and update information about upcoming shows.",
//         bodyCopy: `
// ##### The Situation
// You always gotta have a sweet wevsite for your band so people can get info about upcoming shows, listen to music, and see images of live performances and neat poster art. But managing updates for the site becomes too much of a one-person job. 
// ##### The Solution
// I redid the site and added a Supabase backend to a NextJS frontend to allow all band members to add and update information about upcoming shows and add new poster images.
// ##### The Result
// I finally got the bass player off of my back about making site changes, and he texts me a lot less frequently! 😎
//         `,
//         thumbnail: img.prevIlluminate,
//         alt: "",
//         link: "band-site",
//         tags: ['Web Design', 'NextJS', 'Marketing', 'Supabase', 'CSS'],
//         images: [
//             {
//                 src: img.l2Selector,
//                 alt: "L2 switching on Swivel Finance"
//             },]
//     },
//     {
//         title: "Poster Designs",
//         previewCopy: "Captivating, creative visuals for print and web to promote live music events.",
//         bodyCopy: `
// ##### The Situation
// Outside of the professional worls of product development I enjoy creative projects playing music, writing songs, and doing illustrations. As the most graphic-designerly member of whatever band I'm currently in, I get a lot of opportunities to whip up posters for upcoming shows. Here's a selection of posters to show some of my more playful and creative works.
//         `,
//         thumbnail: img.prevIlluminate,
//         alt: "",
//         link: "posters",
//         tags: ['Design', 'Marketing', 'Photoshop', 'Illustrator', 'Generative AI'],
//         images: [
//             {
//                 src: img.l2Selector,
//                 alt: "L2 switching on Swivel Finance"
//             },]
//     },
]