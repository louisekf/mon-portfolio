export interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  stack: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: "mobilite-urbaine",
    title: "Plateforme de mobilité urbaine intelligente",
    description:
      "Système distribué pour la gestion des services de mobilité urbaine. Cette plateforme repose sur une architecture microservices permettant une scalabilité et une résilience optimales.",
    features: [
      "Architecture microservices avec Spring Cloud",
      "Service Discovery avec Eureka",
      "API Gateway centralisée",
      "Communication inter-services asynchrone",
      "Monitoring et logging distribué",
    ],
    stack: ["Spring Cloud", "Spring Boot", "Eureka", "Docker", "MySQL"],
    github: "https://github.com/louisekf",
  },
  {
    id: "cartographie-recherche",
    title: "Plateforme de cartographie des projets de recherche",
    description:
      "Application permettant de visualiser et gérer des projets de recherche sur une carte interactive. Facilite la collaboration entre chercheurs et institutions.",
    features: [
      "Cartographie interactive des projets",
      "Gestion des chercheurs et institutions",
      "Recherche avancée et filtres",
      "Tableau de bord analytique",
      "Export de données",
    ],
    stack: ["Spring Framework", "Spring MVC", "Thymeleaf", "MySQL", "Leaflet"],
    github: "https://github.com/louisekf",
  },
  {
    id: "reconnaissance-faciale",
    title: "Système de gestion des présences par reconnaissance faciale",
    description:
      "Application permettant de détecter et enregistrer les présences automatiquement grâce à la reconnaissance faciale via AWS Rekognition.",
    features: [
      "Détection faciale en temps réel",
      "Enregistrement automatique des présences",
      "Tableau de bord de suivi",
      "Notifications et alertes",
      "Rapports et statistiques",
    ],
    stack: ["React", "AWS Rekognition", "Node.js", "MongoDB"],
    github: "https://github.com/louisekf",
  },
  {
    id: "transactions-bancaires",
    title: "Système de transactions bancaires",
    description:
      "Application console en C++ pour gérer des opérations bancaires : création de comptes, virements, historique des transactions.",
    features: [
      "Création et gestion de comptes",
      "Virements entre comptes",
      "Historique des transactions",
      "Gestion des soldes",
      "Interface console interactive",
    ],
    stack: ["C++", "Programmation orientée objet"],
    github: "https://github.com/louisekf",
  },
  {
    id: "transfert-colis",
    title: "Application mobile de transfert de colis",
    description:
      "Application mobile permettant d'envoyer et suivre des colis en temps réel, avec un système de notifications pour le suivi.",
    features: [
      "Envoi et réception de colis",
      "Suivi en temps réel",
      "Notifications push",
      "Historique des envois",
      "Système de paiement intégré",
    ],
    stack: ["Flutter", "Dart", "Firebase", "Google Maps API"],
    github: "https://github.com/louisekf",
  },
  {
    id: "gestion-smartphones",
    title: "Application de gestion de smartphones",
    description:
      "Application web pour gérer un stock de smartphones : ajout, modification, suppression et recherche de produits.",
    features: [
      "CRUD complet des smartphones",
      "Recherche et filtrage avancés",
      "Gestion des catégories",
      "Interface responsive",
      "Dashboard avec statistiques",
    ],
    stack: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/louisekf",
  },
  {
    id: "deploiement-multi-services",
    title: "Déploiement d'une application multi-services",
    description:
      "Mise en place d'un pipeline CI/CD et déploiement conteneurisé d'une application multi-services.",
    features: [
      "Pipeline CI/CD avec Jenkins",
      "Conteneurisation avec Docker",
      "Orchestration des services",
      "Tests automatisés",
      "Monitoring et logging",
    ],
    stack: ["Docker", "Jenkins", "Git", "CI/CD", "Linux"],
    github: "https://github.com/louisekf",
  },
];
