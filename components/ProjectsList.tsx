"use client";
import { format } from "date-fns";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { tagIcons } from "../constants/icons";
import { h4Style } from "@/styles/tailwindStyles";

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

export default function ProjectsList({ projects }) {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("dateUpdated");

  useEffect(() => {
    let newProjects = [...projects];
    if (filter) {
      newProjects = newProjects.filter((project) =>
        project.tags.includes(filter)
      );
    }
    newProjects.sort((a, b) => {
      if (a[sort] < b[sort]) return -1;
      if (a[sort] > b[sort]) return 1;
      return 0;
    });
    setFilteredProjects(newProjects);
  }, [filter, sort]);

  // Render the filtered and sorted projects
  return (
    <>
      <div className="flex mb-4">
        <div>
          <label htmlFor="filter">Filter by tag:</label>
          <select
            id="filter"
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
          >
            <option value="">All</option>
            {[
              ...Array.from(
                new Set(
                  projects.reduce((acc, project) => {
                    return [...acc, ...project.tags];
                  }, [])
                )
              ),
            ].map((tag, index) => (
              <option key={index} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="sort">Sort by:</label>
          <select
            id="sort"
            onChange={(e) => setSort(e.target.value)}
            value={sort}
          >
            <option value="dateUpdated">Date Updated</option>
            <option value="status">Status</option>
          </select>
        </div>
      </div>
      <div className="flex justify-between">
        {filteredProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4  ">
            {filteredProjects.map((project: any) => {
              return (
                <div
                  key={project.name}
                  className="flex flex-col gap-4 justify-between bg-slate-700 p-4 shadow-md rounded-sm"
                >
                  <div className="flex flex-col">
                    <h3 className={`${h4Style} my-0`}>{project.name}</h3>
                    <p className="m-0">
                      <span
                        className={`inline-block w-2 h-2 ${statusIndicator(
                          project.status
                        )} rounded mr-2 ${
                          !["Done", "Not started", "abandoned"].includes(
                            project.status
                          )
                            ? "animate-blink"
                            : ""
                        }`}
                      ></span>
                      {project.status}
                    </p>
                  </div>
                  <p>{project.description}</p>
                  <div className="flex flex-col justify-end">
                    {project.tags.length > 0 && (
                      <div>
                        <ul className="list-inside list-none flex flex-wrap gap-2">
                          {project.tags.map((tag, index) => (
                            <li key={index} title={tag}>
                              <FontAwesomeIcon
                                icon={tagIcons[tag]}
                                aria-hidden="true"
                              />
                              <span className="sr-only">{tag}</span>
                              <div className="tooltip">
                                <span
                                  className="tooltiptext"
                                  id={`tooltip-${index}`}
                                ></span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <p className="mb-0 mt-2 text-xs">
                      Last Updated:{" "}
                      {format(new Date(project.dateUpdated), "MM/dd/yy")}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {filteredProjects.length == 0 && <p>No projects to show</p>}
      </div>
    </>
  );
}
