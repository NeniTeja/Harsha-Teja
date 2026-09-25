export type Project = {
  slug: string;
  title: string;
  category: string;
  stack: string[];
  summary: string;
  problem?: string;
  solution?: string;
  features?: string[];
  architecture?: string;
  github?: string;
  live?: string;
  image: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "taskflow",
    title: "TaskFlow",
    category: "Task Management",
    stack: ["React", "Redux", "Spring Boot", "Java", "REST API"],
    summary:
      "A full-stack task management application for organizing tasks, priorities and daily productivity, with Redux handling frontend state and Spring Boot providing backend APIs.",
    problem:
      "Juggling tasks, priorities and due dates across scattered notes and spreadsheets makes it hard to see what actually needs attention today.",
    solution:
      "A single-page React application with full CRUD task workflows — creation, status updates, filtering and due-date tracking — backed by a Spring Boot REST API with role-based access control.",
    features: [
      "Functional components and Hooks with React Router for client-side navigation",
      "Async API calls with optimistic UI updates and centralized error handling",
      "Reusable, prop-driven components with shared form-validation logic",
      "Cut duplicate UI code by ~30% across views by consolidating shared logic",
    ],
    architecture:
      "React SPA consuming a Spring Boot REST API. Frontend state is kept in sync with the server through async calls and optimistic updates rather than a full page reload per action.",
    github: "https://github.com/NeniTeja/taskflow-react-redux",
    image: "/images/projects/taskflow.png",
    featured: true,
  },
  {
    slug: "hirehub",
    title: "HireHub",
    category: "Recruitment Platform",
    stack: ["Java", "Spring Boot", "JSP", "MySQL", "JDBC"],
    summary:
      "A recruitment management platform connecting candidate and recruiter workflows through a Spring Boot and MySQL backend.",
    problem:
      "Job postings, applications and hiring status updates need to stay consistent across three different kinds of users — candidates, recruiters and admins.",
    solution:
      "A servlet-based backend on MVC architecture handling authentication, session management and CRUD logic for job posting, search, applications and status tracking across the hiring pipeline.",
    features: [
      "Normalized MySQL schema spanning 4 core entities",
      "DAO layer built with JDBC and PreparedStatements, eliminating SQL-injection risk",
      "Role-based workflows for candidates, recruiters and admins",
      "Deployed on Apache Tomcat; cut manual data-entry steps by 30%",
    ],
    architecture:
      "Servlet-based MVC architecture on Apache Tomcat, with a JDBC DAO layer over a normalized MySQL schema and session-based authentication.",
    github: "https://github.com/NeniTeja",
    image: "/images/projects/hirehub.png",
    featured: true,
  },
  {
    slug: "finance-dashboard",
    title: "Personal Finance Dashboard",
    category: "Data Visualization",
    stack: ["React", "JavaScript", "Charts"],
    summary:
      "A personal finance dashboard for tracking income, expenses and savings goals through an interactive visual interface.",
    solution:
      "An interactive React interface for tracking income, expenses and savings goals, presenting financial data through charts instead of raw numbers.",
    github: "https://github.com/NeniTeja/Personal-Finance-Dashboard",
    image: "/images/projects/finance-dashboard.png",
    featured: true,
  },
  {
    slug: "nutribite",
    title: "NutriBite",
    category: "Food Ordering Platform",
    stack: ["Java", "Spring Boot", "JSP", "MySQL"],
    summary:
      "An online food ordering and restaurant management platform designed around customer, restaurant and administrative workflows.",
    problem:
      "Restaurants need an end-to-end flow — browsing, cart, checkout and order tracking — that stays reliable across customer, restaurant and admin roles.",
    solution:
      "A role-based platform built with Spring Boot, JSP/JSTL and MySQL, covering restaurant browsing, cart, checkout and order tracking end-to-end.",
    features: [
      "Razorpay hosted Checkout for test-mode payments",
      "Server-side order creation with HMAC-SHA256 payment signature verification",
      "Gmail SMTP email service (JavaMailSender) for automated registration confirmations",
      "Secure session-based authentication across all three roles",
    ],
    architecture:
      "Spring Boot backend with JSP/JSTL views, MySQL persistence, and a payment flow that creates orders server-side before verifying and confirming them.",
    image: "/images/projects/nutribite.png",
    featured: true,
  },
  {
    slug: "hospital-management-system",
    title: "Hospital Management System",
    category: "Management System",
    stack: ["React"],
    summary:
      "A React-based interface for managing hospital records and day-to-day administrative workflows.",
    image: "/images/projects/hospital.png",
    featured: false,
  },
  {
    slug: "restaurant-menu-management",
    title: "Restaurant Menu Management",
    category: "Database Application",
    stack: ["Core Java", "JDBC", "MySQL"],
    summary:
      "A database-driven restaurant menu management application supporting CRUD operations, search and transaction-based database operations.",
    image: "/images/projects/restaurant.png",
    featured: false,
  },
];
