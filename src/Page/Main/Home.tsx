import { useNavigate } from "react-router-dom";
import BotaoPersonalizado from "../../components/atoms/Button/button";

interface HomeProps {
  className?: string;
}

const Home: React.FC<HomeProps> = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/Homepage');
  };

  return (
    <main
      className="font-serif min-h-screen flex justify-center items-center bg-gray-100 relative"
    >


      <div className="absolute inset-0 bg-black bg-opacity-50" />

      <div className="relative z-10 bg-white bg-opacity-95 p-12 rounded-2xl shadow-xl max-w-md mx-4">
        <div className="flex flex-col items-center space-y-6">
          <img 
            src={''} 
            alt="Moist Logo" 
            className="w-24 h-24 object-contain"
            loading="eager"
          />

          <h1 className="text-3xl font-bold text-gray-900">
            Bem-vindo à Moist!
          </h1>

          <p className="text-lg text-gray-700 text-center leading-relaxed">
            A loja onde estilo, cultura e autenticidade se encontram. 
            Clique abaixo para começar sua jornada.
          </p>

          <BotaoPersonalizado
            className="w-full rounded-full bg-black text-white px-8 py-4 text-lg font-medium hover:bg-gray-900 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            texto="Acessar o site"
            onClick={handleRedirect}
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
