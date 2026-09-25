import React, { useState } from 'react';
import { Crosshair, Lock } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { POPULAR_CITIES } from '../../data/initialData';

export const Step3BirthCity: React.FC = () => {
  const { user, updateUser } = useApp();
  const [query, setQuery] = useState(user.birthCity);
  const [isFocused, setIsFocused] = useState(false);

  const filteredCities = query
    ? POPULAR_CITIES.filter((city) =>
        city.toLowerCase().includes(query.toLowerCase())
      )
    : POPULAR_CITIES.slice(0, 6);

  const handleSelectCity = (city: string) => {
    setQuery(city);
    updateUser({ birthCity: city });
    setIsFocused(false);
  };

  return (
    <div className="flex-1 flex flex-col px-6 py-2 overflow-y-auto no-scrollbar">
      {/* Category Subtitle */}
      <span className="text-[11px] font-bold tracking-widest text-[#B38F3F] uppercase mb-1">
        BIRTH DETAILS
      </span>

      {/* Headline */}
      <h1 className="text-3xl font-serif text-white/95 mb-8 tracking-tight">
        And where?
      </h1>

      {/* Field: City of Birth */}
      <div className="mb-6 relative">
        <label className="block text-[11px] font-semibold tracking-wider text-white/60 uppercase mb-2">
          CITY OF BIRTH
        </label>
        <div className="relative flex items-center bg-[#151518] rounded-xl border border-white/10 focus-within:border-[#E5B842] transition px-4 py-3.5">
          <Crosshair size={18} className="text-white/40 mr-3 flex-shrink-0" />
          <input
            type="text"
            value={query}
            onFocus={() => setIsFocused(true)}
            onChange={(e) => {
              setQuery(e.target.value);
              updateUser({ birthCity: e.target.value });
            }}
            placeholder="Start typing - Mumbai, Bengaluru..."
            className="w-full bg-transparent text-white font-medium text-base focus:outline-none placeholder:text-white/30"
          />
        </div>

        {/* Autocomplete dropdown */}
        {isFocused && filteredCities.length > 0 && (
          <div className="absolute top-[82px] left-0 right-0 z-30 bg-[#1A1A20] border border-white/10 rounded-xl shadow-xl overflow-hidden py-1 max-h-48 overflow-y-auto">
            {filteredCities.map((city) => (
              <button
                key={city}
                type="button"
                onMouseDown={() => handleSelectCity(city)}
                className="w-full px-4 py-2.5 text-left text-sm text-white/90 hover:bg-[#25252E] hover:text-[#F3C766] transition flex items-center justify-between"
              >
                <span>{city}</span>
                {city === user.birthCity && (
                  <span className="text-xs text-[#E5B842]">Selected</span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Privacy Guarantee Card (Page 5) */}
      <div className="mt-2 bg-[#151518]/90 border border-white/5 rounded-2xl p-4 flex items-start space-x-3.5">
        <div className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
          <Lock size={15} className="text-[#E5B842]" />
        </div>
        <p className="text-xs text-white/60 leading-relaxed">
          Your birth details stay private — they personalize your readings and are never shown to other people.
        </p>
      </div>
    </div>
  );
};
