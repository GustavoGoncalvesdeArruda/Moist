import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BotaoPersonalizado from '../components/atoms/button/Button';
import { produtos } from '../components/features/Produtos/produtos';

interface Produto {
  id: string;
  titulo: string;
  preco: string;
  imagem: string;
  imagemdesc: string;
  desc: string;
  categoria: string;
}

const Tenispage = () => {
  const navigate = useNavigate();
  window.scrollTo(0, 0);

  const [filteredProducts] = useState<Produto[]>(
    produtos.filter((produto) => produto.categoria === 'Tenis')
  );

  const handleProductClick = (idProduto: string) => {
    navigate(`/produto/${idProduto}`);
  };

  return (
    <div className="bg-white text-black font-sans min-h-screen">
      {/* Título */}
      <h1 className="text-center text-4xl font-semibold mt-12">
        Todos nossos Tênis
      </h1>

      {/* Grid de produtos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-10 max-w-6xl mx-auto">
        {filteredProducts.map((produto) => (
          <div
            key={produto.id}
            onClick={() => handleProductClick(produto.id)}
            className="bg-white rounded-lg cursor-pointer overflow-hidden shadow-lg transform transition-transform hover:scale-105"
          >
            <img
              src={produto.imagem}
              alt={produto.titulo}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold uppercase tracking-wide">
                {produto.titulo}
              </h3>
              <p className="text-xl font-medium text-blue-500 mt-2">
                {produto.preco}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Botão voltar */}
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

export default Tenispage;
