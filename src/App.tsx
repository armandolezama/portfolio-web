import { useState } from "react";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import ProjectsTabs from "@/components/ui/ProjectsTabs";
import ProjectsButtons from "@/components/ui/ProjectsButtons";
import About from "@/components/ui/About";
import CertificationCard from "@/components/ui/CertificationCard";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/shared/card";
import Button from "@/components/shared/button";
import { Switch } from "@/components/shared/switch";
import { Label } from "@/components/shared/label";
import FeatureFlagComponent from "@/components/utils/FeatureFlagComponent";
import type { Project, Certification } from "./types";
import badgeAws from "@/Assets/aws_badge_cloud_practitioner.png";

const projects: Project[] = [
  {
    id: "p-generic-1",
    title: "Starter Full‑Stack — Auth + CRUD",
    blurb: "Plantilla mínima con login, roles y CRUD listo para escalar.",
    link: "#",
    repo: "#",
    category: "Web",
    tech: ["React", "TypeScript", "Node", "PostgreSQL"],
  },
  {
    id: "p-generic-2",
    title: "Data Pipeline — ETL básico",
    blurb: "Ingesta, limpieza y validación con pruebas de hipótesis.",
    link: "#",
    repo: "#",
    category: "Data",
    tech: ["Python", "Pandas", "PyTest", "SciPy"],
  },
  {
    id: "p-generic-3",
    title: "IA Ligera — Clasificador",
    blurb: "Clasificador simple con métricas y exportación ONNX.",
    link: "#",
    repo: "#",
    category: "IA",
    tech: ["Scikit‑learn", "ONNX", "FastAPI"],
  },
  {
    id: "p-generic-4",
    title: "AWS Infra — Cost Monitor",
    blurb: "Infra como código + alertas de costo y despliegue CI/CD.",
    link: "#",
    repo: "#",
    category: "AWS",
    tech: ["AWS", "Terraform", "Lambda", "GitHub Actions"],
  },
];

const categories = ["Todos", "Web", "Data", "IA", "AWS"] as const;

const certifications: Certification[] = [
  {
    id: "cert-aws-ccp",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    level: "Foundational",
    domain: "Cloud",
    issuedOn: "2025-01-15",            // cambia a tu fecha real
    expiresOn: "2028-01-15",           // si no expira, elimina el campo
    credentialUrl: "https://www.credly.com/badges/8d37685c-8cf3-4d95-a802-658b0d75da73", // pega tu URL real
    credentialId: "AWS05556629",      // opcional
    imageUrl: badgeAws, // ajusta la ruta a tu carpeta Assets
    skills: ["Cloud Fundamentals", "Security", "Billing", "Global Infra", "EC2", "S3", "IAM", "VPC"],
  },
];

const App = () => {
  const [modeTabs, setModeTabs] = useState(true); // true = Tabs, false = Botones
  const [activeBtn, setActiveBtn] = useState("Todos");
  const [query, setQuery] = useState("");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight">
            Armando · Portafolio
          </a>
          <nav className="hidden md:flex items-center gap-3">
            <a href="#about" className="text-sm hover:underline">
              Sobre mí
            </a>
            <a href="#projects" className="text-sm hover:underline">
              Proyectos
            </a>
            <a href="#contacto" className="text-sm hover:underline">
              Contacto
            </a>
          </nav>
        </div>
      </header>

      <About />

      <FeatureFlagComponent>
        <section id="projects" className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Proyectos
              </h2>
              <p className="text-muted-foreground text-sm">
                Elige si prefieres pestañas o botones para navegar.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Label htmlFor="modeTabs" className="text-sm">
                Pestañas
              </Label>
              <Switch
                id="modeTabs"
                checked={modeTabs}
                onCheckedChange={setModeTabs}
              />
              <Label htmlFor="modeTabs" className="text-sm">
                Botones
              </Label>
            </div>
          </div>

          {modeTabs ? (
            <ProjectsTabs
              query={query}
              onQueryChange={setQuery}
              categories={categories}
              projects={projects}
            />
          ) : (
            <ProjectsButtons
              query={query}
              onQueryChange={setQuery}
              active={activeBtn}
              setActive={setActiveBtn}
              categories={categories}
              projects={projects}
            />
          )}
        </section>
      </FeatureFlagComponent>

      <section id="projects" className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight ">Proyectos</h2>
            <p className="text-muted-foreground mt-10 ">Próximamente...</p>
          </div>
        </div>
      </section>

    <section id="projects" className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold tracking-tight">Certificaciones</h2>
        <p className="text-muted-foreground mt-1">Logros verificables en la nube y tecnología</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((c) => (
          <CertificationCard key={c.id} certificationData={c} />
        ))}
      </div>
    </section>

      <section id="contacto" className="max-w-6xl mx-auto px-4 pb-12">
        <Card className="border border-border/60">
          <CardHeader>
            <CardTitle>Contacto</CardTitle>
            <CardDescription>
              ¿Te interesa colaborar? Escríbeme.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Button asChild variant="default">
              <a href="mailto:armando.lezama.psic@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                armando.lezama.psic@gmail.com
              </a>
            </Button>
            <Button asChild variant="outline">
              <a
                href="https://github.com/armandolezama"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button asChild variant="outline">
              <a
                href="https://linkedin.com/in/example"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
          </CardContent>
        </Card>
      </section>

      <footer className="py-8 text-center text-xs text-muted-foreground">
        <a href="#" className="inline-flex items-center gap-1 hover:underline">
          Hecho con React, Tailwind y shadcn/ui{" "}
          <ExternalLink className="w-3 h-3" />
        </a>
      </footer>
    </div>
  );
};

export default App;
