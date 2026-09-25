import React from 'react';
import { ChevronLeft } from 'lucide-react';

interface OnboardingHeaderProps {
  currentStep: number;
  totalSteps?: number;
  onBack: () => void;
}

export const OnboardingHeader: React.FC<OnboardingHeaderProps> = ({
  currentStep,
  totalSteps = 7,
  onBack,
}) => {
  return (
    <div className="relative w-full pt-2 pb-4 px-5 flex items-center justify-between z-20">
      {/* Background celestial golden warm glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-32 bg-amber-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Back button */}
      <button
        type="button"
        onClick={onBack}
        className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white active:scale-95 transition"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Segmented indicators */}
      <div className="flex items-center space-x-1.5">
        {Array.from({ length: totalSteps }).map((_, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;

          return (
            <div
              key={stepNumber}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                isActive
                  ? 'w-7 bg-[#E5B842] shadow-[0_0_8px_rgba(229,184,66,0.6)]'
                  : isCompleted
                  ? 'w-2 bg-[#A68226]'
                  : 'w-2 bg-[#26262B]'
              }`}
            />
          );
        })}
      </div>

      {/* Step counter */}
      <div className="text-xs font-mono font-medium text-white/60 tracking-wider">
        {currentStep} / {totalSteps}
      </div>
    </div>
  );
};
