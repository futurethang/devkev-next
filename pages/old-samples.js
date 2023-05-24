import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import styles from '@/styles/Home.module.css'
import style from '@/styles/Samples.module.css'
import { samples } from '../constants/samples'
import { useEffect, useState } from 'react';

function Samples() {
    const [showing, setShowing] = useState(['Experience', 'Interface', 'Front End', 'Graphics', 'Motion'])
    const [stateSamples, setStateSamples] = useState(samples)

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
        selectAll()
        debugger;
        console.log(stateSamples)
    }, [])


    const checkSelected = () => {
        const checkboxes = Array.from(document.getElementsByTagName('input'));
        const filteredArr = checkboxes.filter(item => item.checked).map(thing => thing.value).filter(label => label !== "all")
        setShowing(filteredArr)
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
                            {
                                stateSamples.map((section, i) => {
                                    return (
                                        <>
                                            <input className={style.input} type="checkbox" name={section} value={section} id={i} />
                                            <label for={i} className={style.chip}>{section}</label>
                                        </>
                                    )
                                })
                            }
                            <input className={style.input} type="checkbox" name="Interface" value="Interface" id="2" />
                            <label for="2" className={style.chip}>Interface</label>
                            <input className={style.input} type="checkbox" name="Front End" value="Front End" id="3" />
                            <label for="3" className={style.chip}>Front End</label>
                            <input className={style.input} type="checkbox" name="Graphics" value="Graphics" id="4" />
                            <label for="4" className={style.chip}>Graphics</label>
                            <input className={style.input} type="checkbox" name="Motion" value="Motion" id="5" />
                            <label for="5" className={style.chip}>Motion</label>
                        </div>
                    </section>
                    <section>
                        {showing.map(item => {
                            return (
                                <>
                                    <h2>{item}</h2>
                                    {/* {samples[item].map(sample => {
                                    return (
                                        sample.title
                                    )
                                })} */}
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

export default Samples;
