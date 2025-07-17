import Footer from "@/components/Footer";
import { h1Style, mainWidthStyles } from "@/styles/tailwindStyles";
import Nav from "@/components/Nav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects page for Kevin Hyde",
};

export default function Projects() {
  return (
    <>
      <div className="flex-1">
        <div
          className={`my-2 mx-auto p-2 ${mainWidthStyles} bg-[#0c1a1f] rounded-xl`}
        >
          <Nav includeTitle />
        </div>
        <main className={mainWidthStyles}>
          <h1 className={h1Style}>Projects</h1>
          <p>
            This is an idea playground to showcase my many spinning plates. As a
            creative and technical professional, I'm constantly experimenting
            with new ideas and tools. Some of them keep moving, and some of them
            peter out, but they are all valuable opportunities for learning and
            growth.
          </p>
          <p>Fail Often, Fail Fast.</p>
          <div className="mt-8">
            <p className="text-gray-400">
              Projects section coming soon. Check back later for updates on my latest work!
            </p>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}