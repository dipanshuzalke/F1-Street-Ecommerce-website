export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  email: string;
  name: string;
  isAuthenticated: boolean;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  isActive: boolean;
}