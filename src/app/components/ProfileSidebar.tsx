import {
  IconBuilding,
  IconMapPin,
  IconX,
  IconUserPlus,
} from "@tabler/icons-react";
import { useEffect, useRef } from "react";

interface Profile {
  name: string;
  role: string;
  status: string;
  coverColor: string;
  tags: string[];
  bio?: string;
  location?: string;
  company?: string;
}

interface ProfileSidebarProps {
  profile: Profile;
  onClose: () => void;
}

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({
  profile,
  onClose,
}) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div
      ref={sidebarRef}
      className="fixed right-0 top-0 w-96 h-full bg-white shadow-2xl 
                overflow-y-auto transition-transform duration-300 ease-out"
      style={{
        transform: "translateX(0)",
        animation: "slideIn 0.3s ease-out",
      }}
    >
      <div
        className="h-40 w-full relative"
        style={{ backgroundColor: profile.coverColor }}
      />

      <button
        className="absolute top-4 right-4 text-white hover:text-gray-200 
                 rounded-full bg-black/30 p-3 backdrop-blur-sm 
                 hover:scale-110 active:scale-95 transition-all duration-200"
        onClick={onClose}
        aria-label="Close profile sidebar"
      >
        <IconX size={24} strokeWidth={2.5} />
      </button>

      <div className="px-6 pb-6 relative">
        <div className="animate-slideUp">
          <img
            src="/api/placeholder/200/200"
            alt={profile.name}
            className="rounded-full w-24 h-24 object-cover border-4 border-white 
                         shadow-md transition-transform duration-200 hover:scale-105"
          />
          <div>
            <h1
              className="text-2xl font-semibold text-gray-900 hover:text-blue-600 
                            transition-colors duration-200"
            >
              {profile.name}
            </h1>
            <p className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
              {profile.role}
            </p>
          </div>

          {profile.bio && (
            <p className="text-gray-600 text-sm leading-relaxed">
              {profile.bio}
            </p>
          )}

          <div className="flex flex-wrap gap-2 items-center text-sm text-gray-600">
            {profile.company && (
              <div className="flex items-center gap-1">
                <IconBuilding size={16} />
                <span>{profile.company}</span>
              </div>
            )}
            {profile.location && (
              <div className="flex items-center gap-1">
                <IconMapPin size={16} />
                <span>{profile.location}</span>
              </div>
            )}
          </div>

          <div>
            <p className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-gray-600">{profile.status}</span>
            </p>
          </div>

          {profile.tags.length > 0 && (
            <div>
              <h2 className="font-medium text-gray-900 mb-2">
                Skills & Interests
              </h2>
              <div className="flex flex-wrap gap-2">
                {profile.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Add the connect button */}
        <button
          className="mt-4 w-full flex items-center justify-center gap-2 
                    bg-indigo-600 hover:bg-indigo-700 text-white 
                    px-4 py-2 rounded-lg transition-colors
                    active:scale-[0.98] transform duration-100"
          onClick={() => {
            // Handle connect action here
            console.log(`Connecting with ${profile.name}`);
          }}
        >
          <IconUserPlus size={20} />
          <span>Connect</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileSidebar;
