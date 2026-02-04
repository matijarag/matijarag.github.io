"use client";
import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const ProjectsSection = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                {t.projects.title}
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ol className="relative border-s border-gray-700">
                    {t.projects.experiences.map((exp, index) => (
                        <li key={index} className="mb-10 ms-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-900 rounded-full -start-3 ring-8 ring-gray-900">
                                <svg
                                    className="w-2.5 h-2.5 text-blue-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </span>
                            <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
                                {exp.position} - {exp.company}
                                {exp.current && (
                                    <span className="bg-blue-900 text-blue-300 text-sm font-medium me-2 px-2.5 py-0.5 rounded ms-3">
                                        {language === "es" ? "Actual" : "Current"}
                                    </span>
                                )}
                            </h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
                                {exp.period}
                            </time>
                            <p className="mb-4 text-base font-normal text-gray-400">
                                {exp.description}
                            </p>
                            {exp.link && (
                                <a
                                    href={exp.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-400 underline"
                                >
                                    {language === "es" ? "Ver perfil" : "View profile"}
                                </a>
                            )}
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default ProjectsSection;
