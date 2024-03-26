"use client";
import React, { useState } from "react";
import Image from "next/image";
import * as img from "../public/icons/index.js";

const TECH_BLURBS_ARRAY = [
  {
    title: "Typescript",
    description:
      "So what if it's pain sometimes? It's worth it as soon as you scale beyond a few shared components and more than one developer.",
    image: img.typescript,
  },
  {
    title: "Node",
    description:
      "Even us Front End devs need spin up some backend or just whip up a CLI to take care of repetitive business. When I need to get right to the point, Node is my go-to.",
    image: img.node,
  },
  {
    title: "React",
    description:
      "Battle tested, kid approved. Most of the time I just want to get my ideas off the ground, and the expansive documentation and support of React means I can nearly always find a clear path to a working prototype.",
    image: img.react,
  },
  {
    title: "Web Components",
    description:
      "Let's get native! I've done my share of building product and UI kits with Web components, and vanilla JS never lets me down. I'm excited to see the standard grow in the future, and will always keep them close at hand for the right projects.",
    image: img.webcomponents,
  },
  {
    title: "Figma",
    description:
      "Even though I've stuck with Adobe for 20+ years, you just can't beat Figma for collaboration and quick design iteration. The Plugins, workflow, and community are second to none.",
    image: img.figma,
  },
  {
    title: "Adobe Creative Suite",
    description:
      "For raw design power, nothing can match Adobe's Creative Suite. I reach into this suite often to refine vectors and typography, perfect raster graphics, and create awesome animations.",
    image: img.creativesuite,
  },
  {
    title: "OpenAI",
    description:
      "We have our pick of LLMs to build with, but I appreciate OpenAI's commitment to quality docs and regular feature additions. My API of choice . . . for now.",
    image: img.openai,
  },
  {
    title: "LangChain",
    description:
      "The arguments are far from settled on the integration layers of building with LLMs, but LangChain is a great option for getting rolling on interesting LLM integration ideas, and continues to add new leverage for builders.",
    image: img.langchain,
  },
  {
    title: "Midjourney",
    description:
      "Again, there're plenty to pick from in the image generation space, but Midjourney's params and amazing quality makes it my default for rapid idea generation, whether churning out product concepts or fanciful artwork for creative projects.",
    image: img.midjourney,
  },
];

const TechIcons = () => {
  const [hoveredIcon, setHoveredIcon] = useState(undefined as any);

  return (
    <>
      <div
        className="flex gap-6 overflow-x-scroll no-scrollbar"
        onMouseLeave={() => setHoveredIcon(undefined)}
      >
        {TECH_BLURBS_ARRAY.map((icon) => (
          <div
            key={icon.title}
            onMouseOver={() => setHoveredIcon(icon)}
            onFocus={() => setHoveredIcon(icon)}
          >
            <Image
              src={icon.image}
              alt={icon.title}
              tabIndex={0}
              width={64}
              height={64}
            />
          </div>
        ))}
      </div>
      <div className="h-6 mt-2">
        {hoveredIcon && (
          <>
            <h3>{hoveredIcon.title}</h3>
            {/* <p>{hoveredIcon.description}</p> */}
          </>
        )}
      </div>
    </>
  );
};

export default TechIcons;
