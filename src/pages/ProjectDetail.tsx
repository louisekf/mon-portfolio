import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink, Image } from "lucide-react";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Projet introuvable.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="container mx-auto max-w-3xl">
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
        >
          <ArrowLeft size={16} />
          Retour
        </button>

        {/* Images first */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="aspect-video rounded-lg bg-muted flex items-center justify-center border border-border"
            >
              <Image size={32} className="text-muted-foreground/40" />
            </div>
          ))}
        </div>

        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
          {project.title}
        </h1>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded-full bg-accent text-accent-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="text-muted-foreground leading-relaxed mb-10">
          {project.description}
        </p>

        <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
          Fonctionnalités
        </h2>
        <ul className="space-y-2 mb-10">
          {project.features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
              {f}
            </li>
          ))}
        </ul>

        {/* Links */}
        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-lg bg-foreground text-background hover:opacity-90 transition-opacity"
            >
              <Github size={16} />
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-lg border border-border text-foreground hover:bg-accent transition-colors"
            >
              <ExternalLink size={16} />
              Démo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
