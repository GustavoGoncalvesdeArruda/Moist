import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Carousel from "../../components/props/Carrosel/Carrosel";

import Max from "../../image/Banner/95.png";
import DN from "../../image/Banner/DN.png";
import DN8 from "../../image/Banner/DN 8.png";
import TN from "../../image/Banner/TN.png";

import ComponentsImagemCard2 from "../../components/props/Card2/CardImagem2";
import ComponentsImagemCard from "../../components/props/Card/CardImagem";
import Section from "../../components/molecules/produtos/Section";

import NAOPERCA from "../../image/Banner/NÃO PERCA.png";
import EXCLUSIVO from "../../image/Banner/PROMOÇÔES EXCLUSIVAS.png";
import Nike from "../../image/Logo/Nike.jpg";
import OF from "../../image/Logo/1of1.png";
import SynaWorld from "../../image/Logo/Syna.png";
import Corteiz from "../../image/Logo/Corteiz.png";
import Palace from "../../image/Logo/palace.png";
import Acessorios from "../../image/Banner/Acessórios.png";
import Cravejados from "../../image/Banner/Cravejados.png";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <div className="flex flex-row justify-center items-center gap-8 p-2 w-full max-w-screen-lg mx-auto">
          <div role="button" tabIndex={0}>
            <ComponentsImagemCard imagem={Nike} filtromarca="Nike" />
          </div>

          <div role="button" tabIndex={0}>
            <ComponentsImagemCard imagem={OF} filtromarca="1of1" />
          </div>

          <div role="button" tabIndex={0}>
            <ComponentsImagemCard imagem={Corteiz} filtromarca="Corteiz" />
          </div>

          <div role="button" tabIndex={0}>
            <ComponentsImagemCard imagem={Palace} filtromarca="Palace" />
          </div>

          <div role="button" tabIndex={0}>
            <ComponentsImagemCard imagem={SynaWorld} filtromarca="SynaWorld" />
          </div>
        </div>
      </div>

      {/* Tênis */}
      <h1 className="text-2xl font-bold text-center my-8 text-white">TÊNIS</h1>

      <div className="grid grid-cols-2 gap-6 p-2 w-full max-w-screen-xl mx-auto">
        <div role="button" tabIndex={0}>
          <ComponentsImagemCard2
            imagem={TN}
            filtromarca="Nike"
            filtromodelo="Air Max Plus"
          />
        </div>

        <div role="button" tabIndex={0}>
          <ComponentsImagemCard2
            imagem={DN}
            filtromarca="Adidas"
            filtromodelo="Air Max DN"
          />
        </div>

        <div role="button" tabIndex={0}>
          <ComponentsImagemCard2
            imagem={DN8}
            filtromarca="NewBalance"
            filtromodelo="Air Max DN8"
          />
        </div>

        <div role="button" tabIndex={0}>
          <ComponentsImagemCard2
            imagem={Max}
            filtromarca="Puma"
            filtromodelo="AirMax95"
          />
        </div>
      </div>

      <Section
        handleProductClick={(idProduto: string) =>
          navigate(`/products?categoria=Tênis/${idProduto}`)
        }
        filtroCategoria="Tênis"
      />

      {/* Banners lado a lado */}
      <div className="grid grid-cols-2 gap-6 p-2 w-full max-w-screen-xl mx-auto mt-12">
        <div role="button" tabIndex={0}>
          <ComponentsImagemCard2 titulo='ACESSÓRIOS' imagem={Acessorios} filtrocategoria="Acessórios" />
        </div>

        <div role="button" tabIndex={0}>
          <ComponentsImagemCard2 titulo='CRAVEJADOS' imagem={Cravejados} filtrocategoria="Cravejados" />
        </div>
      </div>


      {/* Seção de Acessórios */}
      <div className="w-full max-w-screen-xl mx-auto flex flex-col">
        <Section
          handleProductClick={(idProduto: string) =>
            navigate(`/products?categoria=Acessórios/${idProduto}`)
          }
          filtroCategoria="Acessórios"
        />
      </div>


      {/* Seção de Cravejados */}
      <div className="w-full max-w-screen-xl mx-auto flex flex-col">
        <Section
          handleProductClick={(idProduto: string) =>
            navigate(`/products?categoria=Cravejados/${idProduto}`)
          }
          filtroCategoria="Cravejados"
        />
      </div>
    </div>
  );
};

export default HomePage;
