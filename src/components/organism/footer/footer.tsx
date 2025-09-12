import { useNavigate, Link } from "react-router-dom";

import Visa from '../../../image/Payments/Visa.png';
import Mastercard from '../../../image/Payments/Mastercard.png';
import Elo from '../../../image/Payments/Elo.png';
import Boleto from '../../../image/Payments/Boleto.png';
import Pix from '../../../image/Payments/Pix.png';
import logob from  '../../../image/logoB.png';

interface ComponentsFooterProps {
  descricao: string;
}

const ComponentsFooter: React.FC<ComponentsFooterProps> = ({ descricao }) => {
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
          <img src={logob} alt="Logo da empresa" className="w-48 h-48 object-contain mb-4" />
          <h1 className="text-5xl font-extrabold uppercase tracking-tight text-center">{descricao}</h1>
        </div>

        {/* Navegação */}
        <nav className="w-full flex flex-wrap justify-between gap-10 max-w-6xl">
          {/* Colunas */}
          <section className="flex flex-col items-center min-w-[140px] space-y-2">
            <h2 className="font-semibold text-lg mb-2">Ajuda</h2>
            <Link to="/contact" className="text-sm hover:underline">Fale Conosco</Link>
            <Link to="/faq" className="text-sm hover:underline">Perguntas Frequentes</Link>
            <Link to="/trocas" className="text-sm hover:underline">Trocas e Devoluções</Link>
          </section>

          <section className="flex flex-col items-center min-w-[140px] space-y-2">
            <h2 className="font-semibold text-lg mb-2">Formas de Pagamento</h2>
            <div className="flex gap-3 mt-1">
              {[Visa, Mastercard, Elo, Boleto, Pix].map((img, i) => (
                <img key={i} src={img} alt={`Logo ${['Visa','Mastercard','Elo','Boleto','Pix'][i]}`} className="w-10 h-6 object-contain" />
              ))}
            </div>
          </section>

          <section className="flex flex-col items-center min-w-[140px] space-y-2">
            <h2 className="font-semibold text-lg mb-2">Páginas</h2>
            <Link to="/homepage" className="text-sm hover:underline">Início</Link>
            <Link to="/products" className="text-sm hover:underline">Produtos</Link>
            <Link to="/ukdrip" className="text-sm hover:underline">Londres</Link>
          </section>

          <section className="flex flex-col items-center min-w-[140px] space-y-2">
            <h2 className="font-semibold text-lg mb-2">Institucional</h2>
            <Link to="/about" className="text-sm hover:underline">Sobre</Link>
            <Link to="/politics" className="text-sm hover:underline">Política de Privacidade</Link>
            <Link to="/history" className="text-sm hover:underline">História</Link>
            <Link to="/synaworld" className="text-sm hover:underline">Syna World</Link>
          </section>

          <section className="flex flex-col items-center min-w-[140px] space-y-2 font-bold">
            <h2 className="sr-only">Categorias de Produtos</h2>
            <Link to="/products?categoria=Jóias" className="text-sm hover:underline">Jóias</Link>
            <Link to="/products?categoria=Tênis" className="text-sm hover:underline">Tênis</Link>
            <Link to="/products?categoria=Roupa" className="text-sm hover:underline">Roupas</Link>
            <Link to="/products?categoria=Acessórios" className="text-sm hover:underline">Acessórios</Link>
          </section>
        </nav>
      </div>
    </footer>
  );
};

export default ComponentsFooter;
