import { useNavigate } from "react-router-dom";

interface ComponentsCardProps {
  titulo: string;
  desc: string;
  image: string;
  image2: string;
}

const ComponentsCardLancamento: React.FC<ComponentsCardProps> = ({
  titulo,
  desc,
  image,
  image2,
}) => {
  const navigate = useNavigate();

  return (
    <div className="p-4 w-full min-h-screen flex flex-col items-center justify-center bg-white">
    
      {/* Imagens ocupando toda a largura, lado a lado */}
      <div className="w-full flex flex-row gap-0 mb-8">
        <img
          src={image}
          alt={titulo}
          className="w-1/2 h-[60vh] object-cover"
        />
        <img
          src={image2}
          alt={titulo + " extra"}
          className="w-1/2 h-[60vh] object-cover"
        />
      </div>

      {/* Informações logo abaixo */}
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center px-4">
        <h2 className="text-3xl md:text-3xl font-black text-neutral-900 mb-2 tracking-tight uppercase text-center">
          {titulo}
        </h2>
        <p className=" md:text-1xl text-gray-700 text-base text-center">{desc}</p>
        <button
          onClick={() => navigate("/produto/15")}
          type="button"
          className="
            bg-black
            text-white
            px-7 py-3
            rounded-3xl
            cursor-pointer
            transition
            duration-300
            transform
            hover:brightness-110
            shadow-md
            italic
            mt-2
          "
        >
          Ver lançamento
        </button>
      </div>
    </div>
  );
};

export default ComponentsCardLancamento;
