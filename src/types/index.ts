export interface Project {
  id: number;
  name: string;
  link: string;
  description: string;
  image: string;
}


export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  initials: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  picture?: string;
}

export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: string;
  read: boolean;
}
