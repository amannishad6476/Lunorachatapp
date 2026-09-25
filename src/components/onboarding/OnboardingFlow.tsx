import React from 'react';
import { useApp } from '../../context/AppContext';
import { OnboardingHeader } from './OnboardingHeader';
import { Step1AboutYou } from './Step1AboutYou';
import { Step2BirthDate } from './Step2BirthDate';
import { Step3BirthCity } from './Step3BirthCity';
import { Step4Relationship } from './Step4Relationship';
import { Step5LifeBio } from './Step5LifeBio';
import { Step6Interests } from './Step6Interests';
import { Step7Notifications } from './Step7Notifications';
import { Sparkles } from 'lucide-react';

export const OnboardingFlow: React.FC = () => {
  const {
    user,
    onboardingStep,
    goToNextOnboardingStep,
    goToPrevOnboardingStep,
    finishOnboarding,
  } = useApp();

  const renderStepContent = () => {
    switch (onboardingStep) {
      case 1:
        return <Step1AboutYou />;
      case 2:
        return <Step2BirthDate />;
      case 3:
        return <Step3BirthCity />;
      case 4:
        return <Step4Relationship />;
      case 5:
        return <Step5LifeBio />;
      case 6:
        return <Step6Interests />;
      case 7:
        return <Step7Notifications />;
      default:
        return <Step1AboutYou />;
    }
  };

  // Determine button state and text
  let buttonText = 'CONTINUE';
  let isButtonDisabled = false;
  let hasSparkles = false;

  if (onboardingStep === 1) {
    if (!user.name.trim() || user.username.length < 5) {
      isButtonDisabled = true;
    }
  } else if (onboardingStep === 3) {
    if (!user.birthCity.trim()) {
      isButtonDisabled = true;
    }
  } else if (onboardingStep === 6) {
    hasSparkles = true;
    const remaining = 10 - user.interests.length;
    if (remaining > 0) {
      buttonText = `PICK ${remaining} MORE`;
      isButtonDisabled = true;
    } else {
      buttonText = 'CONTINUE';
      isButtonDisabled = false;
    }
  } else if (onboardingStep === 7) {
    buttonText = 'SEE MY FIRST READING';
    hasSparkles = true;
    isButtonDisabled = false;
  }

  const handleContinue = () => {
    if (isButtonDisabled) return;
    goToNextOnboardingStep();
  };

  return (
    <div className="flex-1 flex flex-col justify-between bg-[#0B0B0E] relative overflow-hidden">
      {/* Onboarding segmented header */}
      <OnboardingHeader
        currentStep={onboardingStep}
        totalSteps={7}
        onBack={goToPrevOnboardingStep}
      />

      {/* Step Content */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        {renderStepContent()}
      </div>

      {/* Bottom Sticky Action Bar */}
      <div className="px-6 pt-3 pb-6 bg-[#0B0B0E]/95 backdrop-blur-md border-t border-white/5 z-20">
        <button
          type="button"
          onClick={handleContinue}
          disabled={isButtonDisabled}
          className={`w-full py-4 rounded-2xl font-bold text-sm tracking-wide transition-all flex items-center justify-center space-x-2 ${
            isButtonDisabled
              ? 'bg-[#1E1E22] text-white/35 cursor-not-allowed border border-white/5'
              : 'bg-gradient-to-r from-[#F3C766] to-[#D4A337] text-[#111114] hover:shadow-[0_0_20px_rgba(229,184,66,0.35)] active:scale-[0.99]'
          }`}
        >
          <span>{buttonText}</span>
          {hasSparkles && <Sparkles size={16} className={isButtonDisabled ? 'opacity-40' : 'text-[#111114]'} />}
        </button>
      </div>
    </div>
  );
};
