import React from 'react';
import { Bell, UserPlus, EyeOff, Sparkles, ChevronRight, Lock } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const PeopleTab: React.FC = () => {
  const {
    openAddConnection,
    openAddCustomProfile,
    customProfiles,
    user,
  } = useApp();

  return (
    <div className="flex-1 flex flex-col px-5 py-4 overflow-y-auto no-scrollbar space-y-6 pb-6">
      {/* Header */}
      <div className="flex items-center justify-between pt-1">
        <div>
          <span className="text-[11px] font-bold tracking-widest text-white/50 uppercase block mb-1">
            Your circle
          </span>
          <h1 className="text-3xl font-serif text-white tracking-tight">
            People
          </h1>
        </div>

        {/* Bell Button */}
        <button
          type="button"
          className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white active:scale-95 transition"
        >
          <Bell size={18} />
        </button>
      </div>

      {/* Top 2 Action Cards */}
      <div className="grid grid-cols-2 gap-3">
        {/* Card 1: Mutual / Add connection */}
        <button
          type="button"
          onClick={openAddConnection}
          className="bg-[#141418] hover:bg-[#1A1A20] border border-white/5 hover:border-[#E5B842]/40 rounded-2xl p-4 text-left transition group active:scale-[0.98]"
        >
          <div className="w-8 h-8 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-[#E5B842] mb-3">
            <UserPlus size={16} />
          </div>
          <span className="text-[10px] font-bold tracking-widest text-amber-400 uppercase block mb-1">
            Mutual
          </span>
          <h3 className="text-sm font-semibold text-white mb-1">
            Add connection
          </h3>
          <p className="text-[11px] text-white/50 leading-relaxed">
            Invite someone — they confirm their own chart.
          </p>
        </button>

        {/* Card 2: Private / Add custom profile */}
        <button
          type="button"
          onClick={openAddCustomProfile}
          className="bg-[#141418] hover:bg-[#1A1A20] border border-white/5 hover:border-[#E5B842]/40 rounded-2xl p-4 text-left transition group active:scale-[0.98]"
        >
          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 mb-3">
            <EyeOff size={16} />
          </div>
          <span className="text-[10px] font-bold tracking-widest text-white/40 uppercase block mb-1">
            Private
          </span>
          <h3 className="text-sm font-semibold text-white mb-1">
            Add custom profile
          </h3>
          <p className="text-[11px] text-white/50 leading-relaxed">
            You enter their details. Stays just with you.
          </p>
        </button>
      </div>

      {/* Added Profiles List (if any exist) */}
      {customProfiles.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-semibold text-white/60 tracking-wider uppercase">
              YOUR COMPATIBILITY CHARTS ({customProfiles.length})
            </span>
            <span className="text-xs text-[#E5B842]">Synced</span>
          </div>

          <div className="space-y-3">
            {customProfiles.map((person) => (
              <div
                key={person.id}
                className="bg-[#15151A] border border-white/10 rounded-2xl p-4 transition hover:border-[#E5B842]/40"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#D4A337] to-[#F3C766] flex items-center justify-center text-black font-bold font-serif text-sm">
                      {person.name[0]}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="text-sm font-semibold text-white">{person.name}</h4>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/10 text-[#E5B842] border border-[#E5B842]/30">
                          {person.tag}
                        </span>
                      </div>
                      <p className="text-xs text-white/40">{person.birthDate} · {person.birthCity || 'Private'}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-lg font-bold font-serif text-[#F3C766]">
                      {person.compatibilityScore}%
                    </span>
                    <span className="block text-[10px] text-emerald-400 font-medium">
                      {person.synergyLevel}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-white/65 mt-3 leading-relaxed border-t border-white/5 pt-2.5">
                  {person.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-2.5">
                  {person.chartHighlights.map((hl) => (
                    <span
                      key={hl}
                      className="text-[10px] bg-white/5 border border-white/5 px-2 py-0.5 rounded-md text-white/60"
                    >
                      {hl}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Cosmic Overlapping Circles Graphic */}
      <div className="bg-[#141418] border border-white/5 rounded-3xl p-6 text-center relative overflow-hidden">
        {/* Glow */}
        <div className="absolute inset-0 bg-radial from-amber-500/10 to-transparent pointer-events-none" />

        <div className="flex items-center justify-center space-x-[-12px] my-3">
          {/* Circle 1 */}
          <div className="w-16 h-16 rounded-full bg-[#1A1A22] border-2 border-dashed border-[#E5B842]/40 flex items-center justify-center text-xl font-serif text-white/40">
            ?
          </div>
          {/* Circle 2: You */}
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#D4A337] to-[#F5D061] flex items-center justify-center text-black font-serif text-2xl font-bold shadow-[0_0_20px_rgba(229,184,66,0.35)] z-10">
            {user.name ? user.name[0].toUpperCase() : 'Y'}
          </div>
          {/* Circle 3 */}
          <div className="w-16 h-16 rounded-full bg-[#1A1A22] border-2 border-[#E5B842]/40 flex items-center justify-center text-xl font-serif text-white/40 relative">
            ?
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-black border border-white/20 flex items-center justify-center text-white/60">
              <Lock size={10} />
            </div>
          </div>
        </div>

        {/* Text Details */}
        <span className="text-[10px] font-bold tracking-widest text-[#B38F3F] uppercase block mt-4 mb-1">
          YOU'RE FLYING SOLO
        </span>
        <h3 className="text-xl font-serif text-white tracking-tight mb-2">
          The Universe loves a good guest list
        </h3>
        <p className="text-xs text-white/55 leading-relaxed max-w-sm mx-auto mb-4">
          Add someone to vibe-check compatibility, decode patterns, and read between charts. Pick a way above to begin.
        </p>
      </div>

      {/* Two ways to add someone section (Page 27) */}
      <div className="space-y-3">
        <h3 className="text-lg font-serif text-white tracking-tight">
          Two ways to add someone
        </h3>
        <p className="text-xs text-white/55 leading-relaxed">
          Lunora reads people through their birth chart. How you bring them in depends on whether they know you're checking.
        </p>

        <div className="space-y-3 pt-2">
          {/* Option 1: Connections */}
          <div className="bg-[#141418] border border-white/5 rounded-2xl p-4">
            <div className="w-8 h-8 rounded-full bg-amber-500/15 text-[#E5B842] flex items-center justify-center mb-2">
              <UserPlus size={16} />
            </div>
            <span className="text-[11px] font-bold tracking-wider text-white/60 block mb-0.5">
              Connections
            </span>
            <h4 className="text-base font-serif text-white mb-1.5">
              A two-way thread
            </h4>
            <p className="text-xs text-white/55 leading-relaxed">
              Send an invite. They confirm their own birth details — you never see them, but Lunora reads the compatibility for both of you.
            </p>
          </div>

          {/* Option 2: Saved Profiles */}
          <div className="bg-[#141418] border border-white/5 rounded-2xl p-4">
            <div className="w-8 h-8 rounded-full bg-white/5 text-white/70 flex items-center justify-center mb-2">
              <EyeOff size={16} />
            </div>
            <span className="text-[11px] font-bold tracking-wider text-white/60 block mb-0.5">
              Saved Profiles
            </span>
            <h4 className="text-base font-serif text-white mb-1.5">
              Just for your eyes
            </h4>
            <p className="text-xs text-white/55 leading-relaxed">
              You enter their birth details yourself. The other person is never notified — for the crush, the boss, the in-law.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
