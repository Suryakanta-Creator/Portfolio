export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  repositoryUrl: string;
  expandedDetails: {
    overview: string;
    highlights: string[];
    techStack: string[];
    status: string;
    accentColor: "aqua" | "violet" | "emerald" | "amber";
  };
  placeholderType: "agritech" | "ai-study" | "packcheck" | "cosmos";
}

export interface JourneyItem {
  number: string;
  period: string;
  title: string;
  institution: string;
  description: string;
  focusAreas: string[];
}

export interface SkillCategory {
  title: string;
  badge: string;
  skills: string[];
}

export interface PortfolioConfig {
  personal: {
    fullName: string;
    shortName: string;
    monogram: string;
    role: string;
    headline: string;
    shortIntro: string;
    university: string;
    degree: string;
    location: string;
    status: string;
    githubUsername: string;
  };
  navigation: {
    label: string;
    href: string;
  }[];
  about: {
    paragraphs: string[];
    quickStats: { label: string; value: string }[];
  };
  journey: JourneyItem[];
  projects: ProjectItem[];
  skillCategories: SkillCategory[];
  contact: {
    heading: string;
    subheading: string;
    email: string;
    emailPlaceholder: string;
    isEmailVerified: boolean;
    location: string;
    statusNotice: string;
    socials: {
      platform: string;
      label: string;
      url?: string;
      isConfigured: boolean;
    }[];
  };
}

