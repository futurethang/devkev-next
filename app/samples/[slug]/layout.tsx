import Head from 'next/head'
import Link from 'next/link'
import Footer from "@/components/Footer";
import styles from '@/styles/Home.module.css'
import { backLinkStyle } from '@/styles/tailwindStyles';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Head>
                <title>Blog</title>
            </Head>
            <main className={styles.main} >
                {children}
                <nav>
                    <Link className={backLinkStyle} href={'/samples'}>👈 Back</Link>
                </nav>
            </main>
            <Footer />
        </>
    )
}