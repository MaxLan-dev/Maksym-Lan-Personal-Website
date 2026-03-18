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
    title: 'Eco-Pulse (GenAI Genesis)',
    description: 'An AI-powered urban heat mitigation and tree-planting planner for Montreal. Users explore ML-derived priority zones on a map and request AI-generated intervention blueprints with recommended planting sites, estimated tree counts, and cost/benefit estimates.',
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
    description: 'AI-powered email management that categorizes emails, generates summaries, extracts key points, detects sentiment, and suggests responses using Gemini.',
    period: '2026',
    association: 'Lovable / Gemini 2.0 Flash',
    skills: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Gemini', 'AI', 'UX/UI'],
    link: 'https://github.com/MaxLan-dev/mail-maestro'
  },
  {
    title: 'Project JP',
    description: 'A comprehensive AI chatbot for a large SaaS provider, integrating Azure AI Services with a .NET backend. Features real-time messaging, data collection tools, analytics, and Docker deployment.',
    period: 'May 2025 – Aug 2025',
    association: 'University of Manitoba',
    skills: ['C#', '.NET', 'ASP.NET Core', 'Azure AI', 'Azure OpenAI', 'Docker', 'API Development'],
    link: '#'
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
    description: 'This portfolio website — built with React, TypeScript, and Tailwind CSS.',
    period: 'Jul 2024 – Present',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    link: 'https://github.com/MaxLan-dev/MaxLan-dev.github.io'
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
    description: 'Led a B2B startup developing innovative biodegradable filters for industrial applications.',
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
    description: 'Image analysis on Galaxy Zoom datasets to create a morphological distribution of galaxy structures.',
    period: 'Sep 2017 – Mar 2018',
    association: 'Junior Academy of Sciences',
    skills: ['Astrophysics', 'Research', 'Data Analysis', 'LaTeX'],
    link: '#'
  }
];
