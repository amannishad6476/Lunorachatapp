import React, { useState, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import { INTEREST_CATEGORIES } from '../../data/initialData';
import {
  HeartHandshake,
  Palette,
  UtensilsCrossed,
  Gamepad2,
  GraduationCap,
  Compass,
  Film,
  Dumbbell,
  Sparkles,
  MessageCircle,
} from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  community: <HeartHandshake size={16} className="text-[#E5B842]" />,
  creative: <Palette size={16} className="text-[#E5B842]" />,
  food: <UtensilsCrossed size={16} className="text-[#E5B842]" />,
  games: <Gamepad2 size={16} className="text-[#E5B842]" />,
  learning: <GraduationCap size={16} className="text-[#E5B842]" />,
  local: <Compass size={16} className="text-[#E5B842]" />,
  movies: <Film size={16} className="text-[#E5B842]" />,
  sports: <Dumbbell size={16} className="text-[#E5B842]" />,
  wellness: <Sparkles size={16} className="text-[#E5B842]" />,
  social: <MessageCircle size={16} className="text-[#E5B842]" />,
};

export const Step6Interests: React.FC = () => {
  const { user, updateUser } = useApp();
  const [activeTabId, setActiveTabId] = useState<string>('community');
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const selectedCount = user.interests.length;

  const toggleInterest = (interest: string) => {
    let next: string[];
    if (user.interests.includes(interest)) {
      next = user.interests.filter((i) => i !== interest);
    } else {
      next = [...user.interests, interest];
    }
    updateUser({ interests: next });
  };

  const scrollToCategory = (id: string) => {
    setActiveTabId(id);
    const element = sectionRefs.current[id];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Count covered categories
  const coveredCategoriesCount = INTEREST_CATEGORIES.filter((cat) =>
    cat.items.some((item) => user.interests.includes(item))
  ).length;

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Top Header */}
      <div className="px-6 pt-2 pb-3">
        <h1 className="text-3xl font-serif text-white/95 mb-2 tracking-tight">
          What are you into?
        </h1>
        <p className="text-xs text-white/55">
          Pick at least 10. Scroll through, or jump with the tabs.
        </p>
      </div>

      {/* Horizontal Category Jump Tabs */}
      <div className="px-4 py-2 flex space-x-2 overflow-x-auto no-scrollbar border-b border-white/5 select-none">
        {INTEREST_CATEGORIES.map((category) => {
          const categorySelectedCount = category.items.filter((item) =>
            user.interests.includes(item)
          ).length;
          const isActive = activeTabId === category.id;

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => scrollToCategory(category.id)}
              className={`flex-shrink-0 flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition ${
                isActive
                  ? 'bg-[#2A2312] border border-[#E5B842] text-[#F3C766]'
                  : 'bg-[#151518] border border-white/5 text-white/70 hover:bg-[#1C1C22]'
              }`}
            >
              <span>{category.name.split(' ')[0]}</span>
              {categorySelectedCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-[#E5B842] text-[#111111] text-[10px] font-bold flex items-center justify-center">
                  {categorySelectedCount}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Scrollable Categories List */}
      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-7 no-scrollbar pb-28">
        {INTEREST_CATEGORIES.map((category) => {
          const categorySelectedCount = category.items.filter((item) =>
            user.interests.includes(item)
          ).length;

          return (
            <div
              key={category.id}
              ref={(el) => {
                sectionRefs.current[category.id] = el;
              }}
              className="space-y-3"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="p-1 rounded-md bg-[#222228]">
                    {categoryIcons[category.id] || <Sparkles size={16} className="text-[#E5B842]" />}
                  </span>
                  <h2 className="text-sm font-semibold tracking-wide text-white/90">
                    {category.name}
                  </h2>
                </div>
                <span className="text-xs font-mono text-white/40">
                  {categorySelectedCount}/{category.items.length}
                </span>
              </div>

              {/* Chips Grid */}
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => {
                  const isSelected = user.interests.includes(item);
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => toggleInterest(item)}
                      className={`px-3.5 py-2 rounded-full text-xs font-medium transition-all ${
                        isSelected
                          ? 'bg-[#2A2312] border border-[#E5B842] text-[#F3C766] shadow-[0_0_10px_rgba(229,184,66,0.2)]'
                          : 'bg-[#151518] border border-white/5 text-white/75 hover:bg-[#1A1A1F] hover:text-white'
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating Bottom Progress Bar */}
      <div className="absolute bottom-20 left-0 right-0 px-6 py-2 bg-gradient-to-t from-[#0B0B0E] via-[#0B0B0E]/95 to-transparent pointer-events-none">
        <div className="pointer-events-auto">
          <div className="flex items-center justify-between text-xs text-white/60 mb-1.5 font-medium">
            <span>{selectedCount} of 10 chosen</span>
            <span className="text-white/40">{coveredCategoriesCount} of 13 categories covered</span>
          </div>
          <div className="w-full h-1 bg-[#1C1C22] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#E5B842] transition-all duration-300"
              style={{ width: `${Math.min(100, (selectedCount / 10) * 100)}%` }}
            />
          </div>
          <p className="text-[11px] text-white/40 text-center mt-2">
            Each interest adds real things to do together.
          </p>
        </div>
      </div>
    </div>
  );
};
