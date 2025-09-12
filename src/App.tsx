// App.tsx
import './index.css';
import { BrowserRouter, useLocation, Routes, Route, useParams } from "react-router-dom";
import { useState, useEffect } from 'react'; // ✅ Correção: import useState
import { produtos } from "./components/molecules/produtos/produtos"
import { CartProvider } from './components/molecules/cartprovinder/cartcontext';
import { supabase } from './supabaseClient';
 
import Login from "./components/molecules/Login/login";
import Register from "./components/molecules/Login/register";

import Home from "./Page/Home/Home";
import HomePage from './Page/Home/HomePage';

import About from './Page/Institutional/About';
import History from './Page/Institutional/History';
import Politics from './Page/Institutional/politics';

import FAQ from "./Page/Help/FAQ";
import Contact from "./Page/Help/Contact";
import Returns from "./Page/Help/Returns";

import Produto from "./components/molecules/Compra/Tela";
import ComponentsFooter from "./components/organism/footer/footer";
import Navbar from './components/organism/navbar/navbar';

import Products from './Page/Pages/products';
import Artist from './Page/Pages/Artists';
import SynaWorld from './Page/Pages/SynaWorld';
import Ukdrip from './Page/Pages/Londres';

import logob from './image/logoB.png';

// Interface para tasks do Supabase
interface Task {
  id: number
  title: string
}

// Componente de teste do Supabase
function SupabasePage() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetchTasks()
  }, [])

  async function fetchTasks() {
    const { data, error } = await supabase
      .from<Task>('tasks')
      .select('*')

    if (error) console.log('Erro:', error)
    else if (data) setTasks(data)
  }

  return (
    <div>
      <h1>Lista de Tasks (Supabase)</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

//  Wrapper de Produto
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

//  Conteúdo principal do app
function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <CartProvider>
      <Navbar />

      <div className={!isHomePage ? 'pt-[60px]' : ''}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/politics' element={<Politics/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/artists" element={<Artist />} />
          <Route path="/trocas" element={<Returns />} />
          <Route path="/synaWorld" element={<SynaWorld />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/history" element={<History />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/produto/:idProduto" element={<ProdutoWrapper />} />
          <Route path="/ukdrip" element={<Ukdrip />} />

          {/*  Nova rota de teste para Supabase */}
          <Route path="/tasks" element={<SupabasePage />} />
        </Routes>
      </div>

      <ComponentsFooter
        descricao="Moist Streetwear"
        imagem={logob}
      />
    </CartProvider>
  );
}

//  Root do App
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
