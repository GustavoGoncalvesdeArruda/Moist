import { useEffect } from "react";
import Zlatan from '../../image/Artists/Zlatan.png';
import Nemzz from '../../image/Artists/Nemzzz.jpg';
import Kidwild from '../../image/Artists/Kidwild2.jpg';
import Bradockdan from '../../image/Artists/Bradockdan.png';
import Central from '../../image/Artists/Central-cee3.png';

const Artist = () => {
  useEffect(() => {
    window.scrollTo(0, 0);  
  }, []);

  // Conteúdo
  const items = [
    {
      titulo: 'Nemzz',
      descricao:'Nemzzz, cunhado de Nemi Emmanuel Simms, é um rapper britânico de Manchester, conhecido por suas músicas como "Elevate" e "2MS". Ele começou a rapsar aos 14 anos e rapidamente se destacou no cenário musical. Nemzzz tem uma base de fãs significativa, com mais de 1.7 milhão de seguidores no TikTok e mais de 2 milhões de ouvintes mensais no Spotify. Sua música é marcada por uma combinação única de sonoridades e estilos, refletindo seu talento e criatividade. Nemzzz tem sido elogiado por sua habilidade de se adaptar e se reinventar, mantendo-se atualizado com as tendências e influências do rap e hip-hop.',
      image: Nemzz,
    },
    {
      titulo:'Kidwild',
      descricao:'Kidwild, cujo nome verdadeiro é Keaton Edmund, nasceu a 12 de dezembro de 2005. É um rapper britânico emergente conhecido pela sua música no género drill, com canções populares como «Popular Loner» e «DND». Kidwild ganhou popularidade através dos seus raps freestyle no TikTok e captou a atenção do público com a sua narrativa autêntica e letras emotivas. Desde o lançamento do seu canal no YouTube em julho de 2018, acumulou mais de 250 000 ouvintes no Spotify em julho de 2023.',
      image: Kidwild,  
    },
    { 
      titulo: "Central Cee", 
      descricao: "Oakley Neil H. T. Caesar-Su, conhecido profissionalmente como Central Cee, é um rapper e compositor britânico de Shepherd's Bush, Londres. Ele ganhou destaque em 2020 com o lançamento dos singles Day in the Life e Loading. A sua primeira mixtape, Wild West, foi lançada a 12 de março de 2021, estreando-se em segundo lugar na tabela de álbuns do Reino Unido. A sua segunda mixtape, 23, foi lançada a 25 de fevereiro de 2022 e estreou-se no topo da tabela de álbuns do Reino Unido.", 
      image: Central,
    },
    { 
      titulo: "LPT Zlatan", 
      descricao: "LPT Zlatan é um cantor, compositor e artista brasileiro que tem se destacado na cena musical com seu estilo único, mesclando elementos de rap, trap e música urbana contemporânea. Conhecido pela sua versatilidade e letras que refletem experiências pessoais e críticas sociais, LPT Zlatan conquistou uma base fiel de fãs desde o início da sua carreira. Sua trajetória começou de forma independente, lançando músicas nas plataformas digitais e ganhando reconhecimento com faixas que rapidamente viralizaram. Com uma presença marcante nas redes sociais e uma energia contagiante nos palcos, LPT Zlatan tem sido apontado como uma das promessas da nova geração do hip-hop brasileiro." ,
      image: Zlatan,
    },
    { 
      titulo: "Bradockdan", 
      descricao: "Bradockdan é um rapper, cantor e compositor brasileiro que tem ganhado destaque na cena do hip-hop nacional por seu estilo autêntico e letras impactantes. Originário de um ambiente urbano, ele traz para suas músicas narrativas que refletem a realidade das periferias brasileiras, combinando ritmo, poesia e crítica social. Com uma carreira construída principalmente na internet e nas redes sociais, Bradockdan conseguiu criar uma base sólida de fãs que se identificam com sua mensagem e sua energia nas performances ao vivo. Seu som mistura influências do rap tradicional com elementos contemporâneos do trap e do rap nacional, criando uma sonoridade única e envolvente." ,
      image: Bradockdan,
    },
  ];

  return (
    <div className="font-serif flex justify-center bg-neutral-900 min-h-screen py-10 text-neutral-200">
      <div className="w-full max-w-3xl bg-neutral-800 shadow-lg border border-neutral-700 rounded-md">
       
        {/* Cabeçalho */}
        <header className="flex flex-col items-center px-6 pt-8 pb-4 border-b border-neutral-600">
    
          {/* Título */}
          <h1
            className="text-3xl md:text-4xl font-bold mb-2 leading-tight text-center text-neutral-100"
            style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
          >
            Artistas que inspiraram a criação de nosso site!
          </h1>

          <p className="text-neutral-400 text-sm mb-2 text-center">
            Por Redação Moist News &bull; {new Date().toLocaleDateString()}
          </p>
        </header>

        {/* Imagem de capa (se quiser usar uma imagem, coloque aqui) */}
        <div className="w-full flex justify-center bg-neutral-800 border-b border-neutral-700 py-6 rounded-t-md">
          {/* Imagem de capa vazia, pode adicionar algo se quiser */}
        </div>
    
        {/* Estrutura do artigo */}
        <div className="p-6 flex flex-col items-center">
          {items.map((item, index) => (
            <div key={index} className="mb-8 max-w-2xl w-full">
              <img src={item.image} alt={`Imagem de ${item.titulo}`} className="mx-auto rounded-md mb-4" />
              <h2
                className="text-center text-2xl font-semibold mb-4 text-neutral-100"
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
              >
                {item.titulo}
              </h2>
              <p className="text-center text-neutral-300 leading-relaxed mb-4">
                {item.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artist;
