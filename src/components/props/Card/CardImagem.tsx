import { useNavigate } from "react-router-dom";

interface ComponentsCardProps {

  imagem?: string;
  filtromarca?: string;
  destino?: string;
}

const ComponentsImagemCard: React.FC<ComponentsCardProps> = ({
  imagem,
  filtromarca,
  destino = "/products",
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
    <div
      onClick={handleClick}
      className="relative w-64 h-40 flex-shrink-0 rounded-lg overflow-hidden shadow-md cursor-pointer transition-transform duration-300 hover:scale-105"
    >
  
      <img src={imagem} className="w-full h-full object-cover" />
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
        <button
          type="button"
          className="bg-black/60 text-white hover:bg-white hover:text-black px-4 py-2 rounded-2xl text-sm shadow-md"
        >
          Conferir
        </button>
      </div>
    </div>
  );
};

export default ComponentsImagemCard;
