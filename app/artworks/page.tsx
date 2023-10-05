import Head from "next/head";
import Link from "next/link";
import Footer from "@/components/Footer";
import { getArtworks } from "@/cms-utils/sanity-art-posts";
import { mainWidthStyles } from "@/styles/tailwindStyles";

export default async function Blog() {
  const data = await getArtworks();

  return (
    <>
      <Head>
        <title>Arts</title>
      </Head>
      <main className={mainWidthStyles}>
        <h1>Arts</h1>
        <nav>
          <Link href={"/"}>👈 Back</Link>
        </nav>
        <h2>🚧 Under Construction 🚧</h2>
      </main>
      <Footer />
    </>
  );
}
