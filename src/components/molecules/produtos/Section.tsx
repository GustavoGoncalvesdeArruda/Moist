import { useRef } from "react";
import { produtos } from "./produtos";

interface SectionProps {
  handleProductClick: (idProduto: string) => void;
  filtroCategoria?: string;
  filtroMarca?: string;
}

const Section: React.FC<SectionProps> = ({
  handleProductClick,
  filtroCategoria = '',
  filtroMarca = '',
}) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 400, behavior: "smooth" });
  };
  
  const produtosFiltrados = produtos.filter((produto) => {
    const matchCategoria =
      !filtroCategoria || filtroCategoria === 'Todos'
        ? true
        : produto.categoria === filtroCategoria;

    const matchMarca = filtroMarca
      ? produto.marca.toLowerCase().includes(filtroMarca.toLowerCase())
      : true;

    return matchCategoria && matchMarca;
  });

  return (
    <div className="font-serif relative my-10">
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 text-black bg-white hover:bg-black hover:text-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200"
        aria-label="Rolar para a esquerda"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 text-black bg-white hover:bg-black hover:text-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200"
        aria-label="Rolar para a direita"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div
        ref={scrollContainerRef}
        className="flex gap-4 px-12 overflow-x-auto scroll-smooth scrollbar-hide"
        tabIndex={0} // para permitir foco e navegação com teclado
        aria-label="Lista de produtos rolável"
      >
        {produtosFiltrados.map((produto) => (
          <div
            key={produto.id}
            onClick={() => handleProductClick(produto.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleProductClick(produto.id); }}
            className="flex-shrink-0 w-56 bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer group transition-all duration-300 transform hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label={`Produto: ${produto.titulo}, preço: ${produto.preco}`}
          >
            <img
              src={produto.imagem}
              alt={produto.titulo}
              className="w-full h-72 object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold truncate">{produto.titulo}</h3>
              <p className="text-md text-gray-600">{produto.preco}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
