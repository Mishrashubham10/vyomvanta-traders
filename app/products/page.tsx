"use client";

import { useCart } from '@/context/CartContext';
import { notFound } from 'next/navigation';
import { categories } from '@/data/products';
import ProductsClient from './_ProductClient';

export default function ProductPage() {
  const { products } = useCart();

  console.log('Products here', products);

  if (!products) {
    notFound();
  }

  return (
    <ProductsClient
      products={products}
      categories={categories}
    />
  );
}