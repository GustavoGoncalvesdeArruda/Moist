import './index.css';
import { BrowserRouter, useLocation, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { produtos } from "./components/molecules/produtos/produtos"
import { CartProvider } from './components/molecules/cartprovinder/cartcontext';


import Home from "./Page/Home/Home"
import HomePage from './Page/Home/HomePage';

import About from './Page/Institutional/About';
import History from './Page/Institutional/History';

import FAQ from "./Page/Help/FAQ"
import Contact from "./Page/Help/Contact"

import Produto from "./components/molecules/Compra/Tela"
import ComponentsFooter from "./components/organism/footer/footer";
import Navbar from './components/organism/navbar/navbar';

import Products from './Page/Pages/products';
import Artist from './Page/Pages/Artists';
import SynaWorld from './Page/Pages/SynaWorld';
import Ukdrip from './Page/Pages/UkDrip';

import logob from './image/logoB.png'

function ProdutoWrapper() {
  const { idProduto } = useParams();
   useEffect(() => {
    document.title = 'Moist';
  }, []);
  const produtoEncontrado = produtos.find(p => p.id === idProduto);

  if (!produtoEncontrado) {
    return <div>Produto não encontrado.</div>;
  }

  return <Produto produto={produtoEncontrado} />;
}

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
     <CartProvider>
      {/* Navbar sempre visível */}
      <Navbar />

      {/* Ajusta o padding top para não ficar atrás da navbar */}
      <div className={!isHomePage ? 'pt-[60px]' : ''}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<Artist />} />
          <Route path="/synaWorld" element={<SynaWorld />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/history" element={<History />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/produto/:idProduto" element={<ProdutoWrapper />} />
          <Route path="/ukdrip" element={<Ukdrip />} />
        </Routes>
      </div>

      <ComponentsFooter
        descricao="Moist Streetwear"
        imagem={logob}
      />
    </CartProvider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
