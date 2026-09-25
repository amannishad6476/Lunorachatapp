import React, { useState, useRef, useEffect } from 'react';
import { RotateCcw, ChevronUp, Mic, ArrowUp, Sparkles, Send } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { TRY_ASKING_QUESTIONS } from '../../data/initialData';

export const AskTab: React.FC = () => {
  const {
    chatMessages,
    sendChatMessage,
    resetChat,
    isAiTyping,
    user,
  } = useApp();

  const [inputText, setInputText] = useState('');
  const [showSpeechToast, setShowSpeechToast] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages, isAiTyping]);

  const handleSend = () => {
    if (!inputText.trim()) return;
    sendChatMessage(inputText);
    setInputText('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const handleSelectTryQuestion = (question: string) => {
    sendChatMessage(question);
  };

  const handleMicClick = () => {
    // Check SpeechRecognition support or show the exact toast from screenshot 39
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setShowSpeechToast(true);
      setTimeout(() => setShowSpeechToast(false), 2500);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputText(transcript);
      };
      recognition.start();
    } catch {
      setShowSpeechToast(true);
      setTimeout(() => setShowSpeechToast(false), 2500);
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0B0B0E] relative overflow-hidden">
      {/* Top Header */}
      <div className="pt-3 pb-3 px-5 border-b border-white/5 flex items-center justify-between z-10 bg-[#0B0B0E]/90 backdrop-blur-md">
        <div className="w-8" />
        <div className="text-center">
          <span className="text-[11px] font-bold tracking-widest text-[#B38F3F] uppercase block">
            ASK LUNORA
          </span>
          <span className="text-xs font-serif italic text-white/60">
            your cosmic confidante
          </span>
        </div>
        <button
          type="button"
          onClick={resetChat}
          title="Reset conversation"
          className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white transition active:scale-95"
        >
          <RotateCcw size={15} />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto px-5 py-4 no-scrollbar space-y-6">
        {chatMessages.length === 0 ? (
          /* Empty / Welcoming State */
          <div className="space-y-6 pt-3">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-tight leading-snug mb-2">
                How can I help you today, there?
              </h2>
              <p className="text-xs sm:text-sm text-white/55 leading-relaxed">
                Ask anything — about your day, your life, or anything that keeps you up at night.
              </p>
            </div>

            {/* TRY ASKING section */}
            <div>
              <span className="text-[10px] font-bold tracking-widest text-white/40 uppercase block mb-3 text-right">
                TRY ASKING
              </span>
              <div className="space-y-2.5">
                {TRY_ASKING_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => handleSelectTryQuestion(q)}
                    className="w-full bg-[#141418] hover:bg-[#1A1A22] border border-white/5 hover:border-[#E5B842]/30 rounded-2xl px-4 py-3.5 text-left text-xs sm:text-sm font-medium text-white/80 hover:text-white transition active:scale-[0.99] leading-relaxed"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Active Chat Stream */
          <div className="space-y-4 pt-2">
            {chatMessages.map((msg) => {
              const isUser = msg.sender === 'user';
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                      isUser
                        ? 'bg-[#2A2312] border border-[#E5B842]/40 text-[#F3C766] rounded-br-none'
                        : 'bg-[#15151A] border border-white/10 text-white/90 rounded-bl-none shadow-md'
                    }`}
                  >
                    {!isUser && (
                      <div className="flex items-center space-x-1.5 mb-2 text-[#E5B842]">
                        <Sparkles size={13} />
                        <span className="text-[10px] font-bold uppercase tracking-wider">
                          Lunora
                        </span>
                      </div>
                    )}
                    <p className="whitespace-pre-wrap">{msg.text}</p>
                  </div>
                  <span className="text-[10px] text-white/30 mt-1 px-1">
                    {msg.timestamp}
                  </span>
                </div>
              );
            })}

            {/* AI Typing Indicator */}
            {isAiTyping && (
              <div className="flex items-center space-x-2 bg-[#15151A] border border-white/10 rounded-2xl px-4 py-3 max-w-[120px]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#E5B842] animate-bounce" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#E5B842] animate-bounce [animation-delay:0.2s]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#E5B842] animate-bounce [animation-delay:0.4s]" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Floating Toast (Page 39: Speech is unavailable) */}
      {showSpeechToast && (
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-[#1A1A20] border border-white/10 px-4 py-2 rounded-xl text-xs text-white/80 shadow-2xl animate-fade-in z-40">
          Speech is unavailable.
        </div>
      )}

      {/* Bottom Input Pill */}
      <div className="p-4 bg-[#0B0B0E]/95 backdrop-blur-md border-t border-white/5">
        <div className="bg-[#151518] rounded-full border border-white/10 focus-within:border-[#E5B842] flex items-center px-4 py-2 transition shadow-inner">
          <button
            type="button"
            className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white mr-2"
          >
            <ChevronUp size={16} />
          </button>

          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask Lunora anything..."
            className="flex-1 bg-transparent text-white text-xs sm:text-sm focus:outline-none placeholder:text-white/35"
          />

          <button
            type="button"
            onClick={handleMicClick}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition ml-1 ${
              isListening
                ? 'bg-red-500/20 text-red-400 animate-pulse'
                : 'text-white/50 hover:text-white'
            }`}
          >
            <Mic size={17} />
          </button>

          {inputText.trim() && (
            <button
              type="button"
              onClick={handleSend}
              className="w-8 h-8 rounded-full bg-[#E5B842] text-black flex items-center justify-center ml-1 shadow-md hover:scale-105 active:scale-95 transition"
            >
              <Send size={14} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
