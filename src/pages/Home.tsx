import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Trophy, Flag } from 'lucide-react';
import { categories } from '../data/products';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import HeroCarousel from '../components/HeroCarousel';

export default function Home() {
  const featuredProducts = products.filter(p => p.featured).slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 via-red-900 to-slate-900 text-white">
        <div className="relative min-h-[80vh] flex items-center justify-center">
          {/* Background Carousel */}
          <div className="absolute inset-0">
            <HeroCarousel />
          </div>
          
          {/* Content Overlay */}
          <div className="relative z-10 text-center space-y-6 px-4 max-w-4xl mx-auto">
            {/* Dark overlay for better text readability */}
            {/* <div className="absolute inset-0 -mx-4 bg-black/50 rounded-lg backdrop-blur-sm"></div> */}
            
            <div className="relative z-20 py-12">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-1 bg-red-500"></div>
              <Flag className="h-8 w-8 text-red-500" />
              <div className="w-12 h-1 bg-red-500"></div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight">
              <span className="block">Race Ready</span>
              <span className="block text-red-500">Street Style</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Premium F1-inspired streetwear for those who live life in the fast lane. Experience the thrill of racing culture with our exclusive collection.
            </p>
            
            <Link
              to="/products"
              className="inline-flex items-center space-x-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-200 hover:scale-105 active:scale-95 group"
            >
              <span>VIEW ALL</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Zap className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Lightning Fast</h3>
              <p className="text-gray-600">Premium materials designed for speed and comfort</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Trophy className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Championship Quality</h3>
              <p className="text-gray-600">Every piece crafted to racing team standards</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Flag className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Podium Style</h3>
              <p className="text-gray-600">Street-ready designs inspired by F1 legends</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">RACE CATEGORIES</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <div key={category.id} className="group">
                {category.isActive ? (
                  <Link to={`/category/${category.id}`} className="block">
                    <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                      <div className="aspect-square">
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h3 className="text-white font-bold text-lg text-center group-hover:text-red-400 transition-colors">
                          {category.name}
                        </h3>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="relative overflow-hidden rounded-lg shadow-lg opacity-75 cursor-not-allowed">
                    <div className="aspect-square">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/60"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <h3 className="text-white font-bold text-lg mb-2">{category.name}</h3>
                        <span className="text-gray-300 text-sm">Coming Soon</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">FEATURED GEAR</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center space-x-2 bg-slate-900 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
            >
              <span>View All Products</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}