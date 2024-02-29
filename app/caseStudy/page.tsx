"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import * as img from "@/public/sample-images/index.js";
import { h1Style, mainWidthStyles } from "@/styles/tailwindStyles";
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

  return (
    <>
      <div className="flex-1">
        <div className={`my-2 mx-12 px-4 py-2 bg-[#0c1a1f] rounded-xl`}>
          <Nav includeTitle />
        </div>
        <article className="p-8">
          <h1 className={h1Style}>Projects</h1>
          <div className="max-w-5xl mx-auto">
            <section className="mb-10 bg-slate-800 p-8 rounded-3xl">
              <h1 className="text-4xl font-bold mb-4">Introduction</h1>
              <p>
                Illuminate Finance is a DeFi app that aggregates fixed lending
                rates across several lending platforms, ensuring that users have
                easy access to high rates and good liquidity without the usual
                difficulties of using Decentralized Finance.
              </p>
            </section>

            <section className="mb-10 bg-slate-100 p-8 rounded-3xl text-slate-800">
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

            {/* ... other sections ... */}

            <section className="mb-10 bg-slate-800 p-8 rounded-3xl">
              <h2 className="text-3xl font-bold mb-4">
                Your Role and Contribution
              </h2>
              <p>
                Alongside feature development and promotion of Swivel Finance...
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: imageLoaded.yourRole ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={images.yourRole}
                  alt="Your Role"
                  width={600}
                  height={400}
                  onLoad={() => handleImageLoad("yourRole")}
                />
              </motion.div>
            </section>

            {/* ... continue with the rest of the content ... */}
            <section className="mb-10 bg-slate-800 p-8 rounded-3xl">
              <h1 className="text-4xl font-bold mb-4">Introduction</h1>
              <p>
                Illuminate Finance is a DeFi app that aggregates fixed lending
                rates across several lending platforms, ensuring that users have
                easy access to high rates and good liquidity without the usual
                difficulties of using Decentralized Finance.
              </p>
            </section>

            <section className="mb-10 bg-slate-100 p-8 rounded-3xl text-slate-800">
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

            <section className="mb-10 bg-slate-800 p-8 rounded-3xl">
              <h1 className="text-4xl font-bold mb-4">Introduction</h1>
              <p>
                Illuminate Finance is a DeFi app that aggregates fixed lending
                rates across several lending platforms, ensuring that users have
                easy access to high rates and good liquidity without the usual
                difficulties of using Decentralized Finance.
              </p>
            </section>

            <section className="mb-10 bg-slate-100 p-8 rounded-3xl text-slate-800">
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
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
};

export default CaseStudyPage;
