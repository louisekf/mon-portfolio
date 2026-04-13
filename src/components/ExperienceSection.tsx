const timeline = [
  {
    period: "2024 — Présent",
    title: "Master en Ingénierie des Systèmes d'Information",
    institution: "ESMT, Dakar",
  },
  {
    period: "2023 — 2024",
    title: "Licence 3 en Télécommunications et Informatique",
    subtitle: "Spécialisation : Développement d'applications réparties",
    institution: "ESMT, Dakar",
  },
  {
    period: "2020 — 2022",
    title: "Licence 2 en Mathématiques et Informatique",
    institution: "Université Iba Der Thiam, Thiès",
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-24 px-6">
    <div className="container mx-auto max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-2">
        Parcours
      </h2>
      <div className="w-12 h-0.5 bg-primary mb-12" />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

        <div className="space-y-10">
          {timeline.map((item, i) => (
            <div key={i} className="relative pl-8">
              {/* Dot */}
              <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-primary bg-background" />
              <span className="text-xs text-muted-foreground tracking-wider uppercase">
                {item.period}
              </span>
              <h3 className="font-serif text-lg font-semibold text-foreground mt-1">
                {item.title}
              </h3>
              {item.subtitle && (
                <p className="text-sm text-muted-foreground mt-0.5">{item.subtitle}</p>
              )}
              <p className="text-sm text-primary mt-1">{item.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
