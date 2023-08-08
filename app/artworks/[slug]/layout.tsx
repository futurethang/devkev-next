import Head from 'next/head'
import Link from 'next/link'
import Footer from "@/components/Footer";
import { mainWidthStyles } from '@/styles/tailwindStyles';

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
            <main className={mainWidthStyles} >
                <nav>
                    <Link href={'/'}>👈 Back</Link>
                </nav>
                {children}
            </main>
            <Footer />
        </>
    )
}