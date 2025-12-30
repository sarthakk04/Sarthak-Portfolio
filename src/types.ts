export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  liveDemo?: string;
}

export type SkillCategory = "Frontend" | "Backend" | "Database" | "Tools" | "Languages";

export interface Skill {
  name: string;
  category: SkillCategory;
  level: number; // Kept for legacy/sorting, but hidden in UI
  iconSlug: string; // Slug for simpleicons.org
  color: string;
  description: string;
}

export interface Achievement {
  id: number;
  title: string;
  organization: string;
  date: string;
  description: string;
  image?: string;
}

export interface Social {
  name: string;
  url: string;
  icon: string;
}

export interface NavLink {
  name: string;
  href: string;
}
