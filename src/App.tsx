import React, { useState } from 'react';
import { useApp } from './context/AppContext';
import { StatusBar } from './components/common/StatusBar';
import { AndroidNavBar } from './components/common/AndroidNavBar';
import { OnboardingFlow } from './components/onboarding/OnboardingFlow';
import { MainApp } from './components/main/MainApp';
import { DailyInsightModal } from './components/modals/DailyInsightModal';
import { ReportModal } from './components/modals/ReportModal';
import { ProfileModal } from './components/modals/ProfileModal';
import { ManageAccountModal } from './components/modals/ManageAccountModal';
import { LogoutDialog } from './components/modals/LogoutDialog';
import { AddCustomProfileModal } from './components/modals/AddCustomProfileModal';
import { AddConnectionModal } from './components/modals/AddConnectionModal';
import { Layers, Smartphone } from 'lucide-react';

export const App: React.FC = () => {
  const {
    isOnboarding,
    restartOnboarding,
    finishOnboarding,
    setOnboardingStep,
    setActiveTab,
    openDailyInsight,
    openProfile,
    openManageAccount,
    openLogoutDialog,
    openReportDialog,
  } = useApp();

  const [showScreenNavigator, setShowScreenNavigator] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);

  React.useEffect(() => {
    const handleBeforeInstall = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstall);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
  }, []);

  const handleInstallApp = async () => {
    if (!deferredPrompt) {
      alert("Phone me install karne ke liye Chrome menu (⋮) par tap karke 'Install App' ya 'Add to Home Screen' select karein!");
      return;
    }
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setIsInstallable(false);
    }
    setDeferredPrompt(null);
  };

  return (
    <div className="min-h-screen bg-[#050507] flex items-center justify-center p-0 md:py-6 md:px-4 font-sans text-white">
      {/* Mobile / Desktop Container */}
      <div className="w-full max-w-full md:max-w-[420px] h-[100dvh] md:h-[890px] bg-[#0B0B0E] md:rounded-[44px] md:border-[8px] md:border-[#1E1E24] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_20px_rgba(229,184,66,0.12)] flex flex-col overflow-hidden relative">
        
        {/* Android Status Bar (Only on Desktop preview, hidden on real mobile devices) */}
        <div className="hidden md:block">
          <StatusBar time="11:25" batteryPercentage={98} />
        </div>

        {/* Optional Native Install banner */}
        {isInstallable && (
          <div className="bg-[#2A2312] border-b border-[#E5B842]/40 px-4 py-2 flex items-center justify-between z-40">
            <span className="text-xs text-[#F3C766] font-medium">Install Lunora as Phone App</span>
            <button
              type="button"
              onClick={handleInstallApp}
              className="bg-[#E5B842] text-black px-3 py-1 rounded-full text-xs font-bold shadow-md"
            >
              Install
            </button>
          </div>
        )}

        {/* Dynamic Screen View */}
        <div className="flex-1 flex flex-col overflow-hidden relative">
          {isOnboarding ? <OnboardingFlow /> : <MainApp />}
        </div>

        {/* Modals & Subscreens */}
        <DailyInsightModal />
        <ReportModal />
        <ProfileModal />
        <ManageAccountModal />
        <LogoutDialog />
        <AddCustomProfileModal />
        <AddConnectionModal />

        {/* Android Navigation Bar (Only on Desktop preview, hidden on real mobile devices) */}
        <div className="hidden md:block">
          <AndroidNavBar
            onHome={() => {
              finishOnboarding();
              setActiveTab('you');
            }}
            onBack={() => {
              window.history.back();
            }}
          />
        </div>
      </div>

      {/* Floating Screen Navigator (For verifying all 39 pages from PDF) */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          type="button"
          onClick={() => setShowScreenNavigator(!showScreenNavigator)}
          className="bg-[#1C1C22] border border-[#E5B842]/40 text-[#F3C766] px-3.5 py-2.5 rounded-full shadow-2xl flex items-center space-x-2 text-xs font-semibold hover:bg-[#252530] transition active:scale-95"
        >
          <Layers size={16} />
          <span>PDF Screen Jump ({showScreenNavigator ? 'Hide' : 'Show'})</span>
        </button>

        {showScreenNavigator && (
          <div className="absolute bottom-12 right-0 w-80 max-h-[75vh] overflow-y-auto bg-[#141418] border border-white/10 rounded-2xl p-4 shadow-2xl text-xs space-y-3">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span className="font-bold text-white uppercase text-[11px] tracking-wider">
                Direct Screen Jump (PDF)
              </span>
              <Smartphone size={14} className="text-[#E5B842]" />
            </div>

            <div className="space-y-1">
              <p className="text-[10px] font-bold text-white/40 uppercase">Onboarding (1-7)</p>
              <button
                type="button"
                onClick={() => { restartOnboarding(); setOnboardingStep(1); setShowScreenNavigator(false); }}
                className="w-full text-left p-2 rounded-lg hover:bg-white/5 text-white/80"
              >
                Page 2: Step 1 (About You - Name & Username)
              </button>
              <button
                type="button"
                onClick={() => { restartOnboarding(); setOnboardingStep(2); setShowScreenNavigator(false); }}
                className="w-full text-left p-2 rounded-lg hover:bg-white/5 text-white/80"
              >
                Page 3: Step 2 (When were you born?)
              </button>
              <button
                type="button"
                onClick={() => { restartOnboarding(); setOnboardingStep(3); setShowScreenNavigator(false); }}
                className="w-full text-left p-2 rounded-lg hover:bg-white/5 text-white/80"
              >
                Page 1 & 5: Step 3 (And where? - City & Privacy)
              </button>
              <button
                type="button"
                onClick={() => { restartOnboarding(); setOnboardingStep(4); setShowScreenNavigator(false); }}
                className="w-full text-left p-2 rounded-lg hover:bg-white/5 text-white/80"
              >
                Page 4, 7, 28: Step 4 (Where are you in love?)
              </button>
              <button
                type="button"
                onClick={() => { restartOnboarding(); setOnboardingStep(5); setShowScreenNavigator(false); }}
                className="w-full text-left p-2 rounded-lg hover:bg-white/5 text-white/80"
              >
                Page 6, 8, 9: Step 5 (What's going on in your life?)
              </button>
              <button
                type="button"
                onClick={() => { restartOnboarding(); setOnboardingStep(6); setShowScreenNavigator(false); }}
                className="w-full text-left p-2 rounded-lg hover:bg-white/5 text-white/80"
              >
                Page 10-19: Step 6 (What are you into? - 10 Interests)
              </button>
              <button
                type="button"
                onClick={() => { restartOnboarding(); setOnboardingStep(7); setShowScreenNavigator(false); }}
                className="w-full text-left p-2 rounded-lg hover:bg-white/5 text-white/80"
              >
                Page 20: Step 7 (Enable notifications)
              </button>
            </div>

            <div className="space-y-1 pt-2 border-t border-white/5">
              <p className="text-[10px] font-bold text-white/40 uppercase">Main Screens</p>
              <button
                type="button"
                onClick={() => { finishOnboarding(); setActiveTab('you'); setShowScreenNavigator(false); }}
                className="w-full text-left p-2 rounded-lg hover:bg-white/5 text-white/80"
              >
                Page 21: You Tab (Daily Insight & Affirmations)
              </button>
              <button
                type="button"
                onClick={() => { finishOnboarding(); setActiveTab('people'); setShowScreenNavigator(false); }}
                className="w-full text-left p-2 rounded-lg hover:bg-white/5 text-white/80"
              >
                Page 22, 27: People Tab (Connections & Compatibility)
              </button>
              <button
                type="button"
                onClick={() => { finishOnboarding(); setActiveTab('ask'); setShowScreenNavigator(false); }}
                className="w-full text-left p-2 rounded-lg hover:bg-white/5 text-white/80"
              >
                Page 23-25, 39: Ask Lunora (Cosmic Confidante Chat)
              </button>
              <button
                type="button"
                onClick={() => { finishOnboarding(); openDailyInsight('money'); setShowScreenNavigator(false); }}
                className="w-full text-left p-2 rounded-lg hover:bg-white/5 text-white/80"
              >
                Page 32, 33, 35-38: Daily Insight Detail Screen
              </button>
              <button
                type="button"
                onClick={() => { finishOnboarding(); openReportDialog(); setShowScreenNavigator(false); }}
                className="w-full text-left p-2 rounded-lg hover:bg-white/5 text-white/80"
              >
                Page 34: Report Insight Dialog
              </button>
              <button
                type="button"
                onClick={() => { finishOnboarding(); openProfile(); setShowScreenNavigator(false); }}
                className="w-full text-left p-2 rounded-lg hover:bg-white/5 text-white/80"
              >
                Page 26, 29: Profile Screen (Aman)
              </button>
              <button
                type="button"
                onClick={() => { finishOnboarding(); openManageAccount(); setShowScreenNavigator(false); }}
                className="w-full text-left p-2 rounded-lg hover:bg-white/5 text-white/80"
              >
                Page 31: Manage Account (918303719864)
              </button>
              <button
                type="button"
                onClick={() => { finishOnboarding(); openLogoutDialog(); setShowScreenNavigator(false); }}
                className="w-full text-left p-2 rounded-lg hover:bg-white/5 text-white/80"
              >
                Page 30: Log Out Modal
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
