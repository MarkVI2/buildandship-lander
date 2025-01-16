interface PastVenture {
  name: string;
  description: string;
  link?: string;
}
interface Profile {
  id: number;
  name: string;
  role: string;
  status: string;
  location: string;
  company: string;
  bio: string;
  tags: string[];
  currentWork: {
    project: string;
    description: string;
  }[];
  tldr: string;
  pastVentures: PastVenture[];
  links?: {
    portfolio?: string;
    github?: string;
    twitter?: string;
    linkedin?: string;
  };
}
