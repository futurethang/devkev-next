import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import styles from '@/styles/Home.module.css'
import style from '@/styles/Samples.module.css'
import { samples } from '../constants/samples'
import { useEffect, useState } from 'react';

function Samples2() {
    const [visible, setVisible] = useState([])
    const [stateSamples, setStateSamples] = useState([])
    const [sampleData, setSampleData] = useState(samples)

    const selectAll = (source) => {
        // TO DO: 
        // 1. Set to unchecked when all others deselected
        // 2. Set to checked when all others selected
        const checkboxes = document.getElementsByTagName('input');
        if (source) {
            for (var i = 0, n = checkboxes.length; i < n; i++) {
                checkboxes[i].checked = source.target.checked;
            }
        } else {
            for (var i = 0, n = checkboxes.length; i < n; i++) {
                checkboxes[i].checked = true;
            }
        }
    }

    useEffect(() => {
        listSections()
        selectAll()
        checkSelected()
    }, [])

    const listSections = async () => {
        const sectionArr = []
        for (const sample in samples) {
            sectionArr.push(samples[sample].displaLabel)
        }
        await setStateSamples(sectionArr)
    }

    const checkSelected = async () => {
        const checkboxes = Array.from(document.getElementsByTagName('input'));
        const filteredArr = checkboxes.filter(item => item.checked).map(thing => thing.value).filter(label => label !== "all")
        await setVisible(filteredArr)
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
                    <p>Dig in to some samples and case studies of my efforts as a product polymath.</p>
                    <section>
                        <div className={style.chips} onClick={checkSelected}>
                            <input className={style.input} type="checkbox" onClick={e => selectAll(e)} id="myCheckbox" value="all" />
                            <label for="myCheckbox" className={style.chip}>All</label>
                            {stateSamples.map((section, i) => {
                                return (
                                    <>
                                        <input className={style.input} type="checkbox" name={section} value={section} id={i} />
                                        <label for={i} className={style.chip}>{section}</label>
                                    </>

                                )
                            })}
                        </div>
                    </section>
                    <section>
                        {visible.map(item => {
                            return (
                                <>
                                    <h2>{item}</h2>
                                    {sampleData[item].samples.map((sample, i) => {
                                        return (
                                            <>
                                                <h4>{sample.title}</h4>
                                                <p>{sample.copy}</p>
                                            </>
                                        )
                                    })}
                                </>

                            )
                        })}
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Samples2;
