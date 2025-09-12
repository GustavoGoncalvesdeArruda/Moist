import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { produtos } from "../../components/molecules/produtos/produtos";
import BotaoPersonalizado from "../../components/props/Button/button";

const Products = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  window.scrollTo(0, 0);

  const [search, setSearch] = useState('');
  const [categoria, setCategoria] = useState('');
  const [precoMin, setPrecoMin] = useState('');
  const [precoMax, setPrecoMax] = useState('');

  const categorias = Array.from(new Set(produtos.map(p => p.categoria).filter(Boolean)));

  useEffect(() => {
    const categoriaURL = searchParams.get('categoria');
    if (categoriaURL) {
      setCategoria(categoriaURL);
    }
  }, [searchParams]);

  const parsePreco = (preco: string) => {
    const num = Number(preco.replace(/[^\d,]/g, '').replace(',', '.'));
    return isNaN(num) ? 0 : num;
  };

  const filteredProducts = produtos.filter((produto) => {
    const matchNome = produto.titulo.toLowerCase().includes(search.toLowerCase());
    const matchCategoria = categoria ? produto.categoria === categoria : true;
    const precoNumber = parsePreco(produto.preco);
    const matchPrecoMin = precoMin ? precoNumber >= Number(precoMin) : true;
    const matchPrecoMax = precoMax ? precoNumber <= Number(precoMax) : true;
    return matchNome && matchCategoria && matchPrecoMin && matchPrecoMax;
  });

  const handleProductClick = (idProduto: string) => {
    navigate(`/produto/${idProduto}`);
  };

  return (
    <div className="flex min-h-screen bg-black text-neutral-200">
      <aside className="w-full max-w-xs p-4 border-r border-neutral-800 flex flex-col gap-4 bg-neutral-900">
        <h2 className="text-xl font-bold mb-2">Filtros</h2>
        <input
          type="text"
          placeholder="Buscar por nome"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border border-neutral-700 bg-neutral-800 text-neutral-200 rounded px-3 py-2 mb-2 placeholder-neutral-400"
        />
        <select
          value={categoria}
          onChange={e => setCategoria(e.target.value)}
          className="border border-neutral-700 bg-neutral-800 text-neutral-200 rounded px-3 py-2 mb-2"
        >
          <option value="">Todas categorias</option>
          {categorias.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Preço mínimo"
          value={precoMin}
          onChange={e => setPrecoMin(e.target.value)}
          className="border border-neutral-700 bg-neutral-800 text-neutral-200 rounded px-3 py-2 mb-2 placeholder-neutral-400"
          min={0}
        />
        <input
          type="number"
          placeholder="Preço máximo"
          value={precoMax}
          onChange={e => setPrecoMax(e.target.value)}
          className="border border-neutral-700 bg-neutral-800 text-neutral-200 rounded px-3 py-2 mb-2 placeholder-neutral-400"
          min={0}
        />
        <button
          onClick={() => {
            setSearch('');
            setCategoria('');
            setPrecoMin('');
            setPrecoMax('');
          }}
          className="bg-neutral-700 text-white rounded px-3 py-2 text-sm hover:bg-neutral-600"
        >
          Limpar filtros
        </button>
      </aside>

      <main className="flex-1 bg-black">
        <div className="grid gap-5 px-5 py-10 max-w-6xl mx-auto grid-cols-[repeat(auto-fit,minmax(240px,1fr))]">
          {filteredProducts.map((produto) => (
            <div
              key={produto.id}
              onClick={() => handleProductClick(produto.id)}
              className="bg-neutral-900 rounded-lg cursor-pointer overflow-hidden shadow-lg transform transition-transform hover:scale-105"
            >
              <img
                src={produto.imagem}
                alt={produto.titulo}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-base font-bold uppercase tracking-wider text-neutral-200">
                  {produto.titulo}
                </h3>
                <p className="font-medium text-neutral-300 mt-2 italic">
                  {produto.preco}
                </p>
                {produto.categoria && (
                  <span className="block text-xs text-neutral-500 mt-1">{produto.categoria}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Botão de retorno à página inicial */}
        <div className="text-center mb-12">
          <BotaoPersonalizado
            texto="Página inicial"
            onClick={() => navigate('/homepage')}
            className="bg-black border border-neutral-700 hover:bg-neutral-800 text-white rounded-3xl px-8 py-3 text-lg italic transition"
          />
        </div>
      </main>
    </div>
  );
};

export default Products;
