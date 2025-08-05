import { useNavigate } from "react-router-dom";
import ComponentsCardColecao from "../../components/atoms/CardFullImg/Cardimgfull";

import UK from '../../image/UK.jpg';
import Trapstar from '../../image/Trapstar.jpg';
import Corteiz from '../../image/Corteiz.png';
import Syna from '../../image/CC.png'
import of from '../../image/1of1.png'

const Ukdrip = () => {
  const navigate = useNavigate();

  window.scrollTo({ top: 0, left: 0 });

  return (
    <div className="font-sans text-white min-h-screen flex flex-col">
      <div className="flex-1 space-y-16 py-10">


        <div>
          <ComponentsCardColecao
            titulo="Uk Drip"
            desc="O UK Drip é um estilo de moda que se originou no Reino Unido e se tornou muito popular, especialmente no contexto da música drill e streetwear. Ele se caracteriza por um visual confiante, moderno e elegante, muitas vezes combinando roupas casuais com acessórios e peças de marcas de luxo. O termo drip em si se refere a um senso de moda único e elegante, que exala confiança e sofisticação."
            imagem={UK}
          />
        </div>

        <div className='flex justify-center items-center text-2xl font-extrabold text-black'>
          <h1>Conheça mais sobre as principais marcas</h1>
        </div>

 
          <div className="flex justify-center items-center px-4">
          <div className="flex flex-row shadow-2xl overflow-hidden w-full max-w-4xl bg-white">
            <img
              src={of}
              alt="1of1"
              className="w-[380px] h-[340px] object-cover"
            />
            <div className="flex flex-col justify-center ml-16 w-full">
              <h2 className="text-2xl font-extrabold text-black tracking-wide">1of1</h2>
              <p className="text-base text-black leading-relaxed">
                A expressão "1of1" originou-se com o artista @ye.go, que a popularizou no cenário do trap brasileiro como marca da sua linha de roupas Exclusiviist. A ideia surgiu quando ele trabalhava na arte de capa de um single e criou um símbolo marcante, que acabou estampado em moletons e se tornou viral nas redes sociais.
              </p>
            </div>
          </div>
        </div>


     
        <div className="flex justify-center items-center px-4">
          <div className="flex flex-row shadow-2xl overflow-hidden w-full max-w-4xl bg-white">
            <img
              src={Trapstar}
              alt="Trapstar"
              className="w-[380px] h-[340px] object-cover"
            />
            <div className="flex flex-col justify-center ml-16 w-full">
              <h2 className="text-2xl font-extrabold text-black tracking-wide">Trapstar</h2>
              <p className="text-base text-black leading-relaxed">
                A Trapstar é uma marca de roupas que surgiu em Londres e que, hoje em dia, faz sucesso pelo mundo. Principalmente entre o público que acompanha o cenário de trap e de streetwear, essa é uma marca bastante comentada.
              </p>
            </div>
          </div>
        </div>


 
        <div className="flex justify-center items-center px-4">
          <div className="flex flex-row shadow-2xl overflow-hidden w-full max-w-4xl bg-white">
            <img
              src={Corteiz}
              alt="Corteiz"
              className="w-[380px] h-[340px] object-cover"
            />
            <div className="flex flex-col justify-center ml-16 w-full">
              <h2 className="text-2xl font-extrabold text-black tracking-wide">Corteiz</h2>
              <p className="text-base text-black leading-relaxed">
                A Corteiz é uma marca de streetwear britânica fundada em 2017 por Clint Ogbenna, conhecido como Clint 419. A marca ganhou destaque por seu logotipo de Alcatraz e por suas ações de marketing exclusivas, como lançamentos surpresa e interação direta com o público nas ruas. A Corteiz cultiva uma base de fãs leais, conectando o estilo de vida londrino com suas estratégias de marketing
              </p>
            </div>
          </div>
        </div>


  
        <div onClick={() => navigate('/SynaWorld')}>
          <ComponentsCardColecao
            titulo="Syna Wolrd"
            desc="Marca criada pelo Central Cee, e inspirado pelo estilo invernal londrino, essa coleção traz peso, conforto e identidade cultural."
            imagem={Syna}
          />
        </div>

        <h1 className='text-2xl font-bold text-center my-8 text-black'>
          STAY REAL. STAY WORLDWIDE
        </h1>
      </div>
    </div>
  );
};

export default Ukdrip;
