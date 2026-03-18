import { useState, useRef, useEffect, useCallback } from "react";
import { streamChatResponse } from "../services/chatService";

const useChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, streaming]);

  const sendMessage = useCallback(async () => {
    const text = input.trim();
    if (!text || streaming) return;
    setInput("");

    const history = [...messages];
    const userMsg = { role: "user", content: text };
    const apiMessages = [...history, userMsg];

    setMessages([...apiMessages, { role: "assistant", content: "" }]);
    setStreaming(true);

    try {
      let accumulated = "";
      for await (const chunk of streamChatResponse(apiMessages)) {
        accumulated += chunk;
        setMessages([
          ...apiMessages,
          { role: "assistant", content: accumulated },
        ]);
      }
    } catch (err) {
      console.error("Chat error:", err);
      setMessages([
        ...apiMessages,
        {
          role: "assistant",
          content: "Sorry, something went wrong. Please try again. 😕",
        },
      ]);
    } finally {
      setStreaming(false);
    }
  }, [input, streaming, messages]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    },
    [sendMessage]
  );

  return {
    messages,
    input,
    setInput,
    streaming,
    sendMessage,
    handleKeyDown,
    messagesEndRef,
  };
};

export default useChat;
