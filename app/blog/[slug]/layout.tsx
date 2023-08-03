import Head from 'next/head'
import Link from 'next/link'
import Footer from "@/components/footer";
import styles from '@/styles/Home.module.css'

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
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