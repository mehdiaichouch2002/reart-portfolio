import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsStars, BsX, BsSendFill } from "react-icons/bs";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useLanguage } from "../context/LanguageContext";
import useChat from "../hooks/useChat";

const mdComponents = {
  p:      ({ children }) => <p className="mb-2 last:mb-0 leading-relaxed">{children}</p>,
  strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
  em:     ({ children }) => <em className="italic text-gray-300">{children}</em>,
  a:      ({ href, children }) => (
    <a href={href} target="_blank" rel="noreferrer"
      className="text-cyan-400 underline underline-offset-2 hover:text-cyan-300 transition-colors">
      {children}
    </a>
  ),
  ul: ({ children }) => <ul className="list-disc list-inside space-y-0.5 mb-2 pl-1">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal list-inside space-y-0.5 mb-2 pl-1">{children}</ol>,
  li: ({ children }) => <li className="text-gray-200">{children}</li>,
  h1: ({ children }) => <h1 className="text-base font-bold text-white mb-1 mt-2">{children}</h1>,
  h2: ({ children }) => <h2 className="text-sm font-bold text-white mb-1 mt-2">{children}</h2>,
  h3: ({ children }) => <h3 className="text-sm font-semibold text-cyan-300 mb-1 mt-2">{children}</h3>,
  code: ({ inline, children }) =>
    inline ? (
      <code className="bg-gray-700/70 text-cyan-300 text-xs px-1.5 py-0.5 rounded font-mono">{children}</code>
    ) : (
      <code className="block bg-gray-800 text-cyan-300 text-xs p-3 rounded-lg font-mono overflow-x-auto my-2 border border-gray-700/50">{children}</code>
    ),
  table: ({ children }) => (
    <div className="overflow-x-auto my-2">
      <table className="text-xs w-full border-collapse">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="border-b border-gray-600">{children}</thead>,
  th:    ({ children }) => <th className="text-left text-cyan-400 font-semibold py-1.5 pr-3">{children}</th>,
  td:    ({ children }) => <td className="py-1.5 pr-3 text-gray-300 border-b border-gray-700/40">{children}</td>,
  hr:    () => <hr className="border-gray-700 my-2" />,
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-cyan-500/50 pl-3 italic text-gray-400 my-2">{children}</blockquote>
  ),
};

// ─── Sub-components ───────────────────────────────────────────────────────────

const TypingDots = () => (
  <span className="inline-flex items-center gap-1 py-1">
    {[0, 150, 300].map((d) => (
      <span
        key={d}
        className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
        style={{ animationDelay: `${d}ms` }}
      />
    ))}
  </span>
);

const UserBubble = ({ text }) => (
  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex justify-end">
    <div className="max-w-[78%] rounded-2xl rounded-br-sm px-4 py-2.5 text-sm leading-relaxed bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
      {text}
    </div>
  </motion.div>
);

const AssistantBubble = ({ text, streaming }) => (
  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex justify-start">
    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0 mt-1 mr-2">
      <BsStars size={10} className="text-white" />
    </div>
    <div className="max-w-[78%] rounded-2xl rounded-bl-sm px-4 py-2.5 text-sm bg-gray-800 text-gray-100">
      {streaming && !text ? (
        <TypingDots />
      ) : (
        <>
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>
            {text}
          </ReactMarkdown>
          {streaming && (
            <span className="inline-block w-0.5 h-3.5 bg-cyan-400 ml-0.5 animate-pulse align-middle" />
          )}
        </>
      )}
    </div>
  </motion.div>
);

const ChatHeader = ({ t }) => (
  <div className="bg-gradient-to-r from-cyan-600 to-blue-700 px-4 py-3 flex items-center gap-3 flex-shrink-0">
    <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
      <BsStars size={16} className="text-white" />
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-white font-semibold text-sm leading-tight">{t("chat.title")}</p>
      <p className="text-white/70 text-xs truncate">{t("chat.subtitle")}</p>
    </div>
    <div className="flex items-center gap-1.5 flex-shrink-0">
      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
      <span className="text-white/60 text-xs">{t("chat.online")}</span>
    </div>
  </div>
);

const WelcomeScreen = ({ suggestions, onSuggestion }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="flex flex-col items-center text-center py-6"
  >
    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center mb-3">
      <BsStars size={20} className="text-cyan-400" />
    </div>
    <p className="text-gray-300 text-sm leading-relaxed max-w-[260px]">
      Hi! I'm Mehdi's AI assistant. Ask me anything about his skills, experience, or projects!
    </p>
    <div className="mt-4 flex flex-wrap gap-2 justify-center">
      {suggestions.map((s) => (
        <button
          key={s}
          onClick={() => onSuggestion(s)}
          className="text-xs bg-gray-800 hover:bg-gray-700 text-cyan-400 border border-gray-700 hover:border-cyan-500/50 px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer"
        >
          {s}
        </button>
      ))}
    </div>
  </motion.div>
);

// ─── Main component ───────────────────────────────────────────────────────────

export default function AIChatAssistant() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  const { messages, input, setInput, streaming, sendMessage, handleKeyDown, messagesEndRef } =
    useChat();

  const suggestions = t("chat.suggestions") || [];

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const handleSuggestion = (s) => {
    if (!streaming) {
      setInput(s);
      inputRef.current?.focus();
    }
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setIsOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30 flex items-center justify-center text-white select-none"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle AI Assistant"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <BsX size={26} />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 45 }}
              transition={{ duration: 0.15 }}
            >
              <BsStars size={22} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-50 w-[340px] sm:w-[380px] bg-gray-900 rounded-2xl shadow-2xl shadow-black/50 border border-gray-700/60 flex flex-col overflow-hidden"
            style={{ height: "520px" }}
          >
            <ChatHeader t={t} />

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.length === 0 && (
                <WelcomeScreen suggestions={suggestions} onSuggestion={handleSuggestion} />
              )}
              {messages.map((msg, i) =>
                msg.role === "user" ? (
                  <UserBubble key={i} text={msg.content} />
                ) : (
                  <AssistantBubble
                    key={i}
                    text={msg.content}
                    streaming={streaming && i === messages.length - 1}
                  />
                )
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="px-3 py-3 border-t border-gray-700/60 flex-shrink-0">
              <div className="flex items-center gap-2 bg-gray-800 rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-cyan-500/50 transition-all">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={t("chat.placeholder")}
                  disabled={streaming}
                  className="flex-1 bg-transparent text-gray-100 placeholder-gray-500 text-sm outline-none disabled:opacity-50"
                />
                <button
                  onClick={sendMessage}
                  disabled={streaming || !input.trim()}
                  className="text-cyan-400 hover:text-cyan-300 disabled:text-gray-600 disabled:cursor-not-allowed transition-colors duration-200 flex-shrink-0"
                  aria-label="Send"
                >
                  <BsSendFill size={16} />
                </button>
              </div>
              <p className="text-center text-gray-600 text-[10px] mt-1.5">
                Powered by Gemini AI
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
