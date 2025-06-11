export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  liveDemo?: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
  color: string;
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