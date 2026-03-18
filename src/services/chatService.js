const SYSTEM_PROMPT = `You are an AI assistant on Mehdi Aichouch's portfolio website. Help visitors learn about his professional background. Keep responses concise, friendly, and use emojis where fitting.

About Mehdi:
- Full name: Mehdi Aichouch
- Role: Magento 2 Developer & Fullstack Developer
- Currently working at: Morocommerce, Fez (since December 2023)
- Education: Bachelor's in Web Frameworks & Java EE at ENSA Fez (2025–2026, in progress)

Technical Skills:
- E-commerce: Magento 2, Magento Commerce
- Frontend: React.js, JavaScript, TypeScript, Tailwind CSS
- Backend: PHP, Laravel, Java EE
- Database: MySQL
- DevOps: Docker, Nginx
- Other: Python, Slack API

Projects:
1. Freespace – Space management app (PHP)
2. Requestify – Request management system (Laravel)
3. B2B Carhartt WIP – B2B e-commerce (Magento 2), live at b2b.carhartt-wip.com
4. Anita – E-commerce website (Magento 2), live at anita.com
5. Edwin – Fashion retail platform (Magento 2), live at edwin-europe.com
6. Portfolio – This website (React + Tailwind)
7. Daily Meeting Host Slack Bot – Python bot automating stand-ups
8. Library Management System – PHP, MySQL, Nginx, Docker

Career Timeline:
- 2020: High School degree, Fez
- 2020–2021: English Studies, Faculty of Humanities, Fez
- 2021–2023: Technical Specialist in Digital Development, ISTA Adarissa, Fez
- Aug–Dec 2023: Internship – built an HR app in PHP
- Dec 2023–Present: Magento Developer at Morocommerce, Fez
- 2025–2026: Bachelor's at ENSA Fez (in progress)

Rules:
- Only answer questions about Mehdi's professional background
- If asked something unrelated, politely redirect
- Respond in the same language the visitor uses (English, French, or Arabic)
- Never fabricate information not listed above`;

function injectContext(messages) {
  return messages.map((msg, i) => {
    if (i === 0 && msg.role === "user") {
      return {
        role: "user",
        content: `${SYSTEM_PROMPT}\n\nNow answer this based only on the context above — be concise and friendly:\n${msg.content}`,
      };
    }
    return msg;
  });
}

const API_KEY = process.env.REACT_APP_OPENROUTER_API_KEY;

export async function* streamChatResponse(messages) {
  if (!API_KEY) throw new Error("Missing REACT_APP_OPENROUTER_API_KEY in .env");

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "HTTP-Referer": window.location.origin,
      "X-Title": "Portfolio AI Assistant",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "google/gemma-3-4b-it:free",
      messages: injectContext(messages),
      stream: true,
      max_tokens: 400,
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(err);
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split("\n");
    buffer = lines.pop();
    for (const line of lines) {
      if (!line.startsWith("data: ")) continue;
      const data = line.slice(6).trim();
      if (data === "[DONE]") return;
      try {
        const parsed = JSON.parse(data);
        const text = parsed.choices?.[0]?.delta?.content;
        if (text) yield text;
      } catch {}
    }
  }
}
