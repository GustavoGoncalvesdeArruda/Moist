import { useEffect, useState } from "react";
import ComponentsCard from "../components/molecules/Card/card";

const Historia = () => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleResetSearch = () => {
    setSearchTerm("");
  };

  const items = [
    { 
      titulo: "Origem", 
      descricao: "A Kyan Kicks nasceu de uma visão arrojada e inovadora, com o intuito de trazer aos fãs da Nike os melhores tênis, mas com um diferencial significativo: proporcionar uma experiência única que une qualidade, estilo e performance. Fundada por um grupo de apaixonados por moda e esportes, a Kyan Kicks não se vê apenas como uma loja de calçados, mas sim como uma verdadeira plataforma que celebra a cultura do esporte e da moda, e constrói uma comunidade engajada de pessoas que compartilham os mesmos valores de excelência e paixão. Desde o seu surgimento, a missão da Kyan Kicks foi se destacar no mercado com uma proposta diferenciada. Ao invés de se limitar às vendas de produtos, a marca adotou uma abordagem focada em criar uma forte conexão emocional com seus clientes, oferecendo mais do que apenas produtos – ofereceu experiências. A Kyan Kicks se preocupou em entender as necessidades e desejos de seus consumidores, e em responder a isso com mais do que um simples item de moda, mas com um estilo de vida completo, baseado no que há de mais moderno, exclusivo e autêntico." 
    },
    { 
      titulo: "Parceria com o Kyan", 
      descricao: "Uma das grandes inovações da Kyan Kicks foi trazer para o seu portfólio um dos maiores talentos da música atual, o artista Kyan, para ser o rosto da marca. Com sua personalidade única e sua conexão genuína com os jovens, ele personifica os valores da empresa: autenticidade, criatividade e paixão. A associação com o artista não foi apenas uma estratégia de marketing, mas uma forma de criar uma identificação verdadeira com seu público-alvo, mostrando que a Kyan Kicks é uma marca que respira cultura e inovação." 
    },
    { 
      titulo: "Compromisso com a Sustentabilidade", 
      descricao: "Além de seu foco na excelência dos produtos, a Kyan Kicks também se tornou conhecida por seu compromisso com a sustentabilidade e responsabilidade social. A marca adotou práticas sustentáveis em sua cadeia de produção, escolhendo fornecedores que compartilham os mesmos valores ambientais e investindo em tecnologias que reduzem seu impacto ecológico. Para a Kyan Kicks, não se trata apenas de vender tênis, mas de criar um futuro melhor, onde o estilo de vida moderno possa coexistir de maneira harmônica com o cuidado pelo planeta." 
    },
    { 
      titulo: "Crescimento e Expansão", 
      descricao: "Ao longo dos anos, a Kyan Kicks conquistou uma base de fãs leal e crescente, e se consolidou como referência no mercado de calçados premium. Sua loja não é apenas um ponto de venda, mas um espaço de experiências – com eventos exclusivos, colaborações com outros nomes influentes da cultura urbana e do esporte, e um atendimento que sempre coloca o cliente no centro de tudo." 
    },
    { 
      titulo: "O futuro da Kyan Kicks", 
      descricao: "O futuro da Kyan Kicks é promissor e continua sendo guiado pela visão de criar um legado duradouro na indústria de moda e esportes. A empresa segue a todo vapor, expandindo suas operações, lançando novas coleções e continuando a inovar para proporcionar a seus clientes o melhor que o mercado tem a oferecer, sempre com o compromisso de ser mais do que uma marca, mas um verdadeiro movimento." 
    }
  ];

  // Pesquisa apenas pelo título dos tópicos
  const filteredItems = items.filter(item =>
    item.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white text-black min-h-screen flex justify-center">
      <div className="font-serif italic bg-white rounded-xl p-8 w-full max-w-3xl shadow-xl mt-5 transition-all">
        {/* Imagem */}
        <div>
          <img 
            src="./src/image/Kyan.png" 
            alt="Kyan Kicks"
            className="rounded-2xl mx-auto w-full max-h-72 object-contain"
          />
        </div>

        {/* Barra de Pesquisa */}
        <div className="relative text-center my-8">
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Pesquise pelos tópicos..."
            className="w-72 p-2.5 pr-10 text-base rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
          {searchTerm && (
            <span
              onClick={handleResetSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-xl text-gray-500 hover:text-gray-700"
            >
              &times;
            </span>
          )}
        </div>

        {/* Conteúdo Filtrado */}
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <ComponentsCard 
              key={index} 
              titulo={item.titulo} 
              descricao={item.descricao}
            />
          ))
        ) : (
          <p className="text-gray-400 text-center">Nenhum resultado encontrado</p>
        )}
      </div>
    </div>
  );
};

export default Historia;
