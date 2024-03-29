'use client';

import { useRouter } from 'next/navigation';
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';

const AppContext = createContext<any>(undefined);

const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedFont, setSelectedFont] = useState<string>('inter');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [receivedData, setReceivedData] = useState<any[]>([]);

  const formRef = useRef<HTMLFormElement>(null);

  const router = useRouter();

  useEffect(() => {
    const handleBackNavigation = (event: { preventDefault: () => void }) => {
      const currentUrl = window.location.href;
      if (currentUrl.startsWith(`${window.location.origin}/search`)) {
        event.preventDefault();
        router.back();
      }
    };

    window.onpopstate = handleBackNavigation;

    return () => {
      window.onpopstate = null;
    };
  }, []);

  const handleChangeFont = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFont(e.target.value);
  };

  const handleFormChange: () => void = () => {
    if (error) {
      setError(false);
    }
  };

  const handleSearchWord = async (word: string) => {
    setIsLoading(true);

    try {
      if (!word) {
        setError(true);
        throw new Error('Please enter a search word');
      }

      const res = await fetch(`${url}${word}`);
      if (!res.ok) {
        throw new Error('Failed to get word..Please try again');
      }

      const data = await res.json();
      setReceivedData(data);
      router.push(`/search?query=${encodeURIComponent(word)}`);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGetWord = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const word = formData.get('searchWord') as string;

    handleSearchWord(word);
  };

  const handleGetSynonym = async (synonym: string) => {
    handleSearchWord(synonym);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (formRef.current && !formRef.current.contains(e.target as Node | null)) {
      setError(false);
    }
  };

  return (
    <AppContext.Provider
      value={{
        selectedFont,
        isLoading,
        receivedData,
        error,
        formRef,
        handleChangeFont,
        handleGetWord,
        handleGetSynonym,
        handleFormChange,
        handleOutsideClick,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined)
    throw new Error('App was used outside of the AppProvider');
  return context;
};
export { AppProvider, useApp };
