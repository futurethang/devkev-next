"use client";
import { format } from "date-fns";
import { useState, useEffect, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Listbox, Transition } from "@headlessui/react";
import { tagIcons } from "../constants/icons";
import { h4Style } from "@/styles/tailwindStyles";
import { Project } from "@/cms-utils/notion-projects";

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

function getTags(projects: any[]) {
  const tags = projects.reduce((acc: any, project: any) => {
    project.tags.forEach((tag: string) => {
      acc[tag] = true;
    });
    return acc;
  }, {});

  return tags;
}

export default function ProjectsList({ projects }: { projects: Project[] }) {
  return (
    <>
      <div className="flex justify-between">
        {projects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4  ">
            {projects.map((project: Project) => {
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
                                aria-label={tag}
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
        {projects.length == 0 && <p>No projects to show</p>}
      </div>
    </>
  );
}
