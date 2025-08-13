import { Link } from "react-router-dom";

interface ComponentsDetalheProps {
  idProduto: string;
  titulo: string;
  imagem: string;
  imagemdesc: string;
  desc: string;
  preco: string;
}

const ComponentsDetalhe: React.FC<ComponentsDetalheProps> = ({
  idProduto,
  titulo,
  imagem,
  imagemdesc,
  desc,
  preco,
}) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
      <Link
        to={`/products/${idProduto}`}
        className="block p-4 space-y-4 hover:bg-gray-50 transition"
      >
        <div>
          <h2 className="text-xl font-semibold">{titulo}</h2>
          <h3 className="text-lg text-green-600 font-bold">{preco}</h3>
          <p className="text-gray-600">{desc}</p>
        </div>

        <div>
          <img
            src={imagem}
            alt={titulo}
            className="w-[300px] h-[300px] object-cover rounded-md"
          />
        </div>

        <div>
          <img
            src={imagemdesc}
            alt={`${titulo} - Descrição`}
            className="w-full h-auto rounded-md mt-2"
          />
        </div>
      </Link>
    </div>
  );
};

export default ComponentsDetalhe;
