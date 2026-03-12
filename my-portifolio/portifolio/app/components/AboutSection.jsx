"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
        {[
          "JavaScript",
          "TypeScript",
          "React",
          "Next.js",
          "NestJS",
          "MongoDB",
          "PostgreSQL",
          "Tailwind",
          "Figma",
          "Algorithms",
        ].map((skill) => (
          <div
            key={skill}
            className="bg-[#1a1a1a] border border-white/10 px-4 py-2 rounded-lg text-sm text-center hover:border-cyan-400 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-5 space-y-2 mt-4">
        <li>College Saint Patrick — Diploma in Software Development</li>
        <li>
          University of Kigali — Bachelor of Science with Honours in Business
          Information Technology
        </li>
      </ul>
    ),
  },
  {
    title: "Certification",
    id: "certification",
    content: (
      <ul className="list-disc pl-5 space-y-2 mt-4">
        <li>Programming Foundations with JavaScript — CodeSignal</li>
        <li>Front-End Development Libraries — FreeCodeCamp</li>
        <li>Algorithms & Data Structures — FreeCodeCamp</li>
        <li>Advanced UI/UX Design — Great Learning</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");

  return (
    <section id="about" className="text-white py-16 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}
        <div className="flex justify-center">
          <Image
            src="/done.png"
            alt="About image"
            width={600}
            height={600}
            className="w-full max-w-lg h-auto"
          />
        </div>

        {/* TEXT */}
        <div className="flex flex-col justify-center">

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
            I'm Mupenzi Herve, a Full-Stack Software Engineer passionate about
            creating interactive and responsive web applications. I specialize
            in building scalable and efficient solutions using modern
            technologies such as React, Next.js, Node.js, PostgreSQL, Tailwind,
            and TypeScript.
          </p>

          {/* TABS */}
          <div className="flex gap-6 mt-10">
            <TabButton
              selectTab={() => setTab("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>

            <TabButton
              selectTab={() => setTab("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>

            <TabButton
              selectTab={() => setTab("certification")}
              active={tab === "certification"}
            >
              Certification
            </TabButton>
          </div>

          {/* ANIMATED CONTENT */}
          <div className="mt-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {TAB_DATA.find((t) => t.id === tab)?.content}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;