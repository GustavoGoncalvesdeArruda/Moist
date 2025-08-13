interface BotaoPersonalizadoProps {
  texto: string;
  onClick: () => void;
  className?: string;
}

const BotaoPersonalizado: React.FC<BotaoPersonalizadoProps> = ({
  texto,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={className}
    >
      {texto}
    </button>
  );
};

export default BotaoPersonalizado;
