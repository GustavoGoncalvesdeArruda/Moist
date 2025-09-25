import { useNavigate } from "react-router-dom";

interface ComponentsCardProps {
  imagem?: string;
  filtromarca?: string; // Filtro de categoria para redirecionamento
  destino?: string;     // Rota de destino (ex: "/products")
}

const ComponentsImagemCard: React.FC<ComponentsCardProps> = ({
  imagem,
  filtromarca,
  destino = "/products", // padrão
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (filtromarca) {
      navigate(`${destino}?marca=${encodeURIComponent(filtromarca)}`);
    } else {
      navigate(destino);
    }
  };

  return (
    <div className="relative w-64 h-40 flex-shrink-0 rounded-lg overflow-hidden shadow-md">
      {/* Imagem ocupando toda a área */}
      <img src={imagem} className="w-full h-full object-cover" />

      {/* Botão na parte de baixo e centralizado */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
        <button
          onClick={handleClick}
          type="button"
          className=" text-white px-4 py-2 rounded-2xl text-sm shadow-md"
        >
          Conferir
        </button>
      </div>
    </div>
  );
};

export default ComponentsImagemCard;
