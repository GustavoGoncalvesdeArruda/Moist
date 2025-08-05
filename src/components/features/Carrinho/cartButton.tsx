import { useCart } from "../cartprovinder/cartcontext";
import { ShoppingCart } from "lucide-react";

interface CartButtonProps {
  onClick: () => void;
}

const CartButton = ({ onClick }: CartButtonProps) => {
  const { cart } = useCart();

  const itemCount = cart.reduce((sum, item) => sum + item.quantidade, 0);

  return (
    <button
      onClick={onClick}
      className="fixed top-4 right-4 bg-black text-white p-3 rounded-full cursor-pointer z-[1000] flex items-center justify-center hover:bg-gray-800 transition-colors duration-200 shadow-lg"
      aria-label="Abrir carrinho"
    >
      <ShoppingCart size={20} />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
          {itemCount}
        </span>
      )}
    </button>
  );
};

export default CartButton;
