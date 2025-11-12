import ProjectsGrid from "./ProjectsGrid";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/shared/tabs";
import { Input } from "@/components/shared/input";
import { Filter } from "lucide-react";
import type { Project } from "@types/index";

const ProjectsTabs = ({ query, onQueryChange, categories, projects }: { query: string; onQueryChange: (v: string) => void, categories: string[], projects: Project }) => {
  return (
    <Tabs defaultValue="Todos" className="w-full">
      <div className="flex items-center justify-between gap-3 mb-3">
        <TabsList className="grid grid-cols-5 w-full md:w-auto">
          {categories.map((c) => (
            <TabsTrigger key={c} value={c}>{c}</TabsTrigger>
          ))}
        </TabsList>
        <div className="flex items-center gap-2 w-full md:w-72">
          <Filter className="w-4 h-4" />
          <Input placeholder="Buscar proyectos…" value={query} onChange={(e) => onQueryChange(e.target.value)} />
        </div>
      </div>

      {categories.map((c) => (
        <TabsContent key={c} value={c} className="mt-2">
          <ProjectsGrid activeCategory={c} query={query} projects={projects} />
        </TabsContent>
      ))}
    </Tabs>
  );
}

export default ProjectsTabs;