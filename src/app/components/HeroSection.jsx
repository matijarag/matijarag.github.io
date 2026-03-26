"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import CatPc from "/public/catpc.png";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const HeroSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const handleDownloadCV = () => {
    const cvPath = language === "es"
      ? "/Matias Jara Cv ES.pdf"
      : "/Matias Jara Cv EN.pdf";

    const link = document.createElement("a");
    link.href = cvPath;
    link.download = `Matias_Jara_CV_${language.toUpperCase()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-center sm:justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              {t.hero.greeting}{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                t.hero.roles[0],
                1000,
                t.hero.roles[1],
                1000,
                t.hero.roles[2],
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <div className="flex justify-center sm:justify-start">
            <button
              onClick={handleDownloadCV}
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                {t.hero.downloadCV}
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src={CatPc}
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={340}
              height={340}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
