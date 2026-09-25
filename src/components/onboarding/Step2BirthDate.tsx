import React, { useState } from 'react';
import { Calendar, Clock, ChevronDown } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Step2BirthDate: React.FC = () => {
  const { user, updateUser } = useApp();
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  return (
    <div className="flex-1 flex flex-col px-6 py-2 overflow-y-auto no-scrollbar">
      {/* Category Subtitle */}
      <span className="text-[11px] font-bold tracking-widest text-[#B38F3F] uppercase mb-1">
        BIRTH DETAILS
      </span>

      {/* Headline */}
      <h1 className="text-3xl font-serif text-white/95 mb-8 tracking-tight">
        When were you born?
      </h1>

      {/* Field: Date of Birth */}
      <div className="mb-6">
        <label className="block text-[11px] font-semibold tracking-wider text-white/60 uppercase mb-2">
          DATE OF BIRTH
        </label>
        <button
          type="button"
          onClick={() => setShowDatePicker(!showDatePicker)}
          className="w-full flex items-center justify-between bg-[#151518] rounded-xl border border-white/10 px-4 py-3.5 text-left hover:border-white/20 transition"
        >
          <div className="flex items-center space-x-3">
            <Calendar size={18} className="text-white/40" />
            <span className="text-white font-medium text-base">{user.birthDate}</span>
          </div>
          <ChevronDown size={18} className="text-white/40" />
        </button>

        {showDatePicker && (
          <div className="mt-2 p-3 bg-[#1C1C22] border border-white/10 rounded-xl">
            <input
              type="text"
              value={user.birthDate}
              onChange={(e) => updateUser({ birthDate: e.target.value })}
              placeholder="e.g. 15 February 2007"
              className="w-full bg-[#111114] border border-white/10 rounded-lg p-2 text-white text-sm focus:outline-none focus:border-[#E5B842]"
            />
            <div className="flex gap-2 mt-2">
              {['15 February 2007', '24 August 2005', '03 March 2003'].map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => {
                    updateUser({ birthDate: d });
                    setShowDatePicker(false);
                  }}
                  className="text-xs bg-white/5 hover:bg-white/10 px-2 py-1 rounded text-white/70"
                >
                  {d}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Note */}
        <p className="mt-2.5 text-xs text-white/45 leading-relaxed">
          You'll need to be 18 or over. Birth details can't be changed later.
        </p>
      </div>

      {/* Field: Time of Birth */}
      <div className="mb-6">
        <label className="block text-[11px] font-semibold tracking-wider text-white/60 uppercase mb-2">
          TIME OF BIRTH
        </label>
        <button
          type="button"
          onClick={() => setShowTimePicker(!showTimePicker)}
          className="w-full flex items-center justify-between bg-[#151518] rounded-xl border border-white/10 px-4 py-3.5 text-left hover:border-white/20 transition"
        >
          <div className="flex items-center space-x-3">
            <Clock size={18} className="text-white/40" />
            <span className="text-white font-medium text-base">{user.birthTime}</span>
          </div>
          <ChevronDown size={18} className="text-white/40" />
        </button>

        {showTimePicker && (
          <div className="mt-2 p-3 bg-[#1C1C22] border border-white/10 rounded-xl">
            <input
              type="text"
              value={user.birthTime}
              onChange={(e) => updateUser({ birthTime: e.target.value })}
              placeholder="e.g. 11:25 pm"
              className="w-full bg-[#111114] border border-white/10 rounded-lg p-2 text-white text-sm focus:outline-none focus:border-[#E5B842]"
            />
            <div className="flex gap-2 mt-2">
              {['11:25 pm', '08:30 am', '02:15 pm'].map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => {
                    updateUser({ birthTime: t });
                    setShowTimePicker(false);
                  }}
                  className="text-xs bg-white/5 hover:bg-white/10 px-2 py-1 rounded text-white/70"
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
