import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/shared/card";
import { Button } from "@/components/shared/button";
import { Badge } from "@/components/shared/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/shared/tabs";
import { Input } from "@/components/shared/input";
import { Switch } from "@/components/shared/switch";
import { Label } from "@/components/shared/label";
import { Github, Linkedin, Mail, Globe, ExternalLink, Filter } from "lucide-react";

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

const PROJECTS: Project[] = [
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

const CATEGORIES = ["Todos", "Web", "Data", "IA", "AWS"] as const;

function ProjectCard({ p }: { p: Project }) {
  return (
    <motion.div layout initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}>
      <Card className="h-full border border-border/60 shadow-sm hover:shadow-md transition-shadow">
        <CardHeader>
          <CardTitle className="text-lg">{p.title}</CardTitle>
          <CardDescription>{p.blurb}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <Badge key={t} variant="secondary" className="rounded-full">{t}</Badge>
          ))}
        </CardContent>
        <CardFooter className="flex gap-2">
          {p.link && (
            <Button asChild size="sm" variant="default">
              <a href={p.link} target="_blank" rel="noreferrer">
                <Globe className="w-4 h-4 mr-2" /> Demo
              </a>
            </Button>
          )}
          {p.repo && (
            <Button asChild size="sm" variant="outline">
              <a href={p.repo} target="_blank" rel="noreferrer">
                <Github className="w-4 h-4 mr-2" /> Código
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}

function ProjectsGrid({ activeCategory, query }: { activeCategory: string; query: string }) {
  const q = query.trim().toLowerCase();
  const items = PROJECTS.filter((p) =>
    (activeCategory === "Todos" || p.category === activeCategory) &&
    (q === "" || p.title.toLowerCase().includes(q) || p.blurb.toLowerCase().includes(q) || p.tech.join(" ").toLowerCase().includes(q))
  );
  return (
    <AnimatePresence mode="popLayout">
      {items.length === 0 ? (
        <p className="text-muted-foreground">No hay resultados. Ajusta filtros o búsqueda.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}

function ProjectsTabs({ query, onQueryChange }: { query: string; onQueryChange: (v: string) => void }) {
  return (
    <Tabs defaultValue="Todos" className="w-full">
      <div className="flex items-center justify-between gap-3 mb-3">
        <TabsList className="grid grid-cols-5 w-full md:w-auto">
          {CATEGORIES.map((c) => (
            <TabsTrigger key={c} value={c}>{c}</TabsTrigger>
          ))}
        </TabsList>
        <div className="flex items-center gap-2 w-full md:w-72">
          <Filter className="w-4 h-4" />
          <Input placeholder="Buscar proyectos…" value={query} onChange={(e) => onQueryChange(e.target.value)} />
        </div>
      </div>

      {CATEGORIES.map((c) => (
        <TabsContent key={c} value={c} className="mt-2">
          <ProjectsGrid activeCategory={c} query={query} />
        </TabsContent>
      ))}
    </Tabs>
  );
}

function ProjectsButtons({ query, onQueryChange, active, setActive }: { query: string; onQueryChange: (v: string) => void; active: string; setActive: (v: string) => void; }) {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <Button key={c} onClick={() => setActive(c)} size="sm" variant={active === c ? "default" : "outline"} className="rounded-full">
              {c}
            </Button>
          ))}
        </div>
        <div className="flex items-center gap-2 w-full md:w-72">
          <Filter className="w-4 h-4" />
          <Input placeholder="Buscar proyectos…" value={query} onChange={(e) => onQueryChange(e.target.value)} />
        </div>
      </div>
      <ProjectsGrid activeCategory={active} query={query} />
    </div>
  );
}

