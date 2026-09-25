import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile, ChatMessage, CustomPersonProfile, DailyInsightData } from '../types';
import { INITIAL_USER_PROFILE, DAILY_INSIGHT_DATA, INITIAL_CUSTOM_PROFILES } from '../data/initialData';

interface AppContextType {
  // User profile
  user: UserProfile;
  updateUser: (updates: Partial<UserProfile>) => void;
  resetUser: () => void;

  // Navigation & flow states
  isOnboarding: boolean;
  onboardingStep: number;
  setOnboardingStep: (step: number) => void;
  goToNextOnboardingStep: () => void;
  goToPrevOnboardingStep: () => void;
  finishOnboarding: () => void;
  restartOnboarding: () => void;

  // Main Tabs
  activeTab: 'you' | 'people' | 'ask';
  setActiveTab: (tab: 'you' | 'people' | 'ask') => void;

  // Modals & Subscreens
  isDailyInsightOpen: boolean;
  openDailyInsight: (category?: 'money' | 'health' | 'love' | 'career' | 'learning') => void;
  closeDailyInsight: () => void;
  activeInsightCategory: 'money' | 'health' | 'love' | 'career' | 'learning';
  setActiveInsightCategory: (category: 'money' | 'health' | 'love' | 'career' | 'learning') => void;
  dailyInsight: DailyInsightData;

  isProfileOpen: boolean;
  openProfile: () => void;
  closeProfile: () => void;

  isManageAccountOpen: boolean;
  openManageAccount: () => void;
  closeManageAccount: () => void;

  isLogoutDialogOpen: boolean;
  openLogoutDialog: () => void;
  closeLogoutDialog: () => void;

  isReportDialogOpen: boolean;
  openReportDialog: () => void;
  closeReportDialog: () => void;

  isAddCustomProfileOpen: boolean;
  openAddCustomProfile: () => void;
  closeAddCustomProfile: () => void;

  isAddConnectionOpen: boolean;
  openAddConnection: () => void;
  closeAddConnection: () => void;

  // Affirmation
  affirmationClaimed: boolean;
  claimAffirmation: () => void;

  // Cosmic AI Chat
  chatMessages: ChatMessage[];
  sendChatMessage: (text: string) => void;
  resetChat: () => void;
  isAiTyping: boolean;

