import { useNavigate } from 'react-router-dom';
import BotaoPersonalizado from '../components/atoms/button/Button';

const Home = () => {
  const navigate = useNavigate(); 

  const redirecionar = () => {
    navigate('/paginainicial');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg text-center shadow-lg max-w-sm">
        <h1 className="text-2xl font-bold mb-5">Bem-vindo à Kyan Kicks!</h1>
        <p className="text-base mb-8">
          A loja onde estilo, cultura e autenticidade se encontram. Clique abaixo para começar sua jornada.
        </p>
        <BotaoPersonalizado texto="Acessar o site" onClick={redirecionar} />
      </div>
    </div>
  );
};

export default Home;
