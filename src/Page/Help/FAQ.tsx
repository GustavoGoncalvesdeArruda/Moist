import { useState } from "react";
import Sportlife from "../../image/sportlife2.png"
import Sportlife2 from "../../image/sportlife5.png"

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
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br">
      <div className="flex flex-row w-full max-w">
   
        {/* Imagens à esquerda */}
        <div className="flex-col items-center justify-center w-1/2">
          <img
            src={Sportlife2}
            alt=""
          />
          <img
            src={Sportlife}
            alt=""
          />
        </div>

        {/* Cards à direita */}
        <div className="w-1/2 pl-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-black text-center mb-8">
            Perguntas Frequentes
          </h1>
          <div className="space-y-4">
            {perguntas.map((item, idx) => (
              <div key={idx} className="border-b border-gray-200 pb-2">
                <button
                  className={`w-full flex justify-between items-center text-lg font-semibold py-3 px-2 rounded transition-colors
                    ${
                      aberta === idx
                        ? "bg-black text-white"
                        : "bg-gray-100 text-black hover:bg-gray-200"
                    }
                  `}
                  onClick={() => handleToggle(idx)}
                  aria-expanded={aberta === idx}
                  aria-controls={`faq-desc-${idx}`}
                >
                  <span>{item.titulo}</span>
                  <span
                    className={`ml-2 transition-transform ${
                      aberta === idx ? "rotate-90" : ""
                    }`}
                  >
                    ▶
                  </span>
                </button>
                {aberta === idx && (
                  <div
                    id={`faq-desc-${idx}`}
                    className="text-base text-gray-700 mt-2 px-2 animate-fade-in"
                  >
                    {item.descricao}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pequena animação para fade-in */}
      <style>
        {`
          .animate-fade-in {
            animation: fadeIn 0.3s;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-8px);}
            to { opacity: 1; transform: translateY(0);}
          }
        `}
      </style>
    </div>
  );
};

export default FAQ;
