const translations = {
  en: {
    nav: {
      home: "Home",
      about: "Experience",
      portfolio: "Work",
      skills: "Skills",
      contact: "Contact",
    },
    home: {
      headline: "I build Magento 2 stores for European brands.",
      description:
        "Full-stack developer at Morocommerce in Fez, Morocco. I work in PHP, JavaScript and React, from custom Magento modules to the storefront.",
      cta: "See my work",
      resume: "Download resume",
      liveStores: "Live stores I've worked on",
      photoAlt: "Portrait of Mehdi Aichouch",
    },
    about: {
      title: "Experience",
      intro:
        "Since December 2023 I've been building Magento 2 stores at Morocommerce. I'm also finishing a bachelor's in web frameworks and Java EE at ENSA Fez.",
    },
    portfolio: {
      title: "Work",
      description: "Client stores first, then open-source and personal projects.",
      live: "Live",
      opensNewTab: "opens in a new tab",
      otherTitle: "Open-source and personal projects",
      otherDescription: "Magento modules, web apps and tools, with the source code on GitHub.",
      viewCode: "View code",
      showAll: "Show all {count} projects",
      showLess: "Show fewer",
      projects: {
        carhartt: "B2B wholesale store for Carhartt WIP's retail partners, built on Magento 2.",
        anita: "Online store for the German lingerie and swimwear brand, built on Magento 2.",
        edwin: "European online store for the Japanese denim brand, built on Magento 2.",
        freespace: "Application for managing spaces, written in PHP.",
        requestify: "Request management system built with Laravel.",
        portfolio: "This site: React, Tailwind CSS and an AI assistant that answers questions about my work.",
        slackbot:
          "Python Slack bot that automatically hosts and manages daily stand-up meetings.",
        library:
          "Dockerized system with book cataloging, user auth, and automated borrowing workflows.",
        attributeImport:
          "Magento 2 module for bulk importing product attribute options from CSV files via the Admin Panel.",
        magentoFeatures:
          "Fully Dockerized Magento 2 sandbox with Varnish, Redis, RabbitMQ, and Robo task runner for developing production-quality custom modules.",
        echallenge:
          "Online exam platform with timed tests, slot booking and admin management. Spring Boot 3 REST API secured with JWT, React 19 front end.",
        freespaceBlog:
          "Django 6 blog platform with featured-post slider, nested comments, AJAX likes, infinite scroll, and user profiles.",
        jeeProducts:
          "Layered Jakarta EE product catalog with full CRUD, servlet MVC controller, and JDBC DAO on MySQL.",
      },
    },
    skills: {
      title: "Skills",
      description: "Tools I use at work and in my own projects.",
      groups: {
        commerce: "E-commerce",
        backend: "Backend",
        frontend: "Frontend",
        tooling: "Databases and tooling",
      },
    },
    contact: {
      title: "Contact",
      subtitle:
        "Hiring for a Magento or full-stack role, or need help with a store? Send me a message here or by email.",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      sending: "Sending…",
      cta: "Send message",
      resume: "Resume",
      errors: {
        name: "Enter your name",
        email: "Enter a valid email address, like name@company.com",
        message: "Enter a message",
      },
    },
    notification: {
      success: "Message sent. I'll reply by email.",
      error: "Your message wasn't sent. Check your connection and try again, or email me directly.",
    },
    resumeModal: {
      title: "Download my resume",
      subtitle: "Pick the version that fits the role.",
      roleLabel: "Resume version",
      fullstack: "Full-Stack",
      magento2: "Magento 2",
      english: "English (PDF)",
      french: "French (PDF)",
      cancel: "Close",
    },
    footer: {
      location: "Fez, Morocco.",
    },
    chat: {
      open: "Ask AI",
      close: "Close",
      title: "Ask about my work",
      subtitle: "AI assistant that knows my resume",
      greeting: "Ask about my experience, projects or skills. The assistant answers from my resume.",
      suggestions: [
        "What does Mehdi do at Morocommerce?",
        "Which Magento projects has he worked on?",
        "What's his tech stack?",
      ],
      placeholder: "Ask a question",
      disclaimer: "AI answers can be wrong. Check the resume for details.",
    },
    timeline: [
      {
        title: "ENSA Fez — Bachelor's in Web Frameworks & Java EE",
        date: "2025 – 2026, in progress",
        description:
          "Advanced web frameworks, Java Enterprise Edition (JEE) and large-scale system development.",
      },
      {
        title: "Morocommerce, Fez — Magento developer",
        date: "Dec 2023 – Present",
        description:
          "Develop and maintain Magento Commerce stores in PHP, JavaScript and TypeScript, including React-based front ends.",
      },
      {
        title: "Internship",
        date: "Aug 2023 – Dec 2023",
        description:
          "Built a working HR application in PHP within one month, streamlining the company's HR processes.",
      },
      {
        title: "ISTA Adarissa, Fez — Specialized technician in digital development",
        date: "2021 – 2023",
        description:
          "Full-stack web development diploma covering React.js, Laravel, databases and other web technologies.",
      },
      {
        title: "Faculty of Humanities, Fez — English studies",
        date: "2020 – 2021",
        description: "Built fluency in English and strengthened communication skills.",
      },
      {
        title: "Ahmed Zaki Alaoui High School, Fez — High school diploma",
        date: "2020",
        description: "Foundational studies preparing for higher education.",
      },
    ],
  },

  fr: {
    nav: {
      home: "Accueil",
      about: "Parcours",
      portfolio: "Projets",
      skills: "Compétences",
      contact: "Contact",
    },
    home: {
      headline: "Je développe des boutiques Magento 2 pour des marques européennes.",
      description:
        "Développeur full-stack chez Morocommerce à Fès. Je travaille en PHP, JavaScript et React, des modules Magento sur mesure jusqu'à la vitrine en ligne.",
      cta: "Voir mes projets",
      resume: "Télécharger le CV",
      liveStores: "Boutiques en ligne sur lesquelles j'ai travaillé",
      photoAlt: "Portrait de Mehdi Aichouch",
    },
    about: {
      title: "Parcours",
      intro:
        "Depuis décembre 2023, je développe des boutiques Magento 2 chez Morocommerce. Je termine en parallèle une licence en frameworks web et Java EE à l'ENSA de Fès.",
    },
    portfolio: {
      title: "Projets",
      description: "D'abord les boutiques clientes, puis les projets open source et personnels.",
      live: "En ligne",
      opensNewTab: "s'ouvre dans un nouvel onglet",
      otherTitle: "Projets open source et personnels",
      otherDescription: "Modules Magento, applications web et outils, avec le code source sur GitHub.",
      viewCode: "Voir le code",
      showAll: "Afficher les {count} projets",
      showLess: "Afficher moins",
      projects: {
        carhartt: "Boutique B2B de vente en gros pour les revendeurs de Carhartt WIP, sous Magento 2.",
        anita: "Boutique en ligne de la marque allemande de lingerie et de maillots de bain, sous Magento 2.",
        edwin: "Boutique en ligne européenne de la marque de denim japonaise, sous Magento 2.",
        freespace: "Application de gestion d'espaces, écrite en PHP.",
        requestify: "Système de gestion des demandes développé avec Laravel.",
        portfolio: "Ce site : React, Tailwind CSS et un assistant IA qui répond aux questions sur mon travail.",
        slackbot:
          "Bot Slack Python qui anime et gère automatiquement les réunions daily stand-up.",
        library:
          "Système dockerisé avec catalogage de livres, authentification et gestion d'emprunts.",
        attributeImport:
          "Module Magento 2 pour l'importation en masse d'options d'attributs produit depuis des fichiers CSV via le panneau d'administration.",
        magentoFeatures:
          "Environnement de développement Magento 2 entièrement dockerisé avec Varnish, Redis, RabbitMQ et Robo pour développer des modules personnalisés de qualité production.",
        echallenge:
          "Plateforme d'examens en ligne avec tests chronométrés, réservation de créneaux et gestion admin. API REST Spring Boot 3 sécurisée par JWT, front end React 19.",
        freespaceBlog:
          "Plateforme de blog Django 6 avec slider de posts mis en avant, commentaires imbriqués, likes AJAX, défilement infini et profils utilisateurs.",
        jeeProducts:
          "Catalogue de produits Jakarta EE en couches avec CRUD complet, contrôleur servlet MVC et DAO JDBC sur MySQL.",
      },
    },
    skills: {
      title: "Compétences",
      description: "Les outils que j'utilise au travail et dans mes projets.",
      groups: {
        commerce: "E-commerce",
        backend: "Backend",
        frontend: "Frontend",
        tooling: "Bases de données et outils",
      },
    },
    contact: {
      title: "Contact",
      subtitle:
        "Vous recrutez pour un poste Magento ou full-stack, ou vous avez besoin d'aide sur une boutique ? Écrivez-moi ici ou par email.",
      nameLabel: "Nom",
      emailLabel: "Email",
      messageLabel: "Message",
      sending: "Envoi…",
      cta: "Envoyer le message",
      resume: "CV",
      errors: {
        name: "Saisissez votre nom",
        email: "Saisissez une adresse email valide, par exemple nom@entreprise.com",
        message: "Saisissez un message",
      },
    },
    notification: {
      success: "Message envoyé. Je vous répondrai par email.",
      error: "Votre message n'a pas été envoyé. Vérifiez votre connexion et réessayez, ou écrivez-moi directement par email.",
    },
    resumeModal: {
      title: "Télécharger mon CV",
      subtitle: "Choisissez la version adaptée au poste.",
      roleLabel: "Version du CV",
      fullstack: "Full-Stack",
      magento2: "Magento 2",
      english: "Anglais (PDF)",
      french: "Français (PDF)",
      cancel: "Fermer",
    },
    footer: {
      location: "Fès, Maroc.",
    },
    chat: {
      open: "Demander à l'IA",
      close: "Fermer",
      title: "Questions sur mon parcours",
      subtitle: "Assistant IA qui connaît mon CV",
      greeting: "Posez vos questions sur mon expérience, mes projets ou mes compétences. L'assistant répond à partir de mon CV.",
      suggestions: [
        "Que fait Mehdi chez Morocommerce ?",
        "Sur quels projets Magento a-t-il travaillé ?",
        "Quelle est sa stack technique ?",
      ],
      placeholder: "Posez une question",
      disclaimer: "Les réponses de l'IA peuvent être inexactes. Consultez le CV pour les détails.",
    },
    timeline: [
      {
        title: "ENSA Fès — Licence en Frameworks Web & Java EE",
        date: "2025 – 2026, en cours",
        description:
          "Frameworks web avancés, Java Enterprise Edition (JEE) et développement de systèmes à grande échelle.",
      },
      {
        title: "Morocommerce, Fès — Développeur Magento",
        date: "Déc. 2023 – Aujourd'hui",
        description:
          "Développement et maintenance de boutiques Magento Commerce en PHP, JavaScript et TypeScript, y compris des front ends en React.",
      },
      {
        title: "Stage",
        date: "Août 2023 – Déc. 2023",
        description:
          "Développement en un mois d'une application RH fonctionnelle en PHP, qui a simplifié les processus RH de l'entreprise.",
      },
      {
        title: "ISTA Adarissa, Fès — Technicien spécialisé en développement digital",
        date: "2021 – 2023",
        description:
          "Diplôme de développement web full-stack : React.js, Laravel, bases de données et autres technologies web.",
      },
      {
        title: "Faculté des Lettres, Fès — Études d'anglais",
        date: "2020 – 2021",
        description: "Maîtrise de l'anglais et renforcement des aptitudes de communication.",
      },
      {
        title: "Lycée Ahmed Zaki Alaoui, Fès — Baccalauréat",
        date: "2020",
        description: "Formation de base, préparation à l'enseignement supérieur.",
      },
    ],
  },
};

export default translations;
