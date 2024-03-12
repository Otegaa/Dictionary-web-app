'use client';

import { useState } from 'react';

import Header from '../components/Header';
import Search from '../components/Search';
import Word from '../components/Word';
import toast from 'react-hot-toast';

const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

export default function HomePage() {
  const [selectedFont, setSelectedFont] = useState<string>('inter');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [receivedData, setReceivedData] = useState<any[]>([]);

  const handleChangeFont = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFont(e.target.value);
  };

  const handleGetWord = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const word = formData.get('searchWord');

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
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className={`font-${selectedFont}`}>
      <Header selectedFont={selectedFont} onHandleChange={handleChangeFont} />
      <Search
        handleGetWord={handleGetWord}
        isLoading={isLoading}
        error={error}
      />
      <Word receivedData={receivedData} isLoading={isLoading} />
    </div>
  );
}
