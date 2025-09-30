import { useRef } from "react";
import { produtos } from "./produtos";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface SectionProps {
  handleProductClick: (idProduto: string) => void;
  filtroCategoria?: string;
  filtroNome?: string;
  filtroMarca?: string;
}

const Section: React.FC<SectionProps> = ({
  handleProductClick,
  filtroCategoria = "",
  filtroNome = "",
  filtroMarca = "",
}) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const produtosFiltrados = produtos.filter((produto) => {
    const matchCategoria =
      !filtroCategoria || filtroCategoria === "Todos"
        ? true
        : produto.categoria === filtroCategoria;

    const matchNome = filtroNome
      ? produto.titulo.toLowerCase().includes(filtroNome.toLowerCase())
      : true;

    const matchMarca = filtroMarca
      ? produto.marca.toLowerCase().includes(filtroMarca.toLowerCase())
      : true;

    return matchCategoria && matchNome && matchMarca;
  });

  return (
    <div className="relative my-10 font-serif">
      {/* Botões de navegação */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full shadow-lg hover:bg-black transition z-10"
      >
        <FaChevronLeft size={20} />
      </button>

      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full shadow-lg hover:bg-black transition z-10"
      >
        <FaChevronRight size={20} />
      </button>

      {/* Lista de produtos */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-4 scrollbar-hide scroll-smooth px-4"
      >
        {produtosFiltrados.map((produto) => (
          <div
            key={produto.id}
            className="min-w-[200px] max-w-[200px] cursor-pointer bg-black shadow-md hover:scale-105 transition mt-5 mb-5 flex-shrink-0"
            onClick={() => handleProductClick(produto.id)}
          >
            <img
              src={produto.imagem}
              alt={produto.titulo}
              className="w-full h-40 object-cover rounded-sm"
            />
            <h3 className="mt-2 font-bold text-white text-sm break-words">
              {produto.titulo}
            </h3>
            <p className="text-gray-500 text-xs truncate">{produto.marca}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
