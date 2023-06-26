import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import style from '@/styles/Samples.module.css'

export default function SamplePreview({ sample } = props) {
  return (
    <Link href={`/samples/${sample.link}`} className={style.preview}>
      <h4>{sample.title}</h4>
      <p>{sample.previewCopy}</p>
      <Image src={sample.thumbnail} alt={sample.alt} loading='lazy' height={245} />
      <ul className={style.tags}>{sample.tags.map((tag, i) => <li key={i} className={style.tag}>{tag}</li>)}</ul>
    </Link>
  )
}
