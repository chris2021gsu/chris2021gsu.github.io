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
    "I turn data into decisions — building machine learning models, analyses, and AI tools that solve real problems.",
  avatar: "", // e.g. "assets/me.jpg" — leave empty to show your initials
  email: "", // add the email you want visitors to contact you at
  resume: "", // e.g. "assets/resume.pdf"

  // Your GitHub username: repos are loaded live from GitHub automatically.
  github: "chris2021gsu",
  pinnedRepos: [], // optional: ["repo-a", "repo-b"] to show these first

  links: {
    github: "https://github.com/chris2021gsu",
    linkedin: "",
    scholar: "", // Google Scholar URL
    huggingface: "", // https://huggingface.co/you
    kaggle: "",
    x: "",
  },

  about: [
    "I'm a Data Scientist in Atlanta who likes turning messy, real-world data into models and insights people actually use. My work spans the full workflow — framing the question, cleaning and exploring data, building and evaluating models, and explaining the results to stakeholders.",
    "Right now I'm going deeper into applied AI: large language models, retrieval-augmented generation (RAG), and how to evaluate AI systems reliably. This site tracks what I build, what I research, and the new AI techniques I'm learning.",
  ],

  // ---- Numbers shown in the hero (update to your real numbers) --------
  stats: [
    { value: "2+", label: "Years in data science" },
    { value: "10+", label: "ML & analytics projects" },
    { value: "4", label: "AI techniques in use" },
    { value: "3", label: "Certifications" },
  ],

  // ---- Skills (grouped) ----------------------------------------------
  skills: {
    "Languages": ["Python", "SQL", "R"],
    "Data & Analytics": ["pandas", "NumPy", "Statistics", "A/B testing", "Tableau / Power BI"],
    "Machine Learning": ["scikit-learn", "XGBoost", "PyTorch", "Time series forecasting"],
    "AI & GenAI": ["LLMs", "RAG", "Prompt engineering", "NLP"],
    "Tools & Cloud": ["Git", "Jupyter", "Docker", "AWS / Azure"],
  },

  // ---- Experience (most recent first) --------------------------------
  experience: [
    {
      title: "Data Scientist",
      org: "[Company name]",
      period: "[Start year] — Present",
      points: [
        "Build and deploy machine learning models that support business decisions, from data preparation to production.",
        "Design dashboards and analyses that turn complex data into clear recommendations for stakeholders.",
        "Prototype LLM-powered tools (RAG, text classification) to automate manual work.",
      ],
    },
    {
      title: "Data Analyst / Data Science Intern",
      org: "[Company name]",
      period: "[Years]",
      points: [
        "Cleaned and analysed large datasets with Python and SQL to answer business questions.",
        "Built predictive models and reported findings to the team.",
      ],
    },
  ],

  // ---- Education ----------------------------------------------------
  education: [
    {
      degree: "[Degree, e.g. M.S. in Data Science / Analytics]",
      school: "[University name]",
      period: "[Years]",
      note: "Relevant coursework: Machine Learning, Statistical Modeling, Deep Learning, Data Mining",
    },
  ],

  // ---- Achievements & certifications ---------------------------------
  achievements: [
    { year: "[Year]", title: "Machine Learning Specialization", detail: "[Issuer, e.g. DeepLearning.AI / Coursera]", link: "" },
    { year: "[Year]", title: "Cloud / Data certification", detail: "[e.g. AWS, Azure, or Google Cloud]", link: "" },
    { year: "[Year]", title: "Hackathon / competition / award", detail: "[What you built or won]" },
  ],

  // =====================================================================
  //  RESEARCH PAGE
  // =====================================================================
  researchIntro:
    "My research notebook as a data scientist moving deeper into AI: projects I'm investigating, tools I publish, and the new techniques I'm tracking and learning.",

  researchInterests: ["Applied LLMs", "Retrieval-augmented generation", "Evaluating AI systems", "Time series & forecasting", "Explainable ML"],

  // status: "Published" | "Preprint" | "Under review" | "In progress"
  papers: [
    {
      title: "Evaluating Retrieval-Augmented Generation on Domain-Specific Data",
      authors: "Christy George",
      venue: "Research project",
      year: "2026",
      status: "In progress",
      abstract: "How well do RAG pipelines answer questions over specialised documents, and which retrieval choices matter most?",
      links: {},
    },
    {
      title: "Explainable Forecasting: Combining Gradient Boosting with SHAP",
      authors: "Christy George",
      venue: "Research project",
      year: "2026",
      status: "In progress",
      abstract: "Making time-series forecasts more trustworthy by explaining which features drive each prediction.",
      links: {},
    },
  ],

  // Open-source libraries / packages you publish
  libraries: [
    {
      name: "[your-library]",
      description: "Planned: a small Python toolkit for quick EDA and model-evaluation reports.",
      install: "pip install [your-library]",
      tags: ["Python", "Data science"],
      links: { repo: "", pypi: "", docs: "" },
    },
  ],

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
