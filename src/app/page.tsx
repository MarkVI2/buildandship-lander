"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import LoadingScreen from "./components/LoadingScreen";
import BarTransition from "./components/BarTransition";
import ZoomTransition from "./components/ZoomTransition";
import CircularText from "./components/CircularText";
import { useTransition } from "./context/TransitionContext";


export default function Home() {
  const [isLoading] = useState(true);
  const [showTransition, setShowTransition] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const {} = useTransition();

  const handleProjectClick = (link: string) => {
    if (link !== "#") {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  const projects = [
    {
      title: "🛠️ MUCalSync",
      description: "An app that helps the students of Mahindra University to sync their class time table and other college events to their google calendar.",
      link: "https://mucalsync.vercel.app",
    },
    {
      title: "⇄ UniSwap",
      description: "An online Whatsapp Groupchat where students of Mahindra University can buy/sell items from/to other students of Mahindra University.",
      link: "https://chat.whatsapp.com/L62D2jo5T27AMDfbzGEA5X",
    },
    {
      title: "🚀 Incoming Project",
      description: "We are working on a new project that will be revealed soon.",
      link: "#",
    },
  ];

  const slideAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const aboutText = "We are a collective of college friends turned entrepreneurs, driven by our passion for innovation and technology. Based in Hyderabad, we're on a mission to build and ship products that make a difference.";

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused, projects.length]);

  return (
    <>
      {isLoading && <LoadingScreen onTransitionStart={() => setShowTransition(true)} />}
      {showTransition && (
        <BarTransition onTransitionComplete={() => setShowLogo(true)} />
      )}
      {showLogo && (
        <>
          <motion.img
            src="/logo.jpg"
            alt="Logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-6 left-6 w-12 z-50"
          />
          <nav className="fixed top-6 right-6 z-50">
            <motion.div
              className="flex gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Link 
                href="/projects" 
                className="text-white/80 hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  const text = document.querySelector('.text-container');
                  if (text) {
                    text.classList.add('animate-zoomOut');
                    setTimeout(() => {
                      window.location.href = '/projects';
                    }, 1200);
                  }
                }}
              >
                Projects
              </Link>
              <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                About
              </Link>
              <Link 
                href="#contact" 
                className="text-white/80 hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.querySelector('#contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }}
              >
                Contact
              </Link>
            </motion.div>
          </nav>
          <ZoomTransition aboutText={aboutText} />
          <CircularText />

          <div className="min-h-screen bg-black relative z-10 mt-[65vh]">
            <div className="max-w-6xl mx-auto px-6 py-24">
              <h2 className="text-6xl font-bold text-white mb-16 text-center">Recent Work</h2>
              
              <div className="relative w-full max-w-md mx-auto h-[180px]">
                <div 
                  className="relative w-full h-full"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.title}
                      className={`
                        absolute top-0 left-0 w-full
                        ${currentIndex === index ? 'block' : 'hidden'}
                      `}
                      initial="initial"
                      animate={currentIndex === index ? "animate" : "exit"}
                      variants={slideAnimation}
                      transition={{ duration: 0.5 }}
                      onClick={() => handleProjectClick(project.link)}
                    >
                      <div className="bg-white/10 rounded-xl p-5 hover:bg-white/15 transition-all duration-300">
                        <div className="flex items-start justify-between">
                          <div className="flex-1 min-w-0">
                            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                            <p className="text-white/60 text-sm leading-relaxed line-clamp-2">
                              {project.description}
                            </p>
                          </div>
                          <div className="flex-shrink-0 ml-4">
                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                              <svg 
                                className="w-5 h-5 text-white" 
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
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.p 
                className="text-white/60 text-center mt-12 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Click on Projects to view them all
              </motion.p>
            </div>

            {/* New Pop-up Events Section */}
          <div className="max-w-6xl mx-auto px-6 py-24 border-t border-white/10 bg-black/90">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center gap-8"
            >
              <h2 className="text-5xl font-bold text-white mb-8 text-center">Meet Us In Person</h2>
              
              <div className="bg-white/5 rounded-2xl p-8 max-w-3xl w-full backdrop-blur">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">Weekend Pop-up Events</h3>
                    <p className="text-white/80 text-lg mb-6">
                      Join us every weekend in Hyderabad for casual meetups where we discuss tech, startups, and innovation. Whether you &lsquo re a fellow entrepreneur, student, or just curious about what we do - you &lsquo re welcome!
                    </p>
                    <div className="space-y-3 text-white/70">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>Every Weekend</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span> TBA </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>TBA</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
            
            {/* Meet Up/Contact Section */}
            <div id = "contact"className="max-w-6xl mx-auto px-6 py-24 border-t border-white/10 bg-[#8BA5FF]">
              <h2 className="text-5xl font-bold text-white mb-16 text-center">INTERESTED IN WORKING TOGETHER?</h2>
              
              <div className="flex flex-col items-center gap-8 text-center">
                <p className="text-white/80 text-xl max-w-2xl">
                  Want to discuss your next project or interested in working with us? We &lsquo re always open to meeting new people and exploring exciting opportunities.
                </p>
                
                {/* Added Contact Information */}
                <div className="flex flex-col gap-4 mt-8">
                  <a 
                    href="mailto:ag@buildandship.org" 
                    className="text-white text-xl hover:text-white/80 transition-colors flex items-center gap-2 cursor-pointer group"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "mailto:admin@buildandship.org";
                    }}
                  >
                    <svg 
                      className="w-6 h-6 group-hover:text-white/80" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                      />
                    </svg>
                    <span className="border-b border-transparent hover:border-white transition-colors">
                    admin@buildandship.org
                    </span>
                  </a>
                  <a 
                    href="tel:+91 96190 27671" 
                    className="text-white text-xl hover:text-white/80 transition-colors flex items-center gap-2 cursor-pointer group"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "tel:+91 96190 27671";
                    }}
                  >
                    <svg 
                      className="w-6 h-6 group-hover:text-white/80" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                      />
                    </svg>
                    <span className="border-b border-transparent hover:border-white transition-colors">
                    +91 96190 27671
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
