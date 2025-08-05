import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carrossel from '../components/features/Carrosel/carrosel';
import ComponentsCardHistoria from '../components/molecules/CardHistoria/CardHistoria';

import img1 from '../image/BANNER 3.png';
import img2 from '../image/BANNER 2.png';
import { produtos } from '../components/features/Produtos/produtos';

interface Produto {
  id: string;
  titulo: string;
  preco: string;
  imagem: string;
  categoria: string; 
}

const PaginaInicial = () => {
  const navigate = useNavigate();
  
  const [visibleProducts, setVisibleProducts] = useState<Produto[]>(produtos.slice(0, 5));
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleProductClick = (idProduto: string) => {
    navigate(`/produto/${idProduto}`);
    window.scrollTo(0, 0);
  };

  const carrosselImages = [img1, img2];
  const roupas = produtos.filter(produto => produto.categoria === 'Roupa');

  return (
    <div className="font-sans bg-white text-white">
      <Carrossel images={carrosselImages} />

      <h1 className="font-serif mt-12 text-center text-4xl font-bold text-green-800 tracking-wide uppercase px-5">
        Sua moda, seu estilo, sua loja
      </h1>

      <div className="relative my-10">
        <h2 className="text-green-700 font-serif text-center text-2xl font-bold mb-10">
          Explore Nossos Tênis
        </h2>

        <div
          ref={scrollRef}
          className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4 px-2 auto-rows-[minmax(320px,1fr)]"
        >
          {visibleProducts.map((produto) => (
            <div
              key={produto.id}
              onClick={() => handleProductClick(produto.id)}
              className="flex flex-col rounded-xl bg-white shadow-lg cursor-pointer overflow-hidden transition-transform hover:scale-105 border border-gray-200"
              style={{ aspectRatio: '3 / 4', minHeight: 0, height: '320px' }}
            >
              <img
                src={produto.imagem}
                alt={produto.titulo}
                className="w-full h-full object-cover"
                style={{ aspectRatio: '3 / 4', height: '100%' }}
              />
              {/* Removido nome e preço */}
            </div>
          ))}
        </div>
      </div>

      {/* Card História abaixo dos itens */}
      <div className="flex justify-center my-16 px-4">
        <ComponentsCardHistoria
          titulo="Nossa História"
          descricao="Conheça a trajetória da Kyan Kicks e descubra como nos tornamos referência em estilo, qualidade e experiência no universo sneaker."
          image={img2}
        />
      </div>

      {/* Abaixo, a seção de roupas permanece igual */}
      <div className="py-12 px-5 bg-gray-100 mt-16">
        <h2 className="text-green-700 font-serif text-center text-2xl font-bold mb-10">
          Explore Nossas Roupas
        </h2>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4">
          {roupas.map((produto) => (
            <div
              key={produto.id}
              onClick={() => handleProductClick(produto.id)}
              className="flex flex-col rounded-xl bg-white shadow-lg cursor-pointer transition-transform hover:scale-105 border border-gray-200"
              style={{ aspectRatio: '3 / 4', minHeight: 0, height: '320px' }}
            >
              <img
                src={produto.imagem}
                alt={produto.titulo}
                className="w-full h-full object-cover"
                style={{ aspectRatio: '3 / 4', height: '100%' }}
              />
              {/* Removido nome e preço */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaginaInicial;
