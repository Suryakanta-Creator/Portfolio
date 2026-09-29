export interface ProjectItem {
  id: string;
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
    role: "Full-stack development · AI-powered applications",
    headline: "Turning ideas into interactive experiences.",
    shortIntro:
      "B.Tech student at DRIEMS University, passionate about crafting high-performance full-stack web platforms and exploring practical, user-centric AI applications.",
    university: "DRIEMS University",
    degree: "B.Tech in Computer Science / Engineering",
    location: "India",
    status: "Open to Collaborations & Projects",
  },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Journey", href: "#journey" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
  about: {
    paragraphs: [
      "I am a curious software enthusiast currently pursuing my B.Tech degree at DRIEMS University. My focus lies at the intersection of modern full-stack web engineering and intelligent, AI-augmented digital tools.",
      "Rather than treating theory in isolation, I build directly — testing component architectures, refining motion and accessibility, and integrating generative models to solve practical workflow bottlenecks.",
      "I believe in clean visual hierarchies, intentional micro-interactions, robust typing, and systems that feel effortless on every screen.",
    ],
    quickStats: [
      { label: "Education", value: "B.Tech Undergrad" },
      { label: "Institution", value: "DRIEMS University" },
      { label: "Core Focus", value: "Full-Stack + AI" },
      { label: "Design Ethos", value: "Precision & Speed" },
    ],
  },
  journey: [
    {
      number: "/ 01 /",
      period: "Current",
      title: "B.Tech in Engineering & Computing",
      institution: "DRIEMS University",
      description:
        "Building foundational depth in data structures, algorithms, computational logic, and software engineering principles while maintaining active hands-on development.",
      focusAreas: ["Core CS Fundamentals", "Database Systems", "Software Architecture"],
    },
    {
      number: "/ 02 /",
      period: "Ongoing",
      title: "Full-Stack Web Foundations & Tooling",
      institution: "Independent Exploration",
      description:
        "Developing complete responsive web applications using TypeScript, React, Next.js, Tailwind CSS, and scalable component design systems with an emphasis on user experience.",
      focusAreas: ["Next.js App Router", "TypeScript", "Modern CSS & Motion"],
    },
    {
      number: "/ 03 /",
      period: "Ongoing",
      title: "AI-Powered Application Engineering",
      institution: "Applied Project Research",
      description:
        "Exploring practical integration of LLM endpoints, structured prompts, computer vision models, and contextual assistant pipelines into production-ready web interfaces.",
      focusAreas: ["LLM Integrations", "Intelligent Workflows", "Contextual Assistants"],
    },
    {
      number: "/ 04 /",
      period: "Next",
      title: "Scalable Systems & Product Deployment",
      institution: "Future Trajectory",
      description:
        "Aiming to engineer high-throughput, accessible, and maintainable software products that bridge complex machine intelligence with seamless everyday user interfaces.",
      focusAreas: ["Distributed Systems", "Cloud Deployments", "Open Source"],
    },
  ],
  projects: [
    {
      id: "krushi-seva",
      number: "/ 01 /",
      title: "Krushi Seva",
      category: "AgriTech & Full-Stack Platform",
      tagline: "Empowering agriculture through real-time advisory and resource access",
      description:
        "An agricultural assistance prototype concept structured to bridge farmers with regional crop advisories, seasonal market data, and weather alerts in an accessible, multi-lingual format.",
      expandedDetails: {
        overview:
          "Krushi Seva is conceived as an intuitive platform for farmers and agricultural communities. It explores lightweight mobile-first UI architecture to deliver vital farming advisories, soil management suggestions, and market pricing insights even under bandwidth-constrained environments.",
        highlights: [
          "Mobile-first responsive architecture designed for clean legibility in outdoor lighting",
          "Structured advisory modules for localized crop cycles and disease prevention",
          "Weather analytics integration concept with contextual seasonal reminders",
          "Modular component hierarchy prepared for multi-dialect localisation",
        ],
        techStack: ["Next.js", "TypeScript", "Tailwind CSS", "RESTful APIs", "Lucide Icons"],
        status: "Conceptual Prototype / Verification Pending",
        accentColor: "emerald",
      },
      placeholderType: "agritech",
    },
    {
      id: "ai-study-assistant",
      number: "/ 02 /",
      title: "AI Study Assistant",
      category: "AI & Productivity System",
      tagline: "Contextual study synthesis, active recall, and topic breakdown",
      description:
        "An intelligent academic companion concept designed to ingest learning materials, produce structured conceptual summaries, and generate adaptive recall flashcards for students.",
      expandedDetails: {
        overview:
          "Designed to address academic cognitive overload, the AI Study Assistant prototype demonstrates how large language models can act as interactive tutors. It breaks down complex textbook chapters into bite-sized learning nodes with automated question generation.",
        highlights: [
          "Dynamic question generation and automated active-recall query builder",
          "Hierarchical concept breakdown with progressive disclosure UI",
          "Customizable study session timers and progress tracking components",
          "Clean distraction-free dark interface with high typography legibility",
        ],
        techStack: ["React", "TypeScript", "Tailwind CSS", "LLM Integration Concept", "Framer Motion"],
        status: "Active Prototype / Under Development",
        accentColor: "aqua",
      },
      placeholderType: "ai-study",
    },
    {
      id: "packcheck-ai",
      number: "/ 03 /",
      title: "PackCheck AI",
      category: "Computer Vision & Verification",
      tagline: "Automated checklist and baggage validation with visual verification",
      description:
        "A travel and luggage verification prototype designed to cross-reference packed gear against trip-specific checklists using visual detection and structured status tagging.",
      expandedDetails: {
        overview:
          "PackCheck AI explores automated travel readiness. By combining custom item checklists with visual scanning verification prompts, the interface ensures essentials are accounted for before departure while flagging missing critical gear.",
        highlights: [
          "Dynamic checklist categories with customizable luggage weighting",
          "Computer vision verification flow concept with bounding-box feedback",
          "Instant status indicators (Verified, Missing, Optional) with audio-visual cues",
          "Offline-first local state storage for airport and travel reliability",
        ],
        techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Client State Management", "Motion"],
        status: "Experimental Concept / Verification Pending",
        accentColor: "violet",
      },
      placeholderType: "packcheck",
    },
    {
      id: "cosmos-world",
      number: "/ 04 /",
      title: "Cosmos World",
      category: "Interactive 3D & Astronomical Data",
      tagline: "Exploring celestial physics and planetary orbits in an interactive canvas",
      description:
        "An educational astronomical visualizer prototype featuring interactive orbital mechanics, planetary data exploration, and dimensional visual effects.",
      expandedDetails: {
        overview:
          "Cosmos World combines scientific curiosity with frontend graphical experimentation. It provides an interactive solar and stellar simulation interface where users can manipulate orbital speeds, inspect planetary mass metrics, and study celestial bodies.",
        highlights: [
          "Interactive orbital coordinate calculation and scaled visual representation",
          "Planetary metric explorer with high-contrast data callouts and telemetry",
          "Multi-axis viewpoint controls with smooth mathematical camera interpolation",
          "Optimized GPU canvas rendering designed for 60fps performance across devices",
        ],
        techStack: ["TypeScript", "HTML5 Canvas / WebGL Concept", "Tailwind CSS", "Motion"],
        status: "Interactive Showcase / In Progress",
        accentColor: "aqua",
      },
      placeholderType: "cosmos",
    },
  ],
  skillCategories: [
    {
      title: "Frontend & UI Engineering",
      badge: "Core Stack",
      skills: [
        "TypeScript",
        "React.js",
        "Next.js (App Router)",
        "Tailwind CSS",
        "Motion (Framer Motion)",
        "Semantic HTML5 & Modern CSS",
        "Responsive & Adaptive Layouts",
      ],
    },
    {
      title: "Backend & Systems",
      badge: "Architecture",
      skills: [
        "Node.js Basics",
        "RESTful API Integration",
        "JSON Data Modeling",
        "Git & Version Control",
        "Database Concepts (SQL/NoSQL)",
        "Modular Component Architecture",
      ],
    },
    {
      title: "AI & Emerging Technologies",
      badge: "Focus Area",
      skills: [
        "LLM API Integrations",
        "Prompt Engineering Patterns",
        "Multimodal AI Interface Design",
        "Conversational UI Flows",
        "Automated Extraction Pipelines",
      ],
    },
    {
      title: "Engineering Best Practices",
      badge: "Methodology",
      skills: [
        "Web Accessibility (WCAG / a11y)",
        "Keyboard Navigation & Focus Management",
        "Performance Optimization",
        "Reduced-Motion Conformance",
        "Clean, Typed Codebases",
      ],
    },
  ],
  contact: {
    heading: "Let's connect and build something remarkable.",
    subheading:
      "I am always open to discussing frontend engineering, AI integrations, student hackathons, or software opportunities.",
    emailPlaceholder: "surya.contact@example.com (Verification Pending)",
    isEmailVerified: false,
    location: "DRIEMS University, Odisha, India",
    statusNotice:
      "Personal contact endpoints and social handles are currently kept configurable. You can configure verified links directly in portfolio.config.ts.",
    socials: [
      {
        platform: "GitHub",
        label: "GitHub Profile",
        isConfigured: false,
      },
      {
        platform: "LinkedIn",
        label: "LinkedIn Profile",
        isConfigured: false,
      },
      {
        platform: "Twitter / X",
        label: "Twitter Profile",
        isConfigured: false,
      },
    ],
  },
};
