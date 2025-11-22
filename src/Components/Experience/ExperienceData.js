import logoKochar from "../../assets/exp/Kochar_logo.png";
import logoAcciojob from "../../assets/exp/acciojob_logo.jpg";

export const experienceData = [
  {
    id: 1,
    role: "Network Engineer",
    company: "Kochar Tech",
    duration: "Apr 2025 - Oct 2025",
    logo: logoKochar,
    description: [
      "Managed NSA, SA, and customer complaint tickets through CRM with timely updates and resolutions.",
      "Monitored network and service performance using Nagios and resolved alerts promptly.",
      "Troubleshot MikroTik and Fortinet firewalls following defined SOPs.",
      "Coordinated with internal teams and documented all actions for accurate ticket resolution."
    ],
    skills: ["CCNA/CCNP", "Nagios", "MikroTik", "Fortinet", "Troubleshooting"]
  },

  {
    id: 2,
    role: "Full Stack Developer Trainee",
    company: "Acciojob",
    duration: "Sept 2023 - Dec 2024",
    logo: logoAcciojob,
    description: [
      "Worked on full-stack projects using React, Node.js, Express, and MongoDB.",
      "Built responsive UI components and integrated backend services.",
      "Collaborated with peers during project sprints and code reviews."
    ],
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js", "MongoDB"]
  }
];
