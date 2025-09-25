// Pesquisa.tsx
// Coloque em src/components/molecules/Pesquisa/Pesquisa.tsx
import type { FC } from "react";

interface PesquisaProps {
  isOpen: boolean;
  onClose: () => void;
}

const Pesquisa: FC<PesquisaProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={onClose}
        aria-hidden={!isOpen}
      />

      {/* Painel lateral */}
      <aside
        className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
        aria-hidden={!isOpen}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-bold text-black">Pesquisa</h2>
          <button className="text-gray-600 hover:text-black" onClick={onClose} aria-label="Fechar pesquisa">
            ✕
          </button>
        </div>

        <div className="p-4 text-gray-700">
          <p className="text-sm">Digite na barra de busca para encontrar produtos.</p>
          {/* Aqui você pode expandir: exibir resultados em tempo real, pesquisas recentes etc. */}
        </div>
      </aside>
    </>
  );
};

export default Pesquisa;
