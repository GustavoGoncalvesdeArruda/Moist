interface ComponentsFooterProps {
  descricao: string;
  imagem: string;
  href: string;
}

const ComponentsFooter: React.FC<ComponentsFooterProps> = ({
  descricao,
  imagem,
  href
}) => {
  return (
    <div className="flex items-center justify-center space-x-2">
      {/* Página que será aberta */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 hover:underline"
      >
        <img
          src={imagem}
          alt={descricao}
          className="w-6 h-6 object-contain"
        />
        <p className="text-sm text-gray-600">{descricao}</p>
      </a>
    </div>
  );
};

export default ComponentsFooter;
