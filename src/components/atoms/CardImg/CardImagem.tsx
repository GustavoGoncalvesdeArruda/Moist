import { useNavigate } from "react-router-dom";

interface ComponentsCardProps {
  titulo: string;
  imagem?: string;
  desc: string;
  filtroCategoria?: string; // Filtro de categoria para redirecionamento
  destino?: string;         // Rota de destino (ex: "/products")
}

const ComponentsImagemCard: React.FC<ComponentsCardProps> = ({
  titulo,
  desc,
  imagem,
  filtroCategoria,
  destino = "/products", // padrão
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (filtroCategoria) {
      navigate(`${destino}?categoria=${encodeURIComponent(filtroCategoria)}`);
    } else {
      navigate(destino);
    }
  };

  return (
    <div className="relative w-[500px] h-[400px] flex-shrink-0">
      {/* Imagem ocupando toda a área */}
      <img
        src={imagem}
        alt={titulo}
        className="w-full h-full object-cover rounded-lg"
      />

      {/* Informações sobrepostas no lado esquerdo da imagem */}
      <div className="absolute left-0 top-0 h-full flex flex-col justify-center items-start pl-10 bg-gradient-to-r from-black/80 via-black/40 to-transparent w-3/5">
        <h2 className="text-3xl font-black text-white mb-2 tracking-tight uppercase text-left drop-shadow-lg">
          {titulo}
        </h2>
        <p className="text-lg text-gray-100 mb-4 text-left drop-shadow-lg max-w-xs">
          {desc}
        </p>
        <button
          onClick={handleClick}
          type="button"
          className="
            bg-white
            text-black
            px-7 py-3
            rounded-3xl
            shadow-md
            italic
            mt-2
            hover:bg-black
            hover:text-white
          "
        >
          Conferir
        </button>
      </div>
    </div>
  );
};

export default ComponentsImagemCard;
