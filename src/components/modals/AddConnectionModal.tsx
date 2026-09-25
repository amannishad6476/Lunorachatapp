import React, { useState } from 'react';
import { X, Copy, Check, Share2, QrCode } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const AddConnectionModal: React.FC = () => {
  const { isAddConnectionOpen, closeAddConnection, user } = useApp();
  const [copied, setCopied] = useState(false);

  if (!isAddConnectionOpen) return null;

  const inviteLink = `https://lunora.app/invite/${user.username || 'amannishad'}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(inviteLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fade-in">
      <div className="w-full sm:max-w-md bg-[#141418] border border-white/10 rounded-t-3xl sm:rounded-3xl p-6 space-y-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold tracking-widest text-[#B38F3F] uppercase block">
              MUTUAL CONNECTION
            </span>
            <h2 className="text-xl font-serif text-white tracking-tight">
              Invite a friend
            </h2>
          </div>
          <button
            type="button"
            onClick={closeAddConnection}
            className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        <p className="text-xs text-white/55 leading-relaxed">
          Send an invite. They confirm their own birth details — you never see their confidential chart, but Lunora computes bilateral compatibility for both of you.
        </p>

        {/* QR Code / Cosmic Graphic */}
        <div className="w-40 h-40 mx-auto bg-white p-3 rounded-2xl flex flex-col items-center justify-center shadow-lg">
          <div className="w-full h-full border-2 border-black/80 rounded-xl flex items-center justify-center relative">
            <QrCode size={96} className="text-black" />
          </div>
        </div>

        {/* Link Box */}
        <div className="flex items-center bg-[#1A1A22] border border-white/10 rounded-xl p-2.5">
          <span className="text-xs text-white/70 truncate flex-1 pl-2 font-mono">
            {inviteLink}
          </span>
          <button
            type="button"
            onClick={handleCopy}
            className="ml-2 px-3 py-1.5 rounded-lg bg-[#E5B842] text-black text-xs font-semibold flex items-center space-x-1"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>

        {/* Quick Share Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-2">
          <button
            type="button"
            onClick={handleCopy}
            className="py-3 rounded-xl bg-[#1C1C24] border border-white/5 text-xs font-medium text-white flex items-center justify-center space-x-1.5 hover:bg-[#22222C]"
          >
            <Share2 size={14} />
            <span>Share Link</span>
          </button>
          <button
            type="button"
            onClick={() => {
              window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent('Join my Lunora circle: ' + inviteLink)}`, '_blank');
            }}
            className="py-3 rounded-xl bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] text-xs font-semibold flex items-center justify-center space-x-1.5"
          >
            <span>WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};
