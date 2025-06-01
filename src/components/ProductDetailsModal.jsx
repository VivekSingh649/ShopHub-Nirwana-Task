import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeModal,
  selectIsModalOpen,
  selectSelectedProduct,
} from "../features/modal/modalSlice";
import { addToCart } from "../features/cart/cartSlice";
import { X, Star } from "lucide-react";

const ProductDetailsModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsModalOpen);
  const product = useSelector(selectSelectedProduct);

  if (!isOpen || !product) {
    return null;
  }

  const { title, price, description, category, image, rating } = product;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
      onClick={() => dispatch(closeModal())}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-[90%] max-w-3xl max-h-[95vh] md:max-h-[80vh] relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute -top-3 -right-3 z-10 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full size-10 flex items-center justify-center cursor-pointer">
          <button
            onClick={() => dispatch(closeModal())}
            className="!shadow-none cursor-pointer"
            aria-label="Close modal"
          >
            <X className="size-5 text-white" />
          </button>
        </div>

        <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
          <div className="md:w-1/2 bg-gray-50 p-6 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none flex-shrink-0">
            <div className="aspect-square bg-white rounded-xl overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-contain p-4"
              />
            </div>
          </div>
          <div className="md:w-1/2 p-6 flex flex-col flex-1 overflow-hidden">
            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
              <h2 className="text-2xl font-bold mb-3 text-gray-900">{title}</h2>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1 text-sm font-medium text-gray-700">
                    {rating.rate}
                  </span>
                </div>
                <span className="text-sm text-gray-500">
                  ({rating.count} reviews)
                </span>
              </div>

              <p className="text-2xl font-bold text-blue-600 mb-4">
                ${price.toFixed(2)}
              </p>

              <div className="mb-4">
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full capitalize">
                  {category}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">Description</h3>
                <p className="text-gray-700 leading-relaxed">{description}</p>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl h-12 font-semibold mt-6 cursor-pointer transition-all duration-300 flex-shrink-0"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsModal;
