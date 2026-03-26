"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import AboutImage from "/public/programmercat.jpg";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const AboutSection = () => {
  const [tab, setTab] = useState("data");
  const [isPending, startTransition] = useTransition();
  const { language } = useLanguage();
  const t = translations[language];

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const TAB_DATA = [
    {
      title: t.about.tabs.data,
      id: "data",
      content: (
        <div className="skills-container">
          <ul className="list-disc pl-2">
            {t.about.skills.data.slice(0, 5).map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <ul className="list-disc pl-2">
            {t.about.skills.data.slice(5).map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      title: t.about.tabs.programming,
      id: "programming",
      content: (
        <div className="skills-container">
          <ul className="list-disc pl-2">
            {t.about.skills.programming.slice(0, 6).map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <ul className="list-disc pl-2">
            {t.about.skills.programming.slice(6).map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      title: t.about.tabs.education,
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          {t.about.education.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ),
    },
    {
      title: t.about.tabs.certifications,
      id: "certifications",
      content: (
        <ul className="list-disc pl-2">
          {t.about.awards.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src={AboutImage} width={500} height={500} alt="About Me" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">{t.about.title}</h2>
          <p className="text-base lg:text-lg">
            {t.about.description}
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("data")}
              active={tab === "data"}
            >
              {" "}
              {t.about.tabs.data}{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("programming")}
              active={tab === "programming"}
            >
              {" "}
              {t.about.tabs.programming}{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              {t.about.tabs.education}{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
