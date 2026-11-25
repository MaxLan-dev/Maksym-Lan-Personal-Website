export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  link?: string;
  description: string[];
  skills: string[];
}

export const experiences: Experience[] = [
  {
    title: 'Chief Technology Officer',
    company: 'Hrove',
    location: 'Winnipeg, MB',
    period: 'Jan 2026 – Present',
    link: 'https://hrove.ca/',
    description: [
      'Lead technology and architecture for Hrove, one app for frontline and shift-based teams: schedules, daily site tasks, safety instructions and messages from their lead on each worker’s own phone.',
      'Only developer on the product: shipped 63 changes across the app, dashboards, sales portal and website in just over two weeks, working with an AI coding agent.',
      'Designed a local-first, zero-knowledge architecture: health calculations run on the worker’s phone, and employers see only team totals (teams of 5+).',
      'Built the React Native / Expo app for iOS and Android, the Supabase backend, and the Supervisor and Enterprise dashboards for fatigue risk management and capacity planning.',
      'Chose deterministic, transparent scoring over generative AI so the core analytics stay explainable and auditable.',
      'Led privacy engineering aligned with PIPEDA, GDPR, CCPA and Quebec Law 25, and shipped the marketing site and customer flows in 7 languages.',
    ],
    skills: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'Privacy Engineering', 'System Architecture'],
  },
  {
    title: 'Software Developer',
    company: 'CGI (formerly Online Business Systems)',
    location: 'Winnipeg, MB',
    period: 'Aug 2025 – Present',
    description: [
      'Primary developer on multi-tenant applications in the Application Managed Services team for MREA and Mass Ingenuity.',
      'Architected a dashboard system and integrated microservices for MREA, including phone call provider functionality; doubled AI accuracy from baseline.',
      'Optimized data pipelines and CI/CD with Azure DevOps and Data Factory, fixing long-standing ETL data leakages for 2× performance gains.',
      'Led enhancements and Azure deployments for Mass Ingenuity’s Results Now (.NET + Vue) as principal developer, keeping 99.9% uptime.',
      'Primary implementer on a 4-person team delivering the Admin Portal for the Government of Manitoba eLicensing program, part of a 70+ person initiative.',
      'Built React admin workflows on .NET microservices and SQL Server, tuning queries to support thousands of concurrent users.',
      'Maintained the Law Society of Alberta professional development platform (.NET + Angular).',
      'Sent by CGI to San Francisco Tech Week (Oct 2026).',
    ],
    skills: ['.NET', 'ASP.NET Core', 'React', 'Angular', 'Vue.js', 'Azure', 'CI/CD', 'Microservices', 'ETL'],
  },
  {
    title: 'Software Architect & Project Lead',
    company: 'GY Tea',
    location: 'Winnipeg, MB',
    period: 'Sep 2025 – Present',
    link: 'https://gytea.ca/',
    description: [
      'Architected and delivered the production e-commerce site for a family-run Winnipeg tea store.',
      'Built the product catalog, cart with guest checkout, Square payments, auth, orders, reviews, blog and newsletter.',
      'Designed the admin dashboard for products, orders, categories, promotions and customer communications.',
      'Onboard and mentor new developers through documentation, code reviews and technical guidance; maintain the app in production.',
    ],
    skills: ['React', 'TypeScript', 'Supabase', 'Square API', 'Netlify Functions', 'Team Leadership'],
  },
  {
    title: 'Summer Research Technician',
    company: 'University of Manitoba',
    location: 'Winnipeg, MB',
    period: 'May 2025 – Sep 2025',
    description: [
      'Built an automated system to measure the infected area of wheat plants from hyperspectral imaging and reflectance.',
      'Wrote an image clearing algorithm in Python and scikit-image to remove spikes and unwanted objects from hypercubes.',
      'Publication in preparation.',
    ],
    skills: ['Python', 'NumPy', 'TensorFlow', 'Keras', 'scikit-image', 'Matplotlib'],
  },
  {
    title: 'Junior AI Software Developer',
    company: 'Resilient AG',
    location: 'Winnipeg, MB',
    period: 'Apr 2025 – Jul 2025',
    description: [
      'Took the MVP to production, iterating on user feedback at each sprint.',
      'Improved the SQL-to-language converter to 99.999% accuracy with prompt- and SQL-injection protection.',
      'Reworked the UX/UI, raising user satisfaction by 50%; scaled the platform to support 100,000+ concurrent users.',
      'Built web tooling so knowledge-base admins can manage the vector database directly.',
    ],
    skills: ['Python', 'Django', 'SQLAlchemy', 'LlamaIndex', 'Qdrant', 'LLMs', 'RAG'],
  },
  {
    title: 'Co-founder & CEO / Developer',
    company: 'GroupBuy',
    location: 'Winnipeg, MB',
    period: 'Feb 2025 – Jul 2025',
    description: [
      'Co-founded a SaaS platform that uses AI to pool orders from small food businesses into cheaper bulk purchases.',
      'Led MVP design, development and customer research with Agile delivery.',
      'Built the product in Django and Python.',
    ],
    skills: ['Django', 'Python', 'JavaScript', 'SaaS', 'Agile', 'Leadership'],
  },
  {
    title: 'AI Software Developer Intern (Term 2)',
    company: 'Resilient AG',
    location: 'Winnipeg, MB',
    period: 'Dec 2024 – Mar 2025',
    description: [
      'Built a farmer–retailer marketplace platform from scratch on my own.',
      'Built a language → SQL → language converter on a safeguarded LLM and SQLite with 99.99% accuracy.',
      'Designed the database schema with SQLAlchemy; cut search time by 80%.',
    ],
    skills: ['Django', 'Python', 'SQLAlchemy', 'SQLite', 'LLMs', 'Tailwind CSS'],
  },
  {
    title: 'AI Software Developer Intern (Term 1)',
    company: 'Resilient AG',
    location: 'Winnipeg, MB',
    period: 'Aug 2024 – Nov 2024',
    description: [
      'Built a Django website from scratch with farmer registration, a 100 GB knowledge base and an SQLite database.',
      'Integrated LLMs through RAG over a 100 GB Qdrant vector database, with 99.98% response accuracy.',
      'Benchmarked LLMs, vector encoders and vector databases to pick the best combination; reached 99.9% uptime.',
    ],
    skills: ['Django', 'Python', 'LlamaIndex', 'Qdrant', 'RAG', 'LLMs'],
  },
  {
    title: 'Vice President',
    company: 'U of M Artificial Intelligence Club',
    location: 'Winnipeg, MB',
    period: 'May 2024 – Sep 2025',
    description: [
      'Ran neural network competitions and AI projects that engaged 200+ students.',
      'Organized 5+ workshops with industry guest speakers, growing participation by 60%.',
      'Led a team of 6 co-executives across events, partnerships and budgets.',
    ],
    skills: ['Leadership', 'Machine Learning', 'Python', 'Event Planning'],
  },
  {
    title: 'Co-founder & Vice President',
    company: 'U of M Programming Projects Club',
    location: 'Winnipeg, MB',
    period: 'Nov 2023 – Sep 2025',
    description: [
      'Ran programming events and workshops with 50+ participants per session.',
      'Mentored 5+ project teams through building and deploying applications.',
      'Built partnerships with local tech firms and university departments.',
    ],
    skills: ['Leadership', 'Project Management', 'Software Development'],
  },
  {
    title: 'Scientific Researcher',
    company: 'Junior Academy of Sciences',
    location: 'Lviv, Ukraine',
    period: 'Sep 2017 – Feb 2022',
    description: [
      'Authored astrophysics research papers with university professors, focusing on computational modelling and data analysis.',
    ],
    skills: ['Research', 'C++', 'Astrophysics', 'LaTeX', 'Public Speaking'],
  },
  {
    title: 'CEO / Software Developer',
    company: 'Prowir',
    location: 'Lviv, Ukraine',
    period: 'Apr 2020 – Jan 2021',
    description: [
      'Led the MVP from concept to implementation and pitched to clients.',
      'Built the product website and modular features in TypeScript and JavaScript.',
    ],
    skills: ['TypeScript', 'JavaScript', 'React', 'Node.js', 'Leadership'],
  },
  {
    title: 'CEO',
    company: 'SorbMax',
    location: 'Lviv, Ukraine',
    period: 'Jan 2019 – Jan 2020',
    description: [
      'Founded a startup producing biodegradable industrial filters and represented it at public forums and competitions.',
    ],
    skills: ['Project Management', 'Leadership', 'Public Speaking'],
  },
];
