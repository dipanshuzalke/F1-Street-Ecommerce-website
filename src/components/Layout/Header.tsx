import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Search, Flag, LogOut, Settings } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function Header() {
  const { state, dispatch } = useApp();
  const location = useLocation();
  const cartItemsCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 font-bold text-xl">
            <Flag className="h-8 w-8 text-red-500" />
            <span className="text-white">F1 STREET</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`hover:text-red-400 transition-colors ${
                location.pathname === '/' ? 'text-red-400 border-b-2 border-red-400' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`hover:text-red-400 transition-colors ${
                location.pathname === '/products' ? 'text-red-400 border-b-2 border-red-400' : ''
              }`}
            >
              All Products
            </Link>
            <Link 
              to="/category/tees" 
              className={`hover:text-red-400 transition-colors ${
                location.pathname.includes('/category') ? 'text-red-400 border-b-2 border-red-400' : ''
              }`}
            >
              Racing Tees
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Link to="/products" className="hover:text-red-400 transition-colors">
              <Search className="h-5 w-5" />
            </Link>
            
            <Link to="/cart" className="hover:text-red-400 transition-colors relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            {state.user ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 hover:text-red-400 transition-colors">
                  <User className="h-5 w-5" />
                  <span className="hidden sm:block text-sm">{state.user.name}</span>
                </button>
                
                {/* Dropdown Menu */}
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="px-4 py-2 border-b border-gray-200">
                    <p className="text-sm font-medium text-gray-900">{state.user.name}</p>
                    <p className="text-xs text-gray-600">{state.user.email}</p>
                  </div>
                  
                  <Link 
                    to="/profile" 
                    className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    <Settings className="h-4 w-4" />
                    <span>Profile Settings</span>
                  </Link>
                  
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            ) : (
              <Link 
                to="/login" 
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}