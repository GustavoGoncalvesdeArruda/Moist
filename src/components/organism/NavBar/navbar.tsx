import { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaShoppingCart, FaUserAlt, FaSearch } from "react-icons/fa";
import logo from "../../../image/Logo/logo.png";
import Carrinho from "../../molecules/carrinho/carrinho";
import Pesquisa from "../../molecules/Pesquisa/Pesquisa";

const Navbar = () => {
  const navigate = useNavigate();

  const [carrinhoAberto, setCarrinhoAberto] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef<number>(0);

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null); 
  // null = nenhum aberto, "roupas" ou "sneakers"

  const [isMenuOpen, setIsMenuOpen] = useState(false); // menu lateral pesquisa

  const toggleCarrinho = () => setCarrinhoAberto((s) => !s);

  useEffect(() => {
    const handleScroll = () => {
      // mantém navbar visível quando algum dropdown está aberto
      if (activeDropdown) {
        setShowNavbar(true);
        lastScrollY.current = window.scrollY;
        return;
      }

      if (window.scrollY > lastScrollY.current && window.scrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeDropdown]);

  return (
    <div>
      <nav
        className={`font-serif fixed top-0 left-0 w-full z-30 italic bg-black shadow-md flex items-center justify-between px-6 ${
          showNavbar ? "" : ""
        }`}
        style={{ height: "64px" }}
      >
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="h-12 w-12 cursor-pointer"
          onClick={() => navigate("/homepage")}
        />

        {/* Links principais */}
        <div className="flex items-center space-x-6 text-white text-sm italic relative">
          <Link
            to="/homepage"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            INÍCIO
          </Link>

          {/* Dropdown Roupas */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("roupas")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              to="/products?categoria=Roupas"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              ROUPAS
            </Link>

            {activeDropdown === "roupas" && (
              <div
                className="fixed w-screen left-0 bg-black shadow-lg z-40 flex justify-center items-center gap-10 py-4"
              >
                <Link
                  to="/products?categoria=Camisa"
                  className="text-white hover:text-gray-300"
                >
                  CAMISAS
                </Link>
                <Link
                  to="/products?categoria=Calça"
                  className="text-white hover:text-gray-300"
                >
                  CALÇAS
                </Link>
                <Link
                  to="/products?categoria=Conjunto"
                  className="text-white hover:text-gray-300"
                >
                  CONJUNTO
                </Link>
                <Link
                  to="/products?categoria=Casaco/Jaqueta"
                  className="text-white hover:text-gray-300"
                >
                  CASACOS
                </Link>
              </div>
            )}
          </div>

          {/* Dropdown Sneakers */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("sneakers")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              to="/products?categoria=Tenis"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              SNEAKERS
            </Link>

            {activeDropdown === "sneakers" && (
              <div
                className="fixed w-screen left-0 bg-black shadow-lg z-40 flex justify-center items-center gap-10 py-4"
              >
                <Link
                  to="/products?categoria=Tênis&marca=Adidas"
                  className="text-white hover:text-gray-300"
                >
                  ADIDAS
                </Link>
                <Link
                  to="/products?categoria=Tênis&marca=Nike"
                  className="text-white hover:text-gray-300"
                >
                  NIKE
                </Link>
                <Link
                  to="/products?categoria=Tênis&marca=NewBalance"
                  className="text-white hover:text-gray-300"
                >
                  NEW BALANCE
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/products?categoria=Cravejados"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            CRAVEJADOS
          </Link>
          <Link
            to="/products?categoria=Acessórios"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            ACESSÓRIOS
          </Link>

           <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("roupas")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              to="/products?categoria=Roupas"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              SOBRE
            </Link>

            {activeDropdown === "roupas" && (
              <div
                className="fixed w-screen left-0 bg-black shadow-lg z-40 flex justify-center items-center gap-10 py-4"
              >
                <Link
                  to="/About"
                  className="text-white hover:text-gray-300"
                >
                  SOBRE
                </Link>
                <Link
                  to="/Contact"
                  className="text-white hover:text-gray-300"
                >
                  CONTATO
                </Link>

                <Link
                  to="/Artists"
                  className="text-white hover:text-gray-300"
                >
                  ARTISTAS
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Ícones lado direito */}
        <div className="flex items-center space-x-4 text-white text-lg">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="focus:outline-none hover:scale-110 duration-150"
            aria-label="Pesquisar"
          >
            <FaSearch />
          </button>

          <button
            onClick={toggleCarrinho}
            className="focus:outline-none hover:scale-110 duration-150"
            aria-label="Abrir carrinho"
          >
            <FaShoppingCart />
          </button>

          <Link
            to="/login"
            className="hover:text-gray-300 transition-colors duration-300"
            aria-label="Login"
          >
            <FaUserAlt />
          </Link>
        </div>
      </nav>

      {/* Carrinho lateral */}
      {carrinhoAberto && (
        <Carrinho isOpen={carrinhoAberto} onClose={toggleCarrinho} />
      )}

      {/* Menu lateral pesquisa */}
      <Pesquisa isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
};

export default Navbar;
