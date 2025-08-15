import { useEffect } from "react";

const Artist = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //Conteúdo
  const items = [
    {
      titulo: 'Nemzz',
      descricao:'',
    },
      {
        titulo:'Kidwild',
        descricao:'',
    },
    { 
      titulo: "Kyan", 
      descricao: "" 
    },
  ];

  return (
    <div className="font-serif flex justify-center bg-neutral-100 min-h-screen py-10">
      <div className="w-full max-w-3xl bg-white shadow-lg border border-gray-200 rounded-md">
       

        {/*Cabeçalho*/}
        <header className="flex flex-col items-center px-6 pt-8 pb-4 border-b border-black">
    
          {/*Título*/}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 leading-tight text-center" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
           Artista que inspiraram a criação de nosso site!
          </h1>

          <p className="text-gray-500 text-sm mb-2 text-center">
            Por Redação Moist News &bull; {new Date().toLocaleDateString()}
          </p>

        </header>

        {/*Imagem*/}
        <div className="w-full flex justify-center bg-neutral-50 border-b border-gray-200 py-6">
          <img 
            src={''}
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

export default Artist;
