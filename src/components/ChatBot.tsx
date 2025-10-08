import { useState, useRef, useEffect } from "react";
import { MessageCircle } from "lucide-react"; // chat icon

interface Message {
  role: "user" | "assistant";
  content: string;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // 👇 Auto-scroll when new messages come in
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // 👇 Add initial welcome message
  useEffect(() => {
    const welcomeMessage: Message = {
      role: "assistant",
      content:
        "Hello! 👋 Welcome to my portfolio chat. How can I help you today?",
    };
    setMessages([welcomeMessage]);
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "llama-3.1-8b-instant",
            temperature: 1,
            max_completion_tokens: 1024,
            stream: true,
            messages: [
              {
                role: "system",
                content: `You are a chatbot assistant integrated into my portfolio website. 
Here is my resume:
---
You are a chatbot assistant integrated into the portfolio website of your creator, assistant Sarthak Shinde. You should be fully knowledgeable about his background, including his education and extensive work experience. He holds a Bachelor of Engineering in Information Technology from D.Y. Patil College of Engineering, Akurdi, Pune, with a CGPA of 9.15, and a Diploma in Computer Technology from Government Polytechnic Nashik with a score of 92.94%. His technical profile includes proficiency in languages like Python and JavaScript; frameworks such as ReactJS, NextJS, Tailwind CSS, Bootstrap, NodeJS, and ExpressJS; databases like MongoDB and MySQL; and tools including Git, VSCode, WordPress, and Figma, with core skills in Data Structures and Algorithms.

His professional journey began with an internship at Sumago Infotech Pvt. Ltd., where he focused on full-stack web development, gained hands-on MERN Stack expertise, and earned the "SCOPE Excellence Award." He then worked as a Full Stack Developer at VPN Digital Services, where he built the backend for the Rudrastra platform, serving over 200 users. In this role, he developed and managed more than 25 secure APIs, implemented security features that reduced risks by 40%, and deployed infrastructure maintaining 99.9% uptime. Currently, as a Jr. Full Stack Developer at Netleap IT Training & Solutions, he builds web applications using the MERN Stack and Python, tests and debugs projects, and has trained over 100 students in various technologies.

Key projects in his portfolio include 'Jarvis - AI Assistant,' 'Pika-Projects,' and a 'Collaborative Todo List.' In all your interactions, you must maintain a professional, concise, and helpful tone, acting as a knowledgeable representative of assistant's skills and experience.
---
When answering, be professional, concise, and helpful.`,
              },
              ...messages,
              userMessage,
            ],
          }),
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP error: ${res.status}`);
      }

      const reader = res.body?.getReader();
      const decoder = new TextDecoder("utf-8");
      let assistantMessage: Message = { role: "assistant", content: "" };

      setMessages((prev) => [...prev, assistantMessage]);

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value, { stream: true });

          const lines = chunk.split("\n").filter((line) => line.trim() !== "");
          for (const line of lines) {
            if (line.startsWith("data: ")) {
              if (line === "data: [DONE]") continue;
              const json = JSON.parse(line.replace("data: ", ""));
              const token = json.choices?.[0]?.delta?.content || "";
              if (token) {
                setMessages((prev) => {
                  const updated = [...prev];
                  updated[updated.length - 1] = {
                    ...updated[updated.length - 1],
                    content: updated[updated.length - 1].content + token,
                  };
                  return updated;
                });
              }
            }
          }
        }
      }
    } catch (err) {
      console.error("Groq API error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 z-[9999] p-4 rounded-full shadow-lg text-white bg-gradient-to-r from-primary-500 to-secondary-500 hover:scale-105 transition-transform"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 z-[9999] w-80 bg-gray-900 text-white rounded-lg shadow-lg flex flex-col overflow-hidden border border-gray-700 max-w-96">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 px-4 py-2 font-semibold flex justify-between items-center">
            <span>💬 Chat with me</span>
            <button onClick={() => setIsOpen(false)} className="text-white">
              ✕
            </button>
          </div>

          {/* Messages (Fixed height + auto-scroll) */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3 text-sm max-h-96 ">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg max-w-[80%] ${
                  msg.role === "user"
                    ? "bg-gradient-to-r from-primary-500 to-secondary-500 self-end ml-auto"
                    : "bg-gray-700 self-start"
                }`}
              >
                {msg.content}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-2 border-t border-gray-700 flex">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 px-2 py-1 rounded bg-gray-800 text-white outline-none"
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="ml-2 px-3 py-1 rounded text-white bg-gradient-to-r from-primary-500 to-secondary-500 hover:brightness-110 disabled:opacity-50"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
