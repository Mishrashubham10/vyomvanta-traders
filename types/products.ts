export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: ProductCategory;
  ageGroup: AgeGroup;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  featured?: boolean;
  badge?: 'new' | 'bestseller' | 'sale';
}

export type ProductCategory =
  | 'budget'
  | 'educational'
  | 'soft-toys'
  | 'action-figures'
  | 'premium';

export type AgeGroup = '0-2' | '3-5' | '6-8' | '9-12' | '12+';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CategoryInfo {
  id: ProductCategory;
  name: string;
  description: string;
  icon: string;
  color: string;
}