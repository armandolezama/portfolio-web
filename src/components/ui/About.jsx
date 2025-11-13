import { motion } from "framer-motion";
import Button from "@/components/shared/button";
import { Github, Linkedin, Mail, Globe } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="max-w-5xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-3 gap-6 items-center">
        <div className="md:col-span-2">
          <motion.h1 initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} className="text-3xl md:text-4xl font-bold tracking-tight">Armando Lezama</motion.h1>
          <p className="text-muted-foreground mt-2">Full‑Stack · Data · AWS</p>
          <p className="mt-4 leading-relaxed text-sm md:text-base">
            Data scientist y desarrollador Full‑Stack con gran entusiasmo por la ciencia y la tecnología. He desarrollado proyectos frontend, backend y análisis de datos, además estoy incursionando con tecnología en la nube (AWS) y ya cuento con una certificación oficial. Aquí puedes encontrar algunos de los trabajos que he hecho.
          </p>
          <div className="flex gap-2 mt-4">
            <Button asChild size="sm"><a href="#projects">Ver proyectos</a></Button>
            <Button asChild size="sm" variant="outline"><a href="mailto:armando.lezama.psic@gmail.com"><Mail className="w-4 h-4 mr-2"/>Contacto</a></Button>
          </div>
        </div>
        <div className="md:justify-self-end flex gap-2">
          <Button asChild variant="outline" size="icon" aria-label="Github"><a href="https://github.com/armandolezama" target="_blank" rel="noreferrer"><Github className="w-5 h-5"/></a></Button>
          <Button asChild variant="outline" size="icon" aria-label="LinkedIn"><a href="https://linkedin.com/in/armandolezamapsic" target="_blank" rel="noreferrer"><Linkedin className="w-5 h-5"/></a></Button>
        </div>
      </div>
    </section>
  );
}

export default About;
