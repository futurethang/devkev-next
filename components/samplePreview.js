import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import style from '@/styles/Samples.module.css'

export default function SamplePreview({ sample } = props) {

  useEffect(() => {
    console.log("sample?", sample)
  }, [])

  return (
    <Link href={`/${sample.link}`} className={style.preview}>
      <h4>{sample.title}</h4>
      <p>{sample.copy}</p>
      <Image src={sample.thumbnail} alt={sample.alt} />
      <ul className={style.tags}>{sample.tags.map((tag, i) => <li key={i} className={style.tag}>{tag}</li>)}</ul>
    </Link>
  )
}
