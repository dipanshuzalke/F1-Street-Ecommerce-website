import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: 'tees',
    name: 'Racing Tees',
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400',
    isActive: true
  },
  {
    id: 'jackets',
    name: 'Speed Jackets',
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400',
    isActive: false
  },
  {
    id: 'caps',
    name: 'Race Caps',
    image: 'https://images.pexels.com/photos/1078958/pexels-photo-1078958.jpeg?auto=compress&cs=tinysrgb&w=400',
    isActive: false
  },
  {
    id: 'accessories',
    name: 'Pit Accessories',
    image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=400',
    isActive: false
  },
  {
    id: 'limited',
    name: 'Limited Edition',
    image: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=400',
    isActive: false
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Monaco GP Racing Tee',
    price: 89,
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'tees',
    description: 'Premium cotton racing tee inspired by the Monaco Grand Prix. Features bold racing stripes and authentic F1 styling.',
    featured: true
  },
  {
    id: '2',
    name: 'Silverstone Speed Shirt',
    price: 95,
    image: 'https://images.pexels.com/photos/8532617/pexels-photo-8532617.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'tees',
    description: 'Lightweight performance tee with moisture-wicking technology. Perfect for street or track.'
  },
  {
    id: '3',
    name: 'Pit Crew Racing Tee',
    price: 79,
    image: 'https://images.pexels.com/photos/8532618/pexels-photo-8532618.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'tees',
    description: 'Authentic pit crew style tee with professional grade construction and racing team aesthetics.'
  },
  {
    id: '4',
    name: 'Championship Vintage Tee',
    price: 99,
    image: 'https://images.pexels.com/photos/8532619/pexels-photo-8532619.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'tees',
    description: 'Vintage-inspired racing tee celebrating legendary championship moments in F1 history.',
    featured: true
  },
  {
    id: '5',
    name: 'Grid Position Tee',
    price: 85,
    image: 'https://images.pexels.com/photos/8532620/pexels-photo-8532620.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'tees',
    description: 'Bold streetwear tee featuring grid position graphics and racing typography.'
  },
  {
    id: '6',
    name: 'Podium Finish Tee',
    price: 92,
    image: 'https://images.pexels.com/photos/8532621/pexels-photo-8532621.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'tees',
    description: 'Celebration tee design inspired by podium ceremonies and victory moments.'
  }
];