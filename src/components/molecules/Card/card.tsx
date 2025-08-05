interface ComponentsCardProps {
  titulo: string;
  descricao: string;
}

const ComponentsCard: React.FC<ComponentsCardProps> = ({
  titulo,
  descricao,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{titulo}</h2>
      <p className="text-gray-600">{descricao}</p>
    </div>
  );
};

export default ComponentsCard;
