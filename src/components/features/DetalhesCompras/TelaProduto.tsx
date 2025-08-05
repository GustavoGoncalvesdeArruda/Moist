import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import FormularioCompra from '../Formulario/Formulario';
import { produtos } from '../Produtos/produtos';
import RecomendadosLista from './RecomendadosLista';
import { useCart } from '../../cartprovinder/CartContext';

interface ProdutoType {
  id: string;
  titulo: string;
  preco: string;
  imagem: string;
  imagemdesc: string;
  desc: string;
  tamanhos: string[];
  cores: string[];
  categoria: string;
}

const Produto = () => {
  const { idProduto } = useParams<{ idProduto: string }>();
  const [produto, setProduto] = useState<ProdutoType | null>(null);
  const { adicionarProduto } = useCart();
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const produtoEncontrado = produtos.find((p) => p.id === idProduto);
    if (produtoEncontrado) {
      setProduto(produtoEncontrado);
    } else {
      navigate('/shop');
    }
  }, [idProduto, navigate]);

  const handleSubmit = (userData: {
    nome: string;
    cpf: string;
    telefone: string;
    endereco: string;
  }) => {
    console.log(userData);
    setIsFormVisible(false);
  };

  const recommendedProducts = produtos.filter((p) => p.id !== idProduto);
  const handleProductClick = (id: string) => navigate(`/produto/${id}`);

  const handleAddToCart = () => {
    if (!produto) return;

    if (!selectedSize || !selectedColor) {
      alert('Por favor, selecione um tamanho e uma cor.');
      return;
    }

    const produtoParaCarrinho = {
      id: parseInt(produto.id), // convertendo para number, conforme CartContext
      nome: produto.titulo,
      preco: parseFloat(produto.preco.replace('R$', '').replace(',', '.')), // convertendo para number
      quantidade: 1,
      tamanhoSelecionado: selectedSize,
      corSelecionada: selectedColor,
    };

    adicionarProduto(produtoParaCarrinho as any);
  };

  if (!produto) {
    return (
      <div className="text-center py-20 text-lg text-gray-800 font-sans">
        Produto fora de estoque.
      </div>
    );
  }

  return (
    <div className="bg-gray-100 py-16 px-5 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-10 flex flex-wrap gap-10">
     
     
        {/* Imagem */}
        <div className="flex-1 min-w-[300px]">
          <img
            src={produto.imagem}
            alt={produto.titulo}
            className="w-full max-h-[420px] object-cover rounded-xl"
          />
        </div>

        {/* Informações */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">{produto.titulo}</h1>
            <p className="text-gray-600 text-base mb-6 leading-relaxed">{produto.desc}</p>
            <p className="text-2xl font-semibold text-indigo-600 mb-8">{produto.preco}</p>

            <div className="mb-5">
              <label className="block mb-2 font-medium">Tamanho:</label>
              <select
                onChange={(e) => setSelectedSize(e.target.value)}
                value={selectedSize || ''}
                className="w-full p-3 rounded-lg border border-gray-300 text-base"
              >
                <option value="" disabled>
                  Selecione um tamanho
                </option>
                {produto.tamanhos.map((tamanho) => (
                  <option key={tamanho} value={tamanho}>
                    {tamanho}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-8">
              <label className="block mb-2 font-medium">Cor:</label>
              <select
                onChange={(e) => setSelectedColor(e.target.value)}
                value={selectedColor || ''}
                className="w-full p-3 rounded-lg border border-gray-300 text-base"
              >
                <option value="" disabled>
                  Selecione uma cor
                </option>
                {produto.cores.map((cor) => (
                  <option key={cor} value={cor}>
                    {cor}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 min-w-[200px] py-3 bg-indigo-600 text-white rounded-lg font-semibold text-base hover:bg-indigo-700 transition"
            >
              Adicionar ao Carrinho
            </button>
            <button
              onClick={() => setIsFormVisible(true)}
              className="flex-1 min-w-[200px] py-3 bg-emerald-500 text-white rounded-lg font-semibold text-base hover:bg-emerald-600 transition"
            >
              Comprar Agora
            </button>
          </div>

          {isFormVisible && (
            <div className="mt-8">
              <FormularioCompra onSubmit={handleSubmit} />
            </div>
          )}
        </div>
      </div>

      {/* Recomendados */}
      <div className="max-w-6xl mx-auto mt-16 px-5">
        <RecomendadosLista
          recommendedProducts={recommendedProducts}
          handleProductClick={handleProductClick}
        />
      </div>
    </div>
  );
};

export default Produto;
