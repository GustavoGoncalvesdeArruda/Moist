import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import Carrinho from '../../features/Carrinho/carrinho';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCarrinho = () => setCarrinhoAberto(!carrinhoAberto);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/produtos?search=${encodeURIComponent(searchTerm)}`);
      setSearchTerm('');  // Limpa o campo após busca (opcional)
    }
  };

  const handleResetSearch = () => setSearchTerm('');

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full h-16 z-10 font-sans bg-green-800 shadow-md flex justify-between items-center px-4 transition-transform duration-300">

        {/* Logo */}
        <img
          src="/src/image/logo.png"
          alt="Logo"
          className="ml-2 w-10 cursor-pointer"
          onClick={() => navigate('/paginainicial')}
        />

        {/* Barra de Pesquisa */}
        <form
          onSubmit={handleSearchSubmit}
          className="relative flex-1 mx-5 max-w-[300px]"
        >
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Buscar produtos..."
            aria-label="Buscar produtos"
            className="w-full py-2 pl-4 pr-10 text-sm rounded-full border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          />

          {searchTerm && (
            <button
              type="button"
              onClick={handleResetSearch}
              className="absolute right-8 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 text-sm"
              aria-label="Limpar busca"
            >
              &times;
            </button>
          )}

          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            aria-label="Buscar"
          >
            <FaSearch />
          </button>
        </form>

        {/* Links e Carrinho */}
        <div className="flex items-center space-x-8 mr-10 text-white text-sm">
          <Link to="/paginainicial" className="hover:text-gray-300 transition-colors duration-300">
            INÍCIO
          </Link>
          <Link to="/sobre" className="hover:text-gray-300 transition-colors duration-300">
            SOBRE
          </Link>
          <Link to="/contato" className="hover:text-gray-300 transition-colors duration-300">
            CONTATO
          </Link>

          {/* Botão Carrinho */}
          <button 
            onClick={toggleCarrinho} 
            className="text-xl focus:outline-none" 
            aria-label="Abrir carrinho"
          >
            <FaShoppingCart />
          </button>
        </div>

        {/* Menu Lateral Toggle */}
        <button
          onClick={toggleMenu}
          className="mr-10 text-white text-xl focus:outline-none"
          aria-label="Abrir menu"
        >
          ☰
        </button>
      </nav>

      {/* Menu Lateral */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 h-full w-40 bg-green-800 text-white p-5 flex flex-col shadow-lg z-20 transition-transform duration-300">
          <button
            onClick={toggleMenu}
            className="text-xl mb-5 focus:outline-none"
            aria-label="Fechar menu"
          >
            &times;
          </button>
          <Link to="/paginainicial" className="mb-4 text-xs hover:underline">
            Página Inicial
          </Link>
          <Link to="/sobre" className="mb-4 text-xs hover:underline">
            Sobre Nós
          </Link>
          <Link to="/contato" className="mb-4 text-xs hover:underline">
            Contatos
          </Link>
          <Link to="/historia" className="mb-4 text-xs hover:underline">
            Nossa História
          </Link>
          <Link to="/tenispage" className="mb-4 text-xs hover:underline">
            Tênis
          </Link>
          <Link to="/roupaspage" className="mb-4 text-xs hover:underline">
            Roupas
          </Link>
        </div>
      )}

      {/* Componente Carrinho */}
      <Carrinho
        isOpen={carrinhoAberto}
        onClose={() => setCarrinhoAberto(false)}
      />
    </div>
  );
};

export default Navbar;
