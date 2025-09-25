import { useNavigate } from "react-router-dom";

interface ComponentsCardProps2 {
  imagem?: string;
  filtromarca?: string; // Filtro de categoria para redirecionamento
  filtrocategoria?: string;
  destino?: string; // Rota de destino (ex: "/products")
}

const ComponentsImagemCard2: React.FC<ComponentsCardProps2> = ({
  imagem,
  filtromarca,
  filtrocategoria,
  destino = "/products", // padrão
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (filtromarca && filtrocategoria) {
      navigate(`${destino}?marca=${encodeURIComponent(filtromarca)}&categoria=${encodeURIComponent(filtrocategoria)}`);
    } else if (filtromarca) {
      navigate(`${destino}?marca=${encodeURIComponent(filtromarca)}`);
    } else if (filtrocategoria) {
      navigate(`${destino}?categoria=${encodeURIComponent(filtrocategoria)}`);
    } else {
      navigate(destino);
    }
  };

  return (
    <div className="hover: flex flex-col items-center w-full rounded-lg overflow-hidden shadow-md">
      {/* Imagem */}
      <img
        src={imagem}
        className="w-full h-full object-cover"
        alt="Imagem do produto"
      />

      {/* Botão embaixo */}
      <div className="w-full flex justify-center py-3">
        <button
          onClick={handleClick}
          type="button"
          className="bg-black text-white px-4 py-2 rounded-2xl text-sm"
        >
          Conferir
        </button>
      </div>
    </div>
  );
};

export default ComponentsImagemCard2;
