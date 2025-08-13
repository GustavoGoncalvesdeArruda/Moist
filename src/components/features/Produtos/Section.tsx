import { produtos } from "./produtos"; 


interface SectionProps {
  handleProductClick: (idProduto: string) => void;
  scrollLeft: () => void;
  scrollRight: () => void;
  scrollRef: React.RefObject<HTMLDivElement>;
  filtroCategoria?: string;
  filtroNome?: string;
}

window.scrollTo(0, 0);

const Section: React.FC<SectionProps> = ({
  handleProductClick,
  scrollLeft,
  scrollRight,
  scrollRef,
  filtroCategoria = '',
  filtroNome = '',
}) => {
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

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative my-10">
      
      {/* Botão Esquerda */}
      <button
        onClick={handleScrollLeft}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 text-black bg-white hover:bg-black hover:text-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200"
        aria-label="Rolar para a esquerda"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Botão Direita */}
      <button
        onClick={handleScrollRight}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 text-black bg-white hover:bg-black hover:text-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200"
        aria-label="Rolar para a direita"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div
        ref={scrollRef}
        className="flex gap-4 px-2 overflow-x-auto scroll-smooth scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
        style={{ minHeight: 320 }}
      >
        {produtosFiltrados.map((produto) => (
          <div
            key={produto.id}
            onClick={() => handleProductClick(produto.id)}
            className="flex-shrink-0 flex flex-col bg-white shadow-xl cursor-pointer overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
            style={{ aspectRatio: '3 / 4', minWidth: 220, height: 320 }}
          >
            <img
              src={produto.imagem}
              alt={produto.titulo}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              style={{ aspectRatio: '3 / 4', height: '100%' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
