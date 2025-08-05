import { createContext, useContext, useState, type ReactNode } from 'react';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

interface CartContextType {
  itens: Produto[];
  adicionarProduto: (produto: Produto) => void;
  removerProduto: (id: number) => void;
  limparCarrinho: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart deve ser usado dentro de um CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [itens, setItens] = useState<Produto[]>([]);

  const adicionarProduto = (produto: Produto) => {
    setItens((prevItens) => {
      const existente = prevItens.find((item) => item.id === produto.id);
      if (existente) {
        return prevItens.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + produto.quantidade }
            : item
        );
      }
      return [...prevItens, produto];
    });
  };

  const removerProduto = (id: number) => {
    setItens((prevItens) => prevItens.filter((item) => item.id !== id));
  };

  const limparCarrinho = () => {
    setItens([]);
  };

  return (
    <CartContext.Provider value={{ itens, adicionarProduto, removerProduto, limparCarrinho }}>
      {children}
    </CartContext.Provider>
  );
};
