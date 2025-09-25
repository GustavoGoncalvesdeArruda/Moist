import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Section from "../../components/molecules/produtos/Section";

import Trapstar from '../../image/Trapstar.jpg';
import Corteiz from '../../image/Corteiz.png';
import of from '../../image/1of1.png';

const Ukdrip = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans bg-black min-h-screen text-neutral-200">
      <div className="flex-1 space-y-16 px-4 py-8">


        <div className='flex justify-center items-center text-2xl font-extrabold text-neutral-200'>
          <h1>Conheça mais sobre as principais marcas</h1>
        </div>

        <div className="flex justify-center items-center px-4">
          <div className="flex flex-row shadow-2xl overflow-hidden w-full max-w-4xl bg-neutral-900 rounded-lg border border-neutral-700">
            <img
              src={of}
              alt="1of1"
              className="w-[380px] h-[340px] object-cover"
            />
            <div className="flex flex-col justify-center ml-16 w-full">
              <h2 className="text-2xl font-extrabold text-neutral-100 tracking-wide">1of1</h2>
              <p className="text-base text-neutral-300 leading-relaxed">
                A expressão "1of1" originou-se com o artista @ye.go, que a popularizou no cenário do trap brasileiro como marca da sua linha de roupas Exclusiviist. A ideia surgiu quando ele trabalhava na arte de capa de um single e criou um símbolo marcante, que acabou estampado em moletons e se tornou viral nas redes sociais.
              </p>
            </div>
          </div>
        </div>

        <Section
          handleProductClick={(idProduto: string) => navigate(`/produto/${idProduto}`)}
          filtroMarca="1of1"
        />

        <div className="flex justify-center items-center px-4">
          <div className="flex flex-row shadow-2xl overflow-hidden w-full max-w-4xl bg-neutral-900 rounded-lg border border-neutral-700">
            <img
              src={Trapstar}
              alt="Trapstar"
              className="w-[380px] h-[340px] object-cover"
            />
            <div className="flex flex-col justify-center ml-16 w-full">
              <h2 className="text-2xl font-extrabold text-neutral-100 tracking-wide">Trapstar</h2>
              <p className="text-base text-neutral-300 leading-relaxed">
                A Trapstar é uma marca de roupas que surgiu em Londres e que, hoje em dia, faz sucesso pelo mundo. Principalmente entre o público que acompanha o cenário de trap e de streetwear, essa é uma marca bastante comentada.
              </p>
            </div>
          </div>
        </div>

        <Section
          handleProductClick={(idProduto: string) => navigate(`/produto/${idProduto}`)}
          filtroMarca="Trapstar"
        />

        <div className="flex justify-center items-center px-4">
          <div className="flex flex-row shadow-2xl overflow-hidden w-full max-w-4xl bg-neutral-900 rounded-lg border border-neutral-700">
            <img
              src={Corteiz}
              alt="Corteiz"
              className="w-[380px] h-[340px] object-cover"
            />
            <div className="flex flex-col justify-center ml-16 w-full">
              <h2 className="text-2xl font-extrabold text-neutral-100 tracking-wide">Corteiz</h2>
              <p className="text-base text-neutral-300 leading-relaxed">
                A Corteiz é uma marca de streetwear britânica fundada em 2017 por Clint Ogbenna, conhecido como Clint 419. A marca ganhou destaque por seu logotipo de Alcatraz e por suas ações de marketing exclusivas, como lançamentos surpresa e interação direta com o público nas ruas. A Corteiz cultiva uma base de fãs leais, conectando o estilo de vida londrino com suas estratégias de marketing
              </p>
            </div>
          </div>
        </div>

        <Section
          handleProductClick={(idProduto: string) => navigate(`/produto/${idProduto}`)}
          filtroMarca="Corteiz"
        />

        {/* SynaWorld */}


          <h1 className='text-2xl font-bold text-center my-8 text-neutral-200'>
            STAY REAL. STAY WORLDWIDE
          </h1>
        </div>

        <Section
          handleProductClick={(idProduto: string) => navigate(`/produto/${idProduto}`)}
          filtroMarca="SynaWorld"
        />
      </div>
  );
};

export default Ukdrip;
