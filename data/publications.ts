export interface Publication {
  id: number;
  title: string;
  authors: string;
  journal: string;
  year: number;
  area: string;
  doi?: string;
  citations?: number;
}

export const publications: Publication[] = [
  {
    id: 1,
    title: "Understanding Central Bank Digital Currency Adoption: A Bibliometric and AI-Driven Analysis",
    authors: "Das, P.K. & Ghosh, K.",
    journal: "Digital Policy, Regulation and Governance",
    year: 2026,
    area: "Machine Learning & AI",
    doi: "10.1108/DPRG-11-2025-0439",
  },
  {
    id: 2,
    title: "Artificial Intelligence and Inflation Forecasting: A Contemporary Perspective",
    authors: "Das, P.K. & Das, P.K.",
    journal: "South Asian Journal of Macroeconomics and Public Finance",
    year: 2025,
    area: "Machine Learning & AI",
    doi: "10.1177/22779787251318831",
  },
  {
    id: 3,
    title: "Comprehensive Analysis of Cryptocurrency, Virtual Digital Assets, and Distributed Ledger Technology with Insights into Indian Policies and Research Trends",
    authors: "Das, P.K. & Ghosh, K.",
    journal: "Springer Nature's Discover Series",
    year: 2025,
    area: "Finance",
    doi: "10.1007/s44257-025-00030-9",
  },
  {
    id: 4,
    title: "Central Bank Digital Currencies – A Bibliometric Analysis on Research Themes in Pursuit of Research Trends",
    authors: "Das, P.K. & Ghosh, K.",
    journal: "International Journal of Law and Management",
    year: 2024,
    area: "Finance",
    doi: "10.1108/IJLMA-11-2023-0252",
  },
  {
    id: 5,
    title: "Improvement in Inflation Forecasting: Ensembling Text Mining with Macro Data in Machine Learning Models",
    authors: "Das, P.K. & Das, P.K.",
    journal: "International Journal of Economics and Finance",
    year: 2024,
    area: "Machine Learning & AI",
    doi: "10.5539/ijef.v16n6p92",
  },
  {
    id: 6,
    title: "Forecasting and Analyzing Predictors of Inflation Rate: Using Machine Learning Approach",
    authors: "Das, P.K. & Das, P.K.",
    journal: "Journal of Quantitative Economics",
    year: 2024,
    area: "Machine Learning & AI",
    doi: "10.1007/s40953-024-00384-z",
  },
  {
    id: 7,
    title: "E-Commerce Sellers Ratings — Is User Feedback Adequate?",
    authors: "Das, P.K. & Kumar, T.",
    journal: "International Journal of Consumer Studies",
    year: 2023,
    area: "Business Analytics",
    doi: "10.1111/ijcs.12938",
  },
  {
    id: 8,
    title: "Early Stage Prediction of International Revenue of Bollywood Movies: Emphasis on Simultaneous over Sequential Release",
    authors: "Das, P.K. & Paul, C.",
    journal: "Journal of Creative Communications",
    year: 2023,
    area: "Business Analytics",
    doi: "10.1177/09722629231172048",
  },
  {
    id: 9,
    title: "Predicting Movie Revenue Before Committing Significant Investments",
    authors: "Das, P.K. & Paul, C.",
    journal: "Journal of Media Economics",
    year: 2022,
    area: "Business Analytics",
    doi: "10.1080/08997764.2022.2066108",
  },
  {
    id: 10,
    title: "Prediction, Risk Assessment and Comparison of Selected Emerging Markets Stock Indices During COVID-19 Pandemic Using the Coherent Measure",
    authors: "Das, P.K. & Das, A.",
    journal: "The Journal of Prediction Markets",
    year: 2022,
    area: "Finance",
    doi: "10.5750/jpm.v16i3.1974",
  },
  {
    id: 11,
    title: "Application of Nonlinear Stochastic Single Source of Error State Space Models in the Forecasting of Mobile Subscribers in India",
    authors: "Das, P.K. & Das, A.",
    journal: "International Journal of Data Science",
    year: 2021,
    area: "Statistics",
  },
  {
    id: 12,
    title: "Modeling of Mobile Telephone Subscribers Using Piecewise Nonlinear Growth Models",
    authors: "Das, P.K. & Pal, A.",
    journal: "Statistics and Applications",
    year: 2021,
    area: "Statistics",
  },
  {
    id: 13,
    title: "Exploring the Determinants of Mobile-Based Services Diffusion: Past Determinants, Emergent Pattern and a Proposed Framework",
    authors: "Das, P.K., Roy, A. & Dutta, G.K.",
    journal: "International Journal of Business Innovation and Research",
    year: 2019,
    area: "Business Analytics",
    doi: "10.1504/IJBIR.2019.098759",
  },
  {
    id: 14,
    title: "Identifying the Most Effective Model for Understanding the Growth Rate of Government e-Transactions: Brown's Model of Exponential Smoothing",
    authors: "Das, P.K., Roy, A. & Dutta, G.K.",
    journal: "Asian Journal of Computer Science and Technology",
    year: 2018,
    area: "Statistics",
  },
  {
    id: 15,
    title: "Distribution Network of Indian Lighting Industry — A Comparative Sectoral Analysis",
    authors: "Das, P.K., Bandyopadhyay, A.K. & Pal, A.",
    journal: "International Journal in Management and Social Science",
    year: 2015,
    area: "Business Analytics",
  },
  {
    id: 16,
    title: "Nonlinear Statistical Model and Its Applications to Diffusion of Mobile Telephony in India",
    authors: "Das, P.K.",
    journal: "Annals of Pure and Applied Mathematics",
    year: 2013,
    area: "Statistics",
  },
  {
    id: 17,
    title: "Probability Distribution of Extreme Rainfall Series for Conservation Planning in a Sub-Humid Climate",
    authors: "Das, P.K., Sharda, V.N. & Ojasvi, P.R.",
    journal: "Applied Engineering in Agriculture",
    year: 2008,
    area: "Statistics",
    doi: "10.13031/2013.25144",
  },
  {
    id: 18,
    title: "Modelling Weekly Rainfall Data for Crop Planning in a Sub-Humid Climate of India",
    authors: "Das, P.K. & Sharda, V.N.",
    journal: "Agricultural Water Management (Elsevier)",
    year: 2005,
    area: "Statistics",
    doi: "10.1016/S0378-3774(05)00038-7",
  },
  {
    id: 19,
    title: "Modelling Wheat Production at State Level in Post-Green Revolution Era",
    authors: "Das, P.K. & Prajneshu",
    journal: "Indian Journal of Agricultural Sciences",
    year: 1998,
    area: "Statistics",
  },
];

export const researchAreas = [
  "All",
  "Statistics",
  "Machine Learning & AI",
  "Finance",
  "Business Analytics",
];

export const totalPublications = 50;
export const totalCitations = 200;
