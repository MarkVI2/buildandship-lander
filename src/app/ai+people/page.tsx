"use client";
import { useState } from "react";
import {
  IconSearch,
  IconMessage2,
  IconChevronUp,
  IconUser,
  IconBuilding,
  IconX,
  IconBrandGithub,
  IconUserPlus,
} from "@tabler/icons-react";
import { ExternalLink } from "lucide-react";
import dynamic from "next/dynamic";

const InfiniteCarousel = dynamic(
  () => import("../components/InfiniteCarousel"),
  {
    ssr: false,
  }
);

// Data
const profiles: Profile[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Senior AI Engineer",
    status: "Open to Collaborating",
    location: "San Francisco, CA",
    company: "DeepMind",
    bio: "Building AGI systems | Previously @ Google Research | Stanford AI Lab Alumni",
    tags: ["Machine Learning", "PyTorch", "Transformers", "MLOps", "Research"],
    currentWork: [
      {
        project: "LLM Optimization Framework",
        description:
          "Developing novel approaches for large language model compression",
      },
    ],
    tldr: "",
    pastVentures: [
      {
        name: "TensorFlow Research Team",
        description: "Led research on model optimization",
        link: "https://tensorflow.org/research",
      },
      {
        name: "Stanford AI Lab",
        description: "Published 3 papers on transformer architectures",
        link: "https://ai.stanford.edu/research",
      },
    ],
    links: {
      github: "https://github.com/sarahchen",
      twitter: "https://twitter.com/sarahchen_ai",
      linkedin: "https://linkedin.com/in/sarahchen",
    },
  },
  {
    id: 2,
    name: "Alex Rodriguez",
    role: "Web3 Developer",
    status: "Currently Building",
    location: "Miami, FL",
    company: "Independent",
    bio: "Solidity Expert | DeFi Builder | YC W21",
    tags: ["Ethereum", "Solidity", "DeFi", "Smart Contracts", "TypeScript"],
    currentWork: [
      {
        project: "DeFi Lending Protocol",
        description:
          "Building next-gen lending markets with novel liquidation mechanisms",
      },
    ],
    tldr: "",
    pastVentures: [
      {
        name: "ETH Global Winner",
        description: "Built DeFi yield aggregator",
        link: "https://ethglobal.com/showcase/defi-yield",
      },
      {
        name: "CryptoKit",
        description: "Open source Solidity testing framework",
        link: "https://github.com/alex/cryptokit",
      },
    ],
    links: {
      github: "https://github.com/alexr",
      twitter: "https://twitter.com/alex_web3",
    },
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Full Stack Engineer",
    status: "Looking for Co-founder",
    location: "London, UK",
    company: "Ex-Meta",
    bio: "Building developer tools | 10x Engineer | Open Source Contributor",
    tags: ["React", "Node.js", "GraphQL", "AWS", "Kubernetes"],
    currentWork: [
      {
        project: "DevOps Platform",
        description: "Simplifying cloud deployments for startups",
      },
    ],
    tldr: "",
    pastVentures: [
      {
        name: "Meta Infrastructure",
        description: "Scaled React rendering pipeline",
        link: "https://engineering.fb.com/blog",
      },
      {
        name: "OSS Contributor",
        description: "Core contributor to Next.js",
        link: "https://github.com/vercel/next.js",
      },
    ],
    links: {
      github: "https://github.com/priyapatels",
      portfolio: "https://priya.dev",
    },
  },
  {
    id: 4,
    name: "David Kim",
    role: "Product Designer",
    status: "Available for Contract",
    location: "Seoul, South Korea",
    company: "Freelance",
    bio: "UX/UI Expert | Previously Design Lead @ Stripe",
    tags: ["Figma", "Design Systems", "User Research", "Motion Design"],
    currentWork: [
      {
        project: "Design System Framework",
        description: "Creating accessible component library",
      },
    ],
    tldr: "",
    pastVentures: [
      {
        name: "Stripe Design System",
        description: "Led redesign of Stripe Dashboard",
        link: "https://stripe.com/newsroom",
      },
      {
        name: "Figma Plugins",
        description: "Created accessibility toolkit (10k+ users)",
        link: "https://figma.com/community/plugin/access",
      },
    ],
    links: {
      portfolio: "https://davidkim.design",
      twitter: "https://twitter.com/davidkdesign",
    },
  },
  {
    id: 5,
    name: "Maria Garcia",
    role: "Security Engineer",
    status: "Mentoring",
    location: "Berlin, Germany",
    company: "CyberSec GmbH",
    bio: "Bug Bounty Hunter | CISSP | Security Researcher",
    tags: ["Penetration Testing", "Cloud Security", "Zero Trust", "DevSecOps"],
    currentWork: [
      {
        project: "Zero-Day Detection System",
        description: "ML-based vulnerability detection",
      },
    ],
    tldr: "",
    pastVentures: [],
  },
  {
    id: 6,
    name: "James Wilson",
    role: "ML Operations Lead",
    status: "Hiring Team",
    location: "Toronto, Canada",
    company: "Shopify",
    bio: "Scaling ML Systems | Previously @ Netflix",
    tags: ["Kubernetes", "TensorFlow", "Python", "CI/CD", "Docker"],
    currentWork: [
      {
        project: "ML Platform",
        description: "Building scalable ML infrastructure",
      },
    ],
    tldr: "",
    pastVentures: [],
  },
];

