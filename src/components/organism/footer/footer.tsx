import { useNavigate, Link } from "react-router-dom";

import Visa from '../../../image/Payments/Visa.png';
import Mastercard from '../../../image/Payments/Mastercard.png';
import Elo from '../../../image/Payments/Elo.png';
import Boleto from '../../../image/Payments/Boleto.png';
import Pix from '../../../image/Payments/Pix.png';

interface ComponentsFooterProps {
  descricao: string;
  imagem: string;
}

const ComponentsFooter: React.FC<ComponentsFooterProps> = ({ imagem, descricao }) => {
  const navigate = useNavigate();

  return (
    <footer className="bg-neutral-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-10">


        {/* Logo + título clicável */}
        <div
          onClick={() => navigate('/homepage')}
          className="flex flex-col items-center cursor-pointer select-none"
          aria-label="Voltar para a página inicial"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') navigate('/homepage'); }}
        >
          <img src={imagem} alt="Logo da empresa" className="w-48 h-48 object-contain mb-4" />
          <h1 className="text-5xl font-extrabold uppercase tracking-tight text-center">{descricao}</h1>
        </div>

        {/* Navegação */}
        <nav className="w-full flex flex-wrap justify-between gap-10 max-w-6xl">


          {/* Colunas */}
          <section className="font-bold flex flex-col items-center min-w-[140px] space-y-2">
            <h2 className="font-bold text-lg mb-2">AJUDA</h2>
            <Link to="/contact" className="text-sm hover:underline">FALE CONOSCO</Link>
            <Link to="/faq" className="text-sm hover:underline">PERGUNTAS FREQUENTES</Link>
            <Link to="/trocas" className="text-sm hover:underline">TROCAS E DEVOLUÇÕES</Link>
          </section>

          <section className="flex flex-col items-center min-w-[140px] space-y-2">
            <h2 className="font-bold text-lg mb-2">FORMAS DE PAGAMENTO</h2>
            <div className="flex gap-3 mt-1">
              {[Visa, Mastercard, Elo, Boleto, Pix].map((img, i) => (
                <img key={i} src={img} alt={`Logo ${['Visa','Mastercard','Elo','Boleto','Pix'][i]}`} className="w-10 h-6 object-contain" />
              ))}
            </div>
          </section>

          <section className="font-bold flex flex-col items-center min-w-[140px] space-y-2">
            <h2 className="font-bold text-lg mb-2">PÁGINAS</h2>
            <Link to="/homepage" className="text-sm hover:underline">INÍCIO</Link>
            <Link to="/products" className="text-sm hover:underline">PRODUTOS</Link>
            <Link to="/ukdrip" className="text-sm hover:underline">LONRES</Link>
          </section>

          <section className="font-bold flex flex-col items-center min-w-[140px] space-y-2">
            <h2 className="font-bold text-lg mb-2">INSTITUCIONAL</h2>
            <Link to="/about" className="text-sm hover:underline">SOBRE</Link>
            <Link to="/politics" className="text-sm hover:underline">POLÍTICA DE PRIVACIDADE</Link>
            <Link to="/history" className="text-sm hover:underline">HISTÓRIA</Link>
            <Link to="/synaworld" className="text-sm hover:underline">SYNA WORLD</Link>
          </section>

          <section className="font-bold flex flex-col items-center min-w-[140px] space-y-2">
            <h2 className="font-bold">CATEGORIAS DE PRODUTOS</h2>
            <Link to="/products?categoria=Tênis" className="text-sm hover:underline">TÊNIS</Link>
            <Link to="/products?categoria=Calça" className="text-sm hover:underline">CALÇAS</Link>
            <Link to="/products?categoria=Casaco/Jaqueta" className="text-sm hover:underline">CASACO/JAQUETA</Link>
            <Link to="/products?categoria=Camisa" className="text-sm hover:underline">CAMISAS</Link>
            <Link to="/products?categoria=Acessórios" className="text-sm hover:underline">ACESSÓRIOS</Link>
            <Link to="/products?categoria=Bermuda" className="text-sm hover:underline">BERMUDA</Link>
            <Link to="/products?categoria=Cravejados" className="text-sm hover:underline">CRAVEJADOS</Link>

          </section>
        </nav>
      </div>
    </footer>
  );
};

export default ComponentsFooter;
