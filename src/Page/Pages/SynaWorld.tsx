import { useEffect } from "react";
import Syna from '../../image/Posters/SynaW.png'

const SynaWorld = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //Conteúdo
  const items = [
    {
      titulo: '2025',
      descricao:'Em 2025, o mundo do streetwear testemunhou uma das colaborações mais inesperadas e explosivas do ano: a união entre Moist, a loja brasileira referência em cultura sneaker e estilo urbano, e Syna World, marca britânica fundada por ninguém menos que o astro do rap Central Cee.',
    },
      {
        titulo:'Central Cee',
        descricao:'Central Cee, conhecido por sua estética autêntica e letras afiadas, sempre teve um olhar voltado para o mundo. Em uma viagem a São Paulo para gravar um videoclipe, o rapper conheceu a cena do streetwear nacional — e foi aí que ouviu falar da Moist. Impressionado pela curadoria e pela energia da marca, Cee entrou em contato direto com os fundadores da loja.',
    },
    { 
      titulo: "Parceria com a Syna World", 
      descricao: "Em 2025, a Moist firmou uma colaboração histórica com a marca britânica Syna World, fundada pelo rapper Central Cee. A conexão nasceu durante uma visita do artista ao Brasil, quando ele conheceu a Moist e se encantou pela energia da marca. Juntos, criaram uma coleção exclusiva que une o melhor do streetwear europeu com o estilo urbano brasileiro. As peças trazem estampas impactantes, cortes modernos e frases bilíngues como 'Viva o Corre' e 'Stay Worldwide'. O lançamento foi um sucesso estrondoso, com evento em São Paulo e presença do próprio Central Cee. Essa parceria consolidou a Kyan Kicks como referência global de cultura urbana." 
    },
  ];

  return (
    <div className="font-serif flex justify-center bg-neutral-100 min-h-screen py-10">
      <div className="w-full max-w-3xl bg-white shadow-lg border border-gray-200 rounded-md">
       

        {/*Cabeçalho*/}
        <header className="flex flex-col items-center px-6 pt-8 pb-4 border-b border-black">
    
          {/*Título*/}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 leading-tight text-center" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
            Nossa mais nova parceria com a Syna World
          </h1>

          <p className="text-gray-500 text-sm mb-2 text-center">
            Por Redação Moist News &bull; {new Date().toLocaleDateString()}
          </p>

        </header>

        {/*Imagem*/}
        <div className="w-full flex justify-center bg-neutral-50 border-b border-gray-200 py-6">
          <img 
            src={Syna}
            alt="Imagem de capa"  
            className="w-full max-w-full h-full object-cover rounded"
          />
        </div>
    
        {/*Estrutura do Artigo*/}
        <div className="p-6 flex flex-col items-center">
          {items.map((item, index) => (
            <div key={index} className="mb-8 max-w-2xl w-full">
              <h2 className="text-center text-2xl font-semibold text-gray-800 mb-4" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                {item.titulo}
              </h2>
              <p className="text-center text-gray-700 leading-relaxed mb-4">
                {item.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SynaWorld;
