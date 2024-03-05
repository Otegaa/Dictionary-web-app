'use client';

import { SetStateAction, useState } from 'react';

import Header from '../components/Header';
import Search from '../components/Search';
import Word from '../components/Word';

const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

export default function HomePage() {
  const [word, setWord] = useState('');
  const [receivedData, setReceivedData] = useState([]);

  const handleChangeWord = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setWord(e.target.value);
  };

  const handleGetWord = async (
    e: React.FormEvent<HTMLFormElement> | undefined = undefined
  ) => {
    try {
      if (e) {
        e.preventDefault();
      }
      const res = await fetch(`${url}${word}`);
      if (!res.ok) {
        throw new Error('Failed to get word...');
      }
      const data = await res.json();
      setReceivedData(data);
    } catch (error) {
      console.log(error);
    }
    setWord('');
  };
  return (
    <div>
      <Header />
      {/* <Search
      // handleChangeWord={handleChangeWord}
      // handleGetWord={handleGetWord}
      // word={word}
      /> */}
      {/* <Word receivedData={receivedData} /> */}
    </div>
  );
}
