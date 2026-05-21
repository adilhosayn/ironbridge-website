export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Project {
  id: string;
  name: string;
  shortName?: string;
  location: string;
  year: string | number;
  duration: string;
  description: string;
  type: "Domestic" | "International";
  image?: string;
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export interface Director {
  id: string;
  name: string;
  title: string;
  bio: string;
  image?: string;
}
