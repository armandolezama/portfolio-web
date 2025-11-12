import type { Project } from "@types/index";
import ProjectCard from "@/components/ui/ProjectCard";
import { AnimatePresence } from "framer-motion";

const ProjectsGrid = ({ activeCategory, query, projects }: { activeCategory: string; query: string, projects: Project }) => {
    const q = query.trim().toLowerCase();
    const items = projects.filter((p) =>
        (activeCategory === "Todos" || p.category === activeCategory) &&
        (q === "" || p.title.toLowerCase().includes(q) || p.blurb.toLowerCase().includes(q) || p.tech.join(" ").toLowerCase().includes(q))
    ) || [];
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

export default ProjectsGrid;
