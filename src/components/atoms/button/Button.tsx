interface BotaoPersonalizadoProps {
  texto: string;
  onClick: () => void;
  corFundo?: string; // Tailwind color class opcional
  tamanhoFonte?: string; // Tailwind text size opcional
}

const BotaoPersonalizado: React.FC<BotaoPersonalizadoProps> = ({
  texto,
  onClick,
  corFundo = 'bg-blue-500',
  tamanhoFonte = 'text-base',
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        ${corFundo} 
        ${tamanhoFonte}
        text-white
        px-7 py-3
        rounded-lg
        cursor-pointer
        transition
        duration-300
        transform
        hover:brightness-110
        shadow-md
      `}
    >
      {texto}
    </button>
  );
};

export default BotaoPersonalizado;
