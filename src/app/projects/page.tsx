"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flipper } from "react-flip-toolkit";
import ProjectCard from "../components/ProjectCard";
import Link from "next/link";
import { useTransition } from "../context/TransitionContext";

export default function Projects() {
  const { endTransition } = useTransition();

  useEffect(() => {
    endTransition();
  });

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
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Flipper flipKey="projects">
          <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
              <div className="flex justify-between items-center mb-16">
                <motion.h1 
                  className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Our Projects
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link 
                    href="/"
                    className="text-white/60 hover:text-white transition-colors text-lg"
                  >
                    ← Back
                  </Link>
                </motion.div>
              </div>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 * (index + 1) }}
                  >
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      image={project.image}
                      link={project.link}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </Flipper>
      </motion.div>
    </AnimatePresence>
  );
}
