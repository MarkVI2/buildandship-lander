"use client";

import { Flipped } from "react-flip-toolkit";
import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";
import Image from "next/image";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
  github?: string;
}

console.log("GitHub Icon available:", IconBrandGithub);

export default function TeamMember({
  name,
  role,
  image,
  bio,
  linkedin,
  github,
}: TeamMemberProps) {
  const springConfig = {
    stiffness: 300,
    damping: 30,
  };

  return (
    <Flipped flipId={`member-${name}`} spring={springConfig}>
      <div className="flex flex-col group">
        <div
          className="relative rounded-lg overflow-hidden shadow-lg 
          transform transition duration-300 ease-in-out
          group-hover:scale-[1.02] group-hover:shadow-xl">
          <Flipped inverseFlipId={`member-${name}`}>
            <div className="relative w-full aspect-w-3 aspect-h-4">
              <Image
                src={image}
                alt={name}
                width={1000}
                height={1000}
                className="h-full w-full object-cover"
                onError={(e) => {
                  console.error(`Error loading image for ${name}:`, e);
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300">
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-bold mb-2">{name}</h3>
                  <p className="text-xs font-medium mb-2">{role}</p>
                  <p className="text-xs mb-4">{bio}</p>

                  {/* Social Icons */}
                  <div className="flex gap-3 mt-2">
                    {linkedin && (
                      <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:opacity-80 transition-opacity">
                        <IconBrandLinkedin size={24} strokeWidth={2} />
                      </a>
                    )}
                    {github && (
                      <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:opacity-80 transition-opacity">
                        <IconBrandGithub size={24} strokeWidth={2} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Flipped>
        </div>
      </div>
    </Flipped>
  );
}