export const portfolioConfig: PortfolioConfig = {
  personal: {
    fullName: "Suryakanta Bala",
    shortName: "Surya",
    monogram: "SB",
    role: "Full-Stack Developer · AI Builder",
    headline: "Building useful software with code, AI, and curiosity.",
    shortIntro:
      "B.Tech student at DRIEMS University building full-stack products, AI-assisted workflows, and interactive web experiences.",
    university: "DRIEMS University",
    degree: "B.Tech",
    location: "Odisha, India",
    status: "Open to internships, collaborations & projects",
    githubUsername: "Suryakanta-Creator",
  },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Journey", href: "#journey" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "GitHub", href: "#github" },
    { label: "Playground", href: "#playground" },
    { label: "Contact", href: "#contact" },
  ],
  about: {
    paragraphs: [
      "I am a B.Tech student at DRIEMS University who learns by building. My work spans full-stack web development, AI-assisted applications, and interactive user experiences.",
      "I enjoy taking an idea from a rough problem statement to a working prototype: designing the interface, structuring the application, connecting data and APIs, and iterating until the experience feels clear and useful.",
      "My goal is to keep improving as a software engineer while building products that combine strong engineering fundamentals with thoughtful design.",
    ],
    quickStats: [
      { label: "Education", value: "B.Tech Student" },
      { label: "Institution", value: "DRIEMS University" },
      { label: "Core Focus", value: "Full-Stack + AI" },
      { label: "Approach", value: "Learn by Building" },
    ],
  },
  journey: [
    {
      number: "/ 01 /",
      period: "Current",
      title: "B.Tech & Computer Science Foundations",
      institution: "DRIEMS University",
      description:
        "Strengthening core concepts across data structures, algorithms, operating systems, networking, databases, software engineering, cloud computing, and AI/ML.",
      focusAreas: ["Computer Science Fundamentals", "Problem Solving", "Software Engineering"],
    },
    {
      number: "/ 02 /",
      period: "Ongoing",
      title: "Full-Stack Product Development",
      institution: "Independent Projects",
      description:
        "Building responsive applications with React, Next.js, TypeScript, Tailwind CSS, Supabase, REST APIs, authentication, storage, and production deployment workflows.",
      focusAreas: ["Next.js", "TypeScript", "Supabase"],
    },
    {
      number: "/ 03 /",
      period: "Ongoing",
      title: "Applied AI Engineering",
      institution: "Project-Based Learning",
      description:
        "Integrating LLMs, multimodal models, OCR pipelines, retrieval workflows, and structured AI outputs into real applications rather than isolated demos.",
      focusAreas: ["Gemini", "RAG", "OCR & Multimodal AI"],
    },
    {
      number: "/ 04 /",
      period: "Next",
      title: "Production Systems & Open Source",
      institution: "Future Direction",
      description:
        "Deepening backend architecture, cloud deployment, observability, performance, and open-source contribution while continuing to ship complete products.",
      focusAreas: ["Scalable Systems", "Cloud", "Open Source"],
    },
  ],
  projects: [
    {
      id: "krushi-seva",
      number: "/ 01 /",
      title: "Krushi Seva",
      category: "AgriTech · AI · Full Stack",
      tagline: "AI-assisted crop diagnosis, risk intelligence, and official advisory workflows",
      description:
        "A mobile-first agricultural platform for crop disease and pest diagnosis, weather-assisted risk estimation, farmer follow-up, and extension-officer validation.",
      repositoryUrl: "https://github.com/Suryakanta-Creator/Krushi-seva",
      expandedDetails: {
        overview:
          "Krushi Seva is an SIH 2026 prototype built around two connected experiences: farmers can submit crop images for AI-assisted diagnosis and follow-up, while agricultural officials can review high-risk cases, validate reports, inspect regional risk information, and publish advisories.",
        highlights: [
          "Gemini-powered crop image diagnosis with structured confidence and recommendations",
          "Open-Meteo microclimate inputs for transparent environmental risk estimation",
          "Supabase authentication, PostgreSQL data, storage, SSR integration, and row-level security",
          "Official validation queue, regional advisories, follow-up monitoring, and multilingual UX",
        ],
        techStack: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Supabase",
          "Google Gemini",
          "Open-Meteo",
          "Leaflet",
        ],
        status: "SIH 2026 Working Prototype",
        accentColor: "emerald",
      },
      placeholderType: "agritech",
    },
    {
      id: "ai-study-assistant",
      number: "/ 02 /",
      title: "AI Study Assistant",
      category: "AI · RAG · Education",
      tagline: "Study from your own notes with grounded chat, flashcards, and quizzes",
      description:
        "A personal study workspace where students organize subjects and documents, process uploaded PDFs, ask grounded questions, generate flashcards, and take AI-created quizzes.",
      repositoryUrl: "https://github.com/Suryakanta-Creator/AI-Study-Asistant",
      expandedDetails: {
        overview:
          "AI Study Assistant combines document processing and retrieval with a student-focused workspace. Uploaded material is extracted, chunked, embedded, and retrieved to ground conversations and generated study material in the student's own notes.",
        highlights: [
          "Private subject and document workspace backed by Supabase Auth, Database, and Storage",
          "PDF extraction, chunking, vector embeddings, and retrieval for grounded study chat",
          "Streaming AI answers with citations and persistent conversations",
          "AI-generated flashcards, quizzes, scoring, and attempt history",
        ],
        techStack: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Supabase",
          "Vercel AI SDK",
          "Google Gemini",
          "Vector Embeddings",
        ],
        status: "Working Full-Stack Project",
        accentColor: "aqua",
      },
      placeholderType: "ai-study",
    },
    {
      id: "packcheck-ai",
      number: "/ 03 /",
      title: "PackCheck AI",
      category: "OCR · Compliance · Full Stack",
      tagline: "AI-assisted packaged-commodity compliance checking for Legal Metrology workflows",
      description:
        "An SIH 2026 system that scans packaged-product labels, extracts declarations with OCR, evaluates rule compliance, highlights evidence, and supports human review.",
      repositoryUrl: "https://github.com/Suryakanta-Creator/PackCheck-AI",
      expandedDetails: {
        overview:
          "PackCheck AI is a decision-support prototype for preliminary compliance assessment under the Legal Metrology (Packaged Commodities) Rules, 2011. It combines a React interface, a Spring Boot domain/API layer, and a Python OCR service.",
        highlights: [
          "OCR and image-processing pipeline using Python, FastAPI, OpenCV, and Tesseract",
          "Structured declaration extraction and version-aware compliance rule evaluation",
          "Spring Boot REST backend with review workflows, scan history, and role-based access",
          "Human-verification workflow with evidence highlighting before any official action",
        ],
        techStack: [
          "React",
          "Vite",
          "Tailwind CSS",
          "Java 17",
          "Spring Boot 3",
          "FastAPI",
          "OpenCV",
          "Tesseract OCR",
          "MySQL",
        ],
        status: "SIH 2026 Prototype",
        accentColor: "violet",
      },
      placeholderType: "packcheck",
    },
    {
      id: "cosmos-world",
      number: "/ 04 /",
      title: "Cosmic World",
      category: "3D Web · AI · Interactive Experience",
      tagline: "A futuristic space-exploration experience with interactive 3D scenes",
      description:
        "An interactive space experience built with React, TypeScript, Framer Motion, and React Three Fiber, with a server-side Gemini chat route.",
      repositoryUrl: "https://github.com/Suryakanta-Creator/cosmic_world",
      expandedDetails: {
        overview:
          "Cosmic World explores immersive web interaction through animated 3D scenes, space-themed UI, and an AI chat experience while keeping sensitive Gemini credentials on the server.",
        highlights: [
          "Interactive 3D scenes using React Three Fiber",
          "Motion-driven futuristic interface and responsive exploration flows",
          "Server-side Gemini API route so the API key is not bundled into the browser",
          "NASA near-Earth-object data screens using the public DEMO_KEY",
        ],
        techStack: [
          "React",
          "Vite",
          "TypeScript",
          "Framer Motion",
          "React Three Fiber",
          "Gemini API",
        ],
        status: "Interactive Web Project",
        accentColor: "aqua",
      },
      placeholderType: "cosmos",
    },
  ],
  skillCategories: [
    {
      title: "Languages & Fundamentals",
      badge: "Core",
      skills: [
        "Java",
        "JavaScript",
        "TypeScript",
        "Python",
        "SQL",
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
      ],
    },
    {
      title: "Frontend & Full-Stack",
      badge: "Build",
      skills: [
        "React",
        "Next.js App Router",
        "Vite",
        "Tailwind CSS",
        "Framer Motion",
        "Responsive UI",
        "REST APIs",
      ],
    },
    {
      title: "Backend, Data & Cloud",
      badge: "Systems",
      skills: [
        "Supabase",
        "PostgreSQL",
        "MySQL",
        "Spring Boot",
        "FastAPI",
        "Authentication & RLS",
        "Vercel Deployment",
      ],
    },
    {
      title: "AI & Interactive Tech",
      badge: "Explore",
      skills: [
        "Google Gemini",
        "RAG Workflows",
        "Vector Embeddings",
        "OCR Pipelines",
        "OpenCV",
        "React Three Fiber",
        "Prompt & Structured Output Design",
      ],
    },
  ],
  contact: {
    heading: "Let's build something useful.",
    subheading:
      "Open to internships, collaborations, hackathons, project discussions, and conversations about software and AI.",
    email: "",
    emailPlaceholder: "Email will be configured before launch",
    isEmailVerified: false,
    location: "Odisha, India",
    statusNotice:
      "The GitHub link is live. Direct email and LinkedIn should be configured with your verified details before the production launch.",
    socials: [
      {
        platform: "GitHub",
        label: "@Suryakanta-Creator",
        url: "https://github.com/Suryakanta-Creator",
        isConfigured: true,
      },
      {
        platform: "LinkedIn",
        label: "LinkedIn",
        isConfigured: false,
      },
    ],
  },
};
