const About = () => {
  window.scrollTo(0, 0);
  return (
    <div className="font-serif flex justify-center items-start min-h-screen bg-neutral-900 py-10 text-neutral-200">
      <div className="w-full max-w-4xl bg-neutral-800 shadow-2xl border border-neutral-700 rounded-md">

        {/* Barra superior estilo portal de notícias */}
        <div className="flex items-center justify-between px-8 py-3 bg-red-700 rounded-t-md">
          <span className="text-white text-2xl font-extrabold tracking-widest font-serif uppercase">
            Moist News
          </span>
          <a
            href="https://www.instagram.com/kyan/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-blue-300 transition"
          >
            <img
              src={''} // Você pode adicionar um ícone escuro aqui
              alt="Instagram Icon"
              className="w-7 h-7 mr-2"
            />
            <span className="font-semibold underline underline-offset-2">
              Siga-nos no Instagram
            </span>
          </a>
        </div>

        {/* Destaque principal */}
        <div className="px-8 py-6 border-b border-neutral-700 bg-neutral-700 rounded-b-md">
          <h1 className="font-serif text-4xl md:text-5xl font-black text-red-500 tracking-tight uppercase mb-2">
            Moist é referência em moda urbana e cultura sneaker
          </h1>
          <p className="text-neutral-400 text-base italic mb-2">
            Por Redação Moist News &bull; {new Date().toLocaleDateString()}
          </p>
          <p className="text-lg text-neutral-300 leading-relaxed max-w-2xl">
            Acompanhe as novidades, tendências e histórias que movimentam o universo
            streetwear e sneakerhead.
          </p>
        </div>

        {/* Grid de notícias */}
        <main className="px-8 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 font-serif text-neutral-200 bg-neutral-800 rounded-b-md">
          <article className="border-b-2 md:border-b-0 md:border-r-2 border-neutral-700 pb-8 md:pb-0 md:pr-8">
            <h2 className="text-2xl font-bold mb-2">Resumo</h2>
            <p className="text-justify leading-relaxed text-lg">
              A Moist é uma marca referência no universo da moda urbana e esportiva.
              Reconhecida mundialmente, a loja oferece uma curadoria refinada dos
              tênis mais desejados da Nike, Adidas e outras grandes marcas. Mais do
              que vender produtos, a Moist entrega estilo, atitude e exclusividade em
              cada par.
            </p>
          </article>

          <article>
            <h2 className="text-2xl font-bold mb-2">Inspiração</h2>
            <p className="text-justify leading-relaxed text-lg">
              A Moist é movida por mais do que moda — somos ritmo, somos cultura.
              Nosso ambiente é inspirado por batidas de hip-hop, trap e R&B, criando
              uma atmosfera que conecta estilo e som. Cada coleção é pensada como uma
              trilha sonora visual da cultura de rua.
            </p>
          </article>

          <article className="md:col-span-2 border-t-2 border-neutral-700 pt-8 mt-2 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold mb-2">História</h2>
              <p className="text-justify leading-relaxed text-lg">
                Fundada com o propósito de transformar a forma como os amantes de
                sneakers consomem moda, a Moist nasceu nas ruas e cresceu com a
                cultura. Com raízes fortes na cena urbana, a loja evoluiu de um
                projeto independente para uma potência global, mantendo sempre sua
                essência autêntica.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-2">Legado</h2>
              <p className="text-justify leading-relaxed text-lg">
                O legado da Moist é ser muito mais do que uma loja: é ser símbolo
                de identidade e expressão. Influenciando gerações com sua estética
                ousada e compromisso com a originalidade, a marca segue firme como
                ícone no cenário sneakerhead e lifestyle global.
              </p>
            </div>
          </article>
        </main>

        {/* Rodapé estilo portal */}
        <footer className="border-t border-neutral-700 px-8 py-4 bg-neutral-700 text-center text-neutral-400 text-xs font-mono tracking-widest uppercase rounded-b-md">
          Moist News &copy; {new Date().getFullYear()} — Moda, Cultura & Informação
        </footer>
      </div>
    </div>
  );
};

export default About;
