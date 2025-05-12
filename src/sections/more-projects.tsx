"use client";
import Image from "next/image";
import { Result } from "postcss";
import { useState } from "react";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import CheckIcon from "@/assets/icons/check-circle.svg";
import GreenImage from "@/assets/images/grain.jpg";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";

// 🔹 Loyiha ma'lumotlari
const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    tech: ["Tailwind", "Next.js"],
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage, // Rasmni public papkaga joylang
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    tech: ["React", "Tailwind"],
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    tech: ["Next.js", "Tailwind", "AI"],
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2024",
    title: "AI Startup Landing Page",
    tech: ["AI"],
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

// 🔹 Barcha texnologiyalar ro'yxati
const allTags = ["All", "React", "Next.js", "Tailwind", "AI"];

export default function ProjectTabs() {
  const [activeTag, setActiveTag] = useState("All");

  const filteredProjects =
    activeTag === "All"
      ? portfolioProjects
      : portfolioProjects.filter((proj) => proj.tech.includes(activeTag));

  return (
    <div className="p-6 mt-20 container">
      <section className="text-center  md:py-24 px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Projects
        </h1>
        <p className="text-gray-400 text-lg md:text-xl">
          Explore a selection of my frontend and full-stack projects built using
          modern technologies like{" "}
          <span className="text-white font-medium">React</span>,{" "}
          <span className="text-white font-medium">Next.js</span>, and{" "}
          <span className="text-white font-medium">Tailwind CSS</span>. Each
          project reflects my dedication to performance, accessibility, and
          user-centered design.
        </p>
      </section>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-4 py-2 rounded-full border ${
              activeTag === tag
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid gap-6 md:grid-rows-2 lg:grid-rows-3  md:grid-cols-2 lg:grid-cols-2">
        {filteredProjects.map((project, idx) => (
          <div
            key={idx}
            className="relative z-0 overflow-hidden rounded-3xl bg-gray-800 px-1 pt-5 md:px-2 md:pt-2 lg:px-12 lg:pt-4
                         after:content-[''] after:absolute after:inset-0 after:z-10 after:pointer-events-none
                         after:rounded-3xl after:outline after:outline-white/20 after:-outline-offset-2"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 -z-10 opacity-5"
              style={{ backgroundImage: `url(${GreenImage.src})` }}
            ></div>

            <div className="p-4  lg:gap-16">
              <div className="left-">
                <h2 className="text-lg font-bold ">{project.title}</h2>
                <p className="text-sm  py-2 uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
                  {project.company} — {project.year}
                </p>
                <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                  {project.results.map((result) => (
                    <li
                      key={result.title}
                      className="flex gap-2 text-sm text-white/50 md:text-base"
                    >
                      <CheckIcon className="size-5 md:size-6" />
                      <span>{result.title}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" underline text-sm block mt-3"
                >
                  <button
                    className="bg-white text-gray-950 h-12 px-6 w-full rounded-xl font-semibold inline-flex
                                 items-center justify-center gap-2 mt-8 md:w-auto"
                  >
                    <span>Visit Live Site</span>
                    <ArrowUpRightIcon className="size-4" />
                  </button>
                </a>
              </div>
              {/* Right Column */}
              <div>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={300}
                  className="rounded-3xl mt-4 "
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
