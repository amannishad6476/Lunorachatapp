import React from 'react';
import { Sparkles } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Step5LifeBio: React.FC = () => {
  const { user, updateUser } = useApp();

  const handleBioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    if (val.length <= 400) {
      updateUser({ lifeBio: val });
    }
  };

  const handleSetExample = (exampleText: string) => {
    updateUser({ lifeBio: exampleText });
  };

  return (
    <div className="flex-1 flex flex-col px-6 py-2 overflow-y-auto no-scrollbar">
      {/* Category Subtitle */}
      <span className="text-[11px] font-bold tracking-widest text-[#B38F3F] uppercase mb-1">
        YOUR LIFE
      </span>

      {/* Headline */}
      <h1 className="text-3xl font-serif text-white/95 mb-7 tracking-tight">
        What's going on in your life?
      </h1>

      {/* Field: Bio Textarea */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <label className="text-[11px] font-semibold tracking-wider text-white/60 uppercase">
            IN YOUR OWN WORDS
          </label>
          <span className="text-xs text-white/40 font-mono">
            {user.lifeBio.length} / 400
          </span>
        </div>

        <div className="relative bg-[#151518] rounded-xl border border-white/10 focus-within:border-[#E5B842] transition p-3.5">
          <div className="flex items-start space-x-2.5">
            <span className="text-white/30 mt-1 select-none flex-shrink-0">
              <Sparkles size={16} />
            </span>
            <textarea
              rows={4}
              value={user.lifeBio}
              onChange={handleBioChange}
              placeholder="e.g. 3rd year college, hiking, dog mom"
              className="w-full bg-transparent text-white text-sm focus:outline-none placeholder:text-white/30 resize-none leading-relaxed"
            />
          </div>
        </div>
      </div>

      {/* Explanatory context */}
      <p className="text-xs text-white/50 leading-relaxed mb-6">
        This context shapes your entire Lunora experience. The more you add, the more personal it gets. Update anytime.
      </p>

      {/* Examples section */}
      <div>
        <span className="block text-xs font-semibold text-white/70 mb-2">
          Examples:
        </span>
        <div className="space-y-2.5">
          <button
            type="button"
            onClick={() =>
              handleSetExample(
                'Product manager at a Series B ecommerce startup. Doing MMA every day. Weekend chef, loving dog mom.'
              )
            }
            className="text-left w-full text-xs text-white/45 hover:text-white/80 transition leading-relaxed pl-3 border-l-2 border-white/10 hover:border-[#E5B842]"
          >
            • Product manager at a Series B ecommerce startup. Doing MMA every day. Weekend chef, loving dog mom.
          </button>
          <button
            type="button"
            onClick={() =>
              handleSetExample(
                '3rd year BTech student at IIT Delhi. Prepping for midterms and the upcoming sports fest.'
              )
            }
            className="text-left w-full text-xs text-white/45 hover:text-white/80 transition leading-relaxed pl-3 border-l-2 border-white/10 hover:border-[#E5B842]"
          >
            • 3rd year BTech student at IIT Delhi. Prepping for midterms and the upcoming sports fest.
          </button>
        </div>
      </div>
    </div>
  );
};
