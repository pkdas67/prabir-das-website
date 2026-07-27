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
    title: "Bayesian Estimation in Reliability Models: A Comparative Study",
    authors: "Das, P.K., Sharma, R., & Gupta, M.",
    journal: "Journal of Statistical Theory and Applications",
    year: 2023,
    area: "Statistics",
    citations: 12,
  },
  {
    id: 2,
    title: "Predictive Analytics in Supply Chain Management: An Empirical Investigation",
    authors: "Das, P.K., & Verma, S.",
    journal: "International Journal of Production Economics",
    year: 2022,
    area: "Analytics",
    citations: 18,
  },
  {
    id: 3,
    title: "A Stochastic Model for Credit Risk Assessment in Emerging Markets",
    authors: "Das, P.K., Bose, A., & Singh, R.",
    journal: "Journal of Banking & Finance",
    year: 2022,
    area: "Finance",
    citations: 25,
  },
  {
    id: 4,
    title: "Non-Parametric Tests for Structural Breaks in Financial Time Series",
    authors: "Das, P.K., & Chatterjee, S.",
    journal: "Statistics & Probability Letters",
    year: 2021,
    area: "Statistics",
    citations: 9,
  },
  {
    id: 5,
    title: "Machine Learning Approaches to Demand Forecasting: A Review",
    authors: "Das, P.K., Roy, D., & Kumar, A.",
    journal: "Computers & Industrial Engineering",
    year: 2021,
    area: "Analytics",
    citations: 31,
  },
  {
    id: 6,
    title: "Multivariate Statistical Analysis of Regional Economic Disparities",
    authors: "Das, P.K., & Nair, M.",
    journal: "Economic Modelling",
    year: 2020,
    area: "Statistics",
    citations: 14,
  },
  {
    id: 7,
    title: "Portfolio Optimization Under Non-Gaussian Return Distributions",
    authors: "Das, P.K., Ghosh, P., & Rao, K.V.",
    journal: "Finance Research Letters",
    year: 2020,
    area: "Finance",
    citations: 22,
  },
  {
    id: 8,
    title: "Operations Research Applications in Healthcare Resource Allocation",
    authors: "Das, P.K., & Mehta, S.",
    journal: "Omega - The International Journal of Management Science",
    year: 2019,
    area: "Operations Research",
    citations: 16,
  },
  {
    id: 9,
    title: "Data Envelopment Analysis for Performance Evaluation of Indian Banks",
    authors: "Das, P.K., Mishra, B., & Patnaik, S.",
    journal: "Journal of Productivity Analysis",
    year: 2019,
    area: "Analytics",
    citations: 28,
  },
  {
    id: 10,
    title: "Survival Analysis of Small and Medium Enterprises in India",
    authors: "Das, P.K., & Dutta, A.",
    journal: "Small Business Economics",
    year: 2018,
    area: "Statistics",
    citations: 20,
  },
  {
    id: 11,
    title: "Fuzzy Logic Approach to Decision Making Under Uncertainty",
    authors: "Das, P.K., Jha, V., & Rao, N.",
    journal: "Fuzzy Sets and Systems",
    year: 2018,
    area: "Operations Research",
    citations: 17,
  },
  {
    id: 12,
    title: "Volatility Modeling in Indian Stock Markets: GARCH Family Comparison",
    authors: "Das, P.K., & Chakraborty, M.",
    journal: "Applied Economics Letters",
    year: 2017,
    area: "Finance",
    citations: 33,
  },
];

export const researchAreas = [
  "All",
  "Statistics",
  "Analytics",
  "Finance",
  "Operations Research",
];

export const totalPublications = 50;
export const totalCitations = 200;
