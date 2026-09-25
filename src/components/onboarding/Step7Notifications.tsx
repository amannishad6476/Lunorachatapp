import React from 'react';
import { Users, UserPlus, Sparkles } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Step7Notifications: React.FC = () => {
  const { user, updateUser } = useApp();

  return (
    <div className="flex-1 flex flex-col px-6 py-2 overflow-y-auto no-scrollbar justify-between">
      <div>
        {/* Category Subtitle */}
        <span className="text-[11px] font-bold tracking-widest text-[#B38F3F] uppercase mb-1 block">
          ONE LAST THING
        </span>

        {/* Headline */}
        <h1 className="text-3xl font-serif text-white/95 mb-8 tracking-tight leading-snug">
          Enable notifications to never miss a moment.
        </h1>

        {/* Description */}
        <p className="text-sm font-medium text-white/70 mb-6">
          We'll ping you when:
        </p>

        {/* Benefit Items */}
        <div className="space-y-6 pl-1">
          {/* Item 1 */}
          <div className="flex items-start space-x-4">
            <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-white/80">
              <Users size={18} />
            </div>
            <p className="text-sm text-white/90 pt-1.5 font-normal leading-relaxed">
              A friend bumps you or bumps back.
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex items-start space-x-4">
            <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-white/80">
              <UserPlus size={18} />
            </div>
            <p className="text-sm text-white/90 pt-1.5 font-normal leading-relaxed">
              Someone you know sends a connection request.
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex items-start space-x-4">
            <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-white/80">
              <Sparkles size={18} className="text-[#E5B842]" />
            </div>
            <p className="text-sm text-white/90 pt-1.5 font-normal leading-relaxed">
              Your daily reading is ready.
            </p>
          </div>
        </div>
      </div>

      {/* Permission Toggle Helper */}
      <div className="my-6 p-4 rounded-xl bg-[#151518] border border-white/5 flex items-center justify-between">
        <span className="text-xs text-white/60">Allow instant push alerts</span>
        <button
          type="button"
          onClick={() => updateUser({ notificationsEnabled: !user.notificationsEnabled })}
          className={`w-11 h-6 rounded-full transition-colors p-0.5 ${
            user.notificationsEnabled ? 'bg-[#E5B842]' : 'bg-white/20'
          }`}
        >
          <div
            className={`w-5 h-5 rounded-full bg-black transition-transform ${
              user.notificationsEnabled ? 'translate-x-5' : 'translate-x-0'
            }`}
          />
        </button>
      </div>
    </div>
  );
};
