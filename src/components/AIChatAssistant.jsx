import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsX, BsSendFill } from "react-icons/bs";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useLanguage } from "../context/LanguageContext";
import useChat from "../hooks/useChat";
import { StarMark } from "./common/ZelligeStar";

const mdComponents = {
  p:      ({ children }) => <p className="mb-2 last:mb-0 leading-relaxed">{children}</p>,
  strong: ({ children }) => <strong className="font-semibold text-ink">{children}</strong>,
  em:     ({ children }) => <em className="italic">{children}</em>,
  a:      ({ href, children }) => (
    <a href={href} target="_blank" rel="noreferrer" className="text-link">
      {children}
    </a>
  ),
  ul: ({ children }) => <ul className="list-disc pl-5 space-y-0.5 mb-2">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal pl-5 space-y-0.5 mb-2">{children}</ol>,
  li: ({ children }) => <li>{children}</li>,
  h1: ({ children }) => <h1 className="text-base font-bold text-ink mb-1 mt-2">{children}</h1>,
  h2: ({ children }) => <h2 className="text-sm font-bold text-ink mb-1 mt-2">{children}</h2>,
  h3: ({ children }) => <h3 className="text-sm font-semibold text-cobalt mb-1 mt-2">{children}</h3>,
  code: ({ inline, children }) =>
    inline ? (
      <code className="bg-line/60 text-ink text-xs px-1.5 py-0.5 rounded font-mono">{children}</code>
    ) : (
      <code className="block bg-line/40 text-ink text-xs p-3 rounded-md font-mono overflow-x-auto my-2">{children}</code>
    ),
  table: ({ children }) => (
    <div className="overflow-x-auto my-2">
      <table className="text-xs w-full border-collapse">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="border-b border-line">{children}</thead>,
  th:    ({ children }) => <th className="text-left font-semibold py-1.5 pr-3">{children}</th>,
  td:    ({ children }) => <td className="py-1.5 pr-3 border-b border-line/70">{children}</td>,
  hr:    () => <hr className="border-line my-2" />,
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-cobalt/40 pl-3 italic text-muted my-2">{children}</blockquote>
  ),
};

const TypingDots = () => (
  <span className="inline-flex items-center gap-1 py-1" aria-label="Typing">
    {[0, 150, 300].map((d) => (
      <span
        key={d}
        className="w-1.5 h-1.5 bg-muted rounded-full animate-bounce"
        style={{ animationDelay: `${d}ms` }}
      />
    ))}
  </span>
);

const UserBubble = ({ text }) => (
  <div className="flex justify-end">
    <div className="max-w-[80%] rounded-lg rounded-br-sm px-3.5 py-2.5 text-[0.95rem] leading-relaxed bg-cobalt text-white">
      {text}
    </div>
  </div>
);

const AssistantBubble = ({ text, streaming }) => (
  <div className="flex justify-start">
    <div className="max-w-[88%] rounded-lg rounded-bl-sm px-3.5 py-2.5 text-[0.95rem] bg-paper text-ink/90 border border-line">
      {streaming && !text ? (
        <TypingDots />
      ) : (
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>
          {text}
        </ReactMarkdown>
      )}
    </div>
  </div>
);

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

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen((v) => !v)}
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 h-12 w-12 sm:w-auto justify-center sm:pl-3.5 sm:pr-4 rounded-full bg-ink text-paper shadow-lg flex items-center gap-2 font-sans font-semibold hover:bg-cobalt transition-colors"
        aria-label="Toggle AI Assistant"
        aria-expanded={isOpen}
      >
        {isOpen ? <BsX size={22} /> : <StarMark className="w-5 h-5" />}
        <span className="hidden sm:inline">{isOpen ? t("chat.close") : t("chat.open")}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            role="dialog"
            aria-label={t("chat.title")}
            className="fixed bottom-20 sm:bottom-24 right-4 left-4 sm:left-auto sm:right-6 z-50 w-auto sm:w-[380px] bg-white rounded-lg shadow-2xl border border-line flex flex-col overflow-hidden"
            style={{ height: "min(520px, calc(100dvh - 110px))" }}
          >
            <div className="px-4 py-3 border-b border-line flex items-center gap-3 flex-shrink-0">
              <StarMark className="w-6 h-6 text-cobalt flex-shrink-0" />
              <div className="min-w-0">
                <p className="font-sans font-bold text-ink leading-tight">{t("chat.title")}</p>
                <p className="font-sans text-xs text-muted truncate">{t("chat.subtitle")}</p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3" aria-live="polite">
              {messages.length === 0 && (
                <div className="pt-2">
                  <p className="text-ink/85 leading-relaxed">{t("chat.greeting")}</p>
                  <div className="mt-4 flex flex-col items-start gap-2">
                    {suggestions.map((s) => (
                      <button
                        key={s}
                        onClick={() => sendMessage(s)}
                        disabled={streaming}
                        className="font-sans text-sm text-cobalt border border-cobalt/30 hover:border-cobalt hover:bg-cobalt-tint px-3 py-1.5 rounded-md transition-colors text-left"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
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

            <div className="px-3 pt-3 pb-2 border-t border-line flex-shrink-0">
              <div className="flex items-center gap-2 bg-paper border border-line rounded-md px-3 py-2 focus-within:border-cobalt">
                <label htmlFor="chat-input" className="sr-only">{t("chat.placeholder")}</label>
                <input
                  id="chat-input"
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={t("chat.placeholder")}
                  disabled={streaming}
                  className="flex-1 bg-transparent text-ink placeholder-muted text-[0.95rem] outline-none disabled:opacity-50"
                />
                <button
                  onClick={sendMessage}
                  disabled={streaming || !input.trim()}
                  className="text-cobalt hover:text-cobalt-dark disabled:text-line disabled:cursor-not-allowed transition-colors flex-shrink-0"
                  aria-label="Send"
                >
                  <BsSendFill size={16} />
                </button>
              </div>
              <p className="text-center font-sans text-muted text-[11px] mt-1.5">{t("chat.disclaimer")}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
