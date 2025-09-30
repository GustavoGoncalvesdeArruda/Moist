import { useNavigate } from "react-router-dom";

interface ComponentsCardProps2 {

  titulo?: string;
  imagem?: string;
  filtromarca?: string; // Filtro de categoria para redirecionamento
  filtrocategoria?: string;
  filtromodelo?: string;
  destino?: string; // Rota de destino (ex: "/products")
}

const ComponentsImagemCard2: React.FC<ComponentsCardProps2> = ({
  titulo,
  imagem,
  filtromarca,
  filtrocategoria,
  filtromodelo,
  destino = "/products", // padrão
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (filtromarca && filtrocategoria && filtromodelo) {
      navigate(`${destino}?marca=${encodeURIComponent(filtromarca)}&categoria=${encodeURIComponent(filtrocategoria)}&modelo${encodeURIComponent(filtromodelo)}`);
    } else if (filtromarca) {
      navigate(`${destino}?marca=${encodeURIComponent(filtromarca)}`);
   
    } else if (filtrocategoria) {
      navigate(`${destino}?categoria=${encodeURIComponent(filtrocategoria)}`);
   
    } else if (filtromodelo) {
      navigate (`${destino}?modelo=${encodeURIComponent(filtromodelo)}`);
    }
     else {
      navigate(destino);
    }
  };

  return (
    <div className="hover: flex flex-col items-center w-full rounded-lg overflow-hidden shadow-md">
      <h1 className="text-2xl font-bold text-center text-white">{titulo}</h1>
      {/* Imagem */}
      <img
        src={imagem}
        className="w-full h-full object-cover"
        alt="Imagem do produto"
      />

      {/* Botão embaixo */}
      <div className="w-full flex justify-center py-1">
        <button
          onClick={handleClick}
          type="button"
          className="bg-black text-white hover:bg-white hover:text-black px-4 py-2 rounded-2xl text-sm"
        >
          Conferir
        </button>
      </div>
    </div>
  );
};

export default ComponentsImagemCard2;