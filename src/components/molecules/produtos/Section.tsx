import { useEffect } from "react";
import { produtos } from "./produtos";


interface SectionProps {
  handleProductClick: (idProduto: string) => void;
  scrollLeft: () => void;
  scrollRight: () => void;
  scrollRef: React.RefObject<HTMLDivElement>;
  filtroCategoria?: string;
  filtroNome?: string;
}

const Section: React.FC<SectionProps> = ({
  handleProductClick,
  scrollLeft,
  scrollRight,
  scrollRef,
  filtroCategoria = '',
  filtroNome = '',
}) => {
  // O useEffect para rolar para o topo pode ser removido daqui,
  // pois o componente pai já faz isso. Manter pode causar rolagens inesperadas.
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  useEffect(() => {
    window.scrollTo(0 , 0);
  }, [])
  
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
    // O contêiner principal agora tem a classe 'relative' para posicionar os botões.
    <div className="relative my-10">
      {/* Botão Esquerda */}
      <button
        onClick={scrollLeft}
        // Assegura que o botão fique visível acima dos produtos.
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 text-black bg-white hover:bg-black hover:text-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200"
        aria-label="Rolar para a esquerda"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Botão Direita */}
      <button
        onClick={scrollRight}
        // Assegura que o botão fique visível acima dos produtos.
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 text-black bg-white hover:bg-black hover:text-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200"
        aria-label="Rolar para a direita"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* A referência de rolagem está corretamente aplicada a este contêiner. */}
      <div
        ref={scrollRef}
        // Aumentar o padding horizontal (px-12) garante que os produtos não fiquem escondidos sob os botões.
        className="flex gap-4 px-12 overflow-x-auto scroll-smooth scrollbar-hide"
        // Adicionei a classe scrollbar-hide para uma aparência mais limpa, mas você pode usar as classes do scrollbar-thin se preferir.
      >
        {produtosFiltrados.map((produto) => (
          <div
            key={produto.id}
            onClick={() => handleProductClick(produto.id)}
            // Ajustei as dimensões para uma melhor apresentação.
            className="flex-shrink-0 w-56 bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer group transition-all duration-300 transform hover:shadow-xl"
          >
            <img
              src={produto.imagem}
              alt={produto.titulo}
              className="w-full h-72"
            />
            {/* Opcional: Adicionar um título e preço dentro do card */}
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