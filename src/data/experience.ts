export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
}

export const experiences: Experience[] = [
  {
    title: 'Software Developer',
    company: 'CGI (formerly Online Business Systems)',
    location: 'Winnipeg, MB',
    period: 'Aug 2025 – Present',
    description: [
      'Led development of multi-tenant applications in AMS team, serving as primary developer on projects for MREA and Mass Ingenuity.',
      'Architected dashboard system and integrated microservices including phone call provider functionality; doubled AI accuracy from baseline.',
      'Optimized data pipelines and CI/CD using Azure DevOps and Data Factory, resolving long-standing ETL data leakages with 2× performance gains.',
      'Delivered Admin Portal for Government of Manitoba eLicensing program as primary implementer on a 4-person team within a 70+ person initiative.',
      'Built React admin workflows on .NET microservices and SQL Server, tuning queries to support thousands of concurrent users.',
      'Maintained professional development platform for Law Society of Alberta (.NET Angular).',
    ],
    skills: ['.NET', 'ASP.NET Core', 'Angular', 'Vue.js', 'Azure', 'CI/CD', 'Microservices', 'ETL'],
  },
  {
    title: 'Principal Software Developer',
    company: 'GY Tea',
    location: 'Winnipeg, MB',
    period: 'Sep 2025 – Present',
    description: [
      'Architected full-stack e-commerce platform from scratch as principal technical lead for a family-run tea business.',
      'Built product catalog, cart with guest checkout, Square payment processing, auth, orders, reviews, blog, and newsletter.',
      'Designed complete admin dashboard for products, orders, categories, promotions, and customer communications.',
      'Stack: React Router v7, TypeScript, Supabase, Netlify Functions — scalable serverless architecture.',
    ],
    skills: ['React', 'TypeScript', 'Supabase', 'Square API', 'Netlify', 'Serverless'],
  },
  {
    title: 'Summer Student Technician',
    company: 'University of Manitoba',
    location: 'Winnipeg, MB',
    period: 'May 2025 – Aug 2025',
    description: [
      'Created automated system for determining infected area of wheat plants using hyperspectral imaging and reflectance.',
      'Built image clearing algorithm to remove spikes and unwanted objects using Python and skimage.',
      'Publication in preparation.',
    ],
    skills: ['Python', 'NumPy', 'TensorFlow', 'Keras', 'skimage', 'matplotlib'],
  },
  {
    title: 'Junior AI Software Developer',
    company: 'Resilient AG',
    location: 'Winnipeg, MB',
    period: 'Apr 2024 – Present',
    description: [
      'Refined MVP to production-ready state with iterative user feedback at each sprint.',
      'Enhanced SQL-to-language converter achieving 99.999% accuracy with full database safety and SQL injection protection.',
      'Improved UX/UI resulting in 50% increase in user satisfaction; scaled platform to support 10,000+ concurrent users.',
      'Built web-based vector database admin tools for KnowledgeBase management.',
    ],
    skills: ['Python', 'Django', 'SQLAlchemy', 'LlamaIndex', 'Qdrant', 'LLMs', 'RAG'],
  },
  {
    title: 'CEO / Developer',
    company: 'GroupBuy',
    location: 'Winnipeg, MB',
    period: 'Feb 2025 – Present',
    description: [
      'Co-founded AI-powered SaaS platform to aggregate small food business orders for cost-effective bulk purchases.',
      'Led MVP design, development, and customer research using Agile methodologies.',
      'Built scalable solution using Django and modern web technologies.',
    ],
    skills: ['Django', 'Python', 'JavaScript', 'SaaS', 'AI', 'Agile', 'Leadership'],
  },
  {
    title: 'AI Software Developer Intern (Term 2)',
    company: 'Resilient AG',
    location: 'Winnipeg, MB',
    period: 'Dec 2024 – Mar 2025',
    description: [
      'Single-handedly developed complex marketplace platform focused on farmer-retailer interaction.',
      'Built language↔SQL converter with safe-guarded LLM and SQLite achieving 99.99% accuracy.',
      'Designed scalable database schema using SQLAlchemy; reduced search time by 80%.',
    ],
    skills: ['Django', 'Python', 'SQLAlchemy', 'SQLite', 'LLMs', 'Tailwind CSS'],
  },
  {
    title: 'AI Software Developer Intern (Term 1)',
    company: 'Resilient AG',
    location: 'Winnipeg, MB',
    period: 'Aug 2024 – Nov 2024',
    description: [
      'Built Django website from scratch with farmer registration, 100GB knowledge base integration, and SQLite database.',
      'Integrated LLMs through RAG providing access to 100GB Qdrant vector database — 99.98% response accuracy.',
      'Experimented with different LLMs, vector encoders, and vector databases for optimal performance.',
    ],
    skills: ['Django', 'Python', 'LlamaIndex', 'Qdrant', 'RAG', 'LLMs'],
  },
  {
    title: 'Vice President',
    company: 'U of M Artificial Intelligence Club',
    location: 'Winnipeg, MB',
    period: 'May 2024 – Aug 2025',
    description: [
      'Spearheaded neural network competitions and AI projects, engaging 200+ students.',
      'Organized 5+ workshops, boosting participation by 60% with industry guest speakers.',
      'Led team of 6 co-executives overseeing events, partnerships, and budgets.',
    ],
    skills: ['Leadership', 'Machine Learning', 'Python', 'Event Planning'],
  },
  {
    title: 'Co-founder / Vice President',
    company: 'U of M Programming Projects Club',
    location: 'Winnipeg, MB',
    period: 'Nov 2023 – Aug 2025',
    description: [
      'Coordinated programming events and workshops with 50+ participants per session.',
      'Mentored 5+ project teams in developing and deploying applications.',
      'Fostered partnerships with local tech firms and university departments.',
    ],
    skills: ['Leadership', 'Project Management', 'Software Development'],
  },
  {
    title: 'Scientific Researcher',
    company: 'Junior Academy of Sciences',
    location: 'Lviv, Ukraine',
    period: 'Sep 2017 – Feb 2022',
    description: [
      'Authored astrophysics research papers under university professors, focusing on computational modeling and data analysis.',
    ],
    skills: ['Research', 'C++', 'Astrophysics', 'LaTeX', 'Public Speaking'],
  },
  {
    title: 'CEO / Software Developer',
    company: 'Prowir',
    location: 'Lviv, Ukraine',
    period: 'Apr 2020 – Jan 2021',
    description: [
      'Led development of SaaS platform MVP from concept to implementation.',
      'Engineered modular features using TypeScript/JavaScript for scalability.',
    ],
    skills: ['TypeScript', 'JavaScript', 'React', 'Node.js', 'Leadership'],
  },
  {
    title: 'CEO',
    company: 'SorbMax',
    location: 'Lviv, Ukraine',
    period: 'Jan 2019 – Jan 2020',
    description: [
      'Founded and led startup producing biodegradable industrial filters, overseeing development and public representation.',
    ],
    skills: ['Project Management', 'Leadership', 'Public Speaking'],
  },
];
