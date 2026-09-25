import React, { useState } from 'react';
import { ChevronRight, RefreshCw, Mic, Sparkles, Flame, Check } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { HOME_SUGGESTED_QUESTIONS } from '../../data/initialData';

export const YouTab: React.FC = () => {
  const {
    user,
    openProfile,
    openDailyInsight,
    affirmationClaimed,
    claimAffirmation,
    setActiveTab,
    sendChatMessage,
  } = useApp();

  const [questions, setQuestions] = useState(HOME_SUGGESTED_QUESTIONS);
  const [isRotating, setIsRotating] = useState(false);

  const days = ['F', 'Sa', 'Su', 'M', 'Tu', 'W', 'Th'];

  const handleRefreshQuestions = () => {
    setIsRotating(true);
    setTimeout(() => {
      setQuestions((prev) => [...prev.slice(1), prev[0]]);
      setIsRotating(false);
    }, 400);
  };

  const handleAskQuestion = (questionText: string) => {
    setActiveTab('ask');
    sendChatMessage(questionText);
  };

  const handleNavigateToAsk = () => {
    setActiveTab('ask');
  };

  return (
    <div className="flex-1 flex flex-col px-5 py-4 overflow-y-auto no-scrollbar space-y-5 pb-6">
      {/* Top Profile Header */}
      <div className="flex items-center justify-between pt-1">
        <div>
          <span className="text-[11px] font-bold tracking-widest text-white/50 uppercase block mb-1">
            THURSDAY · SEP 24
          </span>
          <h1 className="text-3xl font-serif text-white tracking-tight">
            Hi, {user.name || 'Aman'}
          </h1>
        </div>

        {/* Profile Avatar Button */}
        <button
          type="button"
          onClick={openProfile}
          className="relative w-12 h-12 rounded-full bg-gradient-to-br from-[#F5D061] to-[#A68226] p-[2px] shadow-[0_0_15px_rgba(229,184,66,0.35)] active:scale-95 transition"
        >
          <div className="w-full h-full rounded-full bg-[#1A1A1E] flex items-center justify-center">
            <span className="font-serif text-xl font-medium text-[#F3C766]">
              {user.name ? user.name[0].toUpperCase() : 'A'}
            </span>
          </div>
        </button>
      </div>

      {/* Card 1: DAILY INSIGHT */}
      <div
        onClick={() => openDailyInsight('money')}
        className="cursor-pointer bg-[#141418] hover:bg-[#18181E] border border-white/10 rounded-2xl p-5 relative overflow-hidden transition group active:scale-[0.99]"
      >
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

        {/* Header row: Subtitle + Streak */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Sparkles size={14} className="text-[#E5B842]" />
            <span className="text-[11px] font-bold tracking-widest text-[#B38F3F] uppercase">
              DAILY INSIGHT
            </span>
          </div>

          {/* Days streak tracker */}
          <div className="flex items-center space-x-1.5 bg-black/40 px-2.5 py-1 rounded-full border border-white/5">
            <div className="flex space-x-1">
              {days.map((day, idx) => (
                <span
                  key={day}
                  className={`text-[9px] font-medium ${
                    idx === days.length - 1 ? 'text-[#E5B842] font-bold' : 'text-white/35'
                  }`}
                >
                  {day}
                </span>
              ))}
            </div>
            <div className="flex items-center space-x-0.5 text-xs text-amber-500/80 pl-1 border-l border-white/10">
              <span className="text-[10px] font-bold text-white/60">0</span>
              <Flame size={12} className="text-amber-500 fill-amber-500" />
            </div>
          </div>
        </div>

        {/* Card Body */}
        <div className="flex items-center justify-between pr-1">
          <div className="space-y-1.5 max-w-[80%]">
            <h2 className="text-xl font-serif text-white tracking-tight leading-snug">
              Today's vibration is waiting
            </h2>
            <p className="text-xs text-white/55 font-normal leading-relaxed">
              Tap to reveal — the Universe is listening.
            </p>
          </div>

          {/* Chevron circle button */}
          <div className="w-10 h-10 rounded-full bg-[#E5B842] flex items-center justify-center text-black shadow-[0_0_12px_rgba(229,184,66,0.4)] group-hover:scale-105 transition">
            <ChevronRight size={20} strokeWidth={2.5} />
          </div>
        </div>
      </div>

      {/* Card 2: TODAY'S AFFIRMATION */}
      <div className="bg-[#141418] border border-white/10 rounded-2xl p-5 relative overflow-hidden">
        {/* Header row: Subtitle + Streak */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-serif text-[#E5B842]">99</span>
            <span className="text-[11px] font-bold tracking-widest text-white/60 uppercase">
              TODAY'S AFFIRMATION
            </span>
          </div>

          {/* Days streak tracker */}
          <div className="flex items-center space-x-1.5 bg-black/40 px-2.5 py-1 rounded-full border border-white/5">
            <div className="flex space-x-1">
              {days.map((day, idx) => (
                <span
                  key={day}
                  className={`text-[9px] font-medium ${
                    idx === days.length - 1 ? 'text-[#E5B842] font-bold' : 'text-white/35'
                  }`}
                >
                  {day}
                </span>
              ))}
            </div>
            <div className="flex items-center space-x-0.5 text-xs text-amber-500/80 pl-1 border-l border-white/10">
              <span className="text-[10px] font-bold text-white/60">0</span>
              <Flame size={12} className="text-amber-500 fill-amber-500" />
            </div>
          </div>
        </div>

        {/* Card Body */}
        <div className="space-y-1 mb-4">
          <h2 className="text-xl font-serif italic text-white/95 tracking-tight">
            I receive ease
          </h2>
          <p className="text-xs text-white/55 font-normal leading-relaxed">
            Life can feel lighter when I allow support in.
          </p>
        </div>

        {/* Action Button */}
        <div className="flex justify-end">
          {affirmationClaimed ? (
            <div className="px-5 py-2 rounded-xl bg-[#2A2312] border border-[#E5B842]/40 text-[#F3C766] text-xs font-semibold flex items-center space-x-1.5 shadow-[0_0_10px_rgba(229,184,66,0.15)]">
              <Check size={14} className="text-[#E5B842]" />
              <span>Claimed</span>
            </div>
          ) : (
            <button
              type="button"
              onClick={claimAffirmation}
              className="px-6 py-2 rounded-xl bg-gradient-to-r from-[#F3C766] to-[#D4A337] text-black text-xs font-bold tracking-wide hover:shadow-[0_0_12px_rgba(229,184,66,0.4)] active:scale-95 transition"
            >
              Claim
            </button>
          )}
        </div>
      </div>

      {/* Card 3: ASK LUNORA */}
      <div className="space-y-3">
        {/* Section Header */}
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center space-x-2">
            <Sparkles size={14} className="text-[#E5B842]" />
            <span className="text-[11px] font-bold tracking-widest text-white/60 uppercase">
              ASK LUNORA
            </span>
          </div>
          <button
            type="button"
            onClick={handleRefreshQuestions}
            className="flex items-center space-x-1 text-xs text-white/50 hover:text-white transition"
          >
            <RefreshCw size={13} className={isRotating ? 'animate-spin' : ''} />
            <span>Refresh</span>
          </button>
        </div>

        {/* Suggested Questions List */}
        <div className="space-y-2">
          {questions.map((q) => (
            <button
              key={q}
              type="button"
              onClick={() => handleAskQuestion(q)}
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
          onClick={handleNavigateToAsk}
          className="cursor-pointer bg-[#141418] border border-white/10 hover:border-white/20 rounded-2xl px-4 py-3.5 flex items-center justify-between text-white/40 transition mt-3"
        >
          <span className="text-xs sm:text-sm">Ask your own question</span>
          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:text-white">
            <Mic size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};
