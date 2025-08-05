import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../cartprovinder/CartContext';

type CartButtonProps = {
  onClick: () => void;
};

const CartButton = ({ onClick }: CartButtonProps) => {
  const { itens } = useCart();

  const itemCount = itens.reduce((sum, item) => sum + item.quantidade, 0);

  return (
    <button
      onClick={onClick}
      className="
        fixed top-2.5 right-5
        bg-blue-500 text-white
        border-none
        p-2
        rounded-full
        cursor-pointer
        z-[1000]
        flex items-center justify-center
        relative
        hover:bg-blue-600
        transition
      "
    >
      <FaShoppingCart size={24} />
      {itemCount > 0 && (
        <span
          className="
            absolute -top-1 -right-1
            bg-red-800 text-white
            rounded-full
            px-2 py-0.5
            text-[10px]
            leading-none
            flex items-center justify-center
            transition-all
          "
        >
          {itemCount}
        </span>
      )}
    </button>
  );
};

export default CartButton;
