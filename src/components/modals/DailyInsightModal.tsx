import React from 'react';
import {
  ChevronLeft,
  MoreHorizontal,
  Briefcase,
  Heart,
  Gem,
  BookOpen,
  Leaf,
  Check,
  X,
  ChevronRight,
  Mic,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const DailyInsightModal: React.FC = () => {
  const {
    isDailyInsightOpen,
    closeDailyInsight,
    activeInsightCategory,
    setActiveInsightCategory,
    dailyInsight,
    openReportDialog,
    setActiveTab,
    sendChatMessage,
    user,
  } = useApp();

  if (!isDailyInsightOpen) return null;

  const tabs = [
    { id: 'career', label: 'Career', icon: Briefcase },
    { id: 'love', label: 'Love', icon: Heart },
    { id: 'money', label: 'Money', icon: Gem },
    { id: 'learning', label: 'Learning', icon: BookOpen },
    { id: 'health', label: 'Health', icon: Leaf },
  ] as const;

  const currentDetail = dailyInsight.categories[activeInsightCategory];

  const handleFollowUpQuestion = (question: string) => {
    closeDailyInsight();
    setActiveTab('ask');
    sendChatMessage(question);
  };

  const handleOpenAskTab = () => {
    closeDailyInsight();
    setActiveTab('ask');
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0B0B0E] flex flex-col overflow-hidden animate-slide-up">
      {/* Top Bar */}
      <div className="pt-2 pb-3 px-5 border-b border-white/5 flex items-center justify-between z-10 bg-[#0B0B0E]/95 backdrop-blur-md">
        <button
          type="button"
          onClick={closeDailyInsight}
          className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:text-white transition active:scale-95"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="text-center">
          <span className="text-[11px] font-semibold text-white/50 block">
            Daily Insight
          </span>
          <span className="text-xs font-serif italic text-white/80">
            Thursday, Sep 24
          </span>
        </div>

        <button
          type="button"
          onClick={openReportDialog}
          className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:text-white transition active:scale-95"
        >
          <MoreHorizontal size={18} />
        </button>
      </div>

      {/* Main Scroll Content */}
      <div className="flex-1 overflow-y-auto px-5 py-4 no-scrollbar space-y-6 pb-12">
        {/* User Greeting & Headline */}
        <div>
          <span className="text-xs font-serif text-white/60 mb-1.5 block">
            Hi, {user.name || 'Aman'} —
          </span>
          <h1 className="text-2xl sm:text-3xl font-serif text-white/95 leading-snug tracking-tight mb-4">
            {dailyInsight.headline}
          </h1>
          <p className="text-xs sm:text-sm text-white/55 leading-relaxed font-light">
            {dailyInsight.astrologicalContext}
          </p>
        </div>

        {/* Horizontal Category Tabs */}
        <div className="flex space-x-2 overflow-x-auto no-scrollbar py-1 select-none">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeInsightCategory === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveInsightCategory(tab.id)}
                className={`flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs font-medium transition flex-shrink-0 border ${
                  isActive
                    ? 'bg-[#E5B842] border-[#E5B842] text-[#111114] font-bold shadow-[0_0_12px_rgba(229,184,66,0.35)]'
                    : 'bg-[#151518] border-white/10 text-white/70 hover:bg-[#1C1C22]'
                }`}
              >
                <Icon size={14} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Category Insight Card */}
        <div className="bg-[#141418] border border-white/10 rounded-2xl p-5 space-y-4 relative overflow-hidden shadow-lg">
          <div className="flex items-center space-x-2">
            <span className="p-1 rounded-md bg-[#25252E] text-[#E5B842]">
              {activeInsightCategory === 'money' && <Gem size={15} />}
              {activeInsightCategory === 'health' && <Leaf size={15} />}
              {activeInsightCategory === 'love' && <Heart size={15} />}
              {activeInsightCategory === 'career' && <Briefcase size={15} />}
              {activeInsightCategory === 'learning' && <BookOpen size={15} />}
            </span>
            <span className="text-[11px] font-bold tracking-widest text-[#B38F3F] uppercase">
              {currentDetail.categoryName}
            </span>
          </div>

          <h3 className="text-xl font-serif text-white tracking-tight leading-snug">
            "{currentDetail.title}"
          </h3>

          <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-normal">
            {currentDetail.description}
          </p>

          {/* DO card */}
          <div className="bg-[#12241A] border border-emerald-500/20 rounded-xl p-3.5 flex items-center space-x-3">
            <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
              <Check size={12} strokeWidth={3} />
            </div>
            <div className="text-xs">
              <span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase block">
                DO
              </span>
              <span className="text-white/90 font-medium">
                {currentDetail.doText}
              </span>
            </div>
          </div>

          {/* AVOID card */}
          <div className="bg-[#261517] border border-rose-500/20 rounded-xl p-3.5 flex items-center space-x-3">
            <div className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center flex-shrink-0">
              <X size={12} strokeWidth={3} />
            </div>
            <div className="text-xs">
              <span className="text-[10px] font-bold tracking-widest text-rose-400 uppercase block">
                AVOID
              </span>
              <span className="text-white/90 font-medium">
                {currentDetail.avoidText}
              </span>
            </div>
          </div>
        </div>

        {/* Section: FOLLOW UP ON THIS READING */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center space-x-2">
            <span className="text-xs text-[#E5B842]">↳</span>
            <span className="text-[11px] font-bold tracking-widest text-white/60 uppercase">
              FOLLOW UP ON THIS READING
            </span>
          </div>

          <span className="text-[11px] font-bold tracking-widest text-[#B38F3F] uppercase block px-1">
            ASK LUNORA
          </span>

          <div className="space-y-2">
            {dailyInsight.followUpQuestions.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => handleFollowUpQuestion(q)}
                className="w-full bg-[#141418] hover:bg-[#1A1A22] border border-white/5 hover:border-white/10 rounded-xl px-4 py-3.5 flex items-center justify-between text-left text-xs sm:text-sm font-medium text-white/85 transition group"
              >
                <span className="leading-snug pr-3">{q}</span>
                <ChevronRight
                  size={16}
                  className="text-white/40 group-hover:text-[#E5B842] group-hover:translate-x-0.5 transition flex-shrink-0"
                />
              </button>
            ))}
          </div>

          {/* Ask your own question pill */}
          <div
            onClick={handleOpenAskTab}
            className="cursor-pointer bg-[#141418] border border-white/10 hover:border-white/20 rounded-2xl px-4 py-3.5 flex items-center justify-between text-white/40 transition mt-3"
          >
            <span className="text-xs sm:text-sm">Ask your own question...</span>
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:text-white">
              <Mic size={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
