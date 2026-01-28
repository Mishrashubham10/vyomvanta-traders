'use client';

import { useCart } from '@/context/CartContext';
import { categories } from '@/data/products';
import ProductsClient from './_ProductClient';

export default function ProductPage() {
  const { products } = useCart();

  if (!products || products.length === 0) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold">No products found</h2>
      </div>
    );
  }

  return <ProductsClient products={products} categories={categories} />;
}