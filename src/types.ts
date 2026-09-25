export type RelationshipStatus =
  | 'Single'
  | 'Talking / Hanging out'
  | 'Dating'
  | 'Exclusive relationship'
  | 'Situationship'
  | 'Living together'
  | 'Open / Poly'
  | 'Engaged'
  | 'Married'
  | 'Separated / Divorced';

export type PronounOption = 'She/Her' | 'He/Him' | 'They/Them' | '+ Custom' | 'Skip';

export interface UserProfile {
  name: string;
  username: string;
  pronouns: PronounOption | string;
  birthDate: string;
  birthTime: string;
  birthCity: string;
  relationshipStatus: RelationshipStatus | string;
  lifeBio: string;
  interests: string[];
  notificationsEnabled: boolean;
  phone: string;
}

export interface InterestCategory {
  id: string;
  name: string;
  iconName: string;
  items: string[];
}

export interface InsightDetail {
  categoryName: string;
  icon: string;
  title: string;
  description: string;
  doText: string;
  avoidText: string;
}

export interface DailyInsightData {
  dateDisplay: string;
  dateKey: string;
  headline: string;
  astrologicalContext: string;
  categories: {
    money: InsightDetail;
    health: InsightDetail;
    love: InsightDetail;
    career: InsightDetail;
    learning: InsightDetail;
  };
  followUpQuestions: string[];
}

export interface AffirmationData {
  title: string;
  body: string;
  streak: number;
  days: { label: string; active: boolean }[];
  claimed: boolean;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'lunora';
  text: string;
  timestamp: string;
}

export interface CustomPersonProfile {
  id: string;
  name: string;
  tag: string; // 'Crush', 'Friend', 'Boss', 'Partner', 'Ex'
  birthDate: string;
  birthTime?: string;
  birthCity?: string;
  compatibilityScore: number;
  synergyLevel: 'High' | 'Harmonic' | 'Electric' | 'Intense';
  summary: string;
  chartHighlights: string[];
}
