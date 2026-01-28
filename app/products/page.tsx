'use client';

import { useCart } from '@/context/CartContext';
import { categories } from '@/data/products';
import ProductsClient from './_ProductClient';
import React from 'react';

export default function ProductPage() {
  const { products } = useCart();

  if (!products || products.length === 0) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold">No products found</h2>
      </div>
    );
  }

  return (
    <React.Suspense fallback={null}>
      <ProductsClient products={products} categories={categories} />
    </React.Suspense>
  );
}