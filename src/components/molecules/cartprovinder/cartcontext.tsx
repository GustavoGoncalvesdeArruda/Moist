import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface CartItem {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  tamanhoSelecionado: string;
}

interface CartContextData {
  cart: CartItem[];
  adicionarProduto: (produto: CartItem) => void;
  removerProduto: (id: number, tamanhoSelecionado: string) => void;
  limparCarrinho: () => void;
  totalItems: number;
  totalValue: number;
}

interface CartProviderProps {
  children: ReactNode;
}

const CART_STORAGE_KEY = '@MoistStore:cart';

// Criando o contexto com valor inicial vazio
const CartContext = createContext<CartContextData | null>(null);

// Hook customizado para usar o contexto
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart deve ser usado dentro de um CartProvider');
  }
  return context;
};

// Provider do carrinho
export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Sincroniza localStorage sempre que o carrinho mudar
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch {
      // Pode adicionar tratamento de erro aqui se quiser
    }
  }, [cart]);

  // Total de itens no carrinho
  const totalItems = cart.reduce((acc, item) => acc + item.quantidade, 0);
  // Valor total do carrinho
  const totalValue = cart.reduce((acc, item) => acc + item.preco * item.quantidade, 0);

  // Função para adicionar produto
  const adicionarProduto = (produto: CartItem) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex(
        item => item.id === produto.id && item.tamanhoSelecionado === produto.tamanhoSelecionado
      );

      if (index !== -1) {
        // Atualiza quantidade do produto existente
        const updatedCart = [...prevCart];
        updatedCart[index].quantidade += produto.quantidade;
        return updatedCart;
      }

      // Adiciona novo produto ao carrinho
      return [...prevCart, produto];
    });
  };

  // Função para remover produto (considerando tamanho para remover o item certo)
  const removerProduto = (id: number, tamanhoSelecionado: string) => {
    setCart((prevCart) =>
      prevCart.filter(item => !(item.id === id && item.tamanhoSelecionado === tamanhoSelecionado))
    );
  };

  // Limpa todo o carrinho
  const limparCarrinho = () => {
    setCart([]);
    localStorage.removeItem(CART_STORAGE_KEY);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        adicionarProduto,
        removerProduto,
        limparCarrinho,
        totalItems,
        totalValue
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
