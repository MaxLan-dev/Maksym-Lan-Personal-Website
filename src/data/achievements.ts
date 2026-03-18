export interface Achievement {
  title: string;
  description: string;
  tier: "gold" | "silver" | "bronze" | "honor" | "merit";
}

export const achievements: Achievement[] = [
  { title: '1st Place – Boosting Canadian Productivity Hackathon', description: 'Won 1st prize with NullTerminators team (Email Helper) · 2025', tier: 'gold' },
  { title: '1st Place – GenAI Genesis (Virtual Track)', description: 'Won 1st place among virtual teams for Eco-Pulse, an AI-powered urban tree-planting and heat mitigation planner for Montreal · 2026', tier: 'gold' },
  { title: 'Participant – Winnipeg 2026 Open Data Datathon', description: 'Built a neighbourhood selection app for newcomers using 15+ open datasets in 4 hours · 2026', tier: 'merit' },
  { title: 'Participant – Southern MB Tech Conference Hackathon', description: 'Co-built ComplAInce, a regulatory compliance chatbot using RAG over federal regulations · 2026', tier: 'merit' },
  { title: 'Highest Contribution – Builders League Hackathon', description: 'UPRO Soccer Hackathon · Highest contribution certificate · 2025', tier: 'honor' },
  { title: "Dean's Honour List", description: 'University of Manitoba · May 2025', tier: 'honor' },
  { title: "Dean's Honour List", description: 'University of Manitoba · Jan 2025', tier: 'honor' },
  { title: "Dean's Honour List", description: 'University of Manitoba · Aug 2024', tier: 'honor' },
  { title: "Dean's Honour List", description: 'University of Manitoba · May 2024', tier: 'honor' },
  { title: "Dean's Honour List", description: 'University of Manitoba · Jan 2024', tier: 'honor' },
  { title: 'Participation – Future of Ukraine Competition', description: 'Future of Ukraine · Feb 2022', tier: 'merit' },
  { title: 'Projects Competition 1st Place', description: 'Sahasak Nimavum · Sep 2020', tier: 'gold' },
  { title: 'Projects Competition 2nd Place', description: 'iCan Canada · Aug 2020', tier: 'silver' },
  { title: 'Projects Competition 3rd Place', description: 'Intarg Poland · Jun 2020', tier: 'bronze' },
  { title: '4th Place ISEF 2020', description: 'ISEF Ukraine · Feb 2020', tier: 'merit' },
  { title: 'Competition Defense 1st Place', description: 'Junior Academy of Sciences (Lviv Region) · Feb 2020', tier: 'gold' },
  { title: 'Participant – Innovation Market 2019', description: 'Innovation Market · Nov 2019', tier: 'merit' },
  { title: 'Participation BiotechCon', description: 'BiotechCon · Jun 2019', tier: 'merit' },
  { title: 'Competition Defense 3rd Place', description: 'Junior Academy of Sciences · May 2019', tier: 'bronze' },
  { title: 'Competition Defense 1st Place', description: 'Junior Academy of Sciences (Lviv Region) · Feb 2019', tier: 'gold' },
  { title: 'Competition Defense 3rd Place', description: 'Junior Academy of Sciences (Lviv Region) · Feb 2018', tier: 'bronze' },
];
