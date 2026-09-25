import { DailyInsightData, InterestCategory, UserProfile, CustomPersonProfile } from '../types';

export const INITIAL_USER_PROFILE: UserProfile = {
  name: 'Aman',
  username: 'amannishad',
  pronouns: 'Skip',
  birthDate: '15 February 2007',
  birthTime: '11:25 pm',
  birthCity: 'Gorakhpur',
  relationshipStatus: 'Single',
  lifeBio: '3rd year BTech student. Exploring astronomy, tech, and mindful living.',
  interests: ['Langar Seva', 'Chai', 'Campus Life', 'Studying', 'Trips', 'Cars', 'Basketball', 'Self Care', 'Community Service', 'Investing'],
  notificationsEnabled: true,
  phone: '918303719864',
};

export const RELATIONSHIP_STATUS_OPTIONS = [
  'Single',
  'Talking / Hanging out',
  'Dating',
  'Exclusive relationship',
  'Situationship',
  'Living together',
  'Open / Poly',
  'Engaged',
  'Married',
  'Separated / Divorced',
];

export const PRONOUN_OPTIONS = ['She/Her', 'He/Him', 'They/Them', '+ Custom', 'Skip'];

export const POPULAR_CITIES = [
  'Gorakhpur',
  'Mumbai',
  'Bengaluru',
  'Delhi',
  'Noida',
  'Hyderabad',
  'Pune',
  'Kolkata',
  'Chennai',
  'Ahmedabad',
  'Lucknow',
  'Jaipur',
  'Chandigarh',
  'San Francisco',
  'London',
  'New York',
  'Dubai',
  'Singapore'
];

export const INTEREST_CATEGORIES: InterestCategory[] = [
  {
    id: 'community',
    name: 'Community & Service',
    iconName: 'HeartHandshake',
    items: ['Animal Shelter Volunteering', 'Community Service', 'Langar Seva']
  },
  {
    id: 'creative',
    name: 'Creative & Culture',
    iconName: 'Palette',
    items: [
      'Architecture', 'Art', 'Blogging', 'Book-Drive Volunteering', 'Books',
      'Content Creation', 'Cosplay', 'DIY', 'Karting', 'Painting',
      'Poetry', 'Twitch', 'Writing'
    ]
  },
  {
    id: 'food',
    name: 'Food & Cooking',
    iconName: 'UtensilsCrossed',
    items: [
      'Açaí', 'BBQ', 'Baking', 'Biryani', 'Board Games', 'Boba Tea',
      'Brunch', 'Cafés', 'Chai', 'Cooking', 'Desserts', 'Food Discovery',
      'Food-Drive Volunteering', 'Indian Food', 'Korean Food', 'Maggi',
      'Mocktails', 'Plant-Based Food', 'Ramen', 'Shared Meals', 'Street Food', 'Sushi'
    ]
  },
  {
    id: 'games',
    name: 'Games & Play',
    iconName: 'Gamepad2',
    items: [
      'Among Us', 'Arcade Games', 'Campus Life', 'Carrom', 'Chess',
      'Dungeons & Dragons', 'Escape Rooms', 'Esports', 'Fortnite',
      'League of Legends', 'Ludo', 'NBA', 'Nintendo', 'Online Games',
      'Party Games', 'Pickleball', 'PlayStation', 'Roblox', 'Trivia',
      'Virtual Reality', 'Xbox'
    ]
  },
  {
    id: 'learning',
    name: 'Learning & Career',
    iconName: 'GraduationCap',
    items: [
      'Coworking', 'Entrepreneurship', 'Exchange Programmes', 'Freelancing',
      'Investing', 'Language Exchange', 'Mentoring', 'Studying'
    ]
  },
  {
    id: 'local',
    name: 'Local Exploration',
    iconName: 'Compass',
    items: [
      'Drawing', 'Nature Walks', 'Noida Food', 'Photography', 'Picnics',
      'Shopping', 'Sports', 'Thrifting', 'Trips'
    ]
  },
  {
    id: 'movies',
    name: 'Movies & Streaming',
    iconName: 'Film',
    items: [
      'Action Movies', 'Animated Movies', 'Anime', 'Bollywood', 'Cars',
      'Crime Shows', 'Disney', 'Documentaries', 'Drama Shows', 'Drive-In Cinema',
      'Fantasy Movies', 'Harry Potter', 'Horror Movies', 'Indie Films',
      'K-Drama', 'Marvel', 'Movies', 'Netflix', 'Reality TV', 'Sci-Fi',
      'Sports Shows', 'Stand-Up Comedy', 'TV Shows', 'Theatre'
    ]
  },
  {
    id: 'sports',
    name: 'Sports & Fitness',
    iconName: 'Dumbbell',
    items: [
      'Active Lifestyle', 'Archery', 'Athletics', 'Badminton', 'Basketball',
      'Boxing', 'Climbing', 'Cricket', 'Cycling', 'Fitness', 'Fitness Classes',
      'Football', 'Freeletics', 'Gymnastics', 'Hockey', 'Martial Arts',
      'Motorsports', 'Padel', 'Pilates', 'Running', 'Skating', 'Swimming',
      'Table Tennis', 'Tennis', 'Upcycling', 'Volleyball', 'Wrestling', 'Yoga'
    ]
  },
  {
    id: 'wellness',
    name: 'Wellness & Spirituality',
    iconName: 'Sparkles',
    items: [
      'Astrology', 'Meditation', 'Mindfulness', 'Self Care', 'Spa',
      'Spiritual Outings', 'Tarot'
    ]
  },
  {
    id: 'social',
    name: 'Social & Conversation',
    iconName: 'MessageCircle',
    items: [
      'Aquarium', 'Bowling', 'Comedy', 'Comic Con', 'CrossFit', 'Exhibitions',
      'Festivals', 'Instagram', 'Low-Budget Hangouts', 'Manga', 'Memes & Reels',
      'Motorcycles', 'Museums', 'Nostalgia', 'Pho', 'Pinterest', 'Plants',
      'Podcasts', 'Rap', 'Reggaeton', 'Rom-Coms', 'Skateboarding', 'Social Media',
      'SoundCloud', 'Techno', 'Thrillers'
    ]
  }
];

