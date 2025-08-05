import { useCart } from "../../cartprovinder/CartContext";

type CarrinhoProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Carrinho = ({ isOpen, onClose }: CarrinhoProps) => {
  const { itens, removerProduto, limparCarrinho } = useCart();

  if (!isOpen) return null;

  return (
    <div
      className="
        fixed top-0 right-0 w-72 h-full
        bg-white shadow-lg
        p-5
        z-[2000]
        flex flex-col
      "     
    >


    {/*Botão Fechar*/}
      <button 
        onClick={onClose} 
        className="self-end text-gray-500 hover:text-gray-700 transition"
      >
        Fechar
      </button>


      <h2 className="text-xl font-semibold mb-4">Carrinho</h2>
      {itens.length === 0 ?   (
        <p className="text-gray-500">Seu carrinho está vazio.</p>
      ) : (
        <ul className="space-y-3">
          {itens.map((item) => (
            <li key={item.id} className="flex justify-between items-center">
              <div>
                {item.nome} - {item.quantidade} x R${item.preco.toFixed(2)}
              </div>
              <button 
                onClick={() => removerProduto(item.id)} 
                className="ml-2 text-red-500 hover:text-red-700 transition"
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      )}
      {itens.length > 0 && (
        <button 
          onClick={limparCarrinho} 
          className="mt-5 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Limpar Carrinho
        </button>
      )}
    </div>
  );
};

export default Carrinho;
