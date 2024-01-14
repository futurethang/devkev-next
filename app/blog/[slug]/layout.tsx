import Head from "next/head";
import Link from "next/link";
import Footer from "@/components/Footer";
import styles from "@/styles/Home.module.css";
import { backLinkStyle, mainWidthStyles } from "@/styles/tailwindStyles";
import Nav from "@/components/Nav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <div
        className={`my-2 mx-auto p-2 ${mainWidthStyles} bg-[#0c1a1f] rounded-xl`}
      >
        <Nav includeTitle />
      </div>
      <main className={mainWidthStyles}>
        {children}
        <aside className="p-4 rounded-2xl bg-slate-300 text-slate-800 m-4">
          Hi there! 👋 If you've read far enough to see this, you must like
          interesting things (and be pretty cool)! I like cool people. If you
          have any questions or comments, are hiring or need help with a
          project, please feel free to{" "}
          <a
            href="mailto:kphyde@gmail.com"
            className="text-blue-800 hover:underline"
          >
            send me an email 📨
          </a>
          .
        </aside>
        <nav>
          <Link className={backLinkStyle} href={"/blog"}>
            👈 Back
          </Link>
        </nav>
      </main>
      <Footer />
    </>
  );
}
