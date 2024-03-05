'use client';

import { useState } from 'react';

import Header from '../components/Header';
import Search from '../components/Search';
import Word from '../components/Word';
import toast from 'react-hot-toast';

const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [receivedData, setReceivedData] = useState<any[]>([]);

  const handleGetWord = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const word = formData.get('searchWord');

    try {
      const res = await fetch(`${url}${word}`);
      if (!res.ok) {
        throw new Error('Failed to get word');
      }

      const data = await res.json();
      setReceivedData(data);
      setError(null);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <Header />
      <Search handleGetWord={handleGetWord} isLoading={isLoading} />
      <Word receivedData={receivedData} error={error} isLoading={isLoading} />
    </div>
  );
}
