import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  HelpCircle,
  Mail,
  Bug,
  UserCheck,
  LogOut,
  ChevronDown,
  ExternalLink,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ProfileModal: React.FC = () => {
  const {
    isProfileOpen,
    closeProfile,
    user,
    restartOnboarding,
    openManageAccount,
    openLogoutDialog,
  } = useApp();

  const [isSupportExpanded, setIsSupportExpanded] = useState(false);

  if (!isProfileOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0B0B0E] flex flex-col overflow-hidden animate-slide-up">
      {/* Top Bar */}
      <div className="pt-2 pb-3 px-5 border-b border-white/5 flex items-center justify-between z-10 bg-[#0B0B0E]/95 backdrop-blur-md">
        <button
          type="button"
          onClick={closeProfile}
          className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:text-white transition active:scale-95"
        >
          <ChevronLeft size={20} />
        </button>

        <span className="text-[11px] font-bold tracking-widest text-white/60 uppercase">
          PROFILE
        </span>

        <div className="w-9" />
      </div>

      {/* Profile Body */}
      <div className="flex-1 overflow-y-auto px-5 py-6 no-scrollbar space-y-7 pb-12">
        {/* User Hero Avatar & Name */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="relative w-24 h-24 rounded-full bg-gradient-to-tr from-[#F5D061] via-[#D4A337] to-[#A68226] p-1 shadow-[0_0_25px_rgba(229,184,66,0.35)] mb-4">
            <div className="w-full h-full rounded-full bg-[#18181D] flex items-center justify-center">
              <span className="font-serif text-4xl font-medium text-[#F3C766]">
                {user.name ? user.name[0].toUpperCase() : 'A'}
              </span>
            </div>
          </div>

          <h2 className="text-2xl font-serif text-white tracking-tight mb-1">
            {user.name || 'Aman'}
          </h2>

          <p className="text-xs text-white/45 font-medium">
            {user.birthDate || '15 Feb 2007'} · {user.birthCity || 'Gorakhpur'} · —
          </p>
        </div>

        {/* Section: YOUR READING */}
        <div className="space-y-2">
          <span className="text-[10px] font-bold tracking-widest text-white/40 uppercase block px-1">
            YOUR READING
          </span>
          <button
            type="button"
            onClick={restartOnboarding}
            className="w-full bg-[#141418] hover:bg-[#1A1A22] border border-white/5 rounded-2xl p-4 flex items-center justify-between text-left transition group active:scale-[0.99]"
          >
            <div className="flex items-center space-x-3.5">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-[#E5B842] flex items-center justify-center flex-shrink-0">
                <SlidersHorizontal size={18} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Edit your details</h4>
                <p className="text-xs text-white/45">Love, life, and what you're into.</p>
              </div>
            </div>
            <ChevronRight size={18} className="text-white/30 group-hover:text-white transition" />
          </button>
        </div>

        {/* Section: SUPPORT */}
        <div className="space-y-2">
          <span className="text-[10px] font-bold tracking-widest text-white/40 uppercase block px-1">
            SUPPORT
          </span>
          <div className="bg-[#141418] border border-white/5 rounded-2xl overflow-hidden">
            <button
              type="button"
              onClick={() => setIsSupportExpanded(!isSupportExpanded)}
              className="w-full p-4 flex items-center justify-between text-left hover:bg-white/5 transition"
            >
              <div className="flex items-center space-x-3.5">
                <div className="w-9 h-9 rounded-xl bg-white/5 text-white/70 flex items-center justify-center flex-shrink-0">
                  <HelpCircle size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Help & support</h4>
                  <p className="text-xs text-white/45">Reach the team — we read every note.</p>
                </div>
              </div>
              <ChevronDown
                size={18}
                className={`text-white/30 transition-transform ${
                  isSupportExpanded ? 'rotate-180 text-white' : ''
                }`}
              />
            </button>

            {/* Sub-items (Page 29) */}
            {isSupportExpanded && (
              <div className="border-t border-white/5 bg-[#17171D] p-3 space-y-2">
                <a
                  href="mailto:support@lunora.app"
                  className="p-3 rounded-xl bg-white/5 flex items-center justify-between text-left hover:bg-white/10 transition block"
                >
                  <div className="flex items-center space-x-3">
                    <Mail size={16} className="text-[#E5B842]" />
                    <div>
                      <h5 className="text-xs font-semibold text-white">Contact us</h5>
                      <p className="text-[11px] text-white/45">
                        Questions, feedback, a star sign in your inbox.
                      </p>
                    </div>
                  </div>
                  <ExternalLink size={14} className="text-white/40" />
                </a>

                <button
                  type="button"
                  onClick={() => alert('Issue report sent to Lunora support team!')}
                  className="w-full p-3 rounded-xl bg-white/5 flex items-center justify-between text-left hover:bg-white/10 transition"
                >
                  <div className="flex items-center space-x-3">
                    <Bug size={16} className="text-rose-400" />
                    <div>
                      <h5 className="text-xs font-semibold text-white">Report an issue</h5>
                      <p className="text-[11px] text-white/45">
                        Something off? Tell us and we'll chase it down.
                      </p>
                    </div>
                  </div>
                  <ExternalLink size={14} className="text-white/40" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Section: ACCOUNT */}
        <div className="space-y-2">
          <span className="text-[10px] font-bold tracking-widest text-white/40 uppercase block px-1">
            ACCOUNT
          </span>
          <div className="space-y-2">
            <button
              type="button"
              onClick={openManageAccount}
              className="w-full bg-[#141418] hover:bg-[#1A1A22] border border-white/5 rounded-2xl p-4 flex items-center justify-between text-left transition group active:scale-[0.99]"
            >
              <div className="flex items-center space-x-3.5">
                <div className="w-9 h-9 rounded-xl bg-white/5 text-white/70 flex items-center justify-center flex-shrink-0">
                  <UserCheck size={18} />
                </div>
                <h4 className="text-sm font-semibold text-white">Manage account</h4>
              </div>
              <ChevronRight size={18} className="text-white/30 group-hover:text-white transition" />
            </button>

            <button
              type="button"
              onClick={openLogoutDialog}
              className="w-full bg-[#141418] hover:bg-[#1A1A22] border border-white/5 rounded-2xl p-4 flex items-center justify-between text-left transition group active:scale-[0.99]"
            >
              <div className="flex items-center space-x-3.5">
                <div className="w-9 h-9 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center flex-shrink-0">
                  <LogOut size={18} />
                </div>
                <h4 className="text-sm font-semibold text-rose-300">Log out</h4>
              </div>
              <ChevronRight size={18} className="text-white/30 group-hover:text-white transition" />
            </button>
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center pt-4 space-y-1 text-xs text-white/40">
          <div className="flex justify-center space-x-2 text-[11px]">
            <a href="#" className="hover:text-white/70">Privacy policy</a>
            <span>·</span>
            <a href="#" className="hover:text-white/70">Terms of service</a>
          </div>
          <div className="text-[11px]">
            <a href="#" className="hover:text-white/70">Community Standards</a>
          </div>
          <p className="text-[10px] tracking-wider text-white/30 pt-3">
            LUNORA · V1.0.1
          </p>
          <p className="text-[9px] text-white/20">
            build 19
          </p>
        </div>
      </div>
    </div>
  );
};
