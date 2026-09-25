import React from 'react';
import { useApp } from '../../context/AppContext';
import { RELATIONSHIP_STATUS_OPTIONS } from '../../data/initialData';

export const Step4Relationship: React.FC = () => {
  const { user, updateUser } = useApp();

  const handleSelectStatus = (status: string) => {
    updateUser({ relationshipStatus: status });
  };

  return (
    <div className="flex-1 flex flex-col px-6 py-2 overflow-y-auto no-scrollbar">
      {/* Category Subtitle */}
      <span className="text-[11px] font-bold tracking-widest text-[#B38F3F] uppercase mb-1">
        YOUR LIFE
      </span>

      {/* Headline */}
      <h1 className="text-3xl font-serif text-white/95 mb-8 tracking-tight">
        Where are you in love?
      </h1>

      {/* Section Subtitle */}
      <label className="block text-[11px] font-semibold tracking-wider text-white/60 uppercase mb-3">
        RELATIONSHIP STATUS
      </label>

      {/* Status Grid - 3 columns */}
      <div className="grid grid-cols-3 gap-2.5">
        {RELATIONSHIP_STATUS_OPTIONS.map((status) => {
          const isSelected = user.relationshipStatus === status;
          return (
            <button
              key={status}
              type="button"
              onClick={() => handleSelectStatus(status)}
              className={`min-h-[64px] px-2.5 py-3 rounded-xl text-xs sm:text-sm font-medium transition flex items-center justify-center text-center border ${
                isSelected
                  ? 'bg-[#2A2312] border-[#E5B842] text-[#F3C766] shadow-[0_0_14px_rgba(229,184,66,0.25)]'
                  : 'bg-[#151518] border-white/5 text-white/80 hover:bg-[#1A1A1F] hover:border-white/10'
              }`}
            >
              <span className="leading-snug">{status}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
