"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import style from '../styles/TechIcons.module.css'
import * as img from '../public/icons/index.js'
import { h3Style } from '@/styles/tailwindStyles'
import Link from 'next/link'

const TECH_BLURBS: Record<string, string> = {
  'Typescript': 'So what if it\'s pain sometimes? It\'s worth it as soon as you scale beyond a few shared components and more than one developer.',
  'Node': 'Even us Front End devs need spin up some backend or just whip up a CLI to take care of repetitive business. When I need to get right to the point, Node is my go-to.',
  'React': 'Battle tested, kid approved. Most of the time I just want to get my ideas off the ground, and the expansive documentation and support of React means I can nearly always find a clear path to a working prototype.',
  'Web Components': 'Let\'s get native! I\'ve done my share of building product and UI kits with Web components, and vanilla JS never lets me down. I\'m excited to see the standard grow in the future, and will always keep them close at hand for the right projects.',
  'Figma': 'Even though I\'ve stuck with Adobe for 20+ years, you just can\'t beat Figma for collaboration and quick design iteration. The Plugins, workflow, and community are second to none.',
  'Adobe Creative Suite': 'For raw design power, nothing can match Adobe\'s Creative Suite. I reach into this suite often to refine vectors and typography, perfect raster graphics, and create awesome animations.',
  'OpenAI': 'We have our pick of LLMs to build with, but I appreciate OpenAI\'s commitment to quality docs and regular feature additions. My API of choice . . . for now.',
  'LangChain': 'The arguments are far from settled on the integration layers of building with LLMs, but LangChain is a great option for getting rolling on interesting LLM integration ideas, and continues to add new leverage for builders.',
  'Midjourney': 'Again, there\'re plenty to pick from in the image generation space, but Midjourney\'s params and amazing quality makes it my default for rapid idea generation, whether churning out product concepts or fanciful artwork for creative projects.',
}

export default function TechIcons({ featuredArticles }) {
  const [blurb, setBlurb] = useState('')
  const [blurbTitle, setBlurbTitle] = useState('')

  const { Development, Design, AI } = featuredArticles;
  console.log(Development);

  // const features = await getReadingList();
  // filter by domain && Latest || featured
  // should have unique GROQ that narrows for me
  // rather than a full query of all articles and then filtering

  const onHover = (e: any) => {
    const value = e.target!.alt as string;
    setBlurbTitle(value);
    setBlurb(TECH_BLURBS[value]);
  }

  return (
    <div className="grid grid-cols-2 gap-2">
      <div>
        <h3 className={h3Style}>Development</h3>
        <div className={style.iconGroup} onMouseOver={e => onHover(e)} onFocus={e => onHover(e)}>
          <Image src={img.typescript} alt='Typescript' tabIndex={0} />
          <Image src={img.node} alt='Node' tabIndex={0} />
          <Image src={img.react} alt='React' tabIndex={0} />
          <Image src={img.webcomponents} alt='Web Components' tabIndex={0} />
        </div>

        <h3 className={h3Style}>Design</h3>
        <div className={style.iconGroup} onMouseOver={e => onHover(e)} onFocus={e => onHover(e)}>
          <Image src={img.figma} alt='Figma' tabIndex={0} />
          <Image src={img.creativesuite} alt='Adobe Creative Suite' tabIndex={0} />
        </div>


        <h3 className={h3Style}>AI</h3>
        <div className={style.iconGroup} onMouseOver={e => onHover(e)} onFocus={e => onHover(e)}>
          <Image src={img.openai} alt='OpenAI' tabIndex={0} />
          <Image src={img.langchain} alt='LangChain' tabIndex={0} />
          <Image src={img.midjourney} alt='Midjourney' tabIndex={0} />
        </div>
        <Link href={AI.link} target='blank' className='flex flex-col jusitfy-start items-start my-3 font-bold py-2 px-4 w-fit text-blue-300 bg-slate-800 hover:bg-slate-700 transition-all 400 rounded-lg'>
          <h4 className='mt-2 mb-2 text-yellow-300'>🧠 Currently Reading</h4>
          {AI.title}
        </Link>
        <Link href={Development.link} target='blank' className='flex flex-col jusitfy-start items-start my-3 font-bold py-2 px-4 w-fit text-blue-300 bg-slate-800 hover:bg-slate-700 transition-all 400 rounded-lg'>
          <h4 className='mt-2 mb-2 text-yellow-300'>🧠 Currently Reading</h4>
          {Development.title}
        </Link>
        <Link href={Design.link} target='blank' className='flex flex-col jusitfy-start items-start my-3 font-bold py-2 px-4 w-fit text-blue-300 bg-slate-800 hover:bg-slate-700 transition-all 400 rounded-lg'>
          <h4 className='mt-2 mb-2 text-yellow-300'>🧠 Currently Reading</h4>
          {Design.title}
        </Link>
      </div>
      <div>
        <h3 className={`${h3Style} text-2xl invisible`}>Why This Tool?</h3>
        <h3>{blurbTitle}</h3>
        <p>{blurb}</p>
      </div>
    </div>
  )
}




