'use client';

import { createContext, useContext, useState } from 'react';

interface HeaderContextProps {
  title: string;
  subtitle?: string;
  onBack?: () => void;
  setHeader: (title: string, subtitle?: string, onBack?: () => void) => void;
}

const HeaderContext = createContext<HeaderContextProps | null>(null);

export const HeaderProvider = ({ children }: { children: React.ReactNode }) => {
  const [title, setTitle] = useState('default');
  const [subtitle, setSubtitle] = useState<string | undefined>('default');
  const [onBack, setOnBack] = useState<(() => void) | undefined>(undefined);

  const setHeader = (
    newTitle: string,
    newSubtitle?: string,
    newOnBack?: () => void
  ) => {
    setTitle(newTitle);
    setSubtitle(newSubtitle);
    setOnBack(() => newOnBack);
  };

  return (
    <HeaderContext.Provider value={{ title, subtitle, onBack, setHeader }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeader = () => {
  const ctx = useContext(HeaderContext);
  if (!ctx) throw new Error('useHeader must be used inside HeaderProvider');
  return ctx;
};
