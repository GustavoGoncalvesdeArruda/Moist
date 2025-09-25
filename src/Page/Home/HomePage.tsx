import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Carousel from "../../components/props/Carrosel/Carrosel";

import Max from "../../image/Posters/95.png";
import DN from "../../image/Posters/DN.png"
import DN8 from "../../image/Posters/DN 8.png"
import TN from "../../image/Posters/TN.png"

import ComponentsImagemCard2 from "../../components/props/Card2/Card2";
import ComponentsImagemCard from "../../components/props/Card/CardImagem";
import Section from "../../components/molecules/produtos/Section";

import NAOPERCA from "../../image/Posters/NÃO PERCA.png";
import EXCLUSIVO from "../../image/Posters/PROMOÇÔES EXCLUSIVAS.png";
import Nike from "../../image/Logo/Nike.png";
import OF from "../../image/Logo/1of1.png";
import SynaWorld from "../../image/Logo/SynaWorld.jpg";
import Corteiz from "../../image/Logo/Corteiz.jpg";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Slides configuration
  const bannerSlides = [
    {
      imagem: NAOPERCA,
      botao: "Ver Promoções",
      link: "/promocoes",
    },
    {
      imagem: EXCLUSIVO,
      botao: "Ver Exclusivos",
      link: "/exclusivos",
    },
  ];

  return (
    <div className="font-serif bg-black text-white min-h-screen flex flex-col">
      <div className="flex-1">
       
       
        {/* Banner Carousel */}
        <div className="w-full h-full">
          <Carousel slides={bannerSlides} />
        </div>



        {/* Seção de links das marcas */}
        <h1 className="text-2xl font-bold text-center my-8 text-white">
          MARCAS
        </h1>
        <div className="flex flex-row justify-center items-center gap-8 p-2 my-10 w-full max-w-screen-lg mx-auto">
          <div role="button" tabIndex={0}>
            <ComponentsImagemCard imagem={Nike} filtromarca="Nike" />
          </div>

          <div role="button" tabIndex={0}
          >
            <ComponentsImagemCard imagem={OF} filtromarca="1of1" />
          </div>

          <div role="button" tabIndex={0}>
            <ComponentsImagemCard imagem={Corteiz} filtromarca="Corteiz" />
          </div>

          <div role="button" tabIndex={0}
          >
            <ComponentsImagemCard imagem={SynaWorld} filtromarca="SynaWorld" />
          </div>
        </div>
      </div>


    <h1 className="text-2xl font-bold text-center my-8 text-white">
      TÊNIS
    </h1>

  {/* Tênis */}
  <Section
    handleProductClick={(idProduto: string) =>
      navigate(`/products?categoria=Tênis/${idProduto}`)
    }
    filtroCategoria="Tênis"
  />

  {/* Grid de 2x2 */}
  <div className="grid grid-cols-2 gap-8 p-2 my-10 w-full max-w-screen-lg mx-auto">
    <div role="button" tabIndex={0}>
      <ComponentsImagemCard2 imagem={TN} filtromarca="Nike" filtrocategoria="Tênis" />
    </div>

    <div role="button" tabIndex={0}>
      <ComponentsImagemCard2 imagem={DN} filtromarca="Adidas" filtrocategoria="Tênis" />
    </div>

    <div role="button" tabIndex={0}>
      <ComponentsImagemCard2 imagem={DN8} filtromarca="NewBalance" filtrocategoria="Tênis" />
    </div>

    <div role="button" tabIndex={0}>
      <ComponentsImagemCard2 imagem={Max} filtromarca="Puma" filtrocategoria="Tênis" />
    </div>
  </div>
</div>
  );
};

export default HomePage;
