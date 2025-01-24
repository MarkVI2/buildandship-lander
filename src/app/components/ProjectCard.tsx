"use client";

import { Flipped } from "react-flip-toolkit";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  link,
}: ProjectCardProps) {
  return (
    <Flipped flipId={`project-${title}`}>
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <motion.div
          className="group h-[300px] relative overflow-hidden rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
          whileHover={{
            scale: 1.05,
            height: "auto",
            transition: { duration: 0.3 },
          }}
        >
          <div className="h-[150px] relative">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div className="p-6 relative">
            <div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors truncate">
                {title}
              </h3>
              <p className="text-white/70 text-base leading-relaxed group-hover:line-clamp-none line-clamp-2">
                {description}
              </p>
            </div>

            <div className="mt-4 flex items-center text-white/60 group-hover:text-white/80 transition-colors">
              <span className="text-sm font-medium">View Project</span>
              <svg
                className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </div>
        </motion.div>
      </Link>
    </Flipped>
  );
}