function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-3 gap-6 items-center">
        <div className="md:col-span-2">
          <motion.h1 initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} className="text-3xl md:text-4xl font-bold tracking-tight">Armando Lezama</motion.h1>
          <p className="text-muted-foreground mt-2">Full‑Stack · Data · AWS</p>
          <p className="mt-4 leading-relaxed text-sm md:text-base">
            Desarrollo productos web y sistemas escalables con enfoque en datos, buenas prácticas de ingeniería y experiencia de usuario. Este portafolio muestra ejemplos genéricos de mi forma de trabajar sin exponer proyectos privados.
          </p>
          <div className="flex gap-2 mt-4">
            <Button asChild size="sm"><a href="#projects">Ver proyectos</a></Button>
            <Button asChild size="sm" variant="outline"><a href="mailto:hola@example.com"><Mail className="w-4 h-4 mr-2"/>Contacto</a></Button>
          </div>
        </div>
        <div className="md:justify-self-end flex gap-2">
          <Button asChild variant="outline" size="icon" aria-label="Github"><a href="https://github.com/example" target="_blank" rel="noreferrer"><Github className="w-5 h-5"/></a></Button>
          <Button asChild variant="outline" size="icon" aria-label="LinkedIn"><a href="https://linkedin.com/in/example" target="_blank" rel="noreferrer"><Linkedin className="w-5 h-5"/></a></Button>
          <Button asChild variant="outline" size="icon" aria-label="Website"><a href="https://example.com" target="_blank" rel="noreferrer"><Globe className="w-5 h-5"/></a></Button>
        </div>
      </div>
    </section>
  );
}

export default function PortfolioMinimal() {
  const [modeTabs, setModeTabs] = React.useState(true); // true = Tabs, false = Botones
  const [activeBtn, setActiveBtn] = React.useState("Todos");
  const [query, setQuery] = React.useState("");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight">Armando · Portafolio</a>
          <nav className="hidden md:flex items-center gap-3">
            <a href="#about" className="text-sm hover:underline">Sobre mí</a>
            <a href="#projects" className="text-sm hover:underline">Proyectos</a>
            <a href="#contacto" className="text-sm hover:underline">Contacto</a>
          </nav>
        </div>
      </header>

      <About />

      <section id="projects" className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Proyectos</h2>
            <p className="text-muted-foreground text-sm">Elige si prefieres pestañas o botones para navegar.</p>
          </div>
          <div className="flex items-center gap-2">
            <Label htmlFor="modeTabs" className="text-sm">Pestañas</Label>
            <Switch id="modeTabs" checked={modeTabs} onCheckedChange={setModeTabs} />
            <Label htmlFor="modeTabs" className="text-sm">Botones</Label>
          </div>
        </div>

        {modeTabs ? (
          <ProjectsTabs query={query} onQueryChange={setQuery} />
        ) : (
          <ProjectsButtons query={query} onQueryChange={setQuery} active={activeBtn} setActive={setActiveBtn} />
        )}
      </section>

      <section id="contacto" className="max-w-6xl mx-auto px-4 pb-12">
        <Card className="border border-border/60">
          <CardHeader>
            <CardTitle>Contacto</CardTitle>
            <CardDescription>¿Te interesa colaborar? Escríbeme.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Button asChild variant="default"><a href="mailto:hola@example.com"><Mail className="w-4 h-4 mr-2"/>hola@example.com</a></Button>
            <Button asChild variant="outline"><a href="https://github.com/example" target="_blank" rel="noreferrer"><Github className="w-4 h-4 mr-2"/>GitHub</a></Button>
            <Button asChild variant="outline"><a href="https://linkedin.com/in/example" target="_blank" rel="noreferrer"><Linkedin className="w-4 h-4 mr-2"/>LinkedIn</a></Button>
          </CardContent>
        </Card>
      </section>

      <footer className="py-8 text-center text-xs text-muted-foreground">
        <a href="#" className="inline-flex items-center gap-1 hover:underline">
          Hecho con React, Tailwind y shadcn/ui <ExternalLink className="w-3 h-3" />
        </a>
      </footer>
    </div>
  );
}
