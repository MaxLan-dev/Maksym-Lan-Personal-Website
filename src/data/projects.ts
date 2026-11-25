export interface Project {
  title: string;
  description: string;
  period: string;
  association?: string;
  skills: string[];
  link: string;
}

export const projects: Project[] = [
  {
    title: 'Hrove',
    description: 'One app for frontline and shift-based teams: schedules, daily tasks for each site, safety instructions and messages from their lead, plus team readiness so leads can spot tired teams early. Personal health data stays on the worker’s phone and employers only see team totals. Keeps working when the cloud goes down.',
    period: 'Jan 2026 – Present',
    association: 'CTO',
    skills: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'HealthKit', 'Health Connect'],
    link: 'https://hrove.ca/'
  },
  {
    title: 'AgentGit',
    description: 'A voice agent as a git repo. An AI composer makes one commit per request, and any commit can be called, evaluated or reverted, so changes to the agent are reviewable like code.',
    period: '2026',
    association: 'Cresta',
    skills: ['Python', 'FastAPI', 'React', 'Fly.io', 'Voice AI', 'AI'],
    link: '#'
  },
  {
    title: 'GY Tea',
    description: 'E-commerce platform for a family-run Winnipeg tea business: catalog, guest checkout, Square payments, local pickup, reviews, blog, newsletter and an admin dashboard.',
    period: 'Sep 2025 – Present',
    association: 'Live store',
    skills: ['React', 'TypeScript', 'Supabase', 'Square', 'Netlify Functions', 'Tailwind CSS'],
    link: 'https://gytea.ca/'
  },
  {
    title: 'ZoneSmart',
    description: 'Turns municipal zoning bylaws scattered across PDFs and websites into a searchable, comparable national dataset, with a RAG assistant on top for housing and land-use research.',
    period: '2026',
    skills: ['Flask', 'React', 'TypeScript', 'Qdrant', 'Groq', 'Python', 'AI'],
    link: 'https://github.com/MaxLan-dev/zoning-app'
  },
  {
    title: 'TriageFlow',
    description: 'Emergency-department workflow prototype with fictional data: structured nurse intake, AI-drafted clinician summaries, a separate deterministic CTAS rules engine and a live physician queue. The nurse always makes the final call.',
    period: '2026',
    association: 'Prototype',
    skills: ['React', 'TanStack Start', 'Supabase', 'Groq', 'Zod', 'AI'],
    link: '#'
  },
  {
    title: 'Velocistock',
    description: 'Website for a Winnipeg B2B service that helps businesses recover value from surplus inventory.',
    period: '2026',
    skills: ['Next.js', 'TypeScript', 'React'],
    link: 'https://velocistock.vercel.app'
  },
  {
    title: 'Outreach Agent',
    description: 'Self-serve outreach agent: set a goal, run lead discovery, review AI-drafted emails and approve each send. Handles replies and follow-up nudges through durable workflows.',
    period: '2026',
    skills: ['Next.js', 'TypeScript', 'Mastra', 'Neon Postgres', 'Exa', 'Fly.io', 'AI'],
    link: 'https://github.com/MaxLan-dev/agents-stuff'
  },
  {
    title: 'Eco-Pulse (GenAI Genesis)',
    description: 'Urban heat mitigation and tree-planting planner for Montreal. It maps ML-derived priority zones and generates intervention blueprints with planting sites, tree counts and cost/benefit estimates. 1st place in the virtual track.',
    period: '2026',
    association: 'GenAI Genesis',
    skills: ['React', 'TypeScript', 'FastAPI', 'Python', 'Gemini', 'Leaflet', 'Tailwind CSS', 'AI', 'Data Visualization'],
    link: 'https://github.com/Lushenwar/Eco-Pulse'
  },
  {
    title: 'SettleSmart Winnipeg',
    description: 'An interactive neighbourhood livability explorer that ranks Winnipeg neighbourhoods using open data on schools, parks, businesses, transit, safety, and more.',
    period: '2026',
    association: 'Winnipeg Open Data Datathon',
    skills: ['Python', 'Flask', 'React', 'TypeScript', 'Data Analysis', 'GeoJSON'],
    link: 'https://github.com/alex-and-ye/SettleSmart-Winnipeg'
  },
  {
    title: 'ComplAInce',
    description: 'A regulatory compliance chatbot using RAG over curated provincial and federal regulations, returning grounded answers with citations and document links.',
    period: '2026',
    association: 'Southern MB Tech Conference',
    skills: ['React', 'Flask', 'OpenAI', 'Qdrant', 'Supabase', 'LlamaIndex', 'RAG', 'Docker'],
    link: 'https://github.com/tadghh/reg-compliance-chatbot'
  },
  {
    title: 'Mail Maestro',
    description: 'Email assistant that categorizes mail, writes summaries, extracts key points, detects sentiment and suggests replies with Gemini.',
    period: '2026',
    association: 'Lovable / Gemini 2.0 Flash',
    skills: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Gemini', 'AI', 'UX/UI'],
    link: 'https://github.com/MaxLan-dev/mail-maestro'
  },
  {
    title: 'Project JP',
    description: 'AI chatbot for a large SaaS provider: Azure AI Services on a .NET backend with real-time messaging, data collection tools, analytics and Docker deployment.',
    period: 'May 2025 – Aug 2025',
    association: 'University of Manitoba',
    skills: ['C#', '.NET', 'ASP.NET Core', 'Azure AI', 'Azure OpenAI', 'Docker', 'API Development'],
    link: '#'
  },
  {
    title: 'Email Helper',
    description: 'Email productivity tool built with the NullTerminators team. 1st place at the Boosting Canadian Productivity Hackathon.',
    period: '2025',
    association: 'Hackathon win',
    skills: ['AI', 'Productivity'],
    link: 'https://github.com/MaxLan-dev/Email-Helper'
  },
  {
    title: 'Winnipeg Transit Improvements Map',
    description: 'Data visualization of areas requiring enhancements in Winnipeg public transit based on public data.',
    period: 'Mar – Apr 2025',
    association: 'DataThon 2025',
    skills: ['Python', 'Django', 'Data Analysis', 'Data Visualization', 'Open Data'],
    link: 'https://github.com/MaxLan-dev/Datathon'
  },
  {
    title: 'Food4U Platform',
    description: 'A platform connecting farmers with small businesses in Winnipeg for local food ordering.',
    period: 'Feb – Mar 2025',
    association: '.DevHacks2025',
    skills: ['Python', 'Django', 'HTML', 'CSS', 'Software Design'],
    link: 'https://github.com/MaxLan-dev/DevHacks2025'
  },
  {
    title: 'Calorie Tracker',
    description: 'Android app for tracking calories and exercise with meal and exercise plan building.',
    period: 'Jan – Apr 2025',
    association: 'University of Manitoba',
    skills: ['Java', 'Android', 'HSQLDB', 'Software Testing'],
    link: 'https://github.com/MaxLan-dev/COMP3350-WEBSITE'
  },
  {
    title: 'NASA Space Apps Challenge',
    description: 'App prioritizing exoplanets for observation by the Habitable Worlds Observatory.',
    period: 'Oct – Nov 2024',
    association: 'NASA Space Apps',
    skills: ['Python', 'Django', 'NumPy', 'Pandas', 'Data Analysis'],
    link: 'https://github.com/alex-and-ye/NASA-SPACE-APPS-PROJECT'
  },
  {
    title: 'Personal Website',
    description: 'This site.',
    period: 'Jul 2024 – Present',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    link: 'https://github.com/MaxLan-dev/Maksym-Lan-Personal-Website'
  },
  {
    title: 'Discord GPTBot',
    description: 'A Discord bot using OpenAI API to provide answers to user questions.',
    period: 'Feb – Mar 2023',
    association: '.DevHacks2023',
    skills: ['React', 'JavaScript', 'Node.js', 'OpenAI API'],
    link: 'https://github.com/DenysPopov-dp/UM2023hack'
  },
  {
    title: 'React Chat App',
    description: 'A simple real-time React chat application.',
    period: 'Jan – Feb 2023',
    skills: ['React', 'JavaScript', 'Tailwind CSS', 'Node.js'],
    link: 'https://github.com/MaxLan-dev/Chat_app'
  },
  {
    title: 'Model Check of Te Method in HII Regions',
    description: 'Software to estimate oxygen abundance in HII regions based on spectral intensities, comparing with Cloudy simulations.',
    period: 'Dec 2021 – Feb 2022',
    association: 'Junior Academy of Sciences',
    skills: ['C++', 'Astrophysics', 'Research', 'LaTeX'],
    link: 'https://github.com/MaxLan-dev/Research_project'
  },
  {
    title: 'Startup Prowir',
    description: 'Led a startup focused on wireless charger development, including product conceptualization and website design.',
    period: 'Apr 2020 – Jan 2021',
    skills: ['JavaScript', 'Node.js', 'CSS', 'HTML', 'Project Management'],
    link: 'https://prowircontacts.wixsite.com/prowir'
  },
  {
    title: 'Maximum Masses of Neutron Stars',
    description: 'Analyzed data to create a mass distribution model and examined impact on kernel probability density.',
    period: 'Nov 2019 – Dec 2020',
    association: 'Junior Academy of Sciences',
    skills: ['Python', 'Astrophysics', 'Statistics', 'LaTeX'],
    link: '#'
  },
  {
    title: 'Startup SorbMax',
    description: 'B2B startup developing biodegradable filters for industrial applications.',
    period: 'Jan – Dec 2019',
    skills: ['Project Management', 'Leadership', 'Public Speaking'],
    link: '#'
  },
  {
    title: 'Planet X',
    description: 'Calculated possible visual magnitude and orbit of Planet X, published in "Poshuky ta znakhidky".',
    period: 'Sep 2018 – May 2019',
    association: 'Junior Academy of Sciences',
    skills: ['Astrophysics', 'Research', 'Data Analysis', 'LaTeX'],
    link: '#'
  },
  {
    title: 'Morphological Classification of Galaxies',
    description: 'Image analysis on Galaxy Zoo datasets to create a morphological distribution of galaxy structures.',
    period: 'Sep 2017 – Mar 2018',
    association: 'Junior Academy of Sciences',
    skills: ['Astrophysics', 'Research', 'Data Analysis', 'LaTeX'],
    link: '#'
  }
];
