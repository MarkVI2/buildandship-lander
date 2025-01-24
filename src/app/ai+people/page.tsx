"use client";
import { useState, useEffect } from "react";
import {
  IconSearch,
  IconMessage2,
  IconChevronUp,
  IconUser,
  IconX,
  IconBrandGithub,
  IconUserPlus,
} from "@tabler/icons-react";
import { ExternalLink } from "lucide-react";
import { ProfileCard } from "../components/sageComponents/ProfileCard";
import { ProfileCarousel } from "../components/sageComponents/ProfileCarousel";

// Add AIMessage type
type AIMessage = {
  role: "user" | "assistant";
  content: string;
};

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
    collaborationPotential: 90,
    commonInterests: [
      "Machine Learning",
      "Model Optimization",
      "AI Research",
      "MLOps",
    ],
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
    collaborationPotential: 90,
    commonInterests: [
      "Machine Learning",
      "Model Optimization",
      "AI Research",
      "MLOps",
    ],
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
    collaborationPotential: 90,
    commonInterests: [
      "Machine Learning",
      "Model Optimization",
      "AI Research",
      "MLOps",
    ],
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
    collaborationPotential: 90,
    commonInterests: [
      "Machine Learning",
      "Model Optimization",
      "AI Research",
      "MLOps",
    ],
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
    collaborationPotential: 90,
    commonInterests: [
      "Machine Learning",
      "Model Optimization",
      "AI Research",
      "MLOps",
    ],
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
    collaborationPotential: 90,
    commonInterests: [
      "Machine Learning",
      "Model Optimization",
      "AI Research",
      "MLOps",
    ],
  },
];

const currentUser = {
  name: "Alex Turner",
  status: "Building AI Products",
  avatar: null, // In case we don't have an avatar image
};

