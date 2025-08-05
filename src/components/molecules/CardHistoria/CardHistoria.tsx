import { useNavigate } from "react-router-dom";

interface ComponentsCardProps {
  titulo: string;
  descricao: string;
  image: string;
}

const ComponentsCardHistoria: React.FC<ComponentsCardProps> = ({
  titulo,
  descricao,
  image,
}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow flex flex-col md:flex-row items-center">
      {/* Imagem à esquerda */}
      <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
        <img
          src={image}
          alt={titulo}
          className="rounded-lg object-cover max-h-48 w-full"
        />
      </div>
      {/* Informações à direita */}
      <div className="w-full md:w-2/3 md:pl-8 flex flex-col justify-center">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          {titulo}
        </h2>
        <p className="text-gray-700 mb-4">
          {descricao} A Kyan Kicks é uma marca criada por apaixonados por moda e esportes, com o objetivo de oferecer tênis Nike com qualidade, estilo e performance. Mais que vender produtos, ela busca criar conexões e oferecer uma experiência autêntica, unindo cultura, estilo de vida e comunidade.
        </p>
        <button
          onClick={() => navigate("/historia")}
          type="button"
          className="
            bg-indigo-600
            text-white
            px-7 py-3
            rounded-lg
            cursor-pointer
            transition
            duration-300
            transform
            hover:brightness-110
            shadow-md
            font-semibold
            mt-2
          "
        >
          Conhecer mais
        </button>
      </div>
    </div>
  );
};

export default ComponentsCardHistoria;
