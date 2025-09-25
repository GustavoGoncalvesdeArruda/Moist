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

  const [showRoupasDropdown, setShowRoupasDropdown] = useState(false);
  const [showSneakersDropdown, setShowSneakersDropdown] = useState(false);

  // refs para leitura dentro do listener de scroll (evita stale closures)
  const roupasOpenRef = useRef(false);
  const sneakersOpenRef = useRef(false);

  // timer para pequeno debounce ao fechar (evita flicker)
  const closeTimerRef = useRef<number | null>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false); // menu lateral pesquisa

  const toggleCarrinho = () => setCarrinhoAberto((s) => !s);

  // helpers para abrir/fechar e manter refs sincronizadas
  const cancelCloseTimer = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };
  const scheduleClose = (fn: () => void, delay = 150) => {
    cancelCloseTimer();
    closeTimerRef.current = window.setTimeout(() => {
      fn();
      closeTimerRef.current = null;
    }, delay);
  };

  const openRoupas = () => {
    cancelCloseTimer();
    setShowRoupasDropdown(true);
    roupasOpenRef.current = true;
  };
  const closeRoupas = () => {
    setShowRoupasDropdown(false);
    roupasOpenRef.current = false;
  };

  const openSneakers = () => {
    cancelCloseTimer();
    setShowSneakersDropdown(true);
    sneakersOpenRef.current = true;
  };
  const closeSneakers = () => {
    setShowSneakersDropdown(false);
    sneakersOpenRef.current = false;
  };

  useEffect(() => {
    const handleScroll = () => {
      // se um dropdown estiver aberto, manter a navbar visível
      if (roupasOpenRef.current || sneakersOpenRef.current) {
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
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelCloseTimer();
    };
  }, []);

  return (
    <div>
      <nav
        className={`font-serif fixed top-0 left-0 w-full z-30 italic bg-black shadow-md flex items-center justify-between px-6 py-2 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
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

          {/* ========== Dropdown Roupas (wrapper com handlers) ========== */}
          <div
            // wrapper do link (não precisa ser grande, os handlers estão também no dropdown)
            onMouseEnter={openRoupas}
            onMouseLeave={() => scheduleClose(closeRoupas)}
            className="relative"
          >
            <Link
              to="/products?categoria=Roupas"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              ROUPAS
            </Link>

            {showRoupasDropdown && (
              <div
                // também adicionamos handlers aqui para garantir que, ao entrar no dropdown,
                // o estado permaneça aberto mesmo que o wrapper dispare mouseleave
                onMouseEnter={openRoupas}
                onMouseLeave={() => scheduleClose(closeRoupas)}
                className="fixed left-0 top-[64px] w-full bg-black shadow-lg z-40 flex justify-center items-center gap-10 py-4"
              >
                <Link
                  to="/products?categoria=Camisa"
                  onClick={closeRoupas}
                  className="text-white hover:text-gray-300"
                >
                  CAMISAS
                </Link>
                <Link
                  to="/products?categoria=Calça"
                  onClick={closeRoupas}
                  className="text-white hover:text-gray-300"
                >
                  CALÇAS
                </Link>
                <Link
                  to="/products?categoria=Conjunto"
                  onClick={closeRoupas}
                  className="text-white hover:text-gray-300"
                >
                  CONJUNTO
                </Link>
                <Link
                  to="/products?categoria=Casaco/Jaqueta"
                  onClick={closeRoupas}
                  className="text-white hover:text-gray-300"
                >
                  CASACOS
                </Link>
              </div>
            )}
          </div>

          {/* ========== Dropdown Sneakers (mesma estratégia) ========== */}
          <div
            onMouseEnter={openSneakers}
            onMouseLeave={() => scheduleClose(closeSneakers)}
            className="relative"
          >
            <Link
              to="/products?categoria=Tenis"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              SNEAKERS
            </Link>

            {showSneakersDropdown && (
              <div
                onMouseEnter={openSneakers}
                onMouseLeave={() => scheduleClose(closeSneakers)}
                className="fixed left-0 top-[64px] w-full bg-black shadow-lg z-40 flex justify-center items-center gap-10 py-4"
              >
                <Link
                  to="/products?categoria=Tênis&marca=Adidas"
                  onClick={closeSneakers}
                  className="text-white hover:text-gray-300"
                >
                  ADIDAS
                </Link>
                <Link
                  to="/products?categoria=Tênis&marca=Nike"
                  onClick={closeSneakers}
                  className="text-white hover:text-gray-300"
                >
                  NIKE
                </Link>
                <Link
                  to="/products?categoria=Tênis&marca=NewBalance"
                  onClick={closeSneakers}
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
          <Link
            to="/artists"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            ARTISTS
          </Link>
          <Link
            to="/about"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            SOBRE
          </Link>
          <Link
            to="/contact"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            CONTATO
          </Link>
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
