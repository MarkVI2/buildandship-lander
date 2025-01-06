"use client";

import { Flipped } from "react-flip-toolkit";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  emoji: string;
  bgColor: string;
  link: string;
}

export default function ProjectCard({
  title,
  description,
  emoji,
  bgColor,
  link,
}: ProjectCardProps) {
  return (
    <Flipped flipId={`project-${title}`}>
      <Link href={link}>
        <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 w-200 h-25">
          <div className="flex flex-col gap-2">
            <div className={`${bgColor} p-2 rounded-lg w-fit`}>
              <span className="text-2xl">{emoji}</span>
            </div>
            <h4 className="text-xl font-semibold text-left">{title}</h4>
            <p className="text-gray-600 text-sm text-left overflow-hidden whitespace-nowrap text-ellipsis" style={{ maxWidth: '100%' }}>
              {description}
            </p>
          </div>
        </div>
      </Link>
    </Flipped>
  );
}
