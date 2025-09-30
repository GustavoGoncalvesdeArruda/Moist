import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../cartprovinder/cartcontext";
import Section from "../produtos/Section";
import Drop from "../../props/Drop/drop";

interface ProdutoType {
  id: string;
  titulo: string;
  preco: string;
  imagem: string;
  imagemdesc: string;
  desc: string;
  tamanhos: string[];
  categoria: string;
  marca: string;
}

interface ProdutoProps {
  produto: ProdutoType;
}

const ProductImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="w-full aspect-square bg-black rounded-2xl shadow-lg flex items-center justify-center overflow-hidden">
    <img
      src={src}
      alt={alt}
      className="object-contain w-full h-full transition-transform duration-300 hover:scale-105"
    />
  </div>
);

const SizeButton = ({
  size,
  isSelected,
  onClick,
}: {
  size: string;
  isSelected: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`w-10 h-10 flex items-center justify-center border text-lg transition rounded
      ${
        isSelected
          ? "bg-neutral-200 border-neutral-200 text-black hover:bg-neutral-300 shadow-lg"
          : "bg-black border-neutral-700 text-neutral-300 hover:bg-neutral-800"
      }`}
  >
    {size}
  </button>
);

const Produto = ({ produto }: ProdutoProps) => {
  const { adicionarProduto } = useCart();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantidade, setQuantidade] = useState<number>(1);
  const navigate = useNavigate();
  const { idProduto } = useParams();

  // Dados do dropdown
  const perguntas = [
    {
      titulo: "Qualidade",
      descricao:
        "Nossos produtos são fabricados com materiais premium e passam por rigoroso controle de qualidade.",
    },
    {
      titulo: "Descrição",
      descricao: produto.desc || "Descrição detalhada do produto.",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedSize(null);
    setQuantidade(1);
  }, [idProduto]);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Por favor, selecione um tamanho.");
      return;
    }

    const precoNumerico = parseFloat(
      produto.preco.replace("R$", "").replace(".", "").replace(",", ".")
    );

    if (isNaN(precoNumerico)) {
      alert("Preço do produto inválido");
      return;
    }

    const produtoParaCarrinho = {
      id: parseInt(produto.id, 10),
      nome: produto.titulo,
      preco: precoNumerico,
      quantidade,
      tamanhoSelecionado: selectedSize,
    };

    adicionarProduto(produtoParaCarrinho);
  };

  return (
    <div className="min-h-screen bg-black text-neutral-200 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 py-12 px-4 md:px-8">

        {/* Coluna Esquerda: Imagens */}
        <div className="flex flex-col gap-6 w-full md:w-1/2 items-center md:items-start">
          <ProductImage src={produto.imagem} alt={produto.titulo} />
          <ProductImage
            src={produto.imagemdesc}
            alt={`${produto.titulo} detalhe`}
          />
        </div>

        {/* Coluna Direita: Detalhes e Drop abaixo dos botões */}
        <div className="flex-1 flex flex-col">
          <div>
            {/* Detalhes do Produto */}
            <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight uppercase">
              {produto.titulo}
            </h1>
            <p className="text-lg mb-6 max-w-xl">{produto.desc}</p>
            <p className="text-2xl font-bold mb-8">{produto.preco}</p>

            {/* Seleção de Tamanho */}
            <div>
              <label className="block mb-2 font-semibold text-lg">
                Selecione o tamanho
              </label>
              <div className="grid grid-cols-5 gap-2 max-w-xs">
                {produto.tamanhos.map((tamanho) => (
                  <SizeButton
                    key={tamanho}
                    size={tamanho}
                    isSelected={selectedSize === tamanho}
                    onClick={() => setSelectedSize(tamanho)}
                  />
                ))}
              </div>
              {!selectedSize && (
                <div className="text-xs text-red-500 mt-2">
                  Selecione um tamanho
                </div>
              )}
            </div>

            {/* Seleção de Quantidade */}
            <div className="mt-4">
              <label className="block mb-2 font-semibold text-lg">
                Quantidade
              </label>
              <select
                className="border border-neutral-700 bg-black text-neutral-200 rounded px-3 py-2"
                value={quantidade}
                onChange={(e) => setQuantidade(parseInt(e.target.value))}
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>

            {/* Botões */}
            <div className="flex flex-col md:flex-row gap-4 mt-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 min-w-[100px] py-4 bg-neutral-800 text-neutral-200 rounded-full text-sm shadow-md hover:bg-neutral-700 transition uppercase tracking-wide"
              >
                Adicionar ao Carrinho
              </button>
              <button
                onClick={() => navigate("/checkout")}
                className="flex-1 min-w-[100px] py-4 bg-neutral-700 text-white border-2 border-neutral-600 rounded-full text-sm shadow-md hover:bg-neutral-600 transition uppercase tracking-wide"
              >
                Comprar Agora
              </button>
            </div>
          </div>

          {/* Drop ao lado das imagens, mas abaixo dos botões */}
          <div className="mt-10">
            <Drop perguntas={perguntas} />
          </div>
        </div>
      </div>

      {/* Produtos Relacionados */}
      <h1 className="font-serif text-2xl font-bold text-center my-8">
        Relacionados
      </h1>
      <Section
        handleProductClick={(idProduto: string) =>
          navigate(`/produto/${idProduto}`)
        }
        filtroMarca={produto.marca}
      />
    </div>
  );
};

export default Produto;
