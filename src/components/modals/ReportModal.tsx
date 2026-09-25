import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ReportModal: React.FC = () => {
  const { isReportDialogOpen, closeReportDialog } = useApp();
  const [selectedReason, setSelectedReason] = useState<string>('Misleading');
  const [contextText, setContextText] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isReportDialogOpen) return null;

  const reasons = [
    'Offensive',
    'Harmful',
    'Sexual',
    'Child sexual abuse / exploitation',
    'Misleading',
    'Hate / harassment',
    'Other',
  ];

  const handleSubmit = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      closeReportDialog();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fade-in">
      <div className="w-full sm:max-w-md bg-[#141418] border border-white/10 rounded-t-3xl sm:rounded-3xl p-6 max-h-[90vh] overflow-y-auto no-scrollbar space-y-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-serif text-white tracking-tight">
            Report this insight
          </h2>
          <button
            type="button"
            onClick={closeReportDialog}
            className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        <p className="text-xs text-white/55">
          Tell us what's wrong with this content.
        </p>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <Check size={24} />
            </div>
            <h4 className="text-base font-serif text-white">Thank you for reporting</h4>
            <p className="text-xs text-white/50">Our cosmic safety team will review this reading.</p>
          </div>
        ) : (
          <>
            {/* Radio Choices */}
            <div className="space-y-2">
              {reasons.map((reason) => {
                const isSelected = selectedReason === reason;
                return (
                  <button
                    key={reason}
                    type="button"
                    onClick={() => setSelectedReason(reason)}
                    className="w-full flex items-center space-x-3.5 px-3 py-2.5 rounded-xl text-left hover:bg-white/5 transition"
                  >
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center transition ${
                        isSelected
                          ? 'border-[#E5B842] bg-[#E5B842]'
                          : 'border-white/30 bg-transparent'
                      }`}
                    >
                      {isSelected && <div className="w-2 h-2 rounded-full bg-black" />}
                    </div>
                    <span className="text-xs sm:text-sm text-white/85">{reason}</span>
                  </button>
                );
              })}
            </div>

            {/* Context Input */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-semibold text-white/50">
                Details (optional)
              </label>
              <textarea
                rows={2}
                value={contextText}
                onChange={(e) => setContextText(e.target.value)}
                placeholder="Add more context..."
                className="w-full bg-[#1A1A22] border border-white/10 rounded-xl p-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#E5B842] placeholder:text-white/30 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#F3C766] to-[#D4A337] text-black font-bold text-xs sm:text-sm hover:shadow-[0_0_15px_rgba(229,184,66,0.3)] transition"
            >
              Report this insight
            </button>
          </>
        )}
      </div>
    </div>
  );
};
