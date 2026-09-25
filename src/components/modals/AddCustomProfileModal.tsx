import React, { useState } from 'react';
import { X, Sparkles, User, Calendar, MapPin, Tag } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const AddCustomProfileModal: React.FC = () => {
  const { isAddCustomProfileOpen, closeAddCustomProfile, addCustomProfile } = useApp();

  const [name, setName] = useState('');
  const [tag, setTag] = useState('Crush');
  const [birthDate, setBirthDate] = useState('18 October 2005');
  const [birthTime, setBirthTime] = useState('10:15 am');
  const [birthCity, setBirthCity] = useState('Mumbai');

  if (!isAddCustomProfileOpen) return null;

  const tags = ['Crush', 'Friend', 'Boss', 'Partner', 'Ex', 'Sibling'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    // Calculate dynamic astrological compatibility score & insights
    const randomScore = Math.floor(Math.random() * 20) + 78; // 78 - 98%
    const synergyLevels: Array<'Harmonic' | 'Electric' | 'Intense'> = ['Harmonic', 'Electric', 'Intense'];
    const chosenLevel = synergyLevels[Math.floor(Math.random() * synergyLevels.length)];

    addCustomProfile({
      name: name.trim(),
      tag,
      birthDate,
      birthTime,
      birthCity,
      compatibilityScore: randomScore,
      synergyLevel: chosenLevel,
      summary: `Dynamic synastry between your Shatabhisha Moon and ${name}'s planetary chart. High intellectual stimulation with clear natural boundaries.`,
      chartHighlights: ['Air-Fire sextile', 'Mental rapport', 'Natural rapport'],
    });

    closeAddCustomProfile();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fade-in">
      <div className="w-full sm:max-w-md bg-[#141418] border border-white/10 rounded-t-3xl sm:rounded-3xl p-6 max-h-[90vh] overflow-y-auto no-scrollbar space-y-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold tracking-widest text-[#B38F3F] uppercase block">
              PRIVATE PROFILE
            </span>
            <h2 className="text-xl font-serif text-white tracking-tight">
              Add custom profile
            </h2>
          </div>
          <button
            type="button"
            onClick={closeAddCustomProfile}
            className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        <p className="text-xs text-white/50 leading-relaxed">
          You enter their details. They will never know and won't be notified. Perfect for crushes, bosses, and friends.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-[11px] font-semibold text-white/60 uppercase mb-1.5">
              Their Name
            </label>
            <div className="flex items-center bg-[#1A1A22] rounded-xl border border-white/10 focus-within:border-[#E5B842] px-3.5 py-3">
              <User size={16} className="text-white/40 mr-2.5" />
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Roshni, Rohan"
                className="w-full bg-transparent text-white text-sm focus:outline-none placeholder:text-white/30"
              />
            </div>
          </div>

          {/* Relation Tag */}
          <div>
            <label className="block text-[11px] font-semibold text-white/60 uppercase mb-1.5">
              Who are they to you?
            </label>
            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTag(t)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition ${
                    tag === t
                      ? 'bg-[#2A2312] border-[#E5B842] text-[#F3C766]'
                      : 'bg-[#18181F] border-white/5 text-white/70 hover:bg-[#202028]'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-[11px] font-semibold text-white/60 uppercase mb-1.5">
              Date of Birth
            </label>
            <div className="flex items-center bg-[#1A1A22] rounded-xl border border-white/10 focus-within:border-[#E5B842] px-3.5 py-3">
              <Calendar size={16} className="text-white/40 mr-2.5" />
              <input
                type="text"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                placeholder="e.g. 18 October 2005"
                className="w-full bg-transparent text-white text-sm focus:outline-none placeholder:text-white/30"
              />
            </div>
          </div>

          {/* City */}
          <div>
            <label className="block text-[11px] font-semibold text-white/60 uppercase mb-1.5">
              City of Birth
            </label>
            <div className="flex items-center bg-[#1A1A22] rounded-xl border border-white/10 focus-within:border-[#E5B842] px-3.5 py-3">
              <MapPin size={16} className="text-white/40 mr-2.5" />
              <input
                type="text"
                value={birthCity}
                onChange={(e) => setBirthCity(e.target.value)}
                placeholder="e.g. Mumbai, Delhi"
                className="w-full bg-transparent text-white text-sm focus:outline-none placeholder:text-white/30"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#F3C766] to-[#D4A337] text-black font-bold text-sm tracking-wide shadow-lg hover:shadow-[0_0_20px_rgba(229,184,66,0.35)] transition mt-2 flex items-center justify-center space-x-2"
          >
            <Sparkles size={16} />
            <span>Generate Compatibility</span>
          </button>
        </form>
      </div>
    </div>
  );
};
