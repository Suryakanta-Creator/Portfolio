export interface ProjectItem {
  id: string;
  repositoryUrl: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  expandedDetails: {
    overview: string;
    highlights: string[];
    techStack: string[];
    status: string;
    accentColor: "aqua" | "violet" | "emerald" | "amber";
  };
  placeholderType: "agritech" | "ai-study" | "packcheck" | "cosmos";
}

export const portfolioConfig: {
  personal: { fullName: string; role: string; shortIntro: string };
  projects: ProjectItem[];
} = {
  personal: {
    fullName: "Suryakanta Bala",
    role: "Full-stack development & AI applications",
    shortIntro:
      "B.Tech student at DRIEMS University, exploring full-stack development and practical AI applications.",
  },
  projects: [
    {
      id: "krushi-seva",
      repositoryUrl: "https://github.com/Suryakanta-Creator/Krushi-seva",
      number: "/ 01 /",
      title: "Krushi Seva",
      category: "Crop health & AI",
      tagline: "Crop health & AI",
      description:
        "An AI-assisted crop-health platform connecting farmer diagnostics with agricultural advisories.",
      expandedDetails: {
        overview:
          "A hackathon prototype for crop-image diagnosis, weather-assisted risk estimates, and officer-reviewed agricultural advisories.",
        highlights: [
          "Crop image analysis with Gemini",
          "Farmer and agricultural officer workflows",
          "Regional advisories and follow-up monitoring",
        ],
        techStack: ["Next.js", "TypeScript", "Supabase", "Gemini", "Leaflet"],
        status: "Prototype",
        accentColor: "emerald",
      },
      placeholderType: "agritech",
    },
    {
      id: "ai-study-assistant",
      repositoryUrl: "https://github.com/Suryakanta-Creator/AI-Study-Asistant",
      number: "/ 02 /",
      title: "AI Study Assistant",
      category: "Learning & AI",
      tagline: "Learning & AI",
      description:
        "A study workspace for exploring your own notes with AI-powered questions, flashcards, and quizzes.",
      expandedDetails: {
        overview:
          "A student-focused application that brings learning materials, grounded question answering, flashcards, and quizzes into one workspace.",
        highlights: [
          "Organize subjects and uploaded documents",
          "Ask questions grounded in study materials",
          "Practice with flashcards and quizzes",
        ],
        techStack: ["Next.js", "TypeScript", "Supabase", "Gemini"],
        status: "Prototype",
        accentColor: "aqua",
      },
      placeholderType: "ai-study",
    },
    {
      id: "packcheck-ai",
      repositoryUrl: "https://github.com/Suryakanta-Creator/PackCheck-AI",
      number: "/ 03 /",
      title: "PackCheck AI",
      category: "OCR & label assessment",
      tagline: "OCR & label assessment",
      description:
        "An OCR-assisted prototype for reviewing packaged-commodity labels and their required declarations.",
      expandedDetails: {
        overview:
          "PackCheck AI extracts text from packaged-commodity labels and supports preliminary compliance assessment with a human review workflow.",
        highlights: [
          "OCR extraction from product labels",
          "Versioned rule evaluation and evidence highlighting",
          "Manual review of preliminary findings",
        ],
        techStack: ["React", "Spring Boot", "FastAPI", "OpenCV", "MySQL"],
        status: "Prototype",
        accentColor: "amber",
      },
      placeholderType: "packcheck",
    },
    {
      id: "cosmos-world",
      repositoryUrl: "https://github.com/Suryakanta-Creator/cosmic_world",
      number: "/ 04 /",
      title: "Cosmos World",
      category: "Interactive exploration",
      tagline: "Interactive exploration",
      description:
        "An interactive space-exploration experience built with React and dimensional visuals.",
      expandedDetails: {
        overview:
          "A space-themed web experience combining interactive visuals with exploration features.",
        highlights: [
          "Interactive space-themed interface",
          "React Three Fiber visuals",
          "Server-side Gemini chat endpoint",
        ],
        techStack: [
          "React",
          "Vite",
          "TypeScript",
          "React Three Fiber",
          "Framer Motion",
        ],
        status: "Prototype",
        accentColor: "violet",
      },
      placeholderType: "cosmos",
    },
  ],
};

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/suryakanta-bala-b820923aa/",
  instagram: "", // Set only after the owner supplies the correct profile URL.
  github: "https://github.com/Suryakanta-Creator",
  email: "myworldsurya912@gmail.com",
};
