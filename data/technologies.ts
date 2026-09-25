export type TechCategory = {
  label: string;
  items: string[];
};

export const techStack: TechCategory[] = [
  {
    label: "Languages",
    items: ["Java", "JavaScript", "TypeScript", "SQL"],
  },
  {
    label: "Backend",
    items: ["Spring Boot", "Hibernate", "JDBC", "Servlets / JSP", "REST APIs"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS", "Redux"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "MySQL"],
  },
];

export const timeline = [
  {
    period: "2022 — 2026",
    title: "B.Tech, Computer Science and Engineering",
    place: "Vellore Institute of Technology, Amaravathi",
    description:
      "Coursework in Data Structures & Algorithms, OOP, Machine Learning, Deep Learning and Computer Networks.",
  },
  {
    period: "Training",
    title: "Java Full Stack Trainee",
    place: "CodeGnan, Vijayawada",
    description:
      "Hands-on training across Java, SQL, HTML, CSS and JavaScript — backend development, database connectivity and end-to-end application builds.",
  },
  {
    period: "Current focus",
    title: "Java Full Stack Development + DSA",
    place: "Self-directed",
    description:
      "Building full-stack projects with Spring Boot and React while strengthening data structures and algorithms fundamentals.",
  },
];
