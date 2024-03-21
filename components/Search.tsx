import { useApp } from '@/contexts/AppContext';
import React from 'react';

interface Props {
  handleGetWord: (event: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
  error: boolean;
  handleFormChange: () => void;
  formRef: React.RefObject<HTMLFormElement>;
}

const Search = () => {
  const { handleGetWord, isLoading, error, handleFormChange, formRef } =
    useApp();
  return (
    <div className="px-4">
      <form
        className={`${
          error ? 'input-error' : ''
        } input flex items-center bg-[#E9E9E9]`}
        onSubmit={handleGetWord}
        onChange={handleFormChange}
        ref={formRef}
      >
        <input
          type="text"
          placeholder="Search..."
          name="searchWord"
          // required
          className="py-2 px-2 grow focus:outline-none"
          disabled={isLoading}
        />
        <button type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="#A445ED"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};
export default Search;
