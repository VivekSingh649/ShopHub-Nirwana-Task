import { Link } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItemCount } from "../features/cart/cartSlice";
import {
  setSearchTerm,
  selectSearchTerm,
} from "../features/filter/filterSlice";
import { Search, ShoppingCart } from "lucide-react";

const Header = () => {
  const dispatch = useDispatch();
  const cartItemCount = useSelector(selectCartItemCount);
  const searchTerm = useSelector(selectSearchTerm);

  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            ShopHub
          </Link>

          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <Link to="/cart" className="relative group">
            <ShoppingCart className="h-6 w-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
