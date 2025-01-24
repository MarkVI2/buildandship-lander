import { IconUser } from "@tabler/icons-react";

interface ProfileCardProps {
  profile: {
    name: string;
    role: string;
    tags: string[];
  };
  onSelect: (profile: any) => void;
}

export const ProfileCard = ({ profile, onSelect }: ProfileCardProps) => {
  return (
    <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity" />
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center">
          <IconUser className="text-indigo-600" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900">{profile.name}</h3>
          <p className="text-sm text-indigo-600">{profile.role}</p>
        </div>
      </div>
      <div className="space-y-2">
        {profile.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="inline-block px-2 py-1 text-xs font-medium text-indigo-600 bg-indigo-50 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <button
        onClick={() => onSelect(profile)}
        className="mt-4 w-full py-2 text-sm font-medium text-indigo-600 bg-white rounded-lg shadow-sm hover:bg-indigo-50 transition-colors"
      >
        View Profile →
      </button>
    </div>
  );
};
