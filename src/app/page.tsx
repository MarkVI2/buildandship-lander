"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import TeamMember from "./components/TeamMember";
import ProjectCard from "./components/ProjectCard";
import CountdownButton from "./components/CountdownButton";

export default function Home() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const teamMembers = [
    {
      name: "Vedanth Nath",
      role: "Shipper",
      image: "/team/Ved.jpg",
      bio: "BA undergrad with a passion for entrepreneurship.",
      linkedin: "https://www.linkedin.com/in/vedanthnath/",
    },
    {
      name: "Ashish Ahuja",
      role: "Shipper",
      image: "/team/Ashish.jpg",
      bio: "BA undergrad with a passion for entrepreneurship.",
      linkedin: "https://www.linkedin.com/in/ashish-ahuja-548368274/",
    },
    {
      name: "Akshith Banethi",
      role: "Shipper",
      image: "/team/john.jpg",
      bio: "BA undergrad with a passion for entrepreneurship.",
      linkedin: "",
    },
    {
      name: "Atharv Garg",
      role: "Builder",
      image: "/team/Atharv.jpg",
      bio: "Engineering undergrad with a passion for computer related stuff.",
      linkedin: "https://www.linkedin.com/in/atharv-garg/",
      github: "https://github.com/MarkVI2",
    },
    {
      name: "Parv Dubey",
      role: "Builder",
      image: "/team/Parv.jpg",
      bio: "Engineering undergrad with a passion for computer related stuff.",
      linkedin: "https://www.linkedin.com/in/parv-dubey-10b45b317/",
      github: "https://github.com/Trisk101",
    },

    // Add more team members here
  ];
  const projects = [
    {
      title: "MUCalSync",
      description:
        "An app that helps the students of Mahindra University to sync their class time table and other college events to their google calendar.",
      image: "/projects/logo.png",
      link: "https://mucalsync.buildandship.org",
    },
    {
      title: "UniSwap",
      description:
        "An online Whatsapp Groupchat where students of Mahindra University can buy/sell items from/to other students of Mahindra University.",
      image: "/projects/UniSwap.jpg",
      link: "https://chat.whatsapp.com/L62D2jo5T27AMDfbzGEA5X",
    },
    {
      title: "New Project!!",
      description:
        "We hope your ready, another project is gonna be launching soon.",
      image: "/projects/Under Dev project logo.png",
      link: "https://buildandship.org/projects",
    },
    // Add more projects here
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrollingAllowed, setIsScrollingAllowed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll(".section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`min-h-screen ${!isScrollingAllowed ? "scroll-lock" : ""}`}>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-[60] px-6 py-4 flex justify-between items-center backdrop-blur-sm">
        <Link href="/">
          <h1 className="text-2xl font-bold">Build & Ship</h1>
        </Link>

        <div
          className={`burger-menu ${isMenuOpen ? "open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      {/* Full Screen Menu */}
      <div className={`full-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="h-full flex flex-col justify-center items-center space-y-12">
          <Link
            href="#about"
            className="menu-item"
            onClick={() => setIsMenuOpen(false)}>
            About Us
          </Link>
          <Link
            href="/projects"
            className="menu-item"
            onClick={() => setIsMenuOpen(false)}>
            Our Projects
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              We <span className="frijole-regular">Build</span> 🛠️
              <br />
              We <span className="font-sacramento">Ship</span> 🚀
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              Turning ideas into reality, one project at a time.
            </p>
            <br />
            <CountdownButton onComplete={() => setIsScrollingAllowed(true)} />
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="min-h-screen flex items-center justify-center px-6 md:px-20 py-20">
          <div ref={sectionRef} className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-12">
                Things we have &quot;launched&quot;
              </h2>
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
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="min-h-screen flex items-center justify-center px-6 md:px-20 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="flex items-center justify-center mb-8">
                <h2 className="text-4xl md:text-5xl font-bold">
                  Who pressed the button?
                </h2>
              </div>
              <p className="text-lg md:text-xl text-gray-600 mb-16 max-w-4xl mx-auto">
                Literally <span className="text-black underline">you</span> did.
                <br />
                <br />
                But... <br />
                &quot;Behind the scenes&quot; are people who are passionate
                builders and creators who believe in shipping products that
                matter. <br />
                Simply put we just love to{" "}
                <span className="text-black">Build it </span>and{" "}
                <span className="text-black">Ship it!</span>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member) => (
                  <TeamMember
                    key={member.name}
                    name={member.name}
                    role={member.role}
                    image={member.image}
                    bio={member.bio}
                    linkedin={member.linkedin}
                    github={member.github}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
