"use client";
import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

const LanguageSwitcher = () => {
    const { language, toggleLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLanguageChange = (lang) => {
        toggleLanguage(lang);
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-600 bg-[#121212] hover:bg-slate-800 transition-colors"
            >
                <span className="text-2xl">{language === "es" ? "🇨🇱" : "🇺🇸"}</span>
                <span className="text-white font-medium uppercase">{language}</span>
                <svg
                    className={`w-4 h-4 text-white transition-transform ${isOpen ? "rotate-180" : ""
                        }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-40 rounded-lg border border-slate-600 bg-[#1a1a1a] shadow-xl z-50">
                    <button
                        onClick={() => handleLanguageChange("es")}
                        className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-800 transition-colors ${language === "es" ? "bg-slate-800" : ""
                            }`}
                    >
                        <span className="text-2xl">🇨🇱</span>
                        <span className="text-white font-medium">Español</span>
                    </button>
                    <button
                        onClick={() => handleLanguageChange("en")}
                        className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-800 transition-colors rounded-b-lg ${language === "en" ? "bg-slate-800" : ""
                            }`}
                    >
                        <span className="text-2xl">🇺🇸</span>
                        <span className="text-white font-medium">English</span>
                    </button>
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
