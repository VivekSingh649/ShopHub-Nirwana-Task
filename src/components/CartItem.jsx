import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../features/cart/cartSlice";
import { Trash2, Plus, Minus } from "lucide-react";
import toast from "react-hot-toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { id, title, price, image, quantity } = item;

  const handleRemove = () => {
    dispatch(removeFromCart(id));
    toast.success("Product Remove From Cart!");
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 flex items-center gap-6">
      <img
        src={image}
        alt={title}
        className="w-24 h-24 object-contain rounded-lg"
      />

      <div className="flex-1">
        <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-500 text-sm mb-2">${price}</p>

        <div className="flex items-center gap-4">
          <div className="flex items-center border border-gray-200 rounded-lg">
            <button
              onClick={() =>
                dispatch(
                  updateQuantity({
                    id,
                    quantity: quantity - 1,
                  })
                )
              }
              className="px-3 py-1 text-gray-600 hover:bg-gray-50"
              disabled={quantity <= 1}
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="px-3 py-1 text-gray-900">{quantity}</span>
            <button
              onClick={() =>
                dispatch(
                  updateQuantity({
                    id,
                    quantity: quantity + 1,
                  })
                )
              }
              className="px-3 py-1 text-gray-600 hover:bg-gray-50"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={handleRemove}
            className="text-red-500 hover:text-red-600"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="text-right">
        <p className="font-semibold text-gray-900">
          ${(price * quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
