"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import style from '../styles/TechIcons.module.css'
import * as img from '../public/icons/index.js'
import { h3Style } from '@/styles/tailwindStyles'

export default function TechIcons() {
  const [devLabel, setDevLabel] = useState('')
  const [designLabel, setDesignLabel] = useState('')
  const [aiLabel, setAiLabel] = useState('')

  const onHover = (e: any, section: string) => {
    switch (section) {
      case 'dev':
        setDevLabel(titleCase(e.target.alt))
        break;
      case 'design':
        setDesignLabel(titleCase(e.target.alt))
        break;
      case 'ai':
        setAiLabel(titleCase(e.target.alt))
        break;
      default:
        break;
    }
  }

  function titleCase(str: string) {
    if (!str) return ''
    return str.toLowerCase().replace(/(^|\s)\S/g, (match) => match.toUpperCase());
  }

  return (
    <div className="">
      <p>
        Here's a sample of tools I use the most, but I'm always excited to learn new things that fit the project at hand.
      </p>
      <h3 className={h3Style}>Dev Tools: <span style={{ color: 'white' }}>{devLabel}</span></h3>
      <div className={style.iconGroup} onMouseOver={e => onHover(e, 'dev')} onFocus={e => onHover(e, 'dev')}>
        <Image src={img.typescript} alt='Typescript' tabIndex={0} />
        <Image src={img.javascript} alt='Javascript' tabIndex={0} />
        <Image src={img.node} alt='Node' tabIndex={0} />
        <Image src={img.react} alt='React' tabIndex={0} />
        <Image src={img.webcomponents} alt='Web Components' tabIndex={0} />
        <Image src={img.html} alt='HTML5' tabIndex={0} />
        <Image src={img.css} alt='CSS3' tabIndex={0} />
        <Image src={img.sass} alt='Sass' tabIndex={0} />
        <Image src={img.angular} alt='Angular' tabIndex={0} />
        <Image src={img.vue} alt='Vue' tabIndex={0} />
        <Image src={img.jest} alt='Jest' tabIndex={0} />
        <Image src={img.webpack} alt='Webpack' tabIndex={0} />
        <Image src={img.vscode} alt='VSCode' tabIndex={0} />
      </div>
      <h3 className={h3Style}>Design Tools: <span style={{ color: 'white' }}>{designLabel}</span></h3>
      <div className={style.iconGroup} onMouseOver={e => onHover(e, 'design')} onFocus={e => onHover(e, 'dev')}>
        <Image src={img.figma} alt='Figma' tabIndex={0} />
        <Image src={img.illustrator} alt='Illustrator' tabIndex={0} />
        <Image src={img.photoshop} alt='Photoshop' tabIndex={0} />
        <Image src={img.aftereffects} alt='After Effects' tabIndex={0} />
        <Image src={img.creativesuite} alt='Adobe Creative Suite' tabIndex={0} />
      </div>
      <h3 className={h3Style}>AI Tools: <span style={{ color: 'white' }}>{aiLabel}</span></h3>
      <div className={style.iconGroup} onMouseOver={e => onHover(e, 'ai')} onFocus={e => onHover(e, 'dev')}>
        <Image src={img.openai} alt='OpenAI' tabIndex={0} />
        <Image src={img.langchain} alt='LangChain' tabIndex={0} />
        <Image src={img.midjourney} alt='Midjourney' tabIndex={0} />
      </div>
    </div>
  )
}




