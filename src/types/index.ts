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

type CertDomain =
  | "Cloud"
  | "Data"
  | "Security"
  | "DevOps"
  | "AI"
  | "Networking"
  | "Other";

 export interface Certification {
  id: string;
  title: string;          // p.ej. "AWS Certified Cloud Practitioner"
  issuer: string;         // p.ej. "Amazon Web Services"
  level?: string;         // p.ej. "Foundational" | "Associate" | ...
  domain: CertDomain;     // para tabs/botones/filtros
  issuedOn: string;       // ISO date "YYYY-MM-DD"
  expiresOn?: string;     // ISO date (opcional)
  credentialUrl?: string; // link público de verificación
  credentialId?: string;  // id de la credencial (opcional)
  imageUrl?: string;      // badge/logo (opcional)
  skills?: string[];      // tags/temas (opcional)
}
