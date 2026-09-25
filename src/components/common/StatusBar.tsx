import React from 'react';
import { Wifi, Battery } from 'lucide-react';

interface StatusBarProps {
  time?: string;
  batteryPercentage?: number;
}

export const StatusBar: React.FC<StatusBarProps> = ({
  time = '11:25',
  batteryPercentage = 98,
}) => {
  return (
    <div className="w-full h-8 px-6 pt-1 flex items-center justify-between text-xs text-white/90 select-none z-50">
      {/* Left side: Time & Notification icons */}
      <div className="flex items-center space-x-2">
        <span className="font-semibold tracking-tight text-[13px]">{time}</span>
        <div className="flex items-center space-x-1.5 opacity-80 pl-1">
          <span className="text-[10px] font-bold border border-white/60 px-1 rounded-sm">M</span>
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-500/80 inline-block" />
        </div>
      </div>

      {/* Center dynamic notch / sensor pill */}
      <div className="hidden sm:flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-black/60 border border-white/10 text-[10px] text-white/70">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
        <span>1 device</span>
      </div>

      {/* Right side: Network, 5G, Battery */}
      <div className="flex items-center space-x-1.5 text-[11px] font-medium text-white/90">
        <span className="text-[9px] text-white/70 font-mono">0.20 KB/s</span>
        <span className="text-[10px] font-bold tracking-tighter">5G<sup className="text-[8px]">+</sup></span>
        <Wifi size={13} className="opacity-90" />
        <div className="flex items-center space-x-0.5">
          <Battery size={15} className="opacity-90" />
          <span className="text-[10px] font-semibold">{batteryPercentage}%</span>
        </div>
      </div>
    </div>
  );
};
