import Footer from "@/components/Footer";
import { h1Style, mainWidthStyles } from "@/styles/tailwindStyles";
import Nav from "@/components/Nav";
import { Metadata } from "next";
import getNotionProjects from "@/cms-utils/notion-projects";
import { format } from "date-fns";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog page for Kevin Hyde",
};

export default async function Projects() {
  const projects = await getNotionProjects();
  console.log(projects);

  const statusIndicator = (status: string) => {
    switch (status) {
      case "In progress":
        return "bg-green-500";
      case "Not started":
        return "bg-orange-500";
      case "Done":
        return "bg-blue-500";
      case "parked":
        return "bg-yellow-500";
      case "abandoned":
        return "bg-black";
      default:
        return "bg-gray-500";
    }
  };

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
          {projects.length > 0 && (
            <div className="grid grid-cols-3 gap-4 pb-24 ">
              {projects.map((post: any) => {
                return (
                  <div
                    key={post.name}
                    className="flex flex-col justify-between bg-gray-200 rounded-2xl p-4 shadow-lg"
                  >
                    <h3 className="text-l font-bold text-gray-700">
                      {post.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Last Updated:{" "}
                      {format(new Date(post.dateUpdated), "MM/dd/yy")}
                    </p>
                    <p className="text-sm text-gray-500">{post.description}</p>
                    {post.tags.length > 0 && (
                      <div>
                        {/* <h3 className="text-md font-semibold text-gray-700">
                          Tags:
                        </h3> */}
                        <ul className="list-inside list-none">
                          {post.tags.map((tag, index) => (
                            <li key={index} className="text-sm text-gray-500">
                              <i className="fas fa-pencil-alt"></i> {tag}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <p className="text-sm text-gray-500 m-0">
                      <span
                        className={`inline-block w-2 h-2 ${statusIndicator(
                          post.status
                        )} rounded mr-2 ${
                          !["Done", "Not started", "abandoned"].includes(
                            post.status
                          )
                            ? "animate-blink"
                            : ""
                        }`}
                      ></span>
                      {post.status}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
          {projects.length == 0 && <p>No posts to show</p>}
        </main>
      </div>
      <Footer />
    </>
  );
}
