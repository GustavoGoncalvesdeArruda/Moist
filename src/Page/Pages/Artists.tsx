import ComponentsCardColecao from "../../components/atoms/CardFullImg/Cardimgfull";

import kid from '../../image/Kidwild2.jpg';
import Nemzzz from '../../image/Nemzzz.jpg';
import UK from '../../image/Ukdrill.jpg';

const Artist = () => {

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

         <div className="flex justify-center items-center px-4">
          <div
            className="flex flex-row shadow-2xl overflow-hidden w-full max-w-4xl bg-white"
          >
            <img
              src={Nemzzz}
              className="w-[380px] h-[340px] object-cover"
            />
            <div className="flex flex-col justify-center ml-16 w-full">
              <h2 className="text-2xl font-extrabold text-black tracking-wide">Nemzzz</h2>
              <p className="text-base text-black leading-relaxed">
              Nemzzz, cujo nome verdadeiro é Nemiah Emmanuel Simms, é um rapper britânico nascido em 28 de março de 2004. Ele ganhou reconhecimento em 2021 com as faixas "Elevate" e "2MS". Em 2024, lançou sua primeira mixtape, "Do Not Disturb", que estreou na 17ª posição na parada de álbuns do Reino Unido. Além de sua carreira musical, Nemzzz também está em uma turnê europeia de sucesso, com performances energéticas e carismáticas, consolidando-o como uma promessa do rap britânico </p>
            </div>
          </div>
        </div>
      
         <div className="flex justify-center items-center px-4">
          <div
            className="flex flex-row shadow-2xl overflow-hidden w-full max-w-4xl bg-white"
          >
            <img
              src={kid}
              className="w-[380px] h-[340px] object-cover"
            />
            <div className="flex flex-col justify-center ml-16 w-full text-black">
              <h2 className="text-2xl font-extrabold text-black">Kidwild</h2>
              <p className="text-base text-black leading-relaxed"/>
              Kidwild começou como ator infantil interpretando Freddie Seyo na série esportiva Jamie Johnson, da CBBC. Foi postando bastidores no YouTube que ganhou popularidade online, o que o ajudou a migrar para a música 
          </div>

        </div>
      </div>
    </div>
  </div>
  );
};

export default Artist;
