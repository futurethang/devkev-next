import React, { useState } from 'react'
import Image from 'next/image'
import style from '../styles/TechIcons.module.css'
import typescript from '../public/icons/typescript.svg'
import javascript from '../public/icons/javascript.svg'
import figma from '../public/icons/figma.svg'
import illustrator from '../public/icons/illustrator.svg'
import photoshop from '../public/icons/photoshop.svg'
import creativesuite from '../public/icons/creative-suite.svg'
import aftereffects from '../public/icons/aftereffects.svg'
import vscode from '../public/icons/vscode.svg'
import angular from '../public/icons/angular.svg'
import react from '../public/icons/react.svg'
import vue from '../public/icons/vue.svg'
import jest from '../public/icons/jest.svg'
import sass from '../public/icons/sass.svg'
import webpack from '../public/icons/webpack.svg'
import node from '../public/icons/node.svg'
import webcomponents from '../public/icons/webcomponents.svg'
import html from '../public/icons/html.svg'
import css from '../public/icons/css.svg'

export default function TechIcons(icon) {
  const [devLabel, setDevLabel] = useState('')
  const [designLabel, setDesignLabel] = useState('')

  const onHover = (e, section) => {
    if (e.target.alt) {
      section === 'dev' ? setDevLabel(e.target.alt) : setDesignLabel(e.target.alt)
    } else {
      return
    }
  }

  function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
  }

  return (
    <div className={style.techIcons}>
      <h3>Dev Tools: <span style={{color:'white'}}>{devLabel}</span></h3>
      <div className={style.iconGroup} onMouseOver={e => onHover(e, 'dev')}>
        <Image src={typescript} alt='Typescript' />
        <Image src={javascript} alt='Javascript' />
        <Image src={node} alt='Node' />
        <Image src={react} alt='React' />
        <Image src={webcomponents} alt='Web Components' />
        <Image src={html} alt='HTML5' />
        <Image src={css} alt='CSS3' />
        <Image src={sass} alt='Sass' />
        <Image src={angular} alt='Angular' />
        <Image src={vue} alt='Vue' />
        <Image src={jest} alt='Jest' />
        <Image src={webpack} alt='Webpack' />
        <Image src={vscode} alt='VSCode' />
      </div>
      <h3>Design Tools: <span style={{color:'white'}}>{designLabel}</span></h3>
      <div className={style.iconGroup} onMouseOver={e => onHover(e, 'design')}>
        <Image src={figma} alt='Figma' />
        <Image src={illustrator} alt='Illustrator' />
        <Image src={photoshop} alt='Photoshop' />
        <Image src={aftereffects} alt='After Effects' />
        <Image src={creativesuite} alt='Adobe Creative Suite' />
      </div>
      <h4 className='tech'>Solidity</h4>
    </div>
  )
}




