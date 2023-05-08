import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import SamplePreview from '../components/samplePreview';
import styles from '@/styles/Home.module.css'
import style from '@/styles/Samples.module.css'
import { samples } from '../constants/samples'
import { useState, useLayoutEffect } from 'react';

function Samples2() {
    const [stateSamples, setStateSamples] = useState([])
    const [sampleData, setSampleData] = useState(samples)

    useLayoutEffect(() => {
        createSectionToggleList()
    }, [])

    const createSectionToggleList = () => {
        const sectionArr = []
        for (const sample in samples) {
            sectionArr.push(
                {
                    displayLabel: samples[sample].displayLabel,
                    toggle: true
                })
        }
        setStateSamples(sectionArr)
    }

    const checkSelected = async (displayLabel) => {
        const updatedArray = stateSamples.map(item => {
            if (item.displayLabel === displayLabel) {
                return { ...item, toggle: !item.toggle };
            }
            return item;
        });
        setStateSamples(updatedArray);

    }

    const renderSample = (sample) => {
        const filteredSamples = sampleData.filter(item => item.displayLabel === sample.displayLabel)[0].samples
        return filteredSamples.map((sample, i) => {
            return (
                <SamplePreview sample={sample} key={`sample-${i}`} />
            )
        })
    }

    return (
        <>
            <Head>
                <title>Work Samples</title>
            </Head>
            <main className={styles.main}>
                <Header />
                <div>
                    <h2>Work Samples</h2>
                    <p>Dig into some samples and case studies of my efforts as a product polymath.</p>
                    <section>
                        <div className={style.chips} >
                            {stateSamples.map((section, i) => {
                                return (
                                    <div key={`selector-${i}`}>
                                        <input className={style.input} type="checkbox" name={section.displayLabel} value={section.displayLabel} id={i} checked={section.toggle} onClick={() => checkSelected(section.displayLabel)} />
                                        <label htmlFor={i} className={style.chip}>{section.displayLabel}</label>
                                    </div>
                                )
                            })}
                        </div>
                    </section>
                    {stateSamples.map(sample => {
                        return (
                            <section className={style.sampleSection} style={sample.toggle ? { display: 'flex' } : { display: 'none' }}>
                                <h2>{sample.displayLabel}</h2>
                                {renderSample(sample)}
                            </section>
                        )
                    })}
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Samples2;