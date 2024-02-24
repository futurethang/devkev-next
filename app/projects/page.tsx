import Footer from "@/components/Footer";
import { h1Style, mainWidthStyles } from "@/styles/tailwindStyles";
import Nav from "@/components/Nav";
import { Metadata } from "next";
import { getNotionProjects } from "@/cms-utils/notion-projects";
import ProjectsList from "@/components/ProjectsList";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog page for Kevin Hyde",
};

export default async function Projects() {
  const projects = await getNotionProjects();
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
          <p>Fail Often, Fail Fast</p>
          <ProjectsList projects={projects} />
        </main>
      </div>
      <Footer />
    </>
  );
}
