import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ComponentsCardColecao from "../../components/props/CardFullImg/Cardimgfull";
import ComponentsImagemCard from "../../components/props/CardImg/CardImagem";
import Section from "../../components/molecules/produtos/Section";
import Drill from '../../image/Posters/Corteiz3.jpg';
import kidwild from '../../image/Posters/Kidwild.jpg';
import Ice from '../../image/Ice.webp';
import Touca from '../../image/Touca.webp';
import Portal from '../../image/Portal.avif';
import DN from '../../image/DN8.avif';

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-serif bg-black text-white min-h-screen flex flex-col">
      <div className="flex-1">

        <div onClick={() => navigate('/artists')} role="button" tabIndex={0}>
          <ComponentsCardColecao
            titulo="Artists"
            desc="Venha conhecer mais sobre os artistas que inspiraram a criação de nossa loja."
            imagem={kidwild}
            botao="Visualizar Artistas"
          />
        </div>

        <h1 className="text-2xl font-bold text-center my-8 text-white">
          Not fashion. Just real streetwear
        </h1>

        <div className="flex flex-row justify-center items-center gap-8 p-2 my-10 w-full max-w-screen-lg mx-auto">
          <div onClick={() => navigate('/produto/40')} role="button" tabIndex={0}>
            <ComponentsImagemCard
              titulo="Air Max Portal"
              desc="Air Max Portal é um modelo icônico da Nike. Com uma combinação de estilo moderno e tecnologia avançada, ele se destaca tanto em performance quanto em moda."
              imagem={Portal}
              filtroCategoria="Tênis"
            />
          </div>

          <div onClick={() => navigate('/produto/41')} role="button" tabIndex={0}>
            <ComponentsImagemCard
              titulo="Air Max DN 8"
              desc="Air Max DN 8 é um modelo da Nike que combina estilo e conforto, com uma silhueta moderna e detalhes marcantes. Ideal para quem busca um visual ousado e autêntico."
              imagem={DN}
              filtroCategoria="Tênis"
            />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-center my-8 text-white">
          Rhyme hard. Dress harder.
        </h1>

        {/* Roupas */}
        <Section
          handleProductClick={(idProduto: string) => navigate(`/produto/${idProduto}`)}
          filtroCategoria="Roupa"
        />
      </div>

      <div onClick={() => navigate('/ukdrip')} role="button" tabIndex={0}>
        <ComponentsCardColecao
          titulo="Uk Drip"
          desc="UK Drip refere-se a um estilo de moda originário do Reino Unido, particularmente popular na cena do streetwear e do hip-hop. É caracterizado por um senso de estilo confiante e moderno, muitas vezes envolvendo roupas de marca, acessórios chamativos e uma atitude descontraída."
          imagem={Drill}
          botao="Conhecer Mais"
        />
      </div>

      <h1 className="text-2xl font-bold text-center my-8 text-white">
        From the block to the spotlight
      </h1>

      {/* Seção de Acessórios */}
      <div className="flex flex-row justify-center items-center gap-8 p-2 my-10 w-full max-w-screen-lg mx-auto overflow-x-auto">
        <div onClick={() => navigate('/products?categoria=Jóias')} role="button" tabIndex={0} className="flex-shrink-0">
          <ComponentsImagemCard
            titulo="Ice"
            desc="Ice de qualidade"
            imagem={Ice}
            filtroCategoria="Joias"
          />
        </div>

        <div onClick={() => navigate('/products?categoria=Acessórios')} role="button" tabIndex={0} className="flex-shrink-0">
          <ComponentsImagemCard
            titulo="Caps"
            desc="Acessórios especiais para cabela."
            imagem={Touca}
            filtroCategoria="Jóias"
          />
        </div>
      </div>

      {/* Acessórios */}
      <Section
        handleProductClick={(idProduto: string) => navigate(`/produto/${idProduto}`)}
        filtroCategoria="Acessórios"
      />
    </div>
  );
};

export default HomePage;
