import React from 'react';

interface ProdutoType {
  id: string;
  titulo: string;
  preco: string;
  imagem: string;
}

interface Props {
  recommendedProducts: ProdutoType[];
  handleProductClick: (id: string) => void;
}

const RecomendadosLista: React.FC<Props> = ({ recommendedProducts, handleProductClick }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    {recommendedProducts.slice(0, 4).map(produto => (
      <div
        key={produto.id}
        className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:scale-105 transition"
        onClick={() => handleProductClick(produto.id)}
      >
        <img src={produto.imagem} alt={produto.titulo} className="w-full h-32 object-cover rounded" />
        <h3 className="mt-2 text-sm font-semibold">{produto.titulo}</h3>
        <p className="text-blue-600 font-bold">{produto.preco}</p>
      </div>
    ))}
  </div>
);

export default RecomendadosLista;