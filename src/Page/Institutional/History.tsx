import { useEffect } from "react";
import Sportlife from "../../image/sportlife5.png"

const History = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const items = [
{ 
  titulo: "Nasce a Moist", 
  descricao: "Fundada com a alma das ruas europeias, a Moist é uma marca de roupa que respira o estilo UK Drip. Inspirada no cenário urbano do Reino Unido, a Moist nasceu para vestir atitude, confiança e personalidade. Mais do que moda, somos cultura das ruas transformada em tecido." 
},
{ 
  titulo: "Estilo UK Drip na Veia", 
  descricao: "O UK Drip é mais que um visual — é um lifestyle. A Moist traduz esse estilo em roupas que misturam elegância com agressividade urbana: jaquetas puffer, conjuntos tracksuit, balaclavas, moletons largos, cargos e tecidos que combinam conforto com presença. É o look que fala por você antes mesmo de abrir a boca." 
},
{ 
  titulo: "Influência das Ruas e dos Beats", 
  descricao: "Artistas como Central Cee, Nemzzz, KidWild, Skepta são as grandes referências por trás do visual Moist. O jeito como esses rappers vivem, rimam e se vestem ditam o tom de cada coleção. A Moist é feita para quem tem ritmo no passo e personalidade no drip." 
},
{ 
  titulo: "Vestuário com Identidade", 
  descricao: "Cada peça da Moist carrega a essência da rua: resistente, autêntica e cheia de presença. Não seguimos tendências, criamos narrativas. Nossas roupas são feitas para quem vive na correria, mas nunca perde o estilo. Para quem vê a moda como forma de expressão, não como padrão." 
},
{ 
  titulo: "A Nova Era do Streetwear", 
  descricao: "A Moist representa a nova geração do streetwear europeu. Queremos expandir a marca globalmente, mantendo o DNA do UK Drip em cada costura. Com colaborações musicais, lançamentos exclusivos e campanhas nas ruas, nosso objetivo é claro: ser o uniforme oficial de quem vive o corre com classe." 
}

  ];

  return (
    <div className="font-serif flex justify-center bg-neutral-100 min-h-screen py-10">
      <div className="w-full max-w-3xl bg-white shadow-lg border border-gray-200 rounded-md">
    
        {/* Header centralizado */}
        <header className="flex flex-col items-center px-6 pt-8 pb-4 border-b border-black">
          <span className="bg-black text-white font-black text-3xl px-4 py-1 rounded mb-4 tracking-tight" style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>
          </span>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 leading-tight text-center" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
            Conheça a história e o impacto da marca no universo sneaker
          </h1>

          <p className="text-gray-500 text-sm mb-2 text-center">
            Por Redação Moist News &bull; {new Date().toLocaleDateString()}
          </p>

        </header>

        {/* Imagem de destaque */}
        <div className="w-full flex justify-center bg-neutral-50 border-b border-gray-200 py-6">
          <img 
            src={Sportlife}
            alt=""  
            className="w-full max-w-full h-full object-cover rounded"
          />
        </div>
    
        {/* Conteúdo centralizado */}
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

export default History;
