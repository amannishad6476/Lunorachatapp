import React from 'react';
import { ChevronLeft } from 'lucide-react';

interface AndroidNavBarProps {
  onBack?: () => void;
  onHome?: () => void;
}

export const AndroidNavBar: React.FC<AndroidNavBarProps> = ({ onBack, onHome }) => {
  return (
    <div className="w-full h-10 bg-black/90 flex items-center justify-around px-8 text-white/50 border-t border-white/5 select-none">
      {/* Recents icon: 3 lines */}
      <button 
        type="button" 
        className="w-10 h-10 flex items-center justify-center hover:text-white/80 active:scale-95 transition"
        title="Recent Apps"
      >
        <div className="flex flex-col space-y-[3px]">
          <div className="w-3.5 h-[1.5px] bg-current rounded-full" />
          <div className="w-3.5 h-[1.5px] bg-current rounded-full" />
          <div className="w-3.5 h-[1.5px] bg-current rounded-full" />
        </div>
      </button>

      {/* Home icon: Circle */}
      <button 
        type="button" 
        onClick={onHome}
        className="w-10 h-10 flex items-center justify-center hover:text-white/80 active:scale-95 transition"
        title="Home"
      >
        <div className="w-3.5 h-3.5 rounded-full border-[1.5px] border-current" />
      </button>

      {/* Back icon: Chevron */}
      <button 
        type="button" 
        onClick={onBack}
        className="w-10 h-10 flex items-center justify-center hover:text-white/80 active:scale-95 transition"
        title="Back"
      >
        <ChevronLeft size={18} strokeWidth={2} />
      </button>
    </div>
  );
};
