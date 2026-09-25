import React from 'react';
import { User, Check } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { PRONOUN_OPTIONS } from '../../data/initialData';

export const Step1AboutYou: React.FC = () => {
  const { user, updateUser } = useApp();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateUser({ name: e.target.value });
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.toLowerCase().replace(/\s+/g, '');
    if (val.length <= 30) {
      updateUser({ username: val });
    }
  };

  const handlePronounSelect = (pronoun: string) => {
    updateUser({ pronouns: pronoun });
  };

  const isUsernameValid = user.username.length >= 5 && user.username.length <= 30;

  return (
    <div className="flex-1 flex flex-col px-6 py-2 overflow-y-auto no-scrollbar">
      {/* Category Subtitle */}
      <span className="text-[11px] font-bold tracking-widest text-[#B38F3F] uppercase mb-1">
        ABOUT YOU
      </span>

      {/* Headline */}
      <h1 className="text-3xl font-serif text-white/95 mb-7 tracking-tight">
        What should we call you?
      </h1>

      {/* Field: Full Name */}
      <div className="mb-6">
        <label className="block text-[11px] font-semibold tracking-wider text-white/60 uppercase mb-2">
          WHAT'S YOUR FULL NAME?
        </label>
        <div className="relative flex items-center bg-[#151518] rounded-xl border border-white/10 focus-within:border-[#E5B842] transition px-4 py-3.5">
          <User size={18} className="text-white/40 mr-3 flex-shrink-0" />
          <input
            type="text"
            value={user.name}
            onChange={handleNameChange}
            placeholder="Your name"
            className="w-full bg-transparent text-white font-medium text-base focus:outline-none placeholder:text-white/30"
          />
        </div>
      </div>

      {/* Field: Username */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <label className="text-[11px] font-semibold tracking-wider text-white/60 uppercase">
            USERNAME
          </label>
          <span className="text-xs text-white/40 font-mono">
            {user.username.length} / 30
          </span>
        </div>
        <div className="relative flex items-center bg-[#151518] rounded-xl border border-white/10 focus-within:border-[#E5B842] transition px-4 py-3.5">
          <span className="text-white/40 text-base font-semibold mr-3 select-none flex-shrink-0">
            @
          </span>
          <input
            type="text"
            value={user.username}
            onChange={handleUsernameChange}
            placeholder="username"
            className="w-full bg-transparent text-white font-medium text-base focus:outline-none placeholder:text-white/30"
          />
          {isUsernameValid && (
            <Check size={18} className="text-emerald-400 flex-shrink-0 ml-2" />
          )}
        </div>

        {/* Username Requirements */}
        <div className="mt-3 space-y-1 text-[11px] text-white/40 leading-relaxed pl-1">
          <p>• 5–30 letters, numbers, periods, or underscores</p>
          <p>• No spaces</p>
          <p>• Periods can't start, end, or sit next to each other</p>
        </div>
      </div>

      {/* Section: Pronouns */}
      <div className="mb-6">
        <label className="block text-[11px] font-semibold tracking-wider text-white/60 uppercase mb-3">
          PRONOUNS
        </label>
        <div className="grid grid-cols-3 gap-2.5">
          {PRONOUN_OPTIONS.slice(0, 3).map((pronoun) => {
            const isSelected = user.pronouns === pronoun;
            return (
              <button
                key={pronoun}
                type="button"
                onClick={() => handlePronounSelect(pronoun)}
                className={`py-3 px-3 rounded-xl text-sm font-medium transition text-center border ${
                  isSelected
                    ? 'bg-[#2A2312] border-[#E5B842] text-[#F3C766] shadow-[0_0_12px_rgba(229,184,66,0.2)]'
                    : 'bg-[#151518] border-white/5 text-white/80 hover:bg-[#1A1A1F]'
                }`}
              >
                {pronoun}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-2 gap-2.5 mt-2.5">
          {PRONOUN_OPTIONS.slice(3).map((pronoun) => {
            const isSelected = user.pronouns === pronoun;
            return (
              <button
                key={pronoun}
                type="button"
                onClick={() => handlePronounSelect(pronoun)}
                className={`py-3 px-3 rounded-xl text-sm font-medium transition text-center border ${
                  isSelected
                    ? 'bg-[#2A2312] border-[#E5B842] text-[#F3C766] shadow-[0_0_12px_rgba(229,184,66,0.2)]'
                    : 'bg-[#151518] border-white/5 text-white/80 hover:bg-[#1A1A1F]'
                }`}
              >
                {pronoun}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
