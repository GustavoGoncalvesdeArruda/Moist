import { useState } from "react";

export interface FAQItem {
  titulo: string;
  descricao: string;
}

interface DropdownFAQProps {
  perguntas: FAQItem[];
  className?: string; // opcional, para customizar container
}

const DropdownFAQ: React.FC<DropdownFAQProps> = ({ perguntas, className }) => {
  const [aberta, setAberta] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setAberta(aberta === idx ? null : idx);
  };

  return (
    <div className={`space-y-4 ${className || ""}`}>
      {perguntas.map((item, idx) => (
        <div key={idx}>
          <button
            className={`w-full flex justify-between items-center text-lg font-semibold py-3 px-4 transition-colors duration-300 rounded-lg
              ${
                aberta === idx
                  ? "bg-neutral-900 text-white shadow-md"
                  : "bg-neutral-800 text-white hover:bg-neutral-700"
              }`}
            onClick={() => handleToggle(idx)}
            aria-expanded={aberta === idx}
            aria-controls={`faq-desc-${idx}`}
          >
            <span>{item.titulo}</span>

            {/* Seta minimalista */}
            <span
              className={`ml-2 text-xl transform transition-transform duration-300`}
            >
              {aberta === idx ? "▾" : "▸"}
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
  );
};

export default DropdownFAQ;
