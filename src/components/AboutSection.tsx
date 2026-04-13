import { MapPin } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="py-24 px-6">
    <div className="container mx-auto max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-2">
        À propos
      </h2>
      <div className="w-12 h-0.5 bg-primary mb-8" />
      <p className="text-muted-foreground leading-relaxed mb-4">
        Je m'appelle <span className="text-foreground font-medium">Louise Khary Faye</span>, développeuse Full-Stack basée à Dakar, Sénégal. Je suis passionnée par le développement d'applications web et mobiles, la conception d'API REST et les architectures microservices.
      </p>
      <p className="text-muted-foreground leading-relaxed mb-6">
        Je m'intéresse particulièrement au cloud (AWS) et à l'intelligence artificielle. J'aime créer des solutions élégantes qui résolvent des problèmes concrets.
      </p>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <MapPin size={16} className="text-primary" />
        Dakar, Sénégal
      </div>
    </div>
  </section>
);

export default AboutSection;
