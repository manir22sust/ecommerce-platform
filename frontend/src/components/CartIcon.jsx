import { Link } from "react-router-dom";

import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useCart } from "../hooks/useCart";

const CartIcon = () => {
  const { totalQuantity } = useCart();

  return (
    <Link to="/cart" className="relative">
      <ShoppingBagIcon className="w-7 h-7" />
      {totalQuantity > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center">
          {totalQuantity}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;
