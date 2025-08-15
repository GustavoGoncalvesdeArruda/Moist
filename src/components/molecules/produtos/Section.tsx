import { useRef } from "react"; // Removido useEffect, pois não é mais necessário aqui
import { produtos } from "./produtos";

// 1. A interface foi simplificada. Removemos as props de scroll.
interface SectionProps {
  handleProductClick: (idProduto: string) => void;
  filtroCategoria?: string;
  filtroNome?: string;
}

const Section: React.FC<SectionProps> = ({
  handleProductClick,
  filtroCategoria = '',
  filtroNome = '',
}) => {
  // 2. Criamos uma ref local, exclusiva para este componente.
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  // 3. As funções de scroll agora vivem dentro do componente e usam a ref local.
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };
  
  const produtosFiltrados = produtos.filter((produto) => {
    const matchCategoria =
      !filtroCategoria || filtroCategoria === 'Todos'
        ? true
        : produto.categoria === filtroCategoria;
    const matchNome = filtroNome
      ? produto.titulo.toLowerCase().includes(filtroNome.toLowerCase())
      : true;
    return matchCategoria && matchNome;
  });

  return (
    <div className="relative my-10">
      {/* 4. O onClick agora chama as funções locais, que funcionam corretamente. */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 text-black bg-white hover:bg-black hover:text-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200"
        aria-label="Rolar para a esquerda"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 text-black bg-white hover:bg-black hover:text-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200"
        aria-label="Rolar para a direita"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* 5. A ref local é anexada ao único container que precisa rolar. */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 px-12 overflow-x-auto scroll-smooth scrollbar-hide"
      >
        {produtosFiltrados.map((produto) => (
          <div
            key={produto.id}
            onClick={() => handleProductClick(produto.id)}
            className="flex-shrink-0 w-56 bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer group transition-all duration-300 transform hover:shadow-xl"
          >
            <img
              src={produto.imagem}
              alt={produto.titulo}
              className="w-full h-72 object-cover" // object-cover evita distorção da imagem
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