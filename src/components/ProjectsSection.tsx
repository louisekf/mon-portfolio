import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";

const ProjectsSection = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-16 px-6">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-2">
          Projets
        </h2>
        <div className="w-12 h-0.5 bg-primary mb-12" />

        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => navigate(`/project/${project.id}`)}
              className="group text-left bg-card rounded-xl p-6 border border-border transition-all duration-300 hover:shadow-[var(--card-shadow-hover)] hover:-translate-y-1"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-serif text-xl font-semibold text-foreground leading-snug pr-4">
                  {project.title}
                </h3>
                <ArrowUpRight
                  size={18}
                  className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1"
                />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {project.description.slice(0, 160)}…
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-full bg-accent text-accent-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
