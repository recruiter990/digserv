export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const CONTACT_EMAIL = "Rehkais@outlook.com";

export const SERVICES = [
  {
    id: "portfolio-assignments",
    title: "Portfolio-Ready Assignments",
    description: "Professional assignments designed to showcase your skills and build an impressive portfolio for clients or employers",
    icon: "Briefcase",
    features: [
      "Custom project briefs",
      "Real-world scenarios",
      "Portfolio-ready deliverables",
      "Professional documentation",
      "Review and feedback",
    ],
    category: "education",
  },
  {
    id: "computer-projects",
    title: "Computer Projects",
    description: "Mini and major computer projects tailored to your needs, from simple applications to complex software solutions",
    icon: "Code",
    features: [
      "Mini projects (simple apps, scripts)",
      "Major projects (full-stack applications)",
      "Code documentation",
      "Testing and deployment",
      "Source code delivery",
    ],
    category: "development",
  },
  {
    id: "phd-research",
    title: "PhD Research & Thesis Writing",
    description: "Comprehensive research and thesis writing services for PhD students, ensuring academic excellence and rigorous methodology",
    icon: "GraduationCap",
    features: [
      "Literature review",
      "Research methodology",
      "Data analysis",
      "Thesis writing",
      "Editing and proofreading",
    ],
    category: "academic",
  },
  {
    id: "interview-preparation",
    title: "Interview Preparation & Job Landing Support",
    description: "Complete interview preparation and job search support to help you land your dream job",
    icon: "UserCheck",
    features: [
      "Resume optimization",
      "Interview coaching",
      "Technical interview prep",
      "Mock interviews",
      "Job search strategy",
    ],
    category: "career",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing (Meta / Facebook / Instagram Ads)",
    description: "Professional digital marketing services specializing in Meta platforms (Facebook & Instagram) to grow your business",
    icon: "TrendingUp",
    features: [
      "Facebook Ads management",
      "Instagram Ads campaigns",
      "Ad creative design",
      "Audience targeting",
      "Performance analytics",
    ],
    category: "marketing",
  },
  {
    id: "web-development",
    title: "Web Development Services",
    description: "Full-stack web development services from simple websites to complex web applications",
    icon: "Globe",
    features: [
      "Frontend development",
      "Backend development",
      "Database design",
      "API integration",
      "Deployment and hosting",
    ],
    category: "development",
  },
];

export const STATS = [
  { value: 150, suffix: "+", label: "Clienti Soddisfatti" },
  { value: 300, suffix: "%", label: "Crescita Media Vendite" },
  { value: 50, suffix: "M+", label: "Impressioni Social" },
  { value: 10, suffix: "K+", label: "Email Inviate" },
];

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Analisi Gratuita",
    description: "Analizziamo il tuo business e identifichiamo le opportunità di crescita",
  },
  {
    step: 2,
    title: "Strategia Personalizzata",
    description: "Creiamo un piano su misura per i tuoi obiettivi e budget",
  },
  {
    step: 3,
    title: "Implementazione",
    description: "Mettiamo in pratica la strategia con contenuti e campagne mirate",
  },
  {
    step: 4,
    title: "Monitoraggio & Ottimizzazione",
    description: "Monitoriamo i risultati e ottimizziamo continuamente le performance",
  },
  {
    step: 5,
    title: "Crescita Continua",
    description: "Scaliamo i successi e troviamo nuove opportunità di crescita",
  },
];

export const PRICING_PLANS = {
  socialMedia: [
    {
      name: "Starter",
      price: 299,
      period: "mese",
      features: [
        "12 post/mese",
        "1 piattaforma",
        "Stories settimanali",
        "Report mensile",
      ],
      popular: false,
    },
    {
      name: "Growth",
      price: 499,
      period: "mese",
      features: [
        "20 post/mese",
        "2 piattaforme",
        "Stories giornaliere",
        "Reels settimanali",
        "Community management",
        "Report settimanale",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: 799,
      period: "mese",
      features: [
        "30 post/mese",
        "3 piattaforme",
        "Contenuti giornalieri",
        "Reels + TikTok",
        "Ads management",
        "Consulenza strategica",
        "Report in tempo reale",
      ],
      popular: false,
    },
  ],
  emailMarketing: [
    {
      name: "Basic",
      price: 199,
      period: "mese",
      features: [
        "1000 email/mese",
        "1 campagna",
        "Template base",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: 399,
      period: "mese",
      features: [
        "5000 email/mese",
        "4 campagne",
        "A/B testing",
        "Automazioni",
      ],
      popular: true,
    },
  ],
  oneTime: [
    {
      name: "Delivery Setup",
      price: 499,
      period: "una tantum",
      features: [
        "Setup completo",
        "Ottimizzazione menu",
        "Foto professionali",
      ],
    },
    {
      name: "GMB Optimization",
      price: 199,
      period: "una tantum",
      features: [
        "Profilo ottimizzato",
        "Local SEO",
        "Gestione recensioni",
      ],
    },
    {
      name: "Brand Identity",
      price: 699,
      period: "una tantum",
      features: [
        "Logo design",
        "Brand guidelines",
        "Materiali brand",
      ],
    },
  ],
};

