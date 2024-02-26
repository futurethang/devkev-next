"use client";
import { format } from "date-fns";
import { useState, useEffect, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Listbox, Transition } from "@headlessui/react";
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

function getTags(projects: any[]) {
  const tags = projects.reduce((acc: any, project: any) => {
    project.tags.forEach((tag: string) => {
      acc[tag] = true;
    });
    return acc;
  }, {});

  return tags;
}

export default function ProjectsList({ projects }) {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  // list of tags, never changes, just needs to be pulled from the projects
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  // useEffect(() => {
  //   setTags(getTags(projects));
  // }, [projects]);

  // useEffect(() => {
  //   const newProjects = projects.filter((project) =>
  //     selectedTags.some((tag) => project.tags.includes(tag))
  //   );
  //   setFilteredProjects(newProjects);
  //   debugger;
  // }, [projects, selectedTags]);

  // const handleTagChange = (tag) => {
  //   setSelectedTags((prevTags) =>
  //     prevTags.includes(tag)
  //       ? prevTags.filter((t) => t !== tag)
  //       : [...prevTags, tag]
  //   );
  // };

  // const handleSortChange = () => {
  //   setFilteredProjects(projects);
  // };

  return (
    <>
      <div className="flex mb-4">
        {/* <div>
          <Listbox value={filteredProjects} onChange={handleTagChange}>
            <div className="relative mt-1">
              <Listbox.Button className="relative flex flex-wrap w-full py-2 pl-3 pr-10 text-left bg-slate-800 rounded-lg cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <span className="flex flex-wrap gap-2 ">
                  {Object.entries(tags).map(
                    ([tag, value], index) =>
                      value === true && (
                        <span
                          key={`${tag}-${index}`}
                          className="bg-gray-400 rounded-full px-2 py-1"
                        >
                          {tag}
                        </span>
                      )
                  )}
                </span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <FontAwesomeIcon icon={faChevronDown} aria-hidden="true" />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 w-full bg-slate-800 shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                  {Object.entries(tags).map(([tag, value], index) => (
                    <Listbox.Option
                      key={`${tag}-${index}`}
                      className={({ active }) =>
                        `${
                          active
                            ? "text-yellow-900 bg-yellow-100"
                            : "text-white"
                        }
                          flex justify-between cursor-default select-none relative py-2 px-4`
                      }
                      value={tag}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`${
                              selected ? "font-medium" : "font-normal"
                            } block truncate`}
                          >
                            <FontAwesomeIcon
                              icon={tagIcons[tag]}
                              aria-hidden="true"
                              aria-label={tag}
                              className="w-4 mr-4"
                            />
                            {tag}
                          </span>
                          {value ? (
                            <FontAwesomeIcon
                              icon={faCheck}
                              aria-hidden="true"
                            />
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div> */}
      </div>
      <div className="flex justify-between">
        {projects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4  ">
            {projects.map((project: any) => {
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
