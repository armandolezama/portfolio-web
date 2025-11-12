export type Category = "Web" | "Data" | "IA" | "AWS";

export interface Project {
  id: string;
  title: string;
  blurb: string;
  link?: string;
  repo?: string;
  category: Category;
  tech: string[];
}