const ProfileSidebar: React.FC<{
  profile: Profile;
  onClose: () => void;
  isOpen: boolean;
  children?: React.ReactNode;
}> = ({ profile, onClose, isOpen, children }) => (
  <div
    className={`fixed right-0 top-0 w-96 h-full bg-background shadow-2xl overflow-y-auto
    transition-all duration-300 ease-in-out ${
      isOpen ? "translate-x-0" : "translate-x-full"
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
        <h2 className="text-2xl font-bold text-pink-600">{profile.name}</h2>
        <p className="text-indigo-600">{profile.role}</p>
        <p className="text-blue-500 mt-1">{profile.location}</p>
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

      <div className="px-6 py-4 space-y-4">
        <h3 className="text-sm uppercase text-gray-500 font-medium">
          AI Assistant
        </h3>
        {children}
      </div>
    </div>
  </div>
);

function getRandomProfile(
  profiles: Profile[],
  excludeIds: number[] = []
): Profile {
  const availableProfiles = profiles.filter((p) => !excludeIds.includes(p.id));
  const randomIndex = Math.floor(Math.random() * availableProfiles.length);
  return availableProfiles[randomIndex];
}

export default function AIPeoplePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [showIcebreakers, setShowIcebreakers] = useState(false);

  // New AI-related state
  const [aiMessages, setAiMessages] = useState<AIMessage[]>([]);
  const [activeIcebreakers, setActiveIcebreakers] = useState([
    "Tell me about your recent projects",
    "What's your tech stack?",
    "Looking for collaborators?",
    "Open to mentoring?",
  ]);

  const [connectionSuggestions, setConnectionSuggestions] = useState<Profile[]>(
    []
  );

  // Add state for active tab
  const [activeTab, setActiveTab] = useState<"discover" | "messages">(
    "messages"
  );
  const questionPrompts = [
    "Preferred way to collaborate?",
    "Tech stack of choice?",
    "Biggest project challenge?",
    "Dream project?",
    "Work style?",
    "Learning goals?",
  ];

  const statementPrompts = [
    "Show me builders who...",
    "Connect me with people who...",
    "Find teammates that...",
    "Looking for developers who...",
    "Match me with founders who...",
  ];

  // Modified handleSend with AI integration
  const handleAIAction = (icebreaker: string) => {
    // Add message directly instead of triggering handleSend
    setAiMessages((prev) => [...prev, { role: "user", content: icebreaker }]);

    // Clear input after sending
    setInputValue("");

    // Simulate AI response
    setTimeout(() => {
      setAiMessages((prev) => [
        ...prev,
        { role: "assistant", content: `I'll help you with: ${icebreaker}` },
      ]);
    }, 500);
  };

  const [hasMessages, setHasMessages] = useState(false);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Add user message
    setAiMessages((prev) => [...prev, { role: "user", content: inputValue }]);
    setHasMessages(true); // Set this to true when first message is sent

    // Clear input
    setInputValue("");

    // Add AI response after short delay
    setTimeout(() => {
      setAiMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Processing your message: ${inputValue}`,
        },
      ]);
    }, 500);
  };

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
    handleAIAction(`Search profiles: ${searchQuery}`);
  };

  const [filteredProfiles, setFilteredProfiles] = useState(profiles);

  // Update filtered profiles when search query changes
  useEffect(() => {
    const filtered = profiles.filter(
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
            venture.description
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
        )
    );
    setFilteredProfiles(filtered);
  }, [searchQuery]);

  const [randomProfile, setRandomProfile] = useState<Profile | null>(null);

  useEffect(() => {
    // Set initial random profile
    setRandomProfile(getRandomProfile(profiles));

    // Change random profile every 30 seconds
    const interval = setInterval(() => {
      setRandomProfile(getRandomProfile(profiles, [randomProfile?.id || 0]));
    }, 30000);

    return () => clearInterval(interval);
  }, []);
  const handlePromptSelection = (prompt: string) => {
    setInputValue(prompt); // Update the input value instead of sending message
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Left Sidebar */}
      <div className="fixed inset-y-0 hidden w-[256px] border-r border-dashed bg-card py-6 pl-6 transition-all md:block">
        <div className="relative flex h-full flex-col gap-2">
          <a className="pl-2" href="/">
            <div className="flex w-full items-center">
              {/* Logo SVG */}
              <svg
                width="28"
                height="28"
                viewBox="0 0 142 120"
                fill="none"
                className="text-indigo-600"
              >
                <path d="M56.7217..." fill="currentColor" />
              </svg>
            </div>
          </a>

          <div className="flex-1">
            <div className="mb-16">
              <h1 className="text-base font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                AI +
              </h1>
              <h1 className="text-base font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                People
              </h1>
            </div>

            <div className="space-y-4 text-gray-600">
              <div
                className={`flex items-center space-x-2 cursor-pointer transition-colors ${
                  activeTab === "messages"
                    ? "text-indigo-600"
                    : "hover:text-indigo-600"
                }`}
                onClick={() => setActiveTab("messages")}
              >
                <IconMessage2 size={20} />
                <span>messages</span>
              </div>
              <div
                className={`flex items-center space-x-2 cursor-pointer transition-colors ${
                  activeTab === "discover"
                    ? "text-indigo-600"
                    : "hover:text-indigo-600"
                }`}
                onClick={() => setActiveTab("discover")}
              >
                <IconSearch size={20} />
                <span>discover talent</span>
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
      </div>

      {/* Main Content */}
      <main className="md:pl-[20rem] p-8 text-grey-700">
        <div className="flex flex-col h-[80vh]">
          {activeTab === "messages" ? (
            <div className="flex items-center justify-center h-full">
              {!hasMessages ? (
                // Show carousel only when there are no messages
                <div className="w-full max-w-2xl bg-white/5 backdrop-blur-sm rounded-2xl p-2 mt-2">
                  <div className="flex flex-col gap-8">
                    <ProfileCarousel
                      profiles={profiles}
                      speed={2}
                      direction="ltr"
                      variant="profile"
                    />
                    <ProfileCarousel
                      key="question"
                      profiles={Array(6).fill(null)}
                      speed={2.5}
                      direction="rtl"
                      variant="question"
                      questionPrompts={questionPrompts}
                    />
                    <ProfileCarousel
                      key="statements"
                      profiles={Array(6).fill(null)}
                      speed={1}
                      direction="ltr"
                      variant="statement"
                      statementPrompts={statementPrompts}
                    />
                  </div>
                </div>
              ) : (
                // Show messages when they exist
                <div className="space-y-4 w-full max-w-3xl mx-auto">
                  {aiMessages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-2xl shadow-sm max-w-[85%] ${
                        msg.role === "assistant"
                          ? "bg-white/90 text-gray-800 ml-0"
                          : "bg-indigo-600 text-white ml-auto"
                      }`}
                    >
                      {msg.content}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {profiles.map((profile) => (
                <ProfileCard
                  key={profile.id}
                  profile={profile}
                  onSelect={setSelectedProfile}
                />
              ))}
            </div>
          )}
        </div>
        {/* Updated Floating Chat Input */}
        <div className="fixed bottom-8 right-8 left-[280px] max-w-3xl mx-auto text-grey-800">
          <button
            onClick={() => setShowIcebreakers(!showIcebreakers)}
            className="absolute -top-12 left-4 px-3 py-1.5 bg-white/80 backdrop-blur-md 
               border border-gray-200 rounded-full text-sm text-gray-600
               hover:bg-gray-50 transition-all shadow-sm
               flex items-center gap-2"
          >
            <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></span>
            Icebreakers
          </button>

          {/* Icebreakers Container */}
          {showIcebreakers && activeIcebreakers.length > 0 && (
            <div className="mb-4 animate-fade-in-up">
              <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg p-4">
                <h4 className="text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">
                  AI-Powered Icebreakers
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeIcebreakers.map((icebreaker) => (
                    <button
                      key={icebreaker}
                      onClick={() => {
                        handleAIAction(icebreaker);
                        setShowIcebreakers(false);
                        handlePromptSelection(icebreaker);
                      }}
                      className="px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-sm 
                       hover:bg-indigo-100 transition-colors whitespace-nowrap"
                    >
                      {icebreaker}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
          {isSearchMode && (
            <div className="mb-2 flex justify-end search-badge">
              <span className="px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium">
                Search Mode
              </span>
            </div>
          )}

          <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg p-4">
            <div className="flex gap-4 items-center">
              <div className="flex-1 relative text-grey-800">
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
                  className="text-gray-700 w-full px-4 py-3 rounded-xl border border-gray-200 
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
        >
          <button
            onClick={() =>
              handleAIAction(`Start collaboration with ${selectedProfile.name}`)
            }
            className="w-full py-2 px-4 bg-green-100 text-green-700 rounded-lg hover:bg-green-200"
          >
            🤖 Start AI-Powered Collab
          </button>
        </ProfileSidebar>
      )}

      <div className="space-y-4">
        {/* AI Messages */}
        <div className="space-y-4 max-w-3xl mx-auto mb-6">
          {aiMessages.map((msg, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-2xl shadow-sm max-w-[85%] ${
                msg.role === "assistant"
                  ? "bg-white/90 text-gray-800 ml-0"
                  : "bg-indigo-600 text-white ml-auto"
              }`}
            >
              {msg.content}
            </div>
          ))}
        </div>

        {/* Suggestions Container */}
        <div className="space-y-6 max-w-3xl mx-auto">
          {/* Connection Suggestions */}
          {connectionSuggestions.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                Similar Profiles
              </h4>
              <div className="grid gap-2">
                {connectionSuggestions.map((profile) => (
                  <button
                    key={profile.id}
                    onClick={() => setSelectedProfile(profile)}
                    className="w-full p-4 text-left bg-gradient-to-r from-blue-50 to-indigo-50 
                     rounded-xl hover:from-blue-100 hover:to-indigo-100 
                     transition-colors duration-200 shadow-sm group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">
                          {profile.name}
                        </p>
                        <p className="text-sm text-gray-600">{profile.role}</p>
                      </div>
                      <svg
                        className="w-5 h-5 text-gray-400 group-hover:text-indigo-500 transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
