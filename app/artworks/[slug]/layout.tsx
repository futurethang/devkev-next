import Head from 'next/head'
import Link from 'next/link'
import Footer from "@/components/Footer";
import styles from '@/styles/Home.module.css'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Head>
                <title>Arts</title>
            </Head>
            <main className={styles.main} >
                <nav>
                    <Link href={'/'}>👈 Back</Link>
                </nav>
                {children}
            </main>
            <Footer />
        </>
    )
}