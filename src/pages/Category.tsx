import React from 'react';
import { useParams } from 'react-router-dom';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Category() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = categories.find(c => c.id === categoryId);
  const categoryProducts = products.filter(p => p.category === categoryId);

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <p className="text-gray-600">The requested category could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-black text-gray-900 mb-4 uppercase">{category.name}</h1>
          <div className="w-24 h-1 bg-red-600 mb-4"></div>
          <p className="text-gray-600 text-lg">
            Discover our premium collection of {category.name.toLowerCase()} designed for racing enthusiasts.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative h-64 rounded-lg overflow-hidden mb-8">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h2 className="text-3xl font-bold text-white text-center">
              {category.name} Collection
            </h2>
          </div>
        </div>

        {/* Products */}
        {categoryProducts.length > 0 ? (
          <>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900">
                Products ({categoryProducts.length})
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <div className="bg-white rounded-lg p-12 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Coming Soon</h3>
              <p className="text-gray-600">
                {category.name} products will be available soon. Stay tuned!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}