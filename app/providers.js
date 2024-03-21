'use client';

import Header from '@/components/Header';
import Search from '@/components/Search';
import { useApp } from '@/contexts/AppContext';
import { Toaster } from 'react-hot-toast';

const Providers = ({ children }) => {
  const { selectedFont } = useApp();

  return (
    <div className={`font-${selectedFont}`}>
      <Header />
      <Search />
      <Toaster />
      {children}
    </div>
  );
};
export default Providers;
