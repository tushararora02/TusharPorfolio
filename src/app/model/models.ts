export interface Education {
  institute: string;
  degree:string;
  courses: string;
  duration: string;
}

export interface WorkExperience {
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export interface Skill {
  name: string;
  image:string
}

export interface Project {
  title: string;
  technologiesused: string;
  description: string[];
}

export interface ProjectDemo {
  title: string;
  image: string;
  url: string;
}
