import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Phone, Trash2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ManageAccountModal: React.FC = () => {
  const {
    isManageAccountOpen,
    closeManageAccount,
    user,
    resetUser,
    restartOnboarding,
  } = useApp();

  const [confirmDelete, setConfirmDelete] = useState(false);

  if (!isManageAccountOpen) return null;

  const handleDeleteAccount = () => {
    resetUser();
    closeManageAccount();
    restartOnboarding();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0B0B0E] flex flex-col overflow-hidden animate-slide-up">
      {/* Top Bar */}
      <div className="pt-2 pb-3 px-5 border-b border-white/5 flex items-center justify-between z-10 bg-[#0B0B0E]/95 backdrop-blur-md">
        <button
          type="button"
          onClick={closeManageAccount}
          className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:text-white transition active:scale-95"
        >
          <ChevronLeft size={20} />
        </button>

        <span className="text-[11px] font-bold tracking-widest text-white/60 uppercase">
          MANAGE ACCOUNT
        </span>

        <div className="w-9" />
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-6 no-scrollbar space-y-7">
        {/* Title */}
        <div>
          <h2 className="text-2xl font-serif text-white tracking-tight mb-1">
            Your account
          </h2>
          <p className="text-xs text-white/50">
            The basics that keep your chart anchored to you.
          </p>
        </div>

        {/* Signed In Details */}
        <div className="bg-[#141418] border border-white/5 rounded-2xl p-4 flex items-center space-x-3.5">
          <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-[#E5B842] flex items-center justify-center flex-shrink-0">
            <Phone size={18} />
          </div>
          <div>
            <span className="text-[10px] font-bold tracking-widest text-white/40 uppercase block">
              SIGNED IN AS
            </span>
            <span className="text-base font-mono font-medium text-white">
              {user.phone || '918303719864'}
            </span>
          </div>
        </div>

        {/* Section: PERMANENT */}
        <div className="space-y-2 pt-2">
          <span className="text-[10px] font-bold tracking-widest text-white/40 uppercase block px-1">
            PERMANENT
          </span>

          <button
            type="button"
            onClick={() => setConfirmDelete(true)}
            className="w-full bg-[#181214] border border-rose-500/20 hover:border-rose-500/40 rounded-2xl p-4 flex items-center justify-between text-left transition group active:scale-[0.99]"
          >
            <div className="flex items-center space-x-3.5">
              <div className="w-9 h-9 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center flex-shrink-0">
                <Trash2 size={18} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-rose-400">Delete account</h4>
                <p className="text-xs text-white/45">
                  Permanently erases everything — this can't be undone.
                </p>
              </div>
            </div>
            <ChevronRight size={18} className="text-rose-400/40 group-hover:text-rose-400 transition" />
          </button>
        </div>

        {/* Delete Confirmation Alert */}
        {confirmDelete && (
          <div className="p-4 bg-rose-950/40 border border-rose-500/30 rounded-2xl space-y-3">
            <p className="text-xs text-rose-200">
              Are you sure? All compatibility synastry, daily insights history, and your profile data will be permanently cleared.
            </p>
            <div className="flex space-x-2">
              <button
                type="button"
                onClick={() => setConfirmDelete(false)}
                className="flex-1 py-2 rounded-xl bg-white/10 text-white text-xs font-medium"
              >
                Keep Account
              </button>
              <button
                type="button"
                onClick={handleDeleteAccount}
                className="flex-1 py-2 rounded-xl bg-rose-600 text-white text-xs font-bold"
              >
                Delete Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
