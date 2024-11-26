"use client";

import React from "react";
import Link from "next/link";
import { Flipper } from "react-flip-toolkit";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "MUCalSync",
      description:
        "An app that helps the students of Mahindra University to sync their class time table and other college events to their google calendar.",
      image: "/projects/logo.png",
      link: "https://mucalsync.vercel.app",
    },
    {
      title: "UniSwap",
      description:
        "An online Whatsapp Groupchat where students of Mahindra University can buy/sell items from/to other students of Mahindra University.",
      image: "/projects/UniSwap.jpg",
      link: "https://chat.whatsapp.com/L62D2jo5T27AMDfbzGEA5X",
    },
  ];

  return (
    <Flipper flipKey="projects">
      <div className="min-h-screen pt-24 px-6 md:px-20">
        <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 bg-white shadow-sm">
          <Link href="/" className="text-2xl font-bold">
            Build & Ship
          </Link>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </Flipper>
  );
}
