import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const contacts = [
  { icon: Mail, label: "louisekfaye@gmail.com", href: "mailto:louisekfaye@gmail.com" },
  { icon: Phone, label: "+221 772637549", href: "tel:+221772637549" },
  { icon: MapPin, label: "Dakar, Sénégal", href: undefined },
  { icon: Github, label: "github.com/louisekf", href: "https://github.com/louisekf" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/louise-khary-faye-0b6135298/" },
];

const ContactSection = () => (
  <section id="contact" className="py-24 px-6 bg-card/50">
    <div className="container mx-auto max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-2">
        Contact
      </h2>
      <div className="w-12 h-0.5 bg-primary mb-6" />
      <p className="text-muted-foreground mb-12">
        N'hésitez pas à me contacter pour discuter d'un projet, d'une collaboration ou simplement pour échanger.
      </p>

      <div className="flex flex-col gap-5">
        {contacts.map(({ icon: Icon, label, href }) => {
          const content = (
            <span className="inline-flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-200">
              <Icon size={18} className="text-primary shrink-0" />
              {label}
            </span>
          );
          return href ? (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer">
              {content}
            </a>
          ) : (
            <span key={label}>{content}</span>
          );
        })}
      </div>
    </div>
  </section>
);

export default ContactSection;
