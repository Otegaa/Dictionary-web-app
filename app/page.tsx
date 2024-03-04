'use client';

import { SetStateAction, useState } from 'react';

import Header from '../components/Header';
import Search from '../components/Search';
import Word from '../components/Word';

const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

export default function HomePage() {
  const [word, setWord] = useState('');

  const handleChangeWord = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setWord(e.target.value);
    console.log(word);
  };

  const handleGetWord = async () => {
    try {
      const res = await fetch(`${url}${word}`);
      if (!res.ok) {
        throw new Error('Failed to get word...');
      }
      const data = await res.json();
      console.log(data);
      // return data;
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Header />
      <Search
        handleChangeWord={handleChangeWord}
        handleGetWord={handleGetWord}
        word={word}
      />
      <Word />
    </div>
  );
}
