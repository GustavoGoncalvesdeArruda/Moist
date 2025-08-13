import { useState , useEffect } from "react";
import { useNavigate , Link } from "react-router-dom";
import { FaSearch , FaShoppingCart} from "react-icons/fa";
import { produtos } from "../../molecules/produtos/produtos";
import logo from '../../../image/logoB.png'
import Carrinho from "../../molecules/carrinho/carrinho"
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCarrinho = () => setCarrinhoAberto(!carrinhoAberto);

  useEffect(() => {
    const handleScroll = () => {};
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Sugestões de produtos pelo nome
    if (value.trim()) {
      const filtered = produtos
        .filter((produto) =>
          produto.titulo.toLowerCase().includes(value.toLowerCase())
        )
        .map((produto) => produto.titulo)
        .slice(0, 5);
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchTerm)}`);
      setSearchTerm('');
      setSuggestions([]);
    }
  };

  const handleResetSearch = () => {
    setSearchTerm('');
    setSuggestions([]);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm('');
    setSuggestions([]);

    // Encontra o produto pelo título exato
    const produto = produtos.find(
      (p) => p.titulo.toLowerCase() === suggestion.toLowerCase()
    );
    if (produto) {
      navigate(`/produto/${produto.id}`);
    } else {
      navigate(`/products?search=${encodeURIComponent(suggestion)}`);
    }
  };

  return (
    <div>
      <nav className="rounded-full font-serif fixed top-2 left-0 w-full h-16 z-20 italic bg-black shadow-md flex items-center px-4 transition-transform duration-300">
      

        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="mr-4 h-20 w-20 cursor-pointer"
            onClick={() => navigate('/homepage')}
          />
        </div>

        <div className="flex-1 flex justify-center">
          <div className="flex items-center space-x-8 text-white text-base italic">
            <Link to="/about" className="hover:text-gray-300 transition-colors duration-300">
              Sobre
            </Link>
            <Link to="/contact" className="hover:text-gray-300 transition-colors duration-300">
              Suporte
            </Link>
            <Link to="/products" className="hover:text-gray-300 transition-colors duration-300">
              Produtos
            </Link>
            <></>
          </div>
        </div>

        <div className="flex items-center space-x-8">
          <form
            onSubmit={handleSearchSubmit}
            className="relative w-40"
            autoComplete="off"
          >
            <input
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              placeholder="Buscar..."
              aria-label="Buscar produtos"
              className="w-full py-1 pl-3 pr-8 text-sm rounded-3xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={handleResetSearch}
                className="absolute right-7 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 text-xs"
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
              <FaSearch size={13} />
            </button>
            
            {suggestions.length > 0 && (
              <ul className="absolute left-0 top-10 w-full bg-white border border-gray-200 rounded shadow z-50">
                {suggestions.map((suggestion, idx) => (
                  <li
                    key={idx}
                    className="px-3 py-1 hover:bg-gray-100 cursor-pointer text-black text-sm"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </form>
          <button
            onClick={toggleCarrinho}
            className="text-xl text-white focus:outline-none hover:-scale-x-100 duration-150"
            aria-label="Abrir carrinho"
          >
            <FaShoppingCart />
          </button>
          <button
            onClick={toggleMenu}
            className="text-white text-xl focus:outline-none"
            aria-label="Abrir menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="rounded-lg font-serif fixed top-0 left-0 h-full w-40 bg-black text-white p-5 flex flex-col shadow-lg z-20 transition-transform">
          <button
            onClick={toggleMenu}
            className="text-xl mb-5 focus:outline-none"
            aria-label="Fechar menu"
          >
            &times;
          </button>
          <Link to="/homepage" className="mb-4 text-xm text-3xl md:text-base">
            Página Inicial
          </Link>
          <Link to="/about" className="mb-4 text-xm text-3xl md:text-base  ">
            Sobre Nós
          </Link>
          <Link to="/contact" className="mb-4 text-xm text-3xl md:text-base  ">
            Suporte
          </Link>
          <Link to="/history" className="mb-4 text-xm text-3xl md:text-base  ">
            Nossa História
          </Link>
          <Link to="/products" className="mb-4 text-xm text-3xl md:text-base  ">
            Produtos
          </Link>
        </div>
      )}

      {carrinhoAberto && (
        <Carrinho isOpen={carrinhoAberto} onClose={toggleCarrinho} />
      )}
      
    </div>
  );
};

export default Navbar;
