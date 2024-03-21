'use client';

import { useEffect } from 'react';

import { useApp } from '@/contexts/AppContext';

export default function HomePage() {
  const { handleOutsideClick, selectedFont } = useApp();
  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return <div>Please start searching for a word</div>;
}
