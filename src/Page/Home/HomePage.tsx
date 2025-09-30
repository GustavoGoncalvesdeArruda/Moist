import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "../../components/props/Carrosel/Carrosel";
import CardCarousel from "../../components/props/Card/Carrosel";

// Imagens
import NAOPERCA from "../../image/Banner/NÃO PERCA.png";
import EXCLUSIVO from "../../image/Banner/PROMOÇÔES EXCLUSIVAS.png";
import Nike from "../../image/Logo/Nike.jpg";
import OF from "../../image/Logo/1of1.png";
import SynaWorld from "../../image/Logo/Syna.png";
import Corteiz from "../../image/Logo/Corteiz.png";
import Palace from "../../image/Logo/palace.png";
import TN from "../../image/Banner/TN.png";
import DN from "../../image/Banner/DN.png";
import DN8 from "../../image/Banner/DN 8.png";
import Max from "../../image/Banner/95.png";
import ComponentsImagemCard2 from "../../components/props/Card2/CardImagem2";
import Section from "../../components/molecules/produtos/Section";
import Acessorios from "../../image/Banner/Acessórios.png";
import Cravejados from "../../image/Banner/Cravejados.png";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const bannerSlides = [
    { imagem: NAOPERCA, botao: "Ver Promoções", link: "/promocoes" },
    { imagem: EXCLUSIVO, botao: "Ver Exclusivos", link: "/exclusivos" },
  ];

  // Lista das marcas
  const marcas = [
    { imagem: Nike, filtromarca: "Nike" },
    { imagem: OF, filtromarca: "1of1" },
    { imagem: Corteiz, filtromarca: "Corteiz" },
    { imagem: Palace, filtromarca: "Palace" },
    { imagem: SynaWorld, filtromarca: "SynaWorld" },
  ];

  return (
    <div className="font-serif bg-black text-white min-h-screen flex flex-col">
      <div className="flex-1">
        {/* Banner */}
        <Carousel slides={bannerSlides} />

        {/* Seção de marcas com carrossel */}
        <h1 className="text-2xl font-bold text-center my-8">MARCAS</h1>
        <CardCarousel cards={marcas} /> {/* ⬅️ Aqui entra o carrossel */}
      </div>

      {/* Seção Tênis */}
      <h1 className="text-2xl font-bold text-center my-8 text-white">TÊNIS</h1>
      <div className="grid grid-cols-2 gap-6 p-2 w-full max-w-screen-xl mx-auto">
        <ComponentsImagemCard2 imagem={TN} filtromarca="Nike" filtromodelo="Air Max Plus" />
        <ComponentsImagemCard2 imagem={DN} filtromarca="Adidas" filtromodelo="Air Max DN" />
        <ComponentsImagemCard2 imagem={DN8} filtromarca="NewBalance" filtromodelo="Air Max DN8" />
        <ComponentsImagemCard2 imagem={Max} filtromarca="Puma" filtromodelo="AirMax95" />
      </div>

      {/* Produtos relacionados */}
      <Section
        handleProductClick={(idProduto: string) =>
          navigate(`/produto/${idProduto}`)
        }
        filtroCategoria="Tênis"
      />

      {/* Banners lado a lado */}
      <div className="grid grid-cols-2 gap-6 p-2 w-full max-w-screen-xl mx-auto mt-12">
        <ComponentsImagemCard2 titulo="ACESSÓRIOS" imagem={Acessorios} filtrocategoria="Acessórios" />
        <ComponentsImagemCard2 titulo="CRAVEJADOS" imagem={Cravejados} filtrocategoria="Cravejados" />
      </div>


      {/* Roupas */}
      <Section
        handleProductClick={(idProduto: string) =>
          navigate(`/produto/${idProduto}`)
        }
        filtroCategoria="Camisa"
      />

     <Section
        handleProductClick={(idProduto: string) =>
          navigate(`/produto/${idProduto}`)
        }
        filtroCategoria="Bermuda"
      />

     <Section
        handleProductClick={(idProduto: string) =>
          navigate(`/produto/${idProduto}`)
        }
        filtroCategoria="Calça"
      />

     
    </div>
  );
};

export default HomePage;
