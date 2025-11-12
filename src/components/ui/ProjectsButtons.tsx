import ProjectsGrid from "@/components/ui/ProjectsGrid";
import Button from "@/components/shared/button";
import { Input } from "@/components/shared/input";
import { Filter } from "lucide-react";
import type { Project } from "@types/index";

function ProjectsButtons({ query, onQueryChange, active, setActive, categories, projects }: { query: string; onQueryChange: (v: string) => void; active: string; setActive: (v: string) => void, categories: string[], projects: Project }) {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
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
      <ProjectsGrid activeCategory={active} query={query} projects={projects}/>
    </div>
  );
}

export default ProjectsButtons;
