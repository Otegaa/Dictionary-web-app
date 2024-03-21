'use client';

import { useEffect, useRef, useState } from 'react';

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
  const formRef = useRef<HTMLFormElement>(null);

  const handleChangeFont = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFont(e.target.value);
  };

  const handleFormChange: () => void = () => {
    if (error) {
      setError(false);
    }
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

  const handleOutsideClick = (e: MouseEvent) => {
    if (formRef.current && !formRef.current.contains(e.target as Node | null)) {
      setError(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  // return (
  //   <div className={`font-${selectedFont}`}>
  //     {/* <Header selectedFont={selectedFont} onHandleChange={handleChangeFont} /> */}
  //     {/* <Search
  //       handleGetWord={handleGetWord}
  //       isLoading={isLoading}
  //       error={error}
  //       handleFormChange={handleFormChange}
  //       formRef={formRef}
  //     />
  //     <Word receivedData={receivedData} isLoading={isLoading} /> */}
  //   </div>
  // );
}
