'use client';

import { useEffect, useRef, useState } from 'react';

import Header from '../components/Header';
import Search from '../components/Search';
import Word from '../components/Word';
import { useApp } from '@/contexts/AppContext';

export default function HomePage() {
  const { handleOutsideClick, selectedFont } = useApp();
  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className={`font-${selectedFont}`}>
      <Header />
      <Search />
      <Word />
    </div>
  );
}
