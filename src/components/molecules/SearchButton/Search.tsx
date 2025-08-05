import React from 'react';

interface SearchBarProps {
  searchTerm: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onResetSearch: () => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onChange,
  onResetSearch,
  placeholder = "Pesquise por tênis ou roupas..."
}) => {
  return (
    <div className="relative text-center my-8">
      <input
        type="text"
        value={searchTerm}
        onChange={onChange}
        placeholder={placeholder}
        className="w-72 px-4 py-2 pr-10 text-base rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        aria-label="Campo de pesquisa de produtos"
      />
      {searchTerm && (
        <button
          type="button"
          onClick={onResetSearch}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-xl text-gray-500 hover:text-gray-700"
          aria-label="Limpar pesquisa"
        >
          &times;
        </button>
      )}
    </div>
  );
};

export default SearchBar;
