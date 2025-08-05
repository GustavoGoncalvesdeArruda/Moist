import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BotaoPersonalizado from '../components/atoms/button/Button';
import { produtos } from '../components/features/Produtos/produtos';

interface Produto {
  id: string;
  titulo: string;
  preco: string;
  imagem: string;
}

const Roupaspage = () => {
  const navigate = useNavigate();
  window.scrollTo(0, 0);

  const [filteredProducts] = useState<Produto[]>(produtos.filter(produto => produto.categoria === 'Roupa'));

  const handleProductClick = (idProduto: string) => {
    navigate(`/produto/${idProduto}`);
  };

  return (
    <div className="bg-white text-black font-sans min-h-screen">
      {/* Título */}
      <h1 className="text-center text-4xl font-semibold mt-12">
        Todas nossas Roupas
      </h1>

      <div className="grid gap-5 px-5 py-10 max-w-6xl mx-auto grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
        {filteredProducts.map((produto) => (
          <div
            key={produto.id}
            onClick={() => handleProductClick(produto.id)}
            className="bg-white rounded-lg cursor-pointer overflow-hidden shadow-xl transform transition-transform hover:scale-105"
          >
            <img
              src={produto.imagem}
              alt={produto.titulo}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-base font-bold uppercase tracking-wider">
                {produto.titulo}
              </h3>
              <p className="text-lg font-medium text-blue-500 mt-2">
                {produto.preco}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mb-12">
        <BotaoPersonalizado
          texto="Voltar para a página inicial"
          onClick={() => navigate('/paginainicial')}
          corFundo="#007bff"
          tamanhoFonte="18px"
        />
      </div>
    </div>
  );
};

export default Roupaspage;
