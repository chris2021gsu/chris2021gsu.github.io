// =====================================================================
//  EDIT THIS FILE ONLY. Everything on the website comes from here.
//  Replace the placeholder text with your own details, save, and push.
// =====================================================================

const SITE = {
  // ---- Basics -------------------------------------------------------
  name: "Christy George",
  role: "Data Scientist",
  location: "Atlanta, GA",
  tagline:
    "Data Scientist at The Home Depot building production ML for supply chain — forecasting, optimization, and generative AI tools that save millions.",
  avatar: "assets/me.jpg",
  email: "", // add the email you want visitors to contact you at
  resume: "assets/Christy_George_Resume.pdf",

  // Your GitHub username: repos are loaded live from GitHub automatically.
  github: "chris2021gsu",
  pinnedRepos: [], // optional: ["repo-a", "repo-b"] to show these first

  links: {
    github: "https://github.com/chris2021gsu",
    linkedin: "https://www.linkedin.com/in/cgeorge28/",
    scholar: "", // Google Scholar URL
    huggingface: "", // https://huggingface.co/you
    kaggle: "",
    x: "",
  },

  about: [
    "I'm a Data Scientist on The Home Depot's Supply Chain team in Atlanta, with 5+ years of experience building machine learning systems across retail, insurance, and marketing. I take models all the way to production — my container forecasting system, deployed on Vertex AI, saves an estimated ~$15M a year and won an Orange Spotlight Award.",
    "I hold an M.S. in Data Science and Analytics from Georgia State University and a B.Tech in Electronics and Communication Engineering from NIT Calicut. Today I'm going deeper into generative AI — LLM chatbots, retrieval-augmented generation, and evaluating AI systems — and this site tracks what I build, research, and learn.",
  ],

  // ---- Numbers shown in the hero -------------------------------------
  stats: [
    { value: "5+", label: "Years of experience" },
    { value: "~$15M", label: "Annual savings from my forecasting system" },
    { value: "M.S.", label: "Data Science & Analytics" },
    { value: "4", label: "Companies & research labs" },
  ],

  // ---- Skills (grouped) ----------------------------------------------
  skills: {
    "Languages": ["Python", "SQL", "R", "C++"],
    "Machine Learning": ["scikit-learn", "TensorFlow", "XGBoost", "LightGBM", "Time series forecasting", "NLP", "Deep learning"],
    "Cloud & MLOps": ["Google Cloud Platform", "BigQuery", "Vertex AI", "Kubeflow", "Airflow", "Kubernetes", "AWS SageMaker", "CI/CD"],
    "Analytics & Optimization": ["A/B testing", "Statistics", "CPLEX", "Supply chain optimization", "Tableau"],
    "Generative AI": ["LLM chatbots", "RAG", "Prompt engineering"],
  },

  // ---- Experience (most recent first) --------------------------------
  experience: [
    {
      title: "Data Scientist – Supply Chain",
      org: "The Home Depot",
      period: "Aug 2024 — Present",
      points: [
        "Built and productionized an ML container forecasting system (time series + regression) on Vertex AI pipelines for weekly org-wide reporting — Orange Spotlight Award winner, saving ~$15M annually.",
        "Building cost-optimized ordering across TL4, TL3, and SDC Direct channels, delivering savings across non-syn vendors.",
        "Built an Import Chatbot that lets stakeholders ask questions, generate reports, and access analytics on demand, cutting ad-hoc requests to the data team.",
      ],
    },
    {
      title: "Senior Analyst – Quantitative Research (RM+)",
      org: "The Home Depot",
      period: "Feb 2023 — Aug 2024",
      points: [
        "Developed a pre-campaign pricing prediction service from scratch to optimize pricing for marketing campaigns.",
        "Engineered ETL and ML pipelines on Vertex AI and Kubeflow to predict pre-flight campaign KPIs.",
        "Presented insights to leadership to guide strategic decisions.",
      ],
    },
    {
      title: "Associate Data Scientist",
      org: "Mutual of Omaha",
      period: "Aug 2022 — Feb 2023",
      points: [
        "Built marketing analytics models that raised email campaign responses by 18% through media-mix strategies.",
        "Deployed real-time CTR prediction on AWS SageMaker, improving performance by 11%.",
      ],
    },
    {
      title: "Data Science Intern",
      org: "Mutual of Omaha",
      period: "Apr 2022 — Aug 2022",
      points: ["Built a workload model predicting claim processing time with 83% accuracy."],
    },
    {
      title: "Graduate Research Assistant – Data Scientist",
      org: "Georgia State University",
      period: "Aug 2021 — May 2022",
      points: ["Healthcare sentiment analysis: used BERT and GloVe to model US public sentiment during the COVID-19 pandemic."],
    },
    {
      title: "Data Scientist",
      org: "BFOX Technologies",
      period: "Jan 2018 — Aug 2020",
      points: [
        "Built ML models to optimize marketing campaign placements across channels.",
        "Ran A/B tests and turned results into insights, increasing website traffic by 19%.",
      ],
    },
  ],

  // ---- Education ----------------------------------------------------
  education: [
    {
      degree: "Master of Science in Data Science and Analytics",
      school: "Georgia State University, J. Mack Robinson College of Business · Atlanta, GA",
      period: "Graduated Dec 2022",
      note: "Studied machine learning, statistical modeling, deep learning, and big-data analytics; worked as a Graduate Research Assistant on NLP sentiment analysis.",
    },
    {
      degree: "Bachelor of Technology in Electronics and Communication Engineering",
      school: "National Institute of Technology (NIT) Calicut · Kerala, India",
      period: "Graduated May 2018",
      note: "Studied signal processing, communication systems, digital electronics, and programming — the math and engineering foundation for my move into data science.",
    },
  ],

  // ---- Achievements & certifications ---------------------------------
  achievements: [
    { year: "2025", title: "Orange Spotlight Award", detail: "The Home Depot, 1H 2025 — for the ML container forecasting system saving ~$15M a year." },
    { year: "2022", title: "+18% campaign response", detail: "Mutual of Omaha — media-mix marketing models for solicitation email campaigns." },
    { year: "2022", title: "COVID-19 sentiment research", detail: "Georgia State University — NLP with BERT and GloVe on US public sentiment." },
  ],

  // =====================================================================
  //  RESEARCH PAGE
  // =====================================================================
  researchIntro:
    "My research notebook: projects I've investigated, tools I publish, and the new AI techniques I'm tracking as I move deeper into generative AI.",

  researchInterests: ["Time series forecasting", "Supply chain optimization", "LLM applications & RAG", "NLP & sentiment analysis", "Evaluating AI systems"],

  // status: "Published" | "Preprint" | "Under review" | "In progress" | "Completed"
  papers: [
    {
      title: "Healthcare Sentiment Analysis of the US Population During COVID-19",
      authors: "Christy George (Graduate Research Assistant, Georgia State University)",
      venue: "Research project · Georgia State University",
      year: "2022",
      status: "Completed",
      abstract: "Mined and built metadata from multiple sources, then used ML and deep learning models (BERT, GloVe) to predict public sentiment during the pandemic.",
      links: {},
    },
  ],

  // Open-source libraries / packages you publish (add yours here)
  libraries: [],

  // ---- AI Tech Radar: new technologies you're tracking ----------------
  // ring: "Adopt" (I use it), "Trial" (experimenting), "Assess" (reading about), "Watch" (on my radar)
  radar: [
    { name: "Retrieval-augmented generation (RAG)", ring: "Trial", area: "LLM apps", note: "Grounding LLM answers in your own documents.", date: "2026-10", link: "" },
    { name: "LLM evaluation (LLM-as-judge)", ring: "Assess", area: "Evaluation", note: "Using models to score model outputs — and when to trust it.", date: "2026-10", link: "" },
    { name: "AI agents & tool use", ring: "Assess", area: "Agents", note: "LLMs that call APIs, run code, and complete multi-step tasks.", date: "2026-09", link: "" },
    { name: "Model Context Protocol (MCP)", ring: "Watch", area: "Agents", note: "Open standard for connecting AI apps to tools and data.", date: "2026-09", link: "https://modelcontextprotocol.io" },
    { name: "LoRA fine-tuning", ring: "Assess", area: "Training", note: "Adapting large models cheaply by training small low-rank updates.", date: "2026-08", link: "" },
    { name: "Foundation models for time series", ring: "Watch", area: "Forecasting", note: "Pretrained forecasters that work zero-shot on new series.", date: "2026-08", link: "" },
    { name: "SHAP explanations", ring: "Adopt", area: "Explainability", note: "My go-to for explaining tree-based model predictions.", date: "2026-06", link: "" },
    { name: "Gradient boosting (XGBoost / LightGBM)", ring: "Adopt", area: "Classic ML", note: "Still the strongest baseline for tabular data.", date: "2026-06", link: "" },
    { name: "Prompt engineering", ring: "Adopt", area: "LLM apps", note: "Structured prompts and few-shot examples in daily work.", date: "2026-05", link: "" },
  ],

  // ---- Reading log: papers by others you've studied ------------------
  reading: [
    { title: "Attention Is All You Need", authors: "Vaswani et al.", year: "2017", takeaway: "Introduced the transformer, the architecture behind today's LLMs.", link: "https://arxiv.org/abs/1706.03762" },
    { title: "XGBoost: A Scalable Tree Boosting System", authors: "Chen & Guestrin", year: "2016", takeaway: "Why boosted trees dominate tabular data, and the engineering that makes them fast.", link: "https://arxiv.org/abs/1603.02754" },
    { title: "A Unified Approach to Interpreting Model Predictions (SHAP)", authors: "Lundberg & Lee", year: "2017", takeaway: "Shapley values give consistent, model-agnostic feature attributions.", link: "https://arxiv.org/abs/1705.07874" },
    { title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks", authors: "Lewis et al.", year: "2020", takeaway: "Pairing a retriever with a generator reduces hallucination and keeps knowledge updatable.", link: "https://arxiv.org/abs/2005.11401" },
    { title: "LoRA: Low-Rank Adaptation of Large Language Models", authors: "Hu et al.", year: "2021", takeaway: "Fine-tune huge models by training tiny low-rank updates.", link: "https://arxiv.org/abs/2106.09685" },
  ],
};
