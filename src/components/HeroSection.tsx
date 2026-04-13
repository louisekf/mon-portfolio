import { ArrowDown } from "lucide-react";

const HeroSection = () => (
  <section className="min-h-screen flex items-center justify-center relative" style={{ background: "var(--hero-gradient)" }}>
    <div className="container mx-auto px-6 text-center fade-in-up">
      <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
        Développeuse Full-Stack
      </p>
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-semibold text-foreground leading-tight mb-6">
        Louise Khary<br />
        <span className="text-primary">Faye</span>
      </h1>
      <p className="max-w-lg mx-auto text-muted-foreground leading-relaxed mb-10">
        Passionnée par le développement d'applications web & mobiles,
        les architectures microservices et le cloud.
      </p>
      <a
        href="#about"
        className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
      >
        Découvrir mon profil
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </div>
  </section>
);

export default HeroSection;
