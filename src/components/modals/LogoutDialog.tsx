import React from 'react';
import { LogOut } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const LogoutDialog: React.FC = () => {
  const {
    isLogoutDialogOpen,
    closeLogoutDialog,
    closeProfile,
    restartOnboarding,
  } = useApp();

  if (!isLogoutDialogOpen) return null;

  const handleConfirmLogout = () => {
    closeLogoutDialog();
    closeProfile();
    restartOnboarding();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6 animate-fade-in">
      <div className="w-full max-w-sm bg-[#15151A] border border-[#E5B842]/30 rounded-3xl p-6 text-center shadow-2xl relative space-y-4">
        {/* Icon */}
        <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-[#E5B842] flex items-center justify-center mx-auto mb-2 shadow-[0_0_15px_rgba(229,184,66,0.2)]">
          <LogOut size={22} className="rotate-180" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-serif text-white tracking-tight">
          Log out of Lunora?
        </h3>

        {/* Description */}
        <p className="text-xs text-white/60 leading-relaxed max-w-xs mx-auto">
          Your chart, saved profiles and journal stay safe — sign back in whenever the sky calls.
        </p>

        {/* Action Buttons */}
        <div className="flex space-x-3 pt-3">
          <button
            type="button"
            onClick={closeLogoutDialog}
            className="flex-1 py-3.5 rounded-2xl bg-[#1F1F26] border border-white/10 text-white/80 font-semibold text-xs sm:text-sm hover:bg-[#25252E] transition active:scale-95"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleConfirmLogout}
            className="flex-1 py-3.5 rounded-2xl bg-gradient-to-r from-[#F3C766] to-[#D4A337] text-black font-bold text-xs sm:text-sm shadow-[0_0_15px_rgba(229,184,66,0.3)] hover:scale-[1.02] transition active:scale-95"
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};
