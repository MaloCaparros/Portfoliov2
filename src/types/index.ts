export interface Project {
  id: number;
  name: string;
  link: string;
  description: string;
  image: string;
}

export type ProjectFormData = Omit<Project, 'id'>;

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
