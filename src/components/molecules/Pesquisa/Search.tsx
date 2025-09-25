// Search.tsx
// Coloque em src/components/molecules/Pesquisa/Search.tsx
import type { ChangeEvent, FC } from "react";

interface SearchBarProps {
  searchTerm: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onResetSearch: () => void;
  onFocus: () => void;
  placeholder?: string;
}

const SearchBar: FC<SearchBarProps> = ({ searchTerm, onChange, onResetSearch, onFocus, placeholder }) => {
  return (
    <div className="relative text-center">
      <input
        type="text"
        value={searchTerm}
        onChange={onChange}
        onFocus={onFocus}
        className="w-full px-4 py-1 pr-10 text-sm border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        placeholder={placeholder}
        aria-label="Pesquisar produtos"
      />
      {searchTerm && (
        <button
          type="button"
          onClick={onResetSearch}
          aria-label="Limpar busca"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 text-sm"
        >
          &times;
        </button>
      )}
    </div>
  );
};

export default SearchBar;
