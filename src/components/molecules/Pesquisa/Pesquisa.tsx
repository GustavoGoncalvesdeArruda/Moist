import { useState } from "react";
import { produtos } from "../../molecules/produtos/produtos";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface PesquisaProps {
  isOpen: boolean;
  onClose: () => void;
}

const Pesquisa: React.FC<PesquisaProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const resultados = produtos.filter((produto) =>
    produto.titulo.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full md:w-96 bg-black text-white shadow-lg transform transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Cabeçalho */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <h2 className="text-2xl font-bold text-center my-8">Busca</h2>
        <button onClick={onClose} className="text-white text-lg hover:text-red-500">
          <FaTimes />
        </button>
      </div>

      {/* Campo de busca */}
      <div className="p-4">
        <input
          type="text"
          placeholder="Digite o nome do produto..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-700 bg-neutral-900 text-white focus:outline-none"
        />
      </div>

      {/* Resultados */}
      <div className="p-4 overflow-y-auto max-h-[calc(100%-100px)]">
        {resultados.length > 0 ? (
          resultados.map((produto) => (
            <div
              key={produto.id}
              className="p-3 mb-2 rounded-lg hover:bg-gray-800 cursor-pointer flex items-center gap-4"
              onClick={() => {
                navigate(`/produto/${produto.id}`);
                onClose();
                setQuery("");
              }}
            >
              <img
                src={produto.imagem}
                alt={produto.titulo}
                className="w-12 h-12 object-cover rounded"
              />
              <div>
                <p className="font-semibold">{produto.titulo}</p>
                <p className="text-gray-400 text-sm">{produto.marca}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400">Nenhum produto encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default Pesquisa;
