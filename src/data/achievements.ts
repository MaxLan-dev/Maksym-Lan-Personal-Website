export interface Achievement {
  title: string;
  description: string;
  tier: "gold" | "silver" | "bronze" | "honor" | "merit";
  /** Calendar year for filtering / grouping (source of truth for counts). */
  year: number;
}

export const achievements: Achievement[] = [
  { title: '1st Place – Boosting Canadian Productivity Hackathon', description: 'Won 1st prize with NullTerminators team (Email Helper) · 2025', tier: 'gold', year: 2025 },
  { title: '1st Place – GenAI Genesis (Virtual Track)', description: 'Won 1st place among virtual teams for Eco-Pulse, an AI-powered urban tree-planting and heat mitigation planner for Montreal · 2026', tier: 'gold', year: 2026 },
  { title: 'Participant – Winnipeg 2026 Open Data Datathon', description: 'Built a neighbourhood selection app for newcomers using 15+ open datasets in 4 hours · 2026', tier: 'merit', year: 2026 },
  { title: 'Participant – Southern MB Tech Conference Hackathon', description: 'Co-built ComplAInce, a regulatory compliance chatbot using RAG over federal regulations · 2026', tier: 'merit', year: 2026 },
  { title: 'Highest Contribution – Builders League Hackathon', description: 'UPRO Soccer Hackathon · Highest contribution certificate · 2025', tier: 'honor', year: 2025 },
  { title: "Dean's Honour List", description: 'University of Manitoba · May 2025', tier: 'honor', year: 2025 },
  { title: "Dean's Honour List", description: 'University of Manitoba · Jan 2025', tier: 'honor', year: 2025 },
  { title: "Dean's Honour List", description: 'University of Manitoba · Aug 2024', tier: 'honor', year: 2024 },
  { title: "Dean's Honour List", description: 'University of Manitoba · May 2024', tier: 'honor', year: 2024 },
  { title: "Dean's Honour List", description: 'University of Manitoba · Jan 2024', tier: 'honor', year: 2024 },
  { title: 'Participation – Future of Ukraine Competition', description: 'Future of Ukraine · Feb 2022', tier: 'merit', year: 2022 },
  { title: 'Projects Competition 1st Place', description: 'Sahasak Nimavum · Sep 2020', tier: 'gold', year: 2020 },
  { title: 'Projects Competition 2nd Place', description: 'iCan Canada · Aug 2020', tier: 'silver', year: 2020 },
  { title: 'Projects Competition 3rd Place', description: 'Intarg Poland · Jun 2020', tier: 'bronze', year: 2020 },
  { title: '4th Place ISEF 2020', description: 'ISEF Ukraine · Feb 2020', tier: 'merit', year: 2020 },
  { title: 'Competition Defense 1st Place', description: 'Junior Academy of Sciences (Lviv Region) · Feb 2020', tier: 'gold', year: 2020 },
  { title: 'Participant – Innovation Market 2019', description: 'Innovation Market · Nov 2019', tier: 'merit', year: 2019 },
  { title: 'Participation BiotechCon', description: 'BiotechCon · Jun 2019', tier: 'merit', year: 2019 },
  { title: 'Competition Defense 3rd Place', description: 'Junior Academy of Sciences · May 2019', tier: 'bronze', year: 2019 },
  { title: 'Competition Defense 1st Place', description: 'Junior Academy of Sciences (Lviv Region) · Feb 2019', tier: 'gold', year: 2019 },
  { title: 'Competition Defense 3rd Place', description: 'Junior Academy of Sciences (Lviv Region) · Feb 2018', tier: 'bronze', year: 2018 },
];
