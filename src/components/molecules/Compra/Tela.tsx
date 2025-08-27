import { useState, useEffect } from "react";
import { useNavigate , useParams} from "react-router-dom";
import { useCart } from "../cartprovinder/cartcontext";
import Qualidade from "../../../image/Qualidade.png";
import Qualidade2 from "../../../image/Qualidade2.png";
import Section from "../produtos/Section"

interface ProdutoType {
  id: string;
  titulo: string;
  preco: string;
  imagem: string;
  imagemdesc: string;
  desc: string;
  tamanhos: string[];
  categoria: string;
  marca:string;
}

interface ProdutoProps {
  produto: ProdutoType;
}

const ProductImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="w-full aspect-square bg-white rounded-2xl shadow-lg flex items-center justify-center overflow-hidden">
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
    className={`
      w-14 h-14 flex items-center justify-center border-2
      text-lg transition
      ${
        isSelected
          ? "bg-black text-white border-black scale-105 shadow-lg"
          : "bg-white text-neutral-900 border-neutral-300 hover:bg-neutral-200"
      }
    `}
  >
    {size}
  </button>
);

const Produto = ({ produto }: ProdutoProps) => {
  const { adicionarProduto } = useCart();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const navigate = useNavigate();
  const { idProduto } = useParams(); 

  useEffect(() => {
    // OU quando o `idProduto` (da URL) mudar, o que acontece quando você navega para um novo produto.
    window.scrollTo(0, 0);
    setSelectedSize(null); // Opcional: Limpar o tamanho selecionado ao navegar para um novo produto
  }, [idProduto]); // Adicione idProduto como dependência para que o efeito seja re-executado quando a URL mudar.

  //Alerta de Tamanho
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Por favor, selecione um tamanho.");
      return;
    }

  //Preço
    const precoNumerico = parseFloat(
      produto.preco.replace("R$", "").replace(".", "").replace(",", ".")
    );

    if (isNaN(precoNumerico)) {
      alert("Preço do produto inválido");
      return;
    }

    //Campo de envio para carrinho
    const produtoParaCarrinho = {
      id: parseInt(produto.id, 10),
      nome: produto.titulo,
      preco: precoNumerico,
      quantidade: 1,
      tamanhoSelecionado: selectedSize,
    };

    adicionarProduto(produtoParaCarrinho);
    alert("Produto adicionado ao carrinho!");
  };

  return (
    <div className="min-h-screen bg-neutral-100 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 py-12 px-4 md:px-8">
        <div className="flex flex-col gap-6 w-full md:w-1/2 items-center md:items-start">
          <ProductImage src={produto.imagem} alt={produto.titulo} />
          <ProductImage src={produto.imagemdesc} alt={`${produto.titulo} detalhe`} />
        </div>

        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-neutral-900 mb-4 tracking-tight uppercase">
              {produto.titulo}
            </h1>
            <p className="text-lg text-neutral-700 mb-6 max-w-xl">{produto.desc}</p>
            <p className="text-2xl font-bold text-neutral-900 mb-8">{produto.preco}</p>


            {/*Seleção de Tamanho*/}
            <div>
              <label className="block mb-2 font-semibold text-neutral-800 text-lg">
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
                <div className="text-xs text-red-500 mt-2">Selecione um tamanho</div>
              )}
            </div>

            {/*Botões*/}
            <div className="flex flex-col md:flex-row gap-4 mt-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 min-w-[100px] py-4 bg-black text-white rounded-full text-sm shadow-md hover:bg-neutral-800 transition uppercase tracking-wide"
              >
                Adicionar ao Carrinho
              </button>
              <button
                onClick={() => navigate("/checkout")}
                className="flex-1 min-w-[100px] py-4 bg-white text-black border-2 border-black rounded-full text-sm shadow-md hover:bg-neutral-200 transition uppercase tracking-wide"
              >
                Comprar Agora
              </button>
            </div>

            {/*Qualidade*/}
            <div>
              <h1 className="text-2xl font-serif font-semibold text-center my-8 text-black">
                Qualidade Garantida
              </h1>

              <div className="flex">
                <img src={Qualidade} alt="" className="w-12" />
                <img src={Qualidade2} alt="" className="w-20" />
              </div>

              {/*Descrição*/}
              <p className="text-clip font-serif text-xm  text-neutral-600 mt-2 justify-center">
                Nossos produtos são desenvolvidos com atenção a cada detalhe, unindo estilo, conforto e durabilidade. Utilizamos materiais de alta qualidade e processos de fabricação responsáveis, garantindo peças que resistem ao tempo e ao uso diário.<br/>
                ✅ Acabamento Premium: Costuras reforçadas e cortes precisos.<br/>
                ✅ Materiais Selecionados: Tecidos, couros e sintéticos escolhidos por sua resistência e toque agradável.<br/>
                ✅ Conforto que você sente: Modelagens pensadas para o seu dia a dia.<br/>
                ✅ Durabilidade Comprovada: Produtos feitos para acompanhar seu ritmo por muito mais tempo.<br/>
                Invista em produtos que entregam mais do que aparência — entregam confiança.
              </p>

            </div>
          </div>
        </div>
      </div>

      {/* Recomendados*/}
  
        <h1 className="font-serif text-2xl font-bold text-center my-8 text-black">Talvez você goste</h1>

          <Section
            handleProductClick={(idProduto: string) => navigate(`/produto/${idProduto}`)}
            filtroCategoria={produto.categoria}
            filtroMarca={produto.marca}
          />
    
    </div>
  );
};

export default Produto;