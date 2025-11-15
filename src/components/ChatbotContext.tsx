import { createContext, useContext, useState, ReactNode } from 'react';

interface ChatbotContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  initialMessage: string;
  setInitialMessage: (message: string) => void;
  openWithMessage: (message: string) => void;
}

const ChatbotContext = createContext<ChatbotContextType | undefined>(undefined);

export function ChatbotProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialMessage, setInitialMessage] = useState('');

  const openWithMessage = (message: string) => {
    setInitialMessage(message);
    setIsOpen(true);
  };

  return (
    <ChatbotContext.Provider value={{ isOpen, setIsOpen, initialMessage, setInitialMessage, openWithMessage }}>
      {children}
    </ChatbotContext.Provider>
  );
}

export function useChatbot() {
  const context = useContext(ChatbotContext);
  if (context === undefined) {
    throw new Error('useChatbot must be used within a ChatbotProvider');
  }
  return context;
}