export const DAILY_INSIGHT_DATA: DailyInsightData = {
  dateDisplay: 'Thursday, Sep 24',
  dateKey: '2026-09-24',
  headline: 'Guarded about cash, tension spikes; double-check every outlay before committing.',
  astrologicalContext: 'Moon in Shatabhisha, Aquarius — a restless, analytical edge makes you scrutinize every financial detail; money decisions feel amplified, so pause today and verify before spending.',
  categories: {
    money: {
      categoryName: 'MONEY & BUSINESS',
      icon: 'Gem',
      title: 'Cash Flow Under Scrutiny',
      description: 'A friend asks you to cover the group\'s travel expense tonight. Your guarded mood and the sensitive Moon make every cost feel high-stakes, turning a simple split into a stress point. Verify the amount, compare it to your budget, and only commit if it fits comfortably.',
      doText: 'verify the total',
      avoidText: 'assuming fairness'
    },
    health: {
      categoryName: 'HEALTH & WELLNESS',
      icon: 'Leaf',
      title: 'Rest Mode Engaged',
      description: 'Late-night scrolling leaves you feeling drained as the day\'s tension builds. With the health sector quiet, the best move is to wind down early, swap screens for a short stretch, and let your body reset for tomorrow.',
      doText: 'stretch briefly',
      avoidText: 'late screens'
    },
    love: {
      categoryName: 'LOVE & RELATIONSHIPS',
      icon: 'Heart',
      title: 'Unspoken Subtleties',
      description: 'The Aquarius Moon can trigger emotional aloofness or second-guessing in close bonds. Rather than dissecting text delays, focus on genuine presence and giving each other breathing room.',
      doText: 'give gentle space',
      avoidText: 'reading hidden motives'
    },
    career: {
      categoryName: 'CAREER & AMBITION',
      icon: 'Briefcase',
      title: 'Precision in Planning',
      description: 'Shatabhisha\'s investigative influence shines in technical architecture, debugging, and strategic forecasts. Avoid pitching impromptu concepts; polish the fundamentals first.',
      doText: 'audit current workflows',
      avoidText: 'rushing final signatures'
    },
    learning: {
      categoryName: 'LEARNING & INTELLECT',
      icon: 'BookOpen',
      title: 'Deep Research Wave',
      description: 'Surface-level explanations won\'t satisfy you today. You\'ll enjoy untangling intricate concepts, esoteric systems, or architectural logic.',
      doText: 'dive into deep manuals',
      avoidText: 'multi-tasking interruptions'
    }
  },
  followUpQuestions: [
    'Should I commit to this weekend trip expense or wait for a clearer budget?',
    'Is pursuing this new connection worth the emotional energy I\'m guarding today?',
    'After I double-check the cost, what\'s the best next step to keep momentum?'
  ]
};

export const TRY_ASKING_QUESTIONS = [
  'Would startup life energise me or exhaust me long-term?',
  'Why do I sometimes need to be the capable one for everyone?',
  'Which part of my life is most likely to open up over the next year?',
  'What would help me choose someone who is good for me, not just exciting?',
  'How much financial risk actually suits my personality?',
  'What makes me feel emotionally alone even inside a relationship?',
  'Why do I keep trying to prove myself to people who are hard to impress?',
  'Am I better suited to becoming an expert or managing people?',
  'Why do I sometimes stay loyal after a friendship has changed?',
  'What could become much easier for me in my mid-twenties?'
];

export const HOME_SUGGESTED_QUESTIONS = [
  'What should I focus on today?',
  'What colour should I wear for interviews?',
  'What transits support my job hunt?'
];

export const INITIAL_CUSTOM_PROFILES: CustomPersonProfile[] = [
  {
    id: 'prof-1',
    name: 'Priya Sharma',
    tag: 'Crush',
    birthDate: '12 November 2006',
    birthTime: '08:45 am',
    birthCity: 'Bengaluru',
    compatibilityScore: 92,
    synergyLevel: 'Electric',
    summary: 'Moon in Scorpio harmonizes deeply with your Shatabhisha analytical placement. Communication flows effortlessly with unspoken emotional resonance.',
    chartHighlights: ['Water-Air balance', 'Sun sextile Mercury', 'Venus harmonic']
  },
  {
    id: 'prof-2',
    name: 'Karan Mehta',
    tag: 'Friend',
    birthDate: '04 July 2006',
    birthTime: '03:15 pm',
    birthCity: 'Delhi',
    compatibilityScore: 84,
    synergyLevel: 'Harmonic',
    summary: 'Great complementary energy for projects and shared trips. Mutual respect for independence keeps this bond stress-free and long-lasting.',
    chartHighlights: ['Saturn trine Mars', 'Strong intellectual alignment']
  }
];
