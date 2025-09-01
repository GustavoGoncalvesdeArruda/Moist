import { useCart } from "../cartprovinder/cartcontext";
import { useNavigate } from "react-router-dom";
import { Trash2, X } from "lucide-react";
import { useEffect, useState } from "react";

interface CarrinhoProps {
  isOpen: boolean;
  onClose: () => void;
}

const Carrinho = ({ isOpen, onClose }: CarrinhoProps) => {
  const { cart, removerProduto, limparCarrinho } = useCart();
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    }
  }, [isOpen]);

  if (!isOpen && !isAnimating) return null;

  const handleTransitionEnd = () => {
    if (!isOpen) {
      setIsAnimating(false);
    }
  };

  const totalValue = cart.reduce(
    (total, item) => total + item.preco * item.quantidade,
    0
  );

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${
          isOpen ? "opacity-50" : "opacity-0"
        } z-[1999]`}
        onClick={onClose}
      />

      {/* Cart Panel */}
      <aside
        className={`fixed top-0 right-0 w-80 h-full bg-zinc-900 shadow-2xl p-6 z-[2000]
          flex flex-col rounded-l-2xl border-l border-zinc-800
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        onTransitionEnd={handleTransitionEnd}
      >
        <header className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white">Seu Carrinho</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Fechar carrinho"
          >
            <X className="w-5 h-5" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto">
          {cart.length === 0 ? (
            <p className="text-gray-400 text-center mt-10">
              Seu carrinho está vazio
            </p>
          ) : (
            <ul className="space-y-4">
              {cart.map((item) => (
                <li
                  key={`${item.id}-${item.tamanhoSelecionado}`}
                  className="flex justify-between items-start bg-zinc-800 rounded-lg p-3 hover:bg-zinc-700 transition-colors"
                >
                  <div className="flex-1">
                    <p className="font-medium text-white">{item.nome}</p>
                    <p className="text-sm text-gray-300">
                      {item.quantidade} x R$ {item.preco.toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-300">
                      Tamanho: {item.tamanhoSelecionado}
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      removerProduto(item.id, item.tamanhoSelecionado)
                    }
                    className="text-gray-400 hover:text-red-500 transition-colors"
                    aria-label={`Remover ${item.nome} do carrinho`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cart.length > 0 && (
          <footer className="mt-6 space-y-4 pt-6 border-t border-zinc-700">
            <p className="text-lg font-medium text-white font-serif">
              Total: R$ {totalValue.toFixed(2)}
            </p>
            <div className="space-y-2">
              <button
                onClick={() => navigate("/checkout")}
                className="w-full bg-indigo-600 text-white py-2.5 px-4 rounded-full transition hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
              >
                Finalizar Compra
              </button>
              <button
                onClick={limparCarrinho}
                className="w-full bg-transparent text-white border border-gray-500 py-2.5 px-4 rounded-full transition hover:bg-zinc-800 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              >
                Limpar Carrinho
              </button>
            </div>
          </footer>
        )}
      </aside>
    </>
  );
};

export default Carrinho;