  // Custom compatibility profiles
  customProfiles: CustomPersonProfile[];
  addCustomProfile: (profile: Omit<CustomPersonProfile, 'id'>) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load from local storage or initial
  const [user, setUser] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('lunora_user');
    return saved ? JSON.parse(saved) : INITIAL_USER_PROFILE;
  });

  const [isOnboarding, setIsOnboarding] = useState<boolean>(() => {
    const saved = localStorage.getItem('lunora_onboarding_done');
    return saved === null ? false : !JSON.parse(saved);
  });

  const [onboardingStep, setOnboardingStep] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'you' | 'people' | 'ask'>('you');

  // Daily Insight Subscreen
  const [isDailyInsightOpen, setIsDailyInsightOpen] = useState(false);
  const [activeInsightCategory, setActiveInsightCategory] = useState<'money' | 'health' | 'love' | 'career' | 'learning'>('money');
  const [dailyInsight] = useState<DailyInsightData>(DAILY_INSIGHT_DATA);

  // Profile screens
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isManageAccountOpen, setIsManageAccountOpen] = useState(false);
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);
  const [isReportDialogOpen, setIsReportDialogOpen] = useState(false);

  // People modals
  const [isAddCustomProfileOpen, setIsAddCustomProfileOpen] = useState(false);
  const [isAddConnectionOpen, setIsAddConnectionOpen] = useState(false);

  // Affirmation state
  const [affirmationClaimed, setAffirmationClaimed] = useState(false);

  // People list
  const [customProfiles, setCustomProfiles] = useState<CustomPersonProfile[]>(() => {
    const saved = localStorage.getItem('lunora_profiles');
    return saved ? JSON.parse(saved) : INITIAL_CUSTOM_PROFILES;
  });

  // Cosmic chat
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(() => {
    const saved = localStorage.getItem('lunora_chat');
    return saved ? JSON.parse(saved) : [];
  });
  const [isAiTyping, setIsAiTyping] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('lunora_user', JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem('lunora_profiles', JSON.stringify(customProfiles));
  }, [customProfiles]);

  useEffect(() => {
    localStorage.setItem('lunora_chat', JSON.stringify(chatMessages));
  }, [chatMessages]);

  const updateUser = (updates: Partial<UserProfile>) => {
    setUser(prev => ({ ...prev, ...updates }));
  };

  const resetUser = () => {
    setUser(INITIAL_USER_PROFILE);
    localStorage.removeItem('lunora_user');
  };

  const goToNextOnboardingStep = () => {
    if (onboardingStep < 7) {
      setOnboardingStep(prev => prev + 1);
    } else {
      finishOnboarding();
    }
  };

  const goToPrevOnboardingStep = () => {
    if (onboardingStep > 1) {
      setOnboardingStep(prev => prev - 1);
    }
  };

  const finishOnboarding = () => {
    setIsOnboarding(false);
    localStorage.setItem('lunora_onboarding_done', 'true');
    setActiveTab('you');
  };

  const restartOnboarding = () => {
    setIsOnboarding(true);
    setOnboardingStep(1);
    setIsProfileOpen(false);
    setIsManageAccountOpen(false);
    setIsDailyInsightOpen(false);
  };

  const openDailyInsight = (category: 'money' | 'health' | 'love' | 'career' | 'learning' = 'money') => {
    setActiveInsightCategory(category);
    setIsDailyInsightOpen(true);
  };

  const closeDailyInsight = () => {
    setIsDailyInsightOpen(false);
  };

  const openProfile = () => setIsProfileOpen(true);
  const closeProfile = () => setIsProfileOpen(false);

  const openManageAccount = () => setIsManageAccountOpen(true);
  const closeManageAccount = () => setIsManageAccountOpen(false);

  const openLogoutDialog = () => setIsLogoutDialogOpen(true);
  const closeLogoutDialog = () => setIsLogoutDialogOpen(false);

  const openReportDialog = () => setIsReportDialogOpen(true);
  const closeReportDialog = () => setIsReportDialogOpen(false);

  const openAddCustomProfile = () => setIsAddCustomProfileOpen(true);
  const closeAddCustomProfile = () => setIsAddCustomProfileOpen(false);

  const openAddConnection = () => setIsAddConnectionOpen(true);
  const closeAddConnection = () => setIsAddConnectionOpen(false);

  const claimAffirmation = () => {
    setAffirmationClaimed(true);
  };

  const sendChatMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatMessages(prev => [...prev, userMsg]);
    setIsAiTyping(true);

    // Generate celestial AI response tuned to user chart
    setTimeout(() => {
      let reply = "The cosmos responds: With your Moon in Shatabhisha, analytical insight and patience will navigate this crossroads with natural poise.";
      const lower = text.toLowerCase();

      if (lower.includes('startup') || lower.includes('work') || lower.includes('career') || lower.includes('job')) {
        reply = "Startup environments stimulate your innovative Aquarius intellect, but Shatabhisha needs defined boundaries to prevent cognitive overload. Seek high-autonomy roles where strategic depth is valued over chaotic multitasking.";
      } else if (lower.includes('capable') || lower.includes('everyone') || lower.includes('responsibility')) {
        reply = "You take pride in being reliable, yet Shatabhisha placements often absorb others' anxieties silently. Stepping back isn't abandoning anyone—it allows them to grow their own resilience while preserving your vital cosmic energy.";
      } else if (lower.includes('love') || lower.includes('someone') || lower.includes('relationship') || lower.includes('partner')) {
        reply = "Notice the difference between nervous excitement and steady grounding. A supportive match honors your intellectual curiosity without triggering emotional vigilance. Compatibility thrives when silence feels peaceful, not uncertain.";
      } else if (lower.includes('money') || lower.includes('financial') || lower.includes('expense') || lower.includes('budget') || lower.includes('cash')) {
        reply = "With current planetary transits accentuating your 2nd house of resources, double-checking the numbers grants you clarity. Calculated moves will protect your peace of mind far better than spontaneous splurges today.";
      } else if (lower.includes('mid-twenties') || lower.includes('future') || lower.includes('next year')) {
        reply = "As Saturn finishes consolidating your foundation, self-trust replaces outer validation. You will find it remarkably easier to say clean, unapologetic 'no's and build projects that resonate with your genuine calling.";
      } else if (lower.includes('colour') || lower.includes('wear') || lower.includes('focus')) {
        reply = "For today's vibration, deep midnight blue, silver, or muted gold harmonize with your Aquarius lunar energy. Focus on completing one high-impact priority before noon.";
      }

      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'lunora',
        text: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setChatMessages(prev => [...prev, aiMsg]);
      setIsAiTyping(false);
    }, 1100);
  };

  const resetChat = () => {
    setChatMessages([]);
    localStorage.removeItem('lunora_chat');
  };

  const addCustomProfile = (profileData: Omit<CustomPersonProfile, 'id'>) => {
    const newProfile: CustomPersonProfile = {
      ...profileData,
      id: `prof-${Date.now()}`
    };
    setCustomProfiles(prev => [newProfile, ...prev]);
  };

  return (
    <AppContext.Provider
      value={{
        user,
        updateUser,
        resetUser,
        isOnboarding,
        onboardingStep,
        setOnboardingStep,
        goToNextOnboardingStep,
        goToPrevOnboardingStep,
        finishOnboarding,
        restartOnboarding,
        activeTab,
        setActiveTab,
        isDailyInsightOpen,
        openDailyInsight,
        closeDailyInsight,
        activeInsightCategory,
        setActiveInsightCategory,
        dailyInsight,
        isProfileOpen,
        openProfile,
        closeProfile,
        isManageAccountOpen,
        openManageAccount,
        closeManageAccount,
        isLogoutDialogOpen,
        openLogoutDialog,
        closeLogoutDialog,
        isReportDialogOpen,
        openReportDialog,
        closeReportDialog,
        isAddCustomProfileOpen,
        openAddCustomProfile,
        closeAddCustomProfile,
        isAddConnectionOpen,
        openAddConnection,
        closeAddConnection,
        affirmationClaimed,
        claimAffirmation,
        chatMessages,
        sendChatMessage,
        resetChat,
        isAiTyping,
        customProfiles,
        addCustomProfile,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
