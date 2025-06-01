import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../features/modal/modalSlice";
import { addToCart } from "../features/cart/cartSlice";
import { Eye, Heart, Star } from "lucide-react";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { title, price, category, image, rating } = product;

  const handleOpenModal = () => {
    dispatch(openModal(product));
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addToCart(product));
  };

  return (
    <div className="w-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-4 left-4 bg-black text-white px-3 py-1 rounded-full font-bold">
          ${price}
        </div>
      </div>
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full capitalize">
            {category}
          </span>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="ml-1 text-sm font-medium text-gray-700">
                {rating.rate}
              </span>
            </div>
            <span className="text-sm text-gray-500">
              ({rating.count} reviews)
            </span>
          </div>
        </div>
        <h3 className="font-bold text-gray-900 mb-3 line-clamp-2 text-md leading-tight">
          {title}
        </h3>
        <button
          onClick={handleAddToCart}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl h-12 font-semibold mt-2 cursor-pointer"
        >
          Add to Cart
        </button>
        <button
          onClick={handleOpenModal}
          className="w-full mt-3 flex items-center justify-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-600 hover:text-gray-800 rounded-xl h-12 font-semibold transition-colors duration-200 cursor-pointer"
        >
          <Eye className="w-5 h-5" />
          Quick View
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
