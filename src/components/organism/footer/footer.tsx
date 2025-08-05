import { useNavigate } from "react-router-dom";

import Visa from '../../../image/Payments/Visa.png'
import Mastercard from '../../../image/Payments/Mastercard.png'
import Elo from '../../../image/Payments/Elo.png'
import Boleto from '../../../image/Payments/Boleto.png'
import Pix from '../../../image/Payments/Pix.png'

interface ComponentsFooterProps {
  descricao: string;
  imagem: string;
  href: string;
}

const ComponentsFooter: React.FC<ComponentsFooterProps> = ({
  descricao,
  href
}) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black flex flex-col items-center justify-center space-y-4 w-full pb-20">
      
   
        <div onClick={() => navigate('/homepage')} className="flex items-center justify-center space-x-2">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 "
          >
            <img  
              src={''}
              alt={descricao}
              className="w-80 h-80 object-contain"
            />
            <p className="text-3xl md:text-7xl font-black text-white mb-4   tracking-tight uppercase text-center">{descricao}</p>
          </a>
        </div>


        <div className="w-full flex flex-col md:flex-row items-center justify-between px-2">
       

          <div className="flex flex-col items-center">
            <span className="font-semibold text-white mb-1">Ajuda</span>
            <a href="/contact" className="text-sm text-white hover:underline">Fale conosco</a>
            <a href="/faq" className="text-sm text-white hover:underline">Perguntas frequentes</a>
            <a href="/trocas" className="text-sm text-white hover:underline">Trocas e devoluções</a>
          </div>

 
          <div className="flex flex-col items-center">
            <span className="font-semibold text-white mb-1">Formas de Pagamento</span>
            <div className="flex gap-2 mt-1">
              <img src={Visa} alt="Visa" className="w-8 h-5 object-contain" />
              <img src={Mastercard} alt="Mastercard" className="w-8 h-5 object-contain" />
              <img src={Elo} alt="Elo" className="w-8 h-5 object-contain" />
              <img src={Boleto} alt="Boleto" className="w-8 h-5 object-contain" />
              <img src={Pix} alt="Pix" className="w-8 h-5 object-contain" />
            </div>
          </div>

         
          <div>
            <span className="font-semibold text-white mb-1">Páginas</span>
                <div className="flex flex-col items-center">
              <a href="/homepage" className="text-sm text-white hover:underline">Página inicial</a>
              <a href="/products" className="text-sm text-white hover:underline">Todos os produtos</a>
              <a href="/ukdrip" className="text-sm text-white hover:underline">Coleção de Inverno</a>
              <a href="/tennis" className="text-sm text-white hover:underline">Coleção de Tênis</a>
            </div>
          </div>

       
          <div className="flex flex-col items-center">
            <span className="font-semibold text-white mb-1">Institucional</span>
            <a href="/about" className="text-sm text-white hover:underline">Sobre nós</a>
            <a href="/politics" className="text-sm text-white hover:underline">Política de privacidade</a>
            <a href="/history" className="text-sm text-white hover:underline">Nossa história</a> 
            <a href='/synaworld' className="text-sm text-white hover:underline">Parceria com a Syna World</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComponentsFooter;