const currentUser = {
  name: "Alex Turner",
  status: "Building AI Products",
  avatar: null, // In case we don't have an avatar image
};

const ProfileCard: React.FC<{ profile: Profile; onClick: () => void }> = ({
  profile,
  onClick,
}) => (
  <div
    onClick={onClick}
    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer"
  >
    <div className="h-24 rounded-t-xl bg-gradient-to-r from-blue-500 to-purple-600" />
    <div className="p-4">
      <h3 className="font-semibold text-lg">{profile.name}</h3>
      <p className="text-gray-600 text-sm">{profile.role}</p>
      <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
        <IconBuilding size={16} />
        <span>{profile.company}</span>
      </div>
      <div className="mt-4 flex flex-wrap gap-1">
        {profile.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 bg-gray-100 rounded-full"
          >
            {tag}
          </span>
        ))}
        {profile.tags.length > 3 && (
          <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">
            +{profile.tags.length - 3}
          </span>
        )}
      </div>
    </div>
  </div>
);
const ProfileSidebar: React.FC<{
  profile: Profile;
  onClose: () => void;
  isOpen: boolean;
}> = ({ profile, onClose, isOpen }) => (
  <div
    className={`fixed right-0 top-0 w-96 h-full bg-white shadow-2xl overflow-y-auto
      transition-all duration-300 ease-in-out ${
        isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
  >
    <div className="h-40 relative bg-gradient-to-r from-blue-500 to-purple-600">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full bg-black/20 text-white"
      >
        <IconX size={24} />
      </button>
    </div>

    <div className="px-6 py-4 space-y-6">
      {/* Connect Button */}
      <button
        onClick={() => alert("Connection feature coming soon!")}
        className="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
      >
        <IconUserPlus size={20} />
        Connect with {profile.name}
      </button>

      {/* Name and Role */}
      <div>
        <h2 className="text-2xl font-bold">{profile.name}</h2>
        <p className="text-gray-600">{profile.role}</p>
        <p className="text-gray-500 mt-1">{profile.location}</p>
      </div>

      {/* TLDR Section */}
      <div>
        <h3 className="text-sm uppercase text-gray-500 font-medium mb-2">
          tldr
        </h3>
        <p className="text-gray-700">{profile.bio}</p>
      </div>

      {/* Current Work */}
      <div>
        <h3 className="text-sm uppercase text-gray-500 font-medium mb-2">
          today
        </h3>
        {profile.currentWork.map((work, index) => (
          <div key={index} className="mb-2">
            <p className="text-gray-700">• {work.project}</p>
            <p className="text-gray-500 text-sm ml-3">{work.description}</p>
          </div>
        ))}
      </div>

      {/* Past Ventures */}
      {profile.pastVentures.length > 0 && (
        <div>
          <h3 className="text-sm uppercase text-gray-500 font-medium mb-2">
            past ventures
          </h3>
          {profile.pastVentures.map((venture, index) => (
            <div key={index} className="mb-3">
              <div className="flex items-center gap-2">
                <span className="text-gray-700">• {venture.name}</span>
                {venture.link && (
                  <a
                    href={venture.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-1"
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
              <p className="text-gray-500 text-sm ml-3">
                {venture.description}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Links Section */}
      {profile.links && (
        <div className="mt-4">
          <h3 className="text-sm uppercase text-gray-500 font-medium mb-2">
            links
          </h3>
          <div className="flex gap-3">
            {profile.links.github && (
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <IconBrandGithub size={20} />
              </a>
            )}
            {profile.links.portfolio && (
              <a
                href={profile.links.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
      )}

      {/* Tags/Skills */}
      <div>
        <h3 className="text-sm uppercase text-gray-500 font-medium mb-2">
          skills & interests
        </h3>
        <div className="flex flex-wrap gap-2">
          {profile.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default function AIPeoplePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    // Check for search command
    if (value.startsWith("/search")) {
      setIsSearchMode(true);
      const searchQuery = value.replace("/search", "").trim();
      setSearchQuery(searchQuery);
    } else {
      setIsSearchMode(false);
      // Reset search query when not in search mode
      setSearchQuery("");
    }
  };

  const handleSearch = () => {
    // Implement search logic here
  };

  const handleSend = () => {
    // Implement send logic here
  };

  // Filter profiles based on search
  const filteredProfiles = profiles.filter(
    (profile) =>
      profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.tldr.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.currentWork.some((work) =>
        work.project.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      profile.pastVentures.some(
        (venture) =>
          venture.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          venture.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  const handleProfileClick = (profile: Profile) => {
    if (isSearchMode) {
      setSelectedProfile(profile);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 w-64 h-full p-8 border-r border-gray-100 bg-white/80 backdrop-blur-sm z-50 flex flex-col">
        {/* Top section */}
        <div className="flex-1">
          <div className="mb-16">
            <h1 className="text-2xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              AI +
            </h1>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              People
            </h1>
          </div>

          <div className="space-y-4 text-gray-600">
            <div className="flex items-center space-x-2 cursor-pointer hover:text-indigo-600 transition-colors">
              <IconSearch size={20} />
              <span>discover talent</span>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer hover:text-indigo-600 transition-colors">
              <IconMessage2 size={20} />
              <span>messages</span>
            </div>
            <div className="cursor-pointer hover:text-indigo-600 transition-colors">
              search
            </div>
          </div>
        </div>

        {/* Bottom section - Profile */}
        <div className="border-t border-gray-100">
          <div className="group relative py-4 px-2">
            <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded-xl transition-colors">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
                {currentUser.avatar ? (
                  <img
                    src={currentUser.avatar}
                    alt="Profile"
                    className="w-full h-full rounded-xl object-cover"
                  />
                ) : (
                  <IconUser size={20} className="text-indigo-600" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {currentUser.name}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {currentUser.status}
                </p>
              </div>

              <IconChevronUp
                size={16}
                className="text-gray-400 transform transition-transform group-hover:text-indigo-600"
              />
            </div>

            {/* Dropdown Menu - appears on hover */}
            <div className="absolute bottom-full left-0 w-full mb-2 hidden group-hover:block">
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 py-2">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  View Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-50"
                >
                  Sign Out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="ml-64 p-8">
        <div className="max-w-[calc(100vw-16rem)] mx-auto">
          <div className="relative">
            <div
              className={`flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide ${
                isSearchMode ? "overflow-x-hidden" : ""
              }`}
            >
              <InfiniteCarousel
                speed={isSearchMode ? 0 : 25}
                direction="left"
                itemWidth={280}
                gap={24}
                searchMode={isSearchMode}
              >
                {filteredProfiles.map((profile) => (
                  <div
                    key={profile.id}
                    className="w-[280px] h-[420px] flex-shrink-0 snap-center"
                  >
                    <ProfileCard
                      profile={profile}
                      onClick={() => setSelectedProfile(profile)}
                    />
                  </div>
                ))}
              </InfiniteCarousel>
            </div>
          </div>
        </div>

        {/* Updated Floating Chat Input */}
        <div className="fixed bottom-8 right-8 left-[280px] max-w-3xl mx-auto">
          {isSearchMode && (
            <div className="mb-2 flex justify-end search-badge">
              <span className="px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium">
                Search Mode
              </span>
            </div>
          )}

          <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg p-4">
            <div className="flex gap-4 items-center">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      isSearchMode ? handleSearch() : handleSend();
                    }
                  }}
                  placeholder={
                    isSearchMode
                      ? "Search profiles..."
                      : "Type /search to find profiles..."
                  }
                  aria-label={
                    isSearchMode ? "Search profiles" : "Message input"
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 
                             focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                             outline-none transition-all bg-white/50 disabled:opacity-50"
                  disabled={isLoading}
                />
              </div>
              <button
                onClick={isSearchMode ? handleSearch : handleSend}
                disabled={isLoading || !inputValue.trim()}
                className="bg-indigo-600 text-white px-6 py-3 rounded-xl 
                           hover:bg-indigo-700 active:scale-95 transition-all
                           disabled:opacity-50 disabled:cursor-not-allowed
                           flex items-center gap-2"
              >
                {isLoading ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  isSearchMode && <IconSearch size={18} />
                )}
                <span>{isSearchMode ? "Search" : "Send"}</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Right Profile Sidebar */}
      {selectedProfile && (
        <ProfileSidebar
          profile={selectedProfile}
          onClose={() => setSelectedProfile(null)}
          isOpen={!!selectedProfile}
        />
      )}
    </div>
  );
}
