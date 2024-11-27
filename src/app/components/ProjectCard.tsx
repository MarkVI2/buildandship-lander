"use client";

import { Flipped } from "react-flip-toolkit";
import Link from "next/link";
import Image from "next/image";

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
      <Link href={link}>
        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
          <div className="aspect-w-16 aspect-h-9">
            <Image
              src={image}
              alt={title}
              width={500}
              height={300}
              className="h-full w-full object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </div>
      </Link>
    </Flipped>
  );
}
