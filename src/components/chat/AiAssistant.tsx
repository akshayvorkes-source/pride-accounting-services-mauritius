import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/glass-card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { chatService } from '@/lib/chat';
import type { Message } from '../../../worker/types';
export function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);
  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      content: input,
      timestamp: Date.now()
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    try {
      let assistantContent = '';
      await chatService.sendMessage(
        input,
        'google-ai-studio/gemini-2.0-flash',
        (chunk) => {
          assistantContent += chunk;
        }
      );
      const assistantMessage: Message = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: assistantContent || "I'm sorry, I'm having trouble connecting to the accounting server.",
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsTyping(false);
    }
  };
  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4"
          >
            <GlassCard className="w-[350px] sm:w-[400px] h-[500px] flex flex-col p-0 overflow-hidden border-emerald-500/20">
              <div className="p-4 bg-emerald-500/10 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center">
                    <Bot className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold">Pride Concierge</h3>
                    <p className="text-[10px] text-emerald-400">Online & Ready to Help</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="hover:bg-white/5">
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.length === 0 && (
                    <div className="text-center py-8 space-y-2">
                      <p className="text-xs text-slate-400">Ask about tax compliance, Mauritius accounting, or our global services.</p>
                    </div>
                  )}
                  {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                        msg.role === 'user' 
                          ? 'bg-emerald-500 text-white rounded-tr-none' 
                          : 'bg-white/10 text-slate-200 rounded-tl-none border border-white/5'
                      }`}>
                        {msg.content}
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none border border-white/5 flex gap-1">
                        <Loader2 className="h-4 w-4 animate-spin text-emerald-500" />
                        <span className="text-xs text-slate-400">Thinking...</span>
                      </div>
                    </div>
                  )}
                  <div ref={scrollRef} />
                </div>
              </ScrollArea>
              <div className="p-4 border-t border-white/10 bg-white/5">
                <div className="flex gap-2 mb-2">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Type your question..."
                    className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-500/50 transition-colors"
                  />
                  <Button onClick={handleSend} size="icon" className="btn-emerald h-9 w-9 shrink-0">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-[9px] text-center text-slate-500 uppercase tracking-tighter">
                  AI Limit: 10 req/min • Powered by Pride Agentic
                </p>
              </div>
            </GlassCard>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="h-14 w-14 rounded-full btn-emerald shadow-2xl flex items-center justify-center relative group"
      >
        <div className="absolute inset-0 rounded-full bg-emerald-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
        {isOpen ? <X className="h-6 w-6 relative z-10" /> : <MessageCircle className="h-6 w-6 relative z-10" />}
      </motion.button>
    </div>
  );
}