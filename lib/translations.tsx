export const translations = {
  it: {
    // Header
    header: {
      services: "Servizi",
      pricing: "Pricing",
      portfolio: "Portfolio",
      testimonials: "Testimonial",
      about: "Chi Sono",
      contact: "Contatti",
    },
    // Hero
    hero: {
      name: "ANTONINO OMAR AMATO",
      title: "Fractional Head of Product Design",
      titleHighlight: "",
      titleEnd: "",
      subtitle:
        "Leadership strategica per startup B2B e aziende tech. Trasformo prodotti complessi in esperienze intuitive.",
      ctaPrimary: "Prenota una Call",
      ctaSecondary: "Scopri i Servizi",
      imageAlt: "Designer workspace with dual monitors showing data visualizations",
    },
    // Services
    services: {
      title: "Servizi",
      subtitle: "Soluzioni di design su misura per le tue esigenze",
      learnMore: "Scopri di più →",
      items: [
        {
          icon: "👔",
          title: "Fractional Head of Design / Product Design",
          description:
            "Leadership di design per prodotti B2B complessi. Gestione design system, design review, coordinamento con dev e product strategy.",
          features: [
            "Min. 5 giorni al mese",
            "2 meeting di allineamento/settimana",
            "Design review feature development",
            "Gestione design system",
            "Slack/Teams dedicato",
          ],
          link: "/fractional-head-of-design.html",
        },
        {
          icon: "🎨",
          title: "Freelance Product Designer (Contractor)",
          description:
            "Engagement intensivo 5gg/settimana per 3-6 mesi. Research, UI system, prototipi iterativi per scaling prodotti B2B.",
          features: [
            "Execution full-time intensiva",
            "Research + Design System",
            "4+ iterazioni/mese",
            "Daily standup + report mensili",
            "Handoff milestone dev-ready",
          ],
          link: "/freelance-product-designer.html",
        },
        {
          icon: "🔍",
          title: "UX Audit",
          description:
            "Analisi approfondita di prodotti digitali. Identifico problemi di usabilità, accessibilità e design system.",
          features: [
            "Kickoff call con stakeholder",
            "Analisi 2-3 flussi critici",
            "Report PDF completo",
            "3-5 schermate riprogettate",
            "Call di walkthrough (60 min)",
          ],
          link: "/ux-audit.html",
        },
      ],
    },
    // Pricing
    pricing: {
      title: "Pricing",
      subtitle: "Contattami per una proposta personalizzata",
      promoNote: "",
      tableHeaders: {
        service: "Servizio",
        description: "Descrizione",
        time: "Tempistica",
      },
      items: [
        {
          service: "Fractional Head",
          description: "Leadership di design (min 5 giorni)",
          time: "Retainer",
        },
        {
          service: "Contractor Mid-Term",
          description: "Execution full-time/Flex",
          time: "3-6 mesi",
        },
        {
          service: "UX Audit",
          description: "Analisi completa + report + mockups",
          time: "2-3 settimane",
        },
        {
          service: "Consulting",
          description: "Chiamata 1:1 per problemi specifici",
          time: "Ad-hoc",
        },
      ],
    },
    // Portfolio
    portfolio: {
      title: "Portfolio",
      subtitle: "Progetti che hanno fatto la differenza",
      mainProjects: "Progetti Principali",
      otherProducts: {
        title: "Altri Prodotti",
        items: [
          {
            title: "Financial Health Insights",
            company: "ClearScore - Consumer FinTech",
            tags: ["Consumer", "FinTech"],
          },
          {
            title: "Digital Music Score Platform",
            company: "nKoda - Music Tech",
            tags: ["Music", "Education"],
          },
          {
            title: "Restaurant Feedback Platform",
            company: "Yumpingo - Hospitality Tech",
            tags: ["Hospitality", "Analytics"],
          },
          {
            title: "Pharmacy Delivery App",
            company: "Comqura - Healthcare Startup",
            tags: ["Healthcare", "Delivery"],
          },
        ],
      },
      featuredItems: [
        {
          company: "Movyon - Autostrade per l'Italia",
          role: "Lead Product Designer (team di 4 designer)",
          title: "C2 RTM-4 - Device Monitoring",
          description:
            "Applicazione control room per il monitoraggio di dispositivi autostradali. Introdotta metodologia hypothesis-driven design, creato design system completo, gestito team di 4 designer per la personalizzazione dashboard in tempo reale.",
          metric: "Gestito team di 4 designer • Implementato design system aziendale • Gestione videowall in tempo reale",
          tags: ["Design Leadership", "Design System", "Hypothesis Testing", "Control Room UX"],
          accentColor: "#6c5ce7",
          caseStudyLink: "/case-study-c2-rtm4.html",
        },
        {
          company: "Rekord.io - Data Integrity & Trust",
          role: "Lead Product Designer",
          title: "Digital Product Passport (AMRC)",
          description:
            "Sistema di passaporto digitale per il tracciamento e manutenzione componenti turbine eoliche AMRC. Progettata interfaccia mobile-first per tecnici sul campo per accedere ai dati del ciclo di vita completo dei componenti, specifiche di produzione, metriche di qualità e documentazione di conformità tramite scansione QR code. Implementata architettura informativa gerarchica che supporta sia panoramiche che analisi dettagliate dei componenti.",
          metric:
            "QR code a accesso dati: <30 secondi • 100% tracciabilità componenti • Riduzione tempo manutenzione da ore a minuti",
          tags: [
            "Mobile-First Design",
            "IoT Integration",
            "Information Architecture",
            "Regulatory Compliance",
            "Field UX",
          ],
          accentColor: "#ff6b9d",
          caseStudyLink: "/case-study-rekord-dpp.html",
        },
        {
          company: "Movyon - Autostrade per l'Italia",
          role: "Senior UX Designer",
          title: "BSB Video Management",
          description:
            "Rinnovamento completo del sistema legacy di gestione telecamere. Ridisegnati flussi utente per tecnici e operatori radio, implementata modalità dark per ambienti a bassa luminosità, migliorati shortcut operatore per identificazione rapida problemi.",
          metric: "Implementazione dark mode • Ottimizzati flussi utente per 600+ operatori • Miglioramenti accessibilità",
          tags: ["Dark Mode", "User Flow", "Legacy System Redesign", "Accessibility"],
          accentColor: "#00b4d8",
          caseStudyLink: "/case-study-bsb.html",
        },
        {
          company: "Movyon - Autostrade per l'Italia",
          role: "Senior Design Consultant / Lead Designer",
          title: "SIV - Highway Management Platform Redesign",
          description:
            "Redesign user-centered del sistema di gestione autostradale Autostrade. Migliorata efficienza operatore del 60% attraverso dashboard innovativa e visualizzazione sinottica ispirata alla metro. Ridotto tempo di risposta dell'80% con design interfaccia ottimizzato.",
          metric: "60% Miglioramento Usabilità • 80% Tempo Risposta Più Veloce • Conformità WCAG AA+",
          tags: ["UX Research", "Dashboard Design", "System Design", "Accessibility"],
          accentColor: "#f59e0b",
          caseStudyLink: "/case-study-siv.html",
        },
        {
          company: "Italiaonline",
          role: "Senior UX Designer",
          title: "Pagine Bianche In Memoria",
          description:
            "Piattaforma digitale memoriale per celebrare i ricordi di persone e luoghi. Condotta ricerca UX completa con 25 utenti, creati journey utente, wireframe e costruito design system completo con approccio atomic design.",
          metric: "25 sessioni test utente • Miglioramento usabilità significativo su tutti i dispositivi",
          tags: ["User Research", "Design System", "Cross-Device Design", "Accessibility"],
          accentColor: "#48cae4",
          caseStudyLink: "/case-study-paginebianche-funerali.html",
        },
        {
          company: "Movyon - Autostrade per l'Italia",
          role: "Senior UX Designer (Design System Lead)",
          title: "Design System - Front End Commons",
          description:
            "Design system enterprise utilizzato da oltre 12 applicazioni. Costruita libreria componenti completa che supporta modalità light e dark, collaborato con Studio Volpi per l'evoluzione. Standardizzato design su SPA, TMS, BVW, FFM e altro.",
          metric: "Utilizzato da oltre 12 applicazioni enterprise • Supporto modalità Light e Dark • Collaborazione team",
          tags: ["Design System", "Component Library", "Enterprise Scale", "Dark Mode"],
          accentColor: "#ff6b6b",
          caseStudyLink: "/case-study-design-system.html",
        },
      ],
      otherItems: [
        {
          title: "Financial Dashboard",
          company: "ClearScore - FinTech",
          tags: ["FinTech", "Data Viz"],
        },
        {
          title: "Composer Interface",
          company: "nKoda - Music Tech",
          tags: ["Music Tech", "UX"],
        },
        {
          title: "Restaurant Analytics",
          company: "Yumpingo - Hospitality",
          tags: ["Analytics", "B2B"],
        },
        {
          title: "Communication Platform",
          company: "Comqura - Enterprise",
          tags: ["Enterprise", "SaaS"],
        },
      ],
    },
    // Experience
    experience: {
      title: "Esperienza",
      subtitle: "Il mio percorso professionale nel design",
      items: [
        {
          year: "2025",
          company: "Rekord AG",
          location: "Remoto",
          role: "Freelance Senior Product Designer",
          description:
            "Sistema Digital Product Passport per turbine eoliche AMRC. Monitoraggio real-time e tracciabilità componenti per tecnici manutentori.",
        },
        {
          year: "2021",
          company: "Movyon",
          location: "Firenze",
          role: "Senior UX Designer Consultant",
          description:
            "Design software IoT & OT. Ricerca utenti, wireframing, specifiche design per operatori di control room.",
        },
        {
          year: "2020",
          company: "Italiaonline",
          location: "Milano",
          role: "Senior UX Designer Lead",
          description: "Visione design e leadership. Design System con approccio atomic design per 29.8M utenti mensili.",
        },
        {
          year: "2018",
          company: "nKoda / ClearScore / Yumpingo",
          location: "Londra / Remoto",
          role: "Lead UX/UI Designer",
          description: "Music tech, fintech, restaurant CX. Database musicale 110K+, design systems, user testing.",
        },
        {
          year: "2013",
          company: "Paradigma",
          location: "Catania",
          role: "UX/UI Designer",
          description:
            "Design startup & brand. App, web app, e-commerce per Orange Fiber, Telecom Italia, Moak Coffee.",
        },
      ],
      downloadCV: "Download my CV",
    },
    // Testimonials
    testimonials: {
      title: "Testimonial",
      subtitle: "Cosa dicono di me i professionisti con cui ho lavorato",
      items: [
        {
          text: "I worked with Omar for years back in Italy and I've been inspired and motivated many times by his outstanding creativity and his expertise across the whole design process and thinking. Was a pleasure to work with and learn from him.",
          name: "Fabio Laneri",
          role: "Principal Designer at Viator",
        },
        {
          text: "He designs with clear logic that makes the hand-off to development incredibly smooth. Great attention to detail and strong communication skills. I highly recommend him to any team looking for a top-tier designer.",
          name: "Nicola Cortesi",
          role: "Front End Developer at Advepa",
        },
        {
          text: "Working with Omar was a great joy. His understanding of user experience is well above average. He knew what questions to ask and how to set up a process and see it through to the end.",
          name: "Nathan McDonald",
          role: "UX/UI Designer at Volopa",
        },
        {
          text: "Omar is a hard working and very serious team player with a very impressive background in the UI/UX field. His ability to deal with multiple projects and produce creative and smart designs was unlike any I've seen before.",
          name: "Antonio Di Mariano",
          role: "Senior Python Developer at SoftwareOne",
        },
        {
          text: "A true artist with great ideas: can turn a bunch of lines of code into a true piece of art. Really funny to work with and we formed a great team together.",
          name: "Alessandro Scuderi",
          role: "Storyteller & Copywriter",
        },
        {
          text: "Excellent skills in UI/UX design and great taste in graphics and logo design. Built high quality Photoshop & Illustrator templates with HTML, CSS & Javascript.",
          name: "Enrico Tuttobene",
          role: "Full Stack Developer at Automattic",
        },
      ],
    },
    // About
    about: {
      title: "Chi Sono",
      paragraphs: [
        "Ho oltre 12 anni di esperienza nella progettazione di prodotti digitali complessi per aziende come Movyon (smart mobility), ClearScore (fintech), nKoda (music tech), Paradigma e altre.",
        "Mi specializzo nel trasformare prodotti difficili da usare in esperienze intuitive e scalabili. La mia expertise copre design system, ricerca utenti, interaction design e design leadership per team distribuiti.",
        "Attualmente lavoro come Fractional Head of Design in retainer con startup e aziende B2B, aiutandole a crescere rapidamente mantenendo alta qualità del design. Ho collaborato con sviluppatori, product manager e founder in Italia e all'estero.",
        "Cosa faccio: Leadership strategica di design per prodotti B2B complessi • UX Audit e ottimizzazione prodotti digitali • Governance design system e mentoring team • Landing page e web design dev-ready",
      ],
      stats: [
        { value: "12+", label: "Anni di esperienza" },
        { value: "50+", label: "Progetti completati" },
        { value: "8+", label: "Aziende partner" },
        { value: "4+", label: "Anni in Movyon" },
      ],
    },
    // Contact
    contact: {
      title: "Iniziamo?",
      subtitle: "Prenota una chiamata di 30 min per discutere il tuo progetto senza impegno",
      ctaCalendly: "Prenota su Calendly",
      ctaEmail: "Scrivimi una Email",
      linkedin: "LinkedIn",
    },
    // Footer
    footer: {
      rights: "© 2025 Omar Amato. Tutti i diritti riservati.",
      privacy: "Informativa Privacy",
      cookies: "Informativa Cookie",
    },
    // Privacy Page
    privacyPage: {
      backLink: "Torna alla home",
      title: "Informativa Privacy",
      sections: {
        who: {
          title: "Chi Sono",
          content:
            "Sono <strong>Antonino Omar Amato</strong>, Fractional Head of Design e Product Designer con oltre 12 anni di esperienza. Questo sito web rappresenta il mio portfolio professionale e la vetrina dei miei servizi di design.",
        },
        whatIsPersonalData: {
          title: "Cosa sono i Dati Personali",
          content:
            "I dati personali sono informazioni che identificano o rendono identificabile una persona fisica. In conformità al GDPR (Regolamento UE 2016/679), tratto i tuoi dati con la massima trasparenza e sicurezza.",
          legalBasis:
            "<strong>Base giuridica del trattamento:</strong> Il trattamento dei dati si basa sul legittimo interesse (Art. 6, comma 1, lett. f del GDPR) per migliorare l'esperienza utente e analizzare l'utilizzo del sito.",
        },
        analytics: {
          title: "Google Analytics",
          intro:
            "Questo sito utilizza <strong>Google Analytics</strong> per monitorare l'uso del sito e comprendere come gli utenti interagiscono con i contenuti. Google Analytics raccoglie informazioni in forma anonimizzata:",
          items: [
            "Indirizzo IP (anonimizzato)",
            "Tipo di dispositivo e browser utilizzato",
            "Pagine visitate e tempo di permanenza",
            "Sorgente del traffico (come sei arrivato al sito)",
          ],
          retention:
            "<strong>Durata conservazione:</strong> I dati vengono conservati per un massimo di 2 anni, dopodiché vengono automaticamente cancellati.",
          choice:
            "Puoi scegliere di <strong>accettare o rifiutare</strong> i cookie di analytics tramite il banner che appare alla prima visita. La tua scelta viene salvata nel browser e rispettata nelle visite successive.",
        },
        sessionCookies: {
          title: "Cookie di Sessione",
          content:
            "Il sito utilizza cookie tecnici necessari per il corretto funzionamento delle funzionalità base, come la memorizzazione della preferenza della lingua (italiano/inglese) e la gestione del consenso ai cookie. Questi cookie sono essenziali e non richiedono consenso esplicito.",
        },
        rights: {
          title: "I Tuoi Diritti",
          intro: "In base al GDPR, hai diritto a:",
          items: [
            "<strong>Accesso:</strong> Richiedere una copia dei dati personali che ho raccolto",
            "<strong>Rettifica:</strong> Correggere dati inesatti o incompleti",
            "<strong>Cancellazione:</strong> Richiedere la cancellazione dei tuoi dati (diritto all'oblio)",
            "<strong>Portabilità:</strong> Ricevere i tuoi dati in un formato strutturato e leggibile",
            "<strong>Opposizione:</strong> Opponerti al trattamento dei tuoi dati per motivi legittimi",
            "<strong>Reclamo:</strong> Presentare un reclamo all'autorità di controllo competente (Garante per la Protezione dei Dati Personali)",
          ],
        },
        contact: {
          title: "Come Contattarmi",
          content:
            "Per esercitare i tuoi diritti o per qualsiasi domanda relativa al trattamento dei dati, puoi contattarmi via email:",
          email: "Email:",
        },
        updates: {
          title: "Aggiornamenti",
          lastUpdate: "<strong>Ultimo aggiornamento:</strong> 22 dicembre 2025",
          disclaimer:
            "Questa informativa può essere aggiornata periodicamente. Ti consiglio di consultarla regolarmente per restare informato su come proteggo i tuoi dati.",
        },
        disclaimer: {
          text: "<strong>Disclaimer:</strong> Questa informativa è stata redatta in buona fede per fornire trasparenza sul trattamento dei dati. Per una validazione legale completa conforme alle normative locali, si consiglia di consultare un avvocato specializzato in privacy e protezione dei dati.",
        },
      },
      readCookiePolicy: "Leggi la Cookie Policy →",
    },
    // Cookies Page
    cookiesPage: {
      backLink: "Torna alla home",
      title: "Informativa sui Cookie",
      sections: {
        what: {
          title: "Cosa sono i Cookie",
          content:
            "I cookie sono piccoli file di testo che vengono salvati sul tuo dispositivo quando visiti un sito web. Vengono utilizzati per migliorare l'esperienza di navigazione e per raccogliere informazioni statistiche sull'uso del sito.",
        },
        howWeUse: {
          title: "Come Utilizziamo i Cookie",
          content:
            "Questo sito utilizza cookie di <strong>analytics</strong> per monitorare l'uso del sito e migliorare l'esperienza utente. I dati raccolti sono anonimizzati e utilizzati esclusivamente per finalità statistiche.",
        },
        types: {
          title: "Tipologie di Cookie Utilizzati",
          table: {
            headers: ["Nome Cookie", "Tipo", "Scopo", "Durata", "Consenso"],
            rows: [
              {
                name: "Google Analytics",
                details: "(_ga, _gid, _gat)",
                type: "Analytics",
                purpose: "Tracciamento del comportamento degli utenti in forma anonimizzata",
                duration: "2 anni",
                consent: "Richiesto",
              },
              {
                name: "Cookie di sessione",
                details: "(cookie-consent, language-preference)",
                type: "Funzionale",
                purpose: "Mantiene la sessione utente e le preferenze (lingua, consenso cookie)",
                duration: "Sessione / 1 anno",
                consent: "Automatico",
              },
            ],
          },
        },
        management: {
          title: "Gestione dei Cookie",
          analytics:
            "Puoi <strong>rifiutare i cookie di analytics</strong> attraverso il banner dei cookie che appare alla prima visita del sito. La tua scelta viene salvata e rispettata nelle visite successive.",
          functional:
            "I <strong>cookie funzionali</strong> sono necessari per il corretto funzionamento del sito (es. memorizzazione della lingua scelta) e vengono installati automaticamente. Puoi comunque eliminarli dalle impostazioni del tuo browser, ma questo potrebbe limitare alcune funzionalità del sito.",
        },
        howToDelete: {
          title: "Come Eliminare i Cookie",
          intro: "Puoi eliminare i cookie in qualsiasi momento dalle impostazioni del tuo browser:",
          browsers: [
            "<strong>Chrome:</strong> Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti",
            "<strong>Firefox:</strong> Impostazioni → Privacy e sicurezza → Cookie e dati dei siti web",
            "<strong>Safari:</strong> Preferenze → Privacy → Gestisci dati dei siti web",
            "<strong>Edge:</strong> Impostazioni → Cookie e autorizzazioni del sito → Cookie e dati del sito",
          ],
        },
        links: {
          title: "Link Utili",
          google: "Per maggiori informazioni su come Google Analytics tratta i dati, visita:",
        },
        updates: {
          title: "Aggiornamenti",
          lastUpdate: "<strong>Ultimo aggiornamento:</strong> 22 dicembre 2025",
        },
      },
      readPrivacyPolicy: "Leggi l'Informativa Privacy →",
    },
  },
  en: {
    // Header
    header: {
      services: "Services",
      pricing: "Pricing",
      portfolio: "Portfolio",
      testimonials: "Testimonials",
      about: "About",
      contact: "Contact",
    },
    // Hero
    hero: {
      name: "ANTONINO OMAR AMATO",
      title: "Fractional Head of Product Design",
      titleHighlight: "",
      titleEnd: "",
      subtitle:
        "Strategic design leadership for B2B startups and tech companies. I transform complex products into intuitive experiences.",
      ctaPrimary: "Book a Call",
      ctaSecondary: "Discover Services",
      imageAlt: "Designer workspace with dual monitors showing data visualizations",
    },
    // Services
    services: {
      title: "Services",
      subtitle: "Tailored design solutions for your needs",
      learnMore: "Learn more →",
      items: [
        {
          icon: "👔",
          title: "Fractional Head of Design / Product Design",
          description:
            "Design leadership for complex B2B products. Design system management, design review, dev coordination and product strategy.",
          features: [
            "Min. 5 days per month",
            "2 alignment meetings/week",
            "Design review feature development",
            "Design system management",
            "Dedicated Slack/Teams",
          ],
          link: "/fractional-head-of-design.html",
        },
        {
          icon: "🎨",
          title: "Freelance Product Designer (Contractor)",
          description:
            "Intensive engagement 5 days/week for 3-6 months. Research, UI system, iterative prototypes for scaling B2B products.",
          features: [
            "Full-time intensive execution",
            "Research + Design System",
            "4+ iterations/month",
            "Daily standup + monthly reports",
            "Dev-ready milestone handoff",
          ],
          link: "/freelance-product-designer.html",
        },
        {
          icon: "🔍",
          title: "UX Audit",
          description:
            "In-depth analysis of digital products. I identify usability, accessibility and design system issues.",
          features: [
            "Kickoff call with stakeholders",
            "Analysis of 2-3 critical flows",
            "Complete PDF report",
            "3-5 redesigned screens",
            "Walkthrough call (60 min)",
          ],
          link: "/ux-audit.html",
        },
      ],
    },
    // Pricing
    pricing: {
      title: "Pricing",
      subtitle: "Contact me for a customized proposal",
      promoNote: "",
      tableHeaders: {
        service: "Service",
        description: "Description",
        time: "Time",
      },
      items: [
        {
          service: "Fractional Head",
          description: "Design leadership (min 5 days)",
          time: "Retainer",
        },
        {
          service: "Contractor Mid-Term",
          description: "Full-time/Flex execution",
          time: "3-6 months",
        },
        {
          service: "UX Audit",
          description: "Complete analysis + report + mockups",
          time: "2-3 weeks",
        },
        {
          service: "Consulting",
          description: "1:1 call for specific issues",
          time: "Ad-hoc",
        },
      ],
    },
    // Portfolio
    portfolio: {
      title: "Portfolio",
      subtitle: "Projects that made a difference",
      mainProjects: "Main Projects",
      otherProducts: {
        title: "Other Products",
        items: [
          {
            title: "Financial Health Insights",
            company: "ClearScore - Consumer FinTech",
            tags: ["Consumer", "FinTech"],
          },
          {
            title: "Digital Music Score Platform",
            company: "nKoda - Music Tech",
            tags: ["Music", "Education"],
          },
          {
            title: "Restaurant Feedback Platform",
            company: "Yumpingo - Hospitality Tech",
            tags: ["Hospitality", "Analytics"],
          },
          {
            title: "Pharmacy Delivery App",
            company: "Comqura - Healthcare Startup",
            tags: ["Healthcare", "Delivery"],
          },
        ],
      },
      featuredItems: [
        {
          company: "Movyon - Autostrade per l'Italia",
          role: "Lead Product Designer (4 designers team)",
          title: "C2 RTM-4 - Device Monitoring",
          description:
            "Control room application for highway device monitoring. Introduced hypothesis-driven design methodology, created comprehensive design system, managed team of 4 designers for real-time dashboard customization.",
          metric: "Led 4-person design team • Implemented company-wide design system • Real-time videowall management",
          tags: ["Design Leadership", "Design System", "Hypothesis Testing", "Control Room UX"],
          accentColor: "#6c5ce7",
          caseStudyLink: "/case-study-c2-rtm4-en.html",
        },
        {
          company: "Rekord.io - Data Integrity & Trust",
          role: "Lead Product Designer",
          title: "Digital Product Passport (AMRC)",
          description:
            "Digital passport system for AMRC wind turbine component tracking and maintenance. Designed mobile-first interface for field technicians to access complete component lifecycle data, manufacturing specifications, quality metrics, and compliance documentation via QR code scanning. Implemented hierarchical information architecture supporting both overview and detailed component analysis.",
          metric:
            "QR code to data access: <30 seconds • 100% component traceability • Reduced maintenance time from hours to minutes",
          tags: [
            "Mobile-First Design",
            "IoT Integration",
            "Information Architecture",
            "Regulatory Compliance",
            "Field UX",
          ],
          accentColor: "#ff6b9d",
          caseStudyLink: "/case-study-rekord-dpp.html",
        },
        {
          company: "Movyon - Autostrade per l'Italia",
          role: "Senior UX Designer",
          title: "BSB Video Management",
          description:
            "Complete renovation of legacy camera management system. Redesigned user flows for technicians and radio operators, implemented dark mode for low-light environments, improved operator shortcuts for rapid problem identification.",
          metric: "Dark mode implementation • Optimized user flows for 600+ operators • Accessibility improvements",
          tags: ["Dark Mode", "User Flow", "Legacy System Redesign", "Accessibility"],
          accentColor: "#00b4d8",
          caseStudyLink: "/case-study-bsb-en.html",
        },
        {
          company: "Movyon - Autostrade per l'Italia",
          role: "Senior Design Consultant / Lead Designer",
          title: "SIV - Highway Management Platform Redesign",
          description:
            "User-centered redesign of Autostrade highway management system. Improved operator efficiency by 60% through innovative dashboard and metro-inspired synoptic visualization. Reduced response time by 80% with optimized interface design.",
          metric: "60% Usability Improvement • 80% Faster Response Time • WCAG AA+ Compliance",
          tags: ["UX Research", "Dashboard Design", "System Design", "Accessibility"],
          accentColor: "#f59e0b",
          caseStudyLink: "/case-study-siv-en.html",
        },
        {
          company: "Italiaonline",
          role: "Senior UX Designer",
          title: "Pagine Bianche In Memoria",
          description:
            "Digital memorial platform celebrating memories of people and places. Led comprehensive UX research with 25 users, created user journeys, wireframes, and built complete design system with atomic design approach.",
          metric: "25 user testing sessions • Significant usability improvement across all devices",
          tags: ["User Research", "Design System", "Cross-Device Design", "Accessibility"],
          accentColor: "#48cae4",
          caseStudyLink: "/case-study-paginebianche-funerali-en.html",
        },
        {
          company: "Movyon - Autostrade per l'Italia",
          role: "Senior UX Designer (Design System Lead)",
          title: "Design System - Front End Commons",
          description:
            "Enterprise design system used by 12+ applications. Built comprehensive component library supporting light and dark modes, collaborated with Studio Volpi for evolution. Standardized design across SPA, TMS, BVW, FFM, and more.",
          metric: "Used by 12+ enterprise applications • Light & Dark mode support • Team collaboration",
          tags: ["Design System", "Component Library", "Enterprise Scale", "Dark Mode"],
          accentColor: "#ff6b6b",
          caseStudyLink: "/case-study-design-system-en.html",
        },
      ],
      otherItems: [
        {
          title: "Financial Dashboard",
          company: "ClearScore - FinTech",
          tags: ["FinTech", "Data Viz"],
        },
        {
          title: "Composer Interface",
          company: "nKoda - Music Tech",
          tags: ["Music Tech", "UX"],
        },
        {
          title: "Restaurant Analytics",
          company: "Yumpingo - Hospitality",
          tags: ["Analytics", "B2B"],
        },
        {
          title: "Communication Platform",
          company: "Comqura - Enterprise",
          tags: ["Enterprise", "SaaS"],
        },
      ],
    },
    // Testimonials
    testimonials: {
      title: "Testimonials",
      subtitle: "What professionals I worked with say about me",
      items: [
        {
          text: "I worked with Omar for years back in Italy and I've been inspired and motivated many times by his outstanding creativity and his expertise across the whole design process and thinking. Was a pleasure to work with and learn from him.",
          name: "Fabio Laneri",
          role: "Principal Designer at Viator",
        },
        {
          text: "He designs with clear logic that makes the hand-off to development incredibly smooth. Great attention to detail and strong communication skills. I highly recommend him to any team looking for a top-tier designer.",
          name: "Nicola Cortesi",
          role: "Front End Developer at Advepa",
        },
        {
          text: "Working with Omar was a great joy. His understanding of user experience is well above average. He knew what questions to ask and how to set up a process and see it through to the end.",
          name: "Nathan McDonald",
          role: "UX/UI Designer at Volopa",
        },
        {
          text: "Omar is a hard working and very serious team player with a very impressive background in the UI/UX field. His ability to deal with multiple projects and produce creative and smart designs was unlike any I've seen before.",
          name: "Antonio Di Mariano",
          role: "Senior Python Developer at SoftwareOne",
        },
        {
          text: "A true artist with great ideas: can turn a bunch of lines of code into a true piece of art. Really funny to work with and we formed a great team together.",
          name: "Alessandro Scuderi",
          role: "Storyteller & Copywriter",
        },
        {
          text: "Excellent skills in UI/UX design and great taste in graphics and logo design. Built high quality Photoshop & Illustrator templates with HTML, CSS & Javascript.",
          name: "Enrico Tuttobene",
          role: "Full Stack Developer at Automattic",
        },
      ],
    },
    // About
    about: {
      title: "About Me",
      paragraphs: [
        "I have 12+ years of experience designing complex digital products for companies like Movyon (smart mobility), ClearScore (fintech), nKoda (music tech), Paradigma and others.",
        "I specialize in transforming hard-to-use products into intuitive and scalable experiences. My expertise covers design systems, user research, interaction design and design leadership for distributed teams.",
        "Currently working as a Fractional Head of Design on retainer with B2B startups and companies, helping them grow quickly while maintaining high design quality. I've collaborated with developers, product managers and founders in Italy and abroad.",
        "What I do: Strategic design leadership for complex B2B products • UX Audit and digital product optimization • Design system governance and team mentoring • Landing pages and dev-ready web design",
      ],
      stats: [
        { value: "12+", label: "Years of experience" },
        { value: "50+", label: "Completed projects" },
        { value: "8+", label: "Partner companies" },
        { value: "4+", label: "Years at Movyon" },
      ],
    },
    // Contact
    contact: {
      title: "Let's get started?",
      subtitle: "Book a 30 min call to discuss your project with no commitment",
      ctaCalendly: "Book Calendly Call",
      ctaEmail: "Send me an Email",
      linkedin: "LinkedIn",
    },
    // Footer
    footer: {
      rights: "© 2025 Omar Amato. All rights reserved.",
      privacy: "Privacy Policy",
      cookies: "Cookie Policy",
    },
    // Experience
    experience: {
      title: "Experience",
      subtitle: "My professional journey in design",
      items: [
        {
          year: "2025",
          company: "Rekord AG",
          location: "Remote",
          role: "Freelance Senior Product Designer",
          description:
            "Digital Product Passport system for AMRC wind turbines. Real-time monitoring e component traceability per maintenance technicians.",
        },
        {
          year: "2021",
          company: "Movyon",
          location: "Florence",
          role: "Senior UX Designer Consultant",
          description:
            "IoT & OT software design. User research, wireframing, design specifications for control room operators.",
        },
        {
          year: "2020",
          company: "Italiaonline",
          location: "Milan",
          role: "Senior UX Designer Lead",
          description: "Design vision e leadership. Design System with atomic design approach for 29.8M monthly users.",
        },
        {
          year: "2018",
          company: "nKoda / ClearScore / Yumpingo",
          location: "London / Remote",
          role: "Lead UX/UI Designer",
          description: "Music tech, fintech, restaurant CX. 110K+ music database, design systems, user testing.",
        },
        {
          year: "2013",
          company: "Paradigma",
          location: "Catania",
          role: "UX/UI Designer",
          description:
            "Startup & brand design. Apps, web apps, e-commerce for Orange Fiber, Telecom Italia, Moak Coffee.",
        },
      ],
      downloadCV: "Download my CV",
    },
    // Privacy Page
    privacyPage: {
      backLink: "Torna alla home",
      title: "Informativa Privacy",
      sections: {
        who: {
          title: "Chi Sono",
          content:
            "Sono <strong>Antonino Omar Amato</strong>, Fractional Head of Design e Product Designer con oltre 12 anni di esperienza. Questo sito web rappresenta il mio portfolio professionale e la vetrina dei miei servizi di design.",
        },
        whatIsPersonalData: {
          title: "Cosa sono i Dati Personali",
          content:
            "I dati personali sono informazioni che identificano o rendono identificabile una persona fisica. In conformità al GDPR (Regolamento UE 2016/679), tratto i tuoi dati con la massima trasparenza e sicurezza.",
          legalBasis:
            "<strong>Base giuridica del trattamento:</strong> Il trattamento dei dati si basa sul legittimo interesse (Art. 6, comma 1, lett. f del GDPR) per migliorare l'esperienza utente e analizzare l'utilizzo del sito.",
        },
        analytics: {
          title: "Google Analytics",
          intro:
            "Questo sito utilizza <strong>Google Analytics</strong> per monitorare l'uso del sito e comprendere come gli utenti interagiscono con i contenuti. Google Analytics raccoglie informazioni in forma anonimizzata:",
          items: [
            "Indirizzo IP (anonimizzato)",
            "Tipo di dispositivo e browser utilizzato",
            "Pagine visitate e tempo di permanenza",
            "Sorgente del traffico (come sei arrivato al sito)",
          ],
          retention:
            "<strong>Durata conservazione:</strong> I dati vengono conservati per un massimo di 2 anni, dopodiché vengono automaticamente cancellati.",
          choice:
            "Puoi scegliere di <strong>accettare o rifiutare</strong> i cookie di analytics tramite il banner che appare alla prima visita. La tua scelta viene salvata nel browser e rispettata nelle visite successive.",
        },
        sessionCookies: {
          title: "Cookie di Sessione",
          content:
            "Il sito utilizza cookie tecnici necessari per il corretto funzionamento delle funzionalità base, come la memorizzazione della preferenza della lingua (italiano/inglese) e la gestione del consenso ai cookie. Questi cookie sono essenziali e non richiedono consenso esplicito.",
        },
        rights: {
          title: "I Tuoi Diritti",
          intro: "In base al GDPR, hai diritto a:",
          items: [
            "<strong>Accesso:</strong> Richiedere una copia dei dati personali che ho raccolto",
            "<strong>Rettifica:</strong> Correggere dati inesatti o incompleti",
            "<strong>Cancellazione:</strong> Richiedere la cancellazione dei tuoi dati (diritto all'oblio)",
            "<strong>Portabilità:</strong> Ricevere i tuoi dati in un formato strutturato e leggibile",
            "<strong>Opposizione:</strong> Opponerti al trattamento dei tuoi dati per motivi legittimi",
            "<strong>Reclamo:</strong> Presentare un reclamo all'autorità di controllo competente (Garante per la Protezione dei Dati Personali)",
          ],
        },
        contact: {
          title: "Come Contattarmi",
          content:
            "Per esercitare i tuoi diritti o per qualsiasi domanda relativa al trattamento dei dati, puoi contattarmi via email:",
          email: "Email:",
        },
        updates: {
          title: "Aggiornamenti",
          lastUpdate: "<strong>Ultimo aggiornamento:</strong> 22 dicembre 2025",
          disclaimer:
            "Questa informativa può essere aggiornata periodicamente. Ti consiglio di consultarla regolarmente per restare informato su come proteggo i tuoi dati.",
        },
        disclaimer: {
          text: "<strong>Disclaimer:</strong> Questa informativa è stata redatta in buona fede per fornire trasparenza sul trattamento dei dati. Per una validazione legale completa conforme alle normative locali, si consiglia di consultare un avvocato specializzato in privacy e protezione dei dati.",
        },
      },
      readCookiePolicy: "Leggi la Cookie Policy →",
    },
    // Cookies Page
    cookiesPage: {
      backLink: "Torna alla home",
      title: "Informativa sui Cookie",
      sections: {
        what: {
          title: "Cosa sono i Cookie",
          content:
            "I cookie sono piccoli file di testo che vengono salvati sul tuo dispositivo quando visiti un sito web. Vengono utilizzati per migliorare l'esperienza di navigazione e per raccogliere informazioni statistiche sull'uso del sito.",
        },
        howWeUse: {
          title: "Come Utilizziamo i Cookie",
          content:
            "Questo sito utilizza cookie di <strong>analytics</strong> per monitorare l'uso del sito e migliorare l'esperienza utente. I dati raccolti sono anonimizzati e utilizzati esclusivamente per finalità statistiche.",
        },
        types: {
          title: "Tipologie di Cookie Utilizzati",
          table: {
            headers: ["Nome Cookie", "Tipo", "Scopo", "Durata", "Consenso"],
            rows: [
              {
                name: "Google Analytics",
                details: "(_ga, _gid, _gat)",
                type: "Analytics",
                purpose: "Tracciamento del comportamento degli utenti in forma anonimizzata",
                duration: "2 anni",
                consent: "Richiesto",
              },
              {
                name: "Cookie di sessione",
                details: "(cookie-consent, language-preference)",
                type: "Funzionale",
                purpose: "Mantiene la sessione utente e le preferenze (lingua, consenso cookie)",
                duration: "Sessione / 1 anno",
                consent: "Automatico",
              },
            ],
          },
        },
        management: {
          title: "Gestione dei Cookie",
          analytics:
            "Puoi <strong>rifiutare i cookie di analytics</strong> attraverso il banner dei cookie che appare alla prima visita del sito. La tua scelta viene salvata e rispettata nelle visite successive.",
          functional:
            "I <strong>cookie funzionali</strong> sono necessari per il corretto funzionamento del sito (es. memorizzazione della lingua scelta) e vengono installati automaticamente. Puoi comunque eliminarli dalle impostazioni del tuo browser, ma questo potrebbe limitare alcune funzionalità del sito.",
        },
        howToDelete: {
          title: "Come Eliminare i Cookie",
          intro: "Puoi eliminare i cookie in qualsiasi momento dalle impostazioni del tuo browser:",
          browsers: [
            "<strong>Chrome:</strong> Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti",
            "<strong>Firefox:</strong> Impostazioni → Privacy e sicurezza → Cookie e dati dei siti web",
            "<strong>Safari:</strong> Preferenze → Privacy → Gestisci dati dei siti web",
            "<strong>Edge:</strong> Impostazioni → Cookie e autorizzazioni del sito → Cookie e dati del sito",
          ],
        },
        links: {
          title: "Link Utili",
          google: "Per maggiori informazioni su come Google Analytics tratta i dati, visita:",
        },
        updates: {
          title: "Aggiornamenti",
          lastUpdate: "<strong>Ultimo aggiornamento:</strong> 22 dicembre 2025",
        },
      },
      readPrivacyPolicy: "Leggi l'Informativa Privacy →",
    },
  },
}
