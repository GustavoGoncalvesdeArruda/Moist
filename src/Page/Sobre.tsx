import ComponentsCard from "../components/molecules/Card/card";

const Sobre = () => {
      window.scrollTo(0, 0);
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col justify-center items-center font-serif italic bg-white text-black rounded-xl p-8 w-full max-w-xl shadow-lg mt-5 transition-all">
          
     

        {/* Imagem do Kyan */}
        <div className="flex justify-center items-center">
          <img
            src="https://i0.wp.com/rapmidia.com.br/wp-content/uploads/2023/05/Kyan-Brinks.jpg"
            alt="Kyan"
            className="h-72 rounded-lg border-4 border-white"
          />
        </div>

        {/* Nome do Kyan */}
        <div className="text-4xl text-center font-serif italic text-black mt-5">
          Kyan
        </div>

        {/* Conteúdo da página Sobre */}
        <div className="p-5 shadow-lg rounded-2xl text-justify font-serif italic text-black space-y-4 mt-5">
          <ComponentsCard
            titulo="Resumo"
            descricao="Fundador da Kyan Kicks, uma loja mundialmente famosa, onde somente os tênis mais zikas são vendidos aqui, a marca se tornou um ícone global no universo da moda e do esporte. Com uma curadoria exclusiva de modelos da Nike e outras grandes marcas, a Kyan Kicks oferece aos seus clientes não apenas produtos de alta qualidade, mas também uma experiência única de estilo e performance."
          />
          <ComponentsCard
            titulo="História"
            descricao="Kyan é um artista inovador que nasceu em um bairro simples, mas cresceu imerso em uma diversidade de influências musicais. Sua música, com forte foco no autoconhecimento e temas profundos, reflete suas próprias experiências e emoções."
          />
          <ComponentsCard
            titulo="Estilo Musical"
            descricao="Kyan mistura electronic music, hip-hop, R&B e música acústica para criar uma sonoridade única e moderna. Suas músicas combinam batidas eletrônicas com letras introspectivas sobre autoconhecimento e emoções."
          />
          <ComponentsCard
            titulo="Legado"
            descricao="O legado de Kyan é marcado pela autenticidade e inovação em sua música. Ao combinar diversos gêneros e explorar temas profundos, como o autoconhecimento e as emoções humanas, ele conquistou uma base de fãs fiel."
          />
        </div>

        {/* Botão do Instagram */}
        <a
          href="https://www.instagram.com/kyan/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center justify-center text-gray-800 bg-pink-500 px-6 py-3 rounded-2xl shadow-lg transition-all hover:bg-pink-600 hover:scale-105"
        >
          <img
            src="./image/Instagram.png"
            alt="Instagram Icon"
            className="w-5 h-5 mr-2"
          />
          Siga-o no Instagram
        </a>
      </div>
    </div>
  );
};

export default Sobre;
