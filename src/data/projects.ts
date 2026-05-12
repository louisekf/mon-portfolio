export interface ProjectImage {
  src: string;
  alt: string;
  aspect?: "landscape" | "portrait" | "square";
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  about: string;
  features: string[];
  techStack: string[];
  githubUrl?: string;
  images?: ProjectImage[];
}

export const projects: Project[] = [
  {
    id: "smart-mobility",
    title: "Smart Mobility Platform",
    subtitle: "Microservices Architecture",
    description:
      "Plateforme intelligente de mobilité urbaine basée sur une architecture microservices avec Spring Cloud.",

    about:
      "Smart Mobility Platform est une solution de mobilité urbaine permettant de centraliser différents services de transport tels que Dakar Dem Dikk, le TER et le BRT au sein d’une plateforme unique. L’application facilite la gestion des trajets, des paiements et des notifications en temps réel grâce à une architecture microservices scalable et résiliente. Le projet met en avant la communication inter-services, la sécurisation des API ainsi que la centralisation des services via Spring Cloud.",

    features: [
      "Gestion des trajets et itinéraires",
      "Authentification et gestion des utilisateurs",
      "API Gateway centralisée",
      "Service Discovery avec Eureka",
      "Communication inter-services",
      "Gestion des paiements",
      "Système de notifications",
      "Dashboard administrateur",
      "Architecture scalable et résiliente",
      "Monitoring et logging centralisés",
    ],
    techStack: [
      "Spring Boot",
      "Spring Cloud",
      "Microservices",
      "Eureka",
      "Spring Security",
      "API Gateway",
      "MySQL",
    ],
    githubUrl: "https://github.com/louisekf/smart-mobility-pass",
    images: [
      { src: "/utils/smp/login.png", alt: "Architecture microservices", aspect: "landscape" },
      { src: "/utils/smp/accueilMariane.png", alt: "Dashboard de monitoring", aspect: "landscape" },
      { src: "/utils/smp/trajet.png", alt: "trajet2", aspect: "landscape" },
      { src: "/utils/smp/trajet2.png", alt: "trajet2", aspect: "landscape" },
      { src: "/utils/smp/trajetsMariane.png", alt: "trajetsMariane", aspect: "landscape" },
      { src: "/utils/smp/alertes.png", alt: "alertes", aspect: "landscape" },
      { src: "/utils/smp/pass.png", alt: "pass", aspect: "landscape" },
      { src: "/utils/smp/accueil-web.png", alt: "page-admin", aspect: "landscape" },
      { src: "/utils/smp/dashboard.png", alt: "Dashboard de monitoring", aspect: "square" },
    ],
  },
  {
    id: "cartographie-recherche",
    title: "Plateforme de Cartographie des Projets de Recherche",
    subtitle: "Research Management Platform",
    description:
      "Application web interactive permettant de centraliser, visualiser et gérer des projets de recherche.",
    about:
      "Cette plateforme facilite la gestion et la cartographie des projets de recherche à travers une interface interactive permettant de visualiser les projets, leurs domaines de recherche et leurs statistiques associées. L’application propose un espace administrateur pour gérer les données, importer des projets et suivre l’évolution des activités de recherche.",

    features: [
      "Cartographie interactive des projets",
      "Recherche et filtrage avancés",
      "Gestion des projets de recherche",
      "Dashboard statistique",
      "Importation de données CSV",
      "Panneau d’administration",
      "Fiches détaillées des projets",
      "Gestion des utilisateurs",
    ],
    techStack: [
      "Spring Boot",
      "React",
      "MySQL",
      "Thymeleaf",
    ],
    githubUrl: "https://github.com/louisekf/platform-gestion-projets",
    images: [
      { src: "/utils/gcpr/connexion.png", alt: "Carte interactive", aspect: "landscape" },
      { src: "/utils/gcpr/dashboard.png", alt: "Fiche projet", aspect: "landscape" },
      { src: "/utils/gcpr/projets.png", alt: "Fiche projet", aspect: "landscape" },
      { src: "/utils/gcpr/projet-detail.png", alt: "Fiche projet", aspect: "landscape" },
      { src: "/utils/gcpr/stats.png", alt: "Fiche projet", aspect: "landscape" },
      { src: "/utils/gcpr/import-csv.png", alt: "Fiche projet", aspect: "landscape" },
      { src: "/utils/gcpr/panneau_admin.png", alt: "Fiche projet", aspect: "landscape" },
    ],
  },
  {
    id: "reconnaissance-faciale",
    title: "Smart Attendance System",
    subtitle: "Facial Recognition System",
    description:
      "Système intelligent de gestion des présences basé sur la reconnaissance faciale.",
    about:
      "Cette application automatise la gestion des présences grâce à la reconnaissance faciale avec Amazon Rekognition. Le système permet d’identifier les utilisateurs en temps réel, d’enregistrer automatiquement les présences et de générer des rapports détaillés. L’architecture cloud repose sur plusieurs services AWS afin d’assurer l’automatisation des traitements, le stockage sécurisé des images et la gestion des workflows.",

    features: [
      "Reconnaissance faciale en temps réel",
      "Enregistrement automatique des présences",
      "Gestion des étudiants et des groupes",
      "Rapports et statistiques",
      "Dashboard administrateur",
      "Suivi des présences par semaine et semestre",
      "Automatisation des processus avec AWS Lambda",
      "Workflows avec AWS Step Functions",
      "Stockage sécurisé avec Amazon S3",
    ],
    techStack: [
      "React",
      "AWS",
      "Amazon Rekognition",
      "Lambda",
      "Step Functions",
      "S3",
      "API Gateway",
    ],
    githubUrl: "https://github.com/louisekf/smart-attendance-system",
    images: [
      { src: "/utils/sgpml/loginPage.png", alt: "Interface de reconnaissance faciale", aspect: "landscape" },
      { src: "/utils/sgpml/dashboad_admin.png", alt: "Interface de reconnaissance faci", aspect: "landscape" },
      { src: "/utils/sgpml/PageCours.png", alt: "Interface de reconnaissance fa", aspect: "landscape" },
      { src: "/utils/sgpml/dashboardSurveillant.png", alt: "Interface de re faciale", aspect: "landscape" },
      { src: "/utils/sgpml/prise_presence2.png", alt: "Interface faciale", aspect: "landscape" },
      { src: "/utils/sgpml/RapportParClasseEt Semestre.png", alt: "Interfce faciale", aspect: "landscape" },
      { src: "/utils/sgpml/rapportSemaine1.png", alt: "Interciale", aspect: "landscape" },
      { src: "/utils/sgpml/rapportSemaine2.png", alt: "Intle", aspect: "landscape" },
      { src: "/utils/sgpml/rapportSemaine4.png", alt: "Inteale", aspect: "landscape" },
      { src: "/utils/sgpml/RapportSemaine5.png", alt: "Intale", aspect: "landscape" },
    ],
  },/*
  {
    id: "transactions-bancaires",
    title: "Transactions Bancaires",
    subtitle: "C++",
    description: "Système de simulation de transactions bancaires développé en C++ avec programmation orientée objet.",
    about: "Application console simulant un système bancaire complet avec gestion des comptes, des transactions et des opérations courantes. Développée en C++ avec une approche orientée objet.",
    features: [
      "Création et gestion de comptes",
      "Virements et transferts",
      "Historique des transactions",
      "Gestion des soldes et découverts",
      "Authentification utilisateur",
    ],
    techStack: ["C++", "POO", "STL"],
    githubUrl: "#",
    images: [
      { src: "/placeholder.svg", alt: "Interface console C++", aspect: "landscape" },
    ],
  },*/
  {
    id: "transfert-colis",
    title: "Transfert de Colis",
    subtitle: "Flutter Mobile App",
    description:
      "Application mobile de transfert et de suivi de colis développée avec Flutter.",
    about:
      "Cette application mobile permet aux utilisateurs d’organiser, suivre et gérer des transferts de colis entre particuliers. L’application offre une expérience fluide grâce à la géolocalisation, au suivi en temps réel et aux notifications push. Développée avec Flutter, elle est compatible Android et iOS.",
    features: [
      "Création de demandes de transfert",
      "Suivi des colis en temps réel",
      "Géolocalisation des livraisons",
      "Notifications push",
      "Gestion des utilisateurs",
      "Système de notation et avis",
      "Historique des transferts",
      "Interface mobile responsive",
    ],
    techStack: [
      "Flutter",
      "Dart",
      "Firebase",
      "Google Maps API",
    ],
    githubUrl: "https://github.com/louisekf/gp_app",
  },
  {
    id: "gestion-smartphones",

    title: "SmartWorld",

    subtitle: "React E-Commerce App",

    description:
      "Application web de vente et de gestion de smartphones développée avec React.",

    about:
      "SmartWorld est une plateforme web moderne dédiée à la vente et à la gestion de smartphones. Les utilisateurs peuvent parcourir le catalogue, consulter les détails des appareils, rechercher et filtrer les smartphones selon différents critères, tandis que les administrateurs disposent d’un espace sécurisé permettant d’ajouter, modifier et supprimer des produits. L’application intègre un système d’authentification, une gestion des rôles, une interface responsive ainsi qu’un mode sombre pour améliorer l’expérience utilisateur.",

    features: [
      "Catalogue interactif de smartphones",
      "Consultation détaillée des produits",
      "Recherche et filtrage avancés",
      "Authentification des utilisateurs",
      "Gestion des rôles administrateur/client",
      "Ajout, modification et suppression de smartphones",
      "Protection des routes",
      "Mode sombre / clair",
      "Interface responsive moderne",
    ],

    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Router",
      "REST API",
    ],

    githubUrl: "#",

    images: [
      { src: "/utils/phone-app/accueil.png", alt: "Accueil SmartWorld", aspect: "landscape" },
      { src: "/utils/phone-app/accueil1.png", alt: "Catalogue de smartphones", aspect: "landscape" },
      { src: "/utils/phone-app/phones.png", alt: "Liste des smartphones", aspect: "landscape" },
      { src: "/utils/phone-app/phones-price.png", alt: "Filtrage par prix", aspect: "landscape" },
      { src: "/utils/phone-app/lastest.png", alt: "Derniers smartphones ajoutés", aspect: "landscape" },
      { src: "/utils/phone-app/black-mode.png", alt: "Mode sombre", aspect: "landscape" },
      { src: "/utils/phone-app/login.png", alt: "Authentification utilisateur", aspect: "landscape" },
      { src: "/utils/phone-app/detail-admin.png", alt: "Gestion administrateur", aspect: "landscape" },
      { src: "/utils/phone-app/edit-phone.png", alt: "Modification d’un smartphone", aspect: "landscape" },
      { src: "/utils/phone-app/edit-phone2.png", alt: "Formulaire d’édition", aspect: "landscape" },
    ],
  },
];