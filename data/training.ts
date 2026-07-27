export interface TrainingProgram {
  id: number;
  title: string;
  category: "open" | "customized" | "both";
  duration: string;
  level: string;
  description: string;
  topics: string[];
  targetAudience: string;
  icon: string;
}

export const trainingPrograms: TrainingProgram[] = [
  {
    id: 1,
    title: "Business Analytics in a Big Data World",
    category: "both",
    duration: "3–5 Days",
    level: "Intermediate–Advanced",
    description:
      "A flagship MDP equipping professionals with the skills to harness big data for business insights. Covers modern analytics tools and techniques with hands-on experience in SAS and Python, drawing on real-world cases from industry and governance.",
    topics: [
      "Descriptive & Inferential Statistics",
      "Predictive Analytics & Forecasting",
      "Big Data Concepts & Tools",
      "SAS / Python for Business Analytics",
      "Data-Driven Decision Making",
    ],
    targetAudience: "Business managers, corporate executives, and government officers",
    icon: "📊",
  },
  {
    id: 2,
    title: "Data Science & Its Applications in Governance",
    category: "customized",
    duration: "3 Days",
    level: "Intermediate",
    description:
      "Specially designed for public sector professionals, this program explores how data science and AI can transform governance, public policy, and administrative decision-making. Delivered for Government of West Bengal and other agencies.",
    topics: [
      "Introduction to Data Science & AI",
      "Machine Learning for Governance",
      "Predictive Modelling in Public Policy",
      "Big Data Infrastructure",
      "Case Studies from Indian Government",
    ],
    targetAudience: "Government officers, IAS/IPS officers, and public sector executives",
    icon: "🏛️",
  },
  {
    id: 3,
    title: "Financial Risk Management",
    category: "both",
    duration: "3 Days",
    level: "Advanced",
    description:
      "A rigorous program on quantitative financial risk management covering coherent risk measures, volatility modelling, and portfolio analytics. Combines advanced statistical theory with practical applications in modern financial markets.",
    topics: [
      "Coherent Risk Measures & VaR",
      "GARCH & Volatility Modelling",
      "Portfolio Risk Optimization",
      "Time Series Analysis for Finance",
      "Credit Risk & Stress Testing",
    ],
    targetAudience: "Finance professionals, risk managers, investment analysts, and bankers",
    icon: "💹",
  },
  {
    id: 4,
    title: "Machine Learning & AI for Business Professionals",
    category: "open",
    duration: "2–3 Days",
    level: "Intermediate",
    description:
      "A practitioner-focused introduction to machine learning and artificial intelligence for business applications. Covers NLP, predictive modelling, and AI-driven decision-making — without requiring a programming background.",
    topics: [
      "Foundations of Machine Learning & AI",
      "Natural Language Processing & Text Analytics",
      "Predictive Modelling for Business",
      "AI in Financial & Trade Analytics",
      "Tools & Practical Demonstrations",
    ],
    targetAudience: "Managers, analysts, and professionals seeking applied AI literacy",
    icon: "🤖",
  },
  {
    id: 5,
    title: "Statistical Methods for Management Research",
    category: "both",
    duration: "3–4 Days",
    level: "Advanced",
    description:
      "Designed for researchers and doctoral students, this program covers advanced quantitative methods used in management and social science research. Emphasises multivariate techniques, SEM, and research design best practices.",
    topics: [
      "Multivariate Analysis (ANOVA, MANOVA)",
      "Structural Equation Modelling (SEM)",
      "Non-Parametric & Robust Statistics",
      "Research Design & Sampling Methods",
      "SPSS / R for Academic Research",
    ],
    targetAudience: "PhD scholars, management researchers, and faculty members",
    icon: "🔬",
  },
  {
    id: 6,
    title: "Data Analytics for Finance Professionals",
    category: "customized",
    duration: "2 Days",
    level: "Intermediate",
    description:
      "A focused program developed in association with the Institute of Cost Accountants of India (ICAI). Builds analytical competencies for finance professionals to interpret data, model financial scenarios, and support strategic decisions.",
    topics: [
      "Statistical Analysis in Finance",
      "Financial Data Visualization",
      "Investment Analytics & Return Modelling",
      "Risk-Adjusted Performance Metrics",
      "Excel / Python for Financial Analysis",
    ],
    targetAudience: "Chartered accountants, finance professionals, and CFOs",
    icon: "📈",
  },
];

export const programCategories = ["All", "Open Programs", "Customized Programs"];
