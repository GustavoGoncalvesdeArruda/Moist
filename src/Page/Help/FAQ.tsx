import { useState } from "react";
import Sportlife from "../../image/Posters/sportlife2.png";
import Sportlife2 from "../../image/Posters/sportlife5.png";

const perguntas = [
  {
    titulo: "Quanto tempo demora para entregar?",
    descricao:
      "O prazo de entrega varia de acordo com a sua região, mas normalmente leva de 3 a 10 dias úteis após a confirmação do pagamento.",
  },
  {
    titulo: "Vocês fazem entregas internacionais?",
    descricao:
      "No momento, realizamos entregas apenas em território nacional. Estamos trabalhando para expandir nosso serviço futuramente.",
  },
  {
    titulo: "Vocês aceitam devoluções?",
    descricao:
      "Sim! Aceitamos devoluções dentro do prazo de 7 dias após o recebimento do produto, desde que ele esteja em perfeito estado e sem sinais de uso.",
  },
  {
    titulo: "Como posso rastrear meu pedido?",
    descricao:
      "Após a confirmação do envio, você receberá um e-mail com o código de rastreamento e o link para acompanhar o seu pedido em tempo real.",
  },
  {
    titulo: "Quais são as formas de pagamento aceitas?",
    descricao:
      "Aceitamos cartões de crédito, débito, PIX e boleto bancário. Você pode escolher a opção que preferir no momento da finalização da compra.",
  },
  {
    titulo: "Vocês oferecem garantia nos produtos?",
    descricao:
      "Sim! Todos os nossos produtos possuem garantia de 90 dias contra defeitos de fabricação. Consulte nossa política de garantia para mais detalhes.",
  },
];

const FAQ = () => {
  const [aberta, setAberta] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setAberta(aberta === idx ? null : idx);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-neutral-900 font-sans text-neutral-200">
      <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto py-12 px-6 md:px-12 gap-10">

        {/* Imagens à esquerda */}
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 space-y-6">
          <img src={Sportlife2} alt="Imagem ilustrativa 1" className="rounded-lg shadow-lg max-w-full h-auto" />
          <img src={Sportlife} alt="Imagem ilustrativa 2" className="rounded-lg shadow-lg max-w-full h-auto" />
        </div>

        {/* Cards à direita */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold text-red-500 text-center md:text-left mb-8 tracking-tight">
            Perguntas Frequentes
          </h1>
          <div className="space-y-4">
            {perguntas.map((item, idx) => (
              <div key={idx} className="border-b border-neutral-700 pb-2">
                <button
                  className={`w-full flex justify-between items-center text-lg font-semibold py-3 px-4 rounded-lg transition-colors duration-300
                    ${
                      aberta === idx
                        ? "bg-red-700 text-white shadow-md"
                        : "bg-neutral-800 text-neutral-200 hover:bg-neutral-700"
                    }
                  `}
                  onClick={() => handleToggle(idx)}
                  aria-expanded={aberta === idx}
                  aria-controls={`faq-desc-${idx}`}
                >
                  <span>{item.titulo}</span>
                  <span
                    className={`ml-2 text-xl transform transition-transform duration-300 ${
                      aberta === idx ? "rotate-90" : ""
                    }`}
                  >
                    ▶
                  </span>
                </button>
                {aberta === idx && (
                  <div
                    id={`faq-desc-${idx}`}
                    className="text-base text-neutral-400 mt-2 px-4 py-2 bg-neutral-800 rounded-b-lg animate-fade-in"
                  >
                    {item.descricao}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animação fade-in */}
      <style>
        {`
          .animate-fade-in {
            animation: fadeIn 0.3s ease-out;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px);}
            to { opacity: 1; transform: translateY(0);}
          }
        `}
      </style>
    </div>
  );
};

export default FAQ;
