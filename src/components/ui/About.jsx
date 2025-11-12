import { motion } from "framer-motion";
import { Button } from "@/components/shared/button";
import { Github, Linkedin, Mail, Globe } from "lucide-react";

const About = () => {
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

export default About;
