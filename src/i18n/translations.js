const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      portfolio: "Portfolio",
      skills: "Skills",
      contact: "Contact",
    },
    home: {
      title: "I'm a Magento 2 Developer",
      description:
        "Passionate Fullstack & Magento Developer | Crafting Seamless Digital Experiences | Proficient in Programming, Web Development, and Application Creation | Adaptable Team Player with a Creative & Curious Mindset | Committed to Continuous Learning & Professional Growth",
      cta: "Portfolio",
    },
    about: {
      title: "About Me",
    },
    portfolio: {
      title: "My Portfolio",
      description:
        "Discover the projects I've recently worked on, encompassing commercial applications, open-source contributions, and personal ventures.",
      categories: {
        all: "All",
        commercial: "Commercial",
        opensource: "Open Source",
        personal: "Personal",
      },
      viewLive: "View Live",
      viewCode: "View Code",
      projects: {
        freespace: "A space management application",
        requestify: "Request management system",
        carhartt: "B2B e-commerce platform",
        anita: "E-commerce website",
        edwin: "Fashion retail platform",
        portfolio: "Personal portfolio website",
        slackbot:
          "Python Slack bot that automatically hosts and manages daily stand-up meetings.",
        library:
          "Dockerized system with book cataloging, user auth, and automated borrowing workflows.",
        attributeImport:
          "Magento 2 module for bulk importing product attribute options from CSV files via the Admin Panel.",
        magentoFeatures:
          "Fully Dockerized Magento 2 sandbox with Varnish, Redis, RabbitMQ, and Robo task runner for developing production-quality custom modules.",
      },
    },
    skills: {
      title: "Skills",
      description: "These are the technologies I've worked with",
    },
    contact: {
      title: "Contact",
      subtitle: "Submit the form below to get in touch with me",
      namePlaceholder: "Enter your name",
      emailPlaceholder: "Enter your email",
      messagePlaceholder: "Enter your message",
      sending: "Sending...",
      cta: "Let's talk",
    },
    notification: {
      success: "Mail sent successfully!",
      error: "Error submitting form. Please try again.",
    },
    resumeModal: {
      title: "Choose Resume Language",
      subtitle: "Select your preferred language to download my resume",
      english: "English Version",
      french: "Version Française",
      cancel: "Cancel",
    },
    footer: {
      rights: "All rights reserved.",
    },
    chat: {
      title: "AI Assistant",
      subtitle: "Ask me about Mehdi",
      online: "Online",
      greeting: "Hi! I'm Mehdi's AI assistant. Ask me anything about his skills, experience, or projects!",
      suggestions: ["What are his skills?", "Tell me about his projects", "Work experience?"],
      placeholder: "Ask me anything...",
      error: "Sorry, I encountered an error. Please try again.",
      noApiKey: "API key not configured. Please add REACT_APP_ANTHROPIC_API_KEY to your .env file.",
    },
    timeline: [
      {
        title: "ENSA Fes — Bachelor's in Web Frameworks & Java EE",
        date: "2025–2026 (In Progress)",
        description:
          "Pursuing a comprehensive degree focusing on advanced web frameworks, Java Enterprise Edition (JEE), and large-scale system development.",
        type: "right",
      },
      {
        title: "Morocommerce, FES — Magento Developer",
        date: "Dec 2023 – Present",
        description:
          "Developed, optimized, and used PHP, JavaScript, and TypeScript for Magento Commerce websites. Focused on contemporary front-end frameworks like ReactJS and Magento 2.",
        type: "left",
      },
      {
        title: "Internship",
        date: "Aug 2023 – Dec 2023",
        description:
          "Developed a functional HR application using PHP, streamlining HR processes and improving organizational efficiency within one month.",
        type: "right",
      },
      {
        title: "ISTA Adarissa, FES — TS in Digital Development",
        date: "2021 – 2023",
        description:
          "Obtained skills in React.js, Laravel, managing databases, and diverse web technologies while obtaining a diploma as a full-stack web development specialized technician.",
        type: "left",
      },
      {
        title: "English Studies — Faculty of Humanities, Fez",
        date: "2020 – 2021",
        description:
          "Focused on developing proficiency in the English language and enhancing communication skills.",
        type: "right",
      },
      {
        title: "Ahmed Zaki Alaoui HS, FES — High School Degree",
        date: "2020",
        description:
          "Gained foundational knowledge and skills, preparing for higher education.",
        type: "left",
      },
    ],
  },

  fr: {
    nav: {
      home: "Accueil",
      about: "À Propos",
      portfolio: "Portfolio",
      skills: "Compétences",
      contact: "Contact",
    },
    home: {
      title: "Je suis Développeur Magento 2",
      description:
        "Développeur Fullstack & Magento passionné | Création d'expériences digitales fluides | Maîtrise de la programmation, du développement web et de la création d'applications | Esprit d'équipe créatif et curieux | Engagé dans l'apprentissage continu et la croissance professionnelle",
      cta: "Portfolio",
    },
    about: {
      title: "À Propos",
    },
    portfolio: {
      title: "Mon Portfolio",
      description:
        "Découvrez les projets sur lesquels j'ai récemment travaillé, incluant des applications commerciales, des contributions open source et des projets personnels.",
      categories: {
        all: "Tous",
        commercial: "Commercial",
        opensource: "Open Source",
        personal: "Personnel",
      },
      viewLive: "Voir le site",
      viewCode: "Voir le code",
      projects: {
        freespace: "Une application de gestion d'espaces",
        requestify: "Système de gestion des demandes",
        carhartt: "Plateforme e-commerce B2B",
        anita: "Site e-commerce",
        edwin: "Plateforme de mode",
        portfolio: "Site portfolio personnel",
        slackbot:
          "Bot Slack Python qui anime et gère automatiquement les réunions daily stand-up.",
        library:
          "Système dockerisé avec catalogage de livres, authentification et gestion d'emprunts.",
        attributeImport:
          "Module Magento 2 pour l'importation en masse d'options d'attributs produit depuis des fichiers CSV via le panneau d'administration.",
        magentoFeatures:
          "Environnement de développement Magento 2 entièrement dockerisé avec Varnish, Redis, RabbitMQ et Robo pour développer des modules personnalisés de qualité production.",
      },
    },
    skills: {
      title: "Compétences",
      description: "Les technologies avec lesquelles je travaille au quotidien",
    },
    contact: {
      title: "Contact",
      subtitle: "Remplissez le formulaire ci-dessous pour me contacter",
      namePlaceholder: "Votre nom",
      emailPlaceholder: "Votre email",
      messagePlaceholder: "Votre message",
      sending: "Envoi...",
      cta: "Parlons-en",
    },
    notification: {
      success: "Message envoyé avec succès !",
      error: "Erreur lors de l'envoi. Veuillez réessayer.",
    },
    resumeModal: {
      title: "Choisir la langue du CV",
      subtitle: "Sélectionnez votre langue préférée pour télécharger mon CV",
      english: "English Version",
      french: "Version Française",
      cancel: "Annuler",
    },
    footer: {
      rights: "Tous droits réservés.",
    },
    chat: {
      title: "Assistant IA",
      subtitle: "Posez vos questions sur Mehdi",
      online: "En ligne",
      greeting: "Bonjour ! Je suis l'assistant IA de Mehdi. Posez-moi n'importe quelle question sur ses compétences, son expérience ou ses projets !",
      suggestions: ["Quelles sont ses compétences ?", "Parlez-moi de ses projets", "Son expérience ?"],
      placeholder: "Posez votre question...",
      error: "Désolé, une erreur s'est produite. Veuillez réessayer.",
      noApiKey: "Clé API non configurée. Ajoutez REACT_APP_ANTHROPIC_API_KEY à votre fichier .env.",
    },
    timeline: [
      {
        title: "ENSA Fès — Licence en Frameworks Web & Java EE",
        date: "2025–2026 (En cours)",
        description:
          "Formation complète axée sur les frameworks web avancés, Java Enterprise Edition (JEE) et le développement de systèmes à grande échelle.",
        type: "right",
      },
      {
        title: "Morocommerce, FES — Développeur Magento",
        date: "Déc. 2023 – Présent",
        description:
          "Développement et optimisation de sites Magento Commerce en PHP, JavaScript et TypeScript. Focus sur les frameworks front-end modernes comme ReactJS et Magento 2.",
        type: "left",
      },
      {
        title: "Stage",
        date: "Août 2023 – Déc. 2023",
        description:
          "Développement d'une application RH fonctionnelle en PHP, optimisant les processus RH et améliorant l'efficacité organisationnelle.",
        type: "right",
      },
      {
        title: "ISTA Adarissa, FES — TS en Développement Digital",
        date: "2021 – 2023",
        description:
          "Acquisition de compétences en React.js, Laravel, gestion de bases de données et technologies web variées. Diplôme de technicien spécialisé en développement web full-stack.",
        type: "left",
      },
      {
        title: "Études d'anglais — Faculté des Lettres, Fès",
        date: "2020 – 2021",
        description:
          "Développement de la maîtrise de la langue anglaise et renforcement des aptitudes de communication.",
        type: "right",
      },
      {
        title: "Lycée Ahmed Zaki Alaoui, FES — Baccalauréat",
        date: "2020",
        description:
          "Acquisition des connaissances et compétences fondamentales, préparation à l'enseignement supérieur.",
        type: "left",
      },
    ],
  },

};


export default translations;
