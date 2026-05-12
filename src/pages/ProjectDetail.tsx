import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { ArrowLeft, Github, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";


const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-bold mb-4">Projet non trouvé</h1>
          <Link to="/" className="text-primary hover:underline text-sm">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  const images = project.images || [];
  const hasImages = images.length > 0;

  const prevImage = () => setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () => setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft size={16} />
            Retour aux projets
          </Link>

          <div className="mb-3 flex items-center gap-3">
            {project.subtitle && (
              <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                {project.subtitle}
              </span>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-3">
            {project.title}
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-8">{project.description}</p>

          {/* Image Carousel */}
          {hasImages ? (
            <div className="mb-12 relative">
              <div className="relative overflow-hidden rounded-xl border border-border bg-secondary aspect-video">
                <img
                  src={images[currentImage].src}
                  alt={images[currentImage].alt}
                  className="w-full h-full object-contain object-center transition-opacity duration-300"
                  loading="lazy"
                />
              </div>
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/90 border border-border flex items-center justify-center hover:bg-background transition-colors shadow-sm"
                    aria-label="Image précédente"
                  >
                    <ChevronLeft size={18} className="text-foreground" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/90 border border-border flex items-center justify-center hover:bg-background transition-colors shadow-sm"
                    aria-label="Image suivante"
                  >
                    <ChevronRight size={18} className="text-foreground" />
                  </button>
                  <div className="flex justify-center gap-2 mt-4">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentImage(i)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          i === currentImage ? "bg-primary" : "bg-border"
                        }`}
                        aria-label={`Image ${i + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="mb-12 relative">
              <div className="relative overflow-hidden rounded-xl border border-border bg-secondary aspect-video flex items-center justify-center">
                <span className="text-muted-foreground text-lg">À venir</span>
              </div>
            </div>
          )}

          {/* About */}
          <div className="mb-10">
            <h2 className="text-sm font-bold font-heading text-foreground mb-3">
              À propos
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.about}</p>
          </div>

          {/* Features */}
          <div className="mb-10">
            <h2 className="text-sm font-bold font-heading text-foreground mb-3">
              Fonctionnalités
            </h2>
            <ul className="space-y-2.5">
              {project.features.map((feature, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="mb-10">
            <h2 className="text-sm font-bold font-heading text-foreground mb-3">
              Stack technique
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="border border-border rounded-lg px-3 py-2 text-sm bg-secondary/50">{tech}</span>
              ))}
            </div>
          </div>

          {/* GitHub Link */}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <Github size={16} />
              Code source
            </a>
          )}
        </div>
      </main>
    </>
  );
};

export default ProjectDetail;