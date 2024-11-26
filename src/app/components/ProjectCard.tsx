'use client';

import { Flipped } from 'react-flip-toolkit';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ProjectCard({ title, description, image, link }: ProjectCardProps) {
  return (
    <Flipped flipId={`project-${title}`}>
      <Link href={link}>
        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
          <div className="aspect-w-16 aspect-h-9">
            <Image
              src={image}
              alt={title}
              width={100}
              height={100}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </Link>
    </Flipped>
  );
}