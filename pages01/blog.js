import { useState, useEffect } from "react";
import Head from 'next/head';
import Link from 'next/link';
import Footer from "../components/footer";
import styles from '@/styles/Home.module.css'

export default function Blog() {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch('https://www.ideasthat.click/data');
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <>
            <Head>
                <title>Blog</title>
            </Head>
            <main className={styles.main} >
                <h1>Blog</h1>
                <nav>
                    <Link href={'/'}>👈 Back</Link>
                </nav>
                <h2>🚧 Under Construction 🚧</h2>
            </main>
            <Footer />
        </>
    )
}
