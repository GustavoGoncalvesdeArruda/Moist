import { useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import ComponentsCardColecao from "../../components/atoms/CardFullImg/Cardimgfull";
import ComponentsImagemCard from "../../components/atoms/CardImg/CardImagem";
import Section from "../../components/features/produtos/Section";

import Drill from '../../image/Ukdrill.jpg';
import kidwild from '../../image/Kidwild.jpg';
import Ice from '../../image/Ice.webp'
import Touca from '../../image/Touca.webp';
import Portal from '../../image/Portal.avif';
import DN from '../../image/DN8.avif'

const HomePage = () => {
 const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollLeft = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };
   return (
    <div className="font-serif bg-white text-white min-h-screen flex flex-col">
      <div className="flex-1">

        <div onClick={() => navigate('/artists')} role="button" tabIndex={0}>

          <ComponentsCardColecao
            titulo="Artists"
            desc="Venha conhecer mais sobre os artistas que inspiraram a criação de nossa loja."
            imagem={kidwild}
            botao='Visualizar Artistas'
          />
        </div>

        <h1 className='text-2xl font-bold text-center my-8 text-black'>
          Not fashion. Just real streetwear
        </h1>


        <div className="flex flex-wrap justify-center items-center gap-8 p-2 my-10 w-full max-w-screen-lg mx-auto">
       
          <div onClick={() => navigate('/produto/15')} role="button" tabIndex={0}>
            <ComponentsImagemCard
              titulo="Air Max Portal"
              desc="Air Max Portal é um modelo icônico da Nike. Com uma combinação de estilo moderno e tecnologia avançada, ele se destaca tanto em performance quanto em moda."
              imagem={Portal}
              filtroCategoria="Tênis"
            />
          </div>
          <div onClick={() => navigate('/produto/8')} role="button" tabIndex={0}>
            <ComponentsImagemCard
              titulo="Air Max DN 8"
              desc="Air Max DN 8 é um modelo da Nike que combina estilo e conforto, com uma silhueta moderna e detalhes marcantes. Ideal para quem busca um visual ousado e autêntico."
              imagem={DN}
              filtroCategoria="Tênis"
            />
          </div>
        </div>

        <h1 className='text-2xl font-bold font-serif text-center my-8 text-black'>
          Rhyme hard. Dress harder.
        </h1>

        <div className="flex justify-center my-8">
          <div className="w-full max-w-screen-lg overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400" ref={sectionRef}>
            <Section
              handleProductClick={(idProduto: string) => navigate(`/produto/${idProduto}`)}
              scrollLeft={scrollLeft}
              scrollRight={scrollRight}
              scrollRef={sectionRef as React.RefObject<HTMLDivElement>}
              filtroCategoria="Roupa"
            />
          </div>
        </div>

        <div onClick={() => navigate('/ukdrip')} role="button" tabIndex={0}>
          <ComponentsCardColecao
            titulo='Uk Drip'
            desc='UK Drip refere-se a um estilo de moda originário do Reino Unido, particularmente popular na cena do streetwear e do hip-hop. É caracterizado por um senso de estilo confiante e moderno, muitas vezes envolvendo roupas de marca, acessórios chamativos e uma atitude descontraída.'
            imagem={Drill}
            botao='Conhecer Mais'
          />
        </div>

        <h1 className='text-2xl font-bold text-center my-8 text-black'>
          From the block to the spotlight
        </h1>

        <div className='text-center my-8 text-black'>
          <h1>the block to the spotlight</h1>
        </div>

        {/* Seção de Acessórios */}
        <div className="flex flex-row justify-center items-center gap-8 p-2 my-10 w-full max-w-screen-lg mx-auto overflow-x-auto">
          <div onClick={() => navigate('/produto/joias')} role="button" tabIndex={0} className="flex-shrink-0">
            <ComponentsImagemCard
              titulo="Ice"
              desc="Ice de qualidade"
              imagem={Ice}
              filtroCategoria="Joias"
            />
          </div>
          <div onClick={() => navigate('/produto/acessorios')} role="button" tabIndex={0} className="flex-shrink-0">
            <ComponentsImagemCard
              titulo="Caps"
              desc="Acessórios especiais para cabela."
              imagem={Touca}
              filtroCategoria="Cabelo"
            />
          </div>
        </div>

        {/* Section de produtos */}
        <div className="flex justify-center my-8">
          <div className="w-full max-w-screen-lg overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400" ref={sectionRef}>
            <Section
              handleProductClick={(idProduto: string) => navigate(`/produto/${idProduto}`)}
              scrollLeft={scrollLeft}
              scrollRight={scrollRight}
              scrollRef={sectionRef as React.RefObject<HTMLDivElement>}
              filtroCategoria="Acessórios"
            />
          </div>
        </div>

      </div>
    </div>
  );
};
export default HomePage;
