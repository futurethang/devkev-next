import Head from 'next/head'
import Link from 'next/link'
import Footer from "@/components/Footer";
import styles from '@/styles/Home.module.css'
import { backLinkStyle, mainWidthStyles } from '@/styles/tailwindStyles';
import Nav from '@/components/Nav';

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
            <div className={`my-2 mx-auto p-2 ${mainWidthStyles} bg-slate-900 rounded-xl`}>
                <Nav />
            </div>
            <main className={mainWidthStyles} >
                {children}
                <nav>
                    <Link className={backLinkStyle} href={'/blog'}>👈 Back</Link>
                </nav>
            </main>
            <Footer />
        </>
    )
}