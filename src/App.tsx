import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Contato from './Page/Contato';
import Sobre from './Page/Sobre';
import Home from './Page/Home';
import Historia from './Page/Historia';
import ProdutoPage from './components/features/DetalhesCompras/TelaProduto';
import PaginaInicial from './Page/PaginaInicial';
import Tenispage from './Page/Tenis';
import Roupaspage from './Page/Roupas';

import Navbar from './components/organism/NavBar/navbar';

import { CartProvider } from './components/cartprovinder/CartContext';

function AppContent() {
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return (
    <>
      {!isHomePage && <Navbar />}
      <div className={!isHomePage ? 'pt-[60px]' : ''}>
        <Routes>
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/paginainicial" element={<PaginaInicial />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/tenispage" element={<Tenispage />} />
          <Route path="/roupaspage" element={<Roupaspage />} />
          <Route path="/produto/:idProduto" element={<ProdutoPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <AppContent />
      </Router>
    </CartProvider>
  );
}

export default App;
