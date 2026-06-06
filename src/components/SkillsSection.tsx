const categories = [
  {
    title: "Langages",
    items: ["Java", "JavaScript", "PHP", "C++"],
  },
  {
    title: "Frameworks & Technologies",
    items: ["Spring Boot", "Spring Cloud", "React", "Angular", "Node.js", "Laravel", "Flutter"],
  },
  {
    title: "Bases de données",
    items: ["MySQL", "Oracle", "MongoDB", "PostgreSQL" ,"Firebase"],
  },
  {
    title: "DevOps & Outils",
    items: ["Docker", "Jenkins", "Git", "CI/CD"],
  },
  {
    title: "Architecture",
    items: ["API REST", "Microservices"],
  },
  {
    title: "Cloud",
    items: ["AWS Cloud Developer", "Machine Learning (notions)"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-12 px-6 bg-card/100">
    <div className="container mx-auto max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-2">
        Compétences
      </h2>
      <div className="w-12 h-0.5 bg-primary mb-12" />

      <div className="grid sm:grid-cols-2 gap-8">
        {categories.map((cat) => (
          <div key={cat.title}>
            <h3 className="font-medium text-foreground mb-3 text-sm uppercase tracking-wider">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="text-sm px-3 py-1.5  border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors duration-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
