import React, { useState, useRef, useEffect } from 'react';
import { streamResumeQuery } from '../services/geminiService';
import { BotIcon, GitHubIcon } from '../constants';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
}

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { id: Date.now().toString(), sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const botMessageId = (Date.now() + 1).toString();
    setMessages(prev => [...prev, { id: botMessageId, sender: 'bot', text: '' }]);
    
    try {
      const stream = await streamResumeQuery(input);
      let fullResponse = '';
      for await (const chunk of stream) {
        fullResponse += chunk.text;
        setMessages(prev => prev.map(msg => 
          msg.id === botMessageId ? { ...msg, text: fullResponse } : msg
        ));
      }
    } catch (error) {
      console.error(error);
      const errorMessage = "Sorry, I couldn't connect to the assistant right now. Please try again later.";
      setMessages(prev => prev.map(msg => 
        msg.id === botMessageId ? { ...msg, text: errorMessage } : msg
      ));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-110 flex items-center justify-center z-50"
        aria-label="Toggle Chatbot"
      >
        <BotIcon className="w-8 h-8"/>
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-full max-w-sm h-[60vh] bg-white/20 dark:bg-slate-800/50 backdrop-blur-lg border border-white/20 rounded-lg shadow-2xl flex flex-col z-50 animate-fade-in">
          <header className="p-4 bg-white/10 dark:bg-black/10 rounded-t-lg border-b border-slate-200/20 dark:border-slate-700/50">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200">Chat with my Resume</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Ask me anything about Saran's skills or projects!</p>
          </header>
          
          <div ref={chatBoxRef} className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex items-end gap-2 ${message.sender === 'user' ? 'justify-end' : ''}`}>
                {message.sender === 'bot' && <BotIcon className="w-6 h-6 text-slate-400 flex-shrink-0"/>}
                <div
                  className={`max-w-xs md:max-w-md px-4 py-2 rounded-xl ${
                    message.sender === 'user'
                      ? 'bg-blue-500 text-white rounded-br-none'
                      : 'bg-slate-200/80 dark:bg-slate-700/80 text-slate-800 dark:text-slate-200 rounded-bl-none'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{message.text}{isLoading && message.id === messages[messages.length-1].id ? '...' : ''}</p>
                </div>
              </div>
            ))}
             {messages.length === 0 && (
                <div className="text-center text-slate-500 dark:text-slate-400 p-4">
                  <p>Example questions:</p>
                  <ul className="text-sm mt-2 list-inside list-disc">
                    <li>What are his skills in web development?</li>
                    <li>Tell me about the Event Management project.</li>
                    <li>Has he worked with Python?</li>
                  </ul>
                </div>
              )}
          </div>
          
          <form onSubmit={handleSend} className="p-4 border-t border-slate-200/20 dark:border-slate-700/50">
            <div className="flex items-center bg-white/10 dark:bg-slate-700/50 rounded-lg">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
                disabled={isLoading}
                className="w-full bg-transparent p-3 focus:outline-none text-slate-800 dark:text-slate-200 placeholder:text-slate-500 dark:placeholder:text-slate-400"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="p-3 text-blue-600 dark:text-blue-400 disabled:text-slate-400 dark:disabled:text-slate-500"
                aria-label="Send message"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
