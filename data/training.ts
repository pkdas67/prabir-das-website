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
    title: "Business Analytics & Data-Driven Decision Making",
    category: "both",
    duration: "3 Days",
    level: "Intermediate",
    description:
      "A comprehensive program equipping professionals with practical tools and techniques to analyze business data, uncover insights, and make evidence-based decisions. Combines statistical methods with real-world business applications.",
    topics: [
      "Descriptive & Inferential Statistics",
      "Regression Analysis for Business",
      "Data Visualization & Dashboards",
      "Forecasting Techniques",
      "Case Studies & Hands-on Labs",
    ],
    targetAudience: "Business managers, analysts, and executives",
    icon: "📊",
  },
  {
    id: 2,
    title: "Statistical Methods for Research Professionals",
    category: "both",
    duration: "4 Days",
    level: "Advanced",
    description:
      "Designed for researchers and academic professionals, this program covers modern statistical techniques used in scholarly research. Emphasizes hypothesis testing, multivariate analysis, and research methodology best practices.",
    topics: [
      "Multivariate Analysis (ANOVA, MANOVA)",
      "Factor Analysis & Structural Equation Modelling",
      "Non-Parametric Statistics",
      "Research Design & Sampling",
      "Statistical Software (SPSS / R)",
    ],
    targetAudience: "Researchers, PhD scholars, and faculty members",
    icon: "🔬",
  },
  {
    id: 3,
    title: "Financial Analytics & Risk Management",
    category: "both",
    duration: "3 Days",
    level: "Advanced",
    description:
      "An industry-focused program covering quantitative finance, risk modelling, and portfolio analytics. Participants learn to apply advanced statistical and computational tools to financial data for better risk-adjusted investment decisions.",
    topics: [
      "Time Series Analysis for Finance",
      "GARCH & Volatility Modelling",
      "Value at Risk (VaR) Methods",
      "Credit Risk Assessment",
      "Portfolio Optimization Techniques",
    ],
    targetAudience: "Finance professionals, investment analysts, and bankers",
    icon: "💹",
  },
  {
    id: 4,
    title: "Operations Research & Optimization",
    category: "customized",
    duration: "3–5 Days",
    level: "Intermediate–Advanced",
    description:
      "A practical introduction to operations research techniques including linear programming, simulation, and queuing theory. Tailored to help organizations optimize processes, minimize costs, and improve resource utilization.",
    topics: [
      "Linear & Integer Programming",
      "Network Models & Transportation",
      "Queuing Theory & Simulation",
      "Decision Analysis",
      "Supply Chain Optimization",
    ],
    targetAudience: "Operations managers, supply chain professionals, and engineers",
    icon: "⚙️",
  },
  {
    id: 5,
    title: "Data Science Foundations for Managers",
    category: "open",
    duration: "2 Days",
    level: "Beginner–Intermediate",
    description:
      "A non-technical yet rigorous introduction to data science concepts tailored for senior managers and leaders. Focuses on understanding AI/ML capabilities, interpreting analytical outputs, and driving data culture in organizations.",
    topics: [
      "Introduction to Data Science & AI",
      "Understanding Machine Learning Models",
      "Big Data Concepts & Tools",
      "Interpreting Analytical Reports",
      "Building Data-Driven Culture",
    ],
    targetAudience: "Senior managers, CXOs, and decision-makers",
    icon: "🧠",
  },
  {
    id: 6,
    title: "Research Methodology & Academic Writing Workshop",
    category: "customized",
    duration: "2 Days",
    level: "Beginner–Intermediate",
    description:
      "A focused workshop for doctoral students and early-career researchers covering research design, literature review strategies, and academic writing. Participants learn to craft publishable papers and navigate the peer-review process.",
    topics: [
      "Research Design & Problem Formulation",
      "Literature Review & Citation Tools",
      "Quantitative vs. Qualitative Methods",
      "Academic Writing & Paper Structure",
      "Publication Strategy & Peer Review",
    ],
    targetAudience: "PhD students, early-career researchers, and faculty",
    icon: "✍️",
  },
];

export const programCategories = ["All", "Open Programs", "Customized Programs"];
