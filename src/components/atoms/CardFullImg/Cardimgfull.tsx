import { useNavigate } from "react-router-dom";

interface ComponentsCardProps {
  titulo: string;
  desc: string;
  imagem?: string;
  botao?: string;
}

const ComponentsCardColecao: React.FC<ComponentsCardProps> = ({
  titulo,
  desc,
  imagem,
  botao,

}) => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-white">
    
      {/* Imagem ocupando toda a largura */}
      <div className="w-full flex flex-row gap-0 mb-8 relative">
        <img
          src={imagem}
          alt={titulo}
          className="w-full object-cover"
        />
    
        {/* Informações sobrepostas no lado esquerdo da imagem */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-center items-start pl-12 bg-gradient-to-r from-black/80 via-black/40 to-transparent w-1/2">
          <h2 className="text-3xl md:text-3xl font-black text-white mb-2 tracking-tight uppercase text-left drop-shadow-lg">
            {titulo}
          </h2>
          <p className="md:text-1xl text-gray-100 text-base mb-4 text-left drop-shadow-lg max-w-xs">
            {desc}
          </p>
          <button
            onClick={() => navigate("/homepage")}
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
            {botao}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComponentsCardColecao;
