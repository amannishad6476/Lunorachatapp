import React from 'react';
import { Home, Users, Sparkles } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const BottomTabBar: React.FC = () => {
  const { activeTab, setActiveTab } = useApp();

  const tabs = [
    { id: 'you', label: 'You', icon: Home },
    { id: 'people', label: 'People', icon: Users },
    { id: 'ask', label: 'Ask', icon: Sparkles },
  ] as const;

  return (
    <div className="w-full h-16 bg-[#0E0E12]/95 backdrop-blur-md border-t border-white/5 flex items-center justify-around px-6 z-30 select-none">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center justify-center flex-1 py-1 transition-all relative ${
              isActive ? 'text-[#E5B842]' : 'text-white/40 hover:text-white/70'
            }`}
          >
            {isActive && (
              <div className="absolute -top-3 w-8 h-0.5 bg-[#E5B842] rounded-full shadow-[0_0_8px_rgba(229,184,66,0.8)]" />
            )}
            <Icon size={22} strokeWidth={isActive ? 2.2 : 1.8} />
            <span className="text-[11px] font-medium mt-1 tracking-tight">
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};
