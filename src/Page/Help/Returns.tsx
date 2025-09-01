import { useState } from "react";
import sportlife from '../../image/sportlife5.png'
import sportlife2 from '../../image/sportlife3.png'


const politicas = [
  {
    titulo: "Qual o prazo para solicitar uma troca ou devolução?",
    descricao:
      "Você pode solicitar a troca ou devolução de um produto em até 7 dias corridos após o recebimento, conforme o Código de Defesa do Consumidor. Para defeitos de fabricação, o prazo é de 90 dias.",
  },
  {
    titulo: "Quais as condições para troca ou devolução?",
    descricao:
      "O produto deve estar sem sinais de uso, com as etiquetas intactas, na embalagem original e acompanhado de todos os acessórios (se houver). Peças íntimas e produtos personalizados não podem ser trocados ou devolvidos, salvo em caso de defeito de fabricação.",
  },
  {
    titulo: "Como faço para solicitar a troca ou devolução?",
    descricao:
      "Para solicitar, entre em contato com nosso atendimento ao cliente através do e-mail [seu_email@email.com] ou telefone [seu_telefone]. Informe o número do pedido e o motivo da troca/devolução. Nossa equipe irá orientá-lo sobre os próximos passos.",
  },
  {
    titulo: "Quem paga o frete na troca ou devolução?",
    descricao:
      "Em caso de defeito de fabricação ou erro no envio por parte da loja, os custos de frete são por nossa conta. Para trocas por tamanho, cor ou desistência, o frete de devolução e o novo envio são responsabilidade do cliente.",
  },
  {
    titulo: "Como funciona o reembolso?",
    descricao:
      "Após o recebimento e análise do produto devolvido, o reembolso será processado. Se o pagamento foi via cartão de crédito, o estorno pode aparecer em até duas faturas. Para PIX ou boleto, o valor será depositado em conta bancária informada em até 5 dias úteis.",
  },
  {
    titulo: "Posso trocar por outro produto?",
    descricao:
      "Sim, você pode trocar por outro produto de igual valor. Se o novo produto tiver valor superior, a diferença poderá ser paga por PIX ou cartão de crédito. Se for de menor valor, a diferença será reembolsada.",
  },
  {
    titulo: "Recebi um produto com defeito, o que fazer?",
    descricao:
      "Se você recebeu um produto com algum defeito de fabricação, entre em contato imediatamente com nosso serviço de atendimento ao cliente. Iremos providenciar a troca ou o reembolso o mais rápido possível, cobrindo todos os custos de envio.",
  },
];

const Returns = () => {
  const [aberta, setAberta] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setAberta(aberta === idx ? null : idx);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-neutral-50 font-sans">
      <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto py-12 px-4 md:px-8 gap-8">

        {/* Imagens à esquerda (em telas maiores) ou no topo (em telas menores) */}
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 space-y-6">
          <img
            src={sportlife} // Certifique-se de que o caminho da imagem está correto
            alt="Processo de Troca e Devolução"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
          <img
            src={sportlife2} // Certifique-se de que o caminho da imagem está correto
            alt="Política de Devolução"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>

        {/* Cards de perguntas e respostas à direita (em telas maiores) ou abaixo (em telas menores) */}
        <div className="w-full md:w-1/2 md:pl-8 flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold text-neutral-900 text-center mb-8 tracking-tight">
            Política de Trocas e Devoluções
          </h1>
          <p className="text-lg text-neutral-700 text-center md:text-left mb-8 max-w-xl mx-auto md:mx-0">
            Na nossa loja, sua satisfação é prioridade! Entenda como funcionam nossas políticas para troca e devolução de produtos.
          </p>
          <div className="space-y-4">
            {politicas.map((item, idx) => (
              <div key={idx} className="border-b border-neutral-200 pb-2">
                <button
                  className={`w-full flex justify-between items-center text-lg font-semibold py-3 px-4 rounded-lg transition-colors duration-300 ease-in-out
                    ${
                      aberta === idx
                        ? "bg-black text-white shadow-md"
                        : "bg-white text-neutral-800 hover:bg-neutral-100 shadow-sm"
                    }
                  `}
                  onClick={() => handleToggle(idx)}
                  aria-expanded={aberta === idx}
                  aria-controls={`politica-desc-${idx}`}
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
                    id={`politica-desc-${idx}`}
                    className="text-base text-neutral-600 mt-2 px-4 py-2 bg-neutral-50 rounded-b-lg animate-fade-in"
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

export default Returns;