import Badge from "@/components/shared/badge";
import { motion, } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/shared/card";
import Button from "@/components/shared/button";
import { Github, Globe } from "lucide-react";
import type { Project } from "@types/index";

const ProjectCard = ({ p }: { p: Project }) => {
  return (
    <motion.div layout initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}>
      <Card className="h-full border border-border/60 shadow-sm hover:shadow-md transition-shadow">
        <CardHeader>
          <CardTitle className="text-lg">{p.title}</CardTitle>
          <CardDescription>{p.blurb}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {p.tech.map((t: string) => (
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

export default ProjectCard;
