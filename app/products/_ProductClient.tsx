'use client';

import { useEffect, useMemo } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ProductCard } from '@/components/products/ProductCard';
import { Product, ProductCategory, CategoryInfo } from '@/types/products';

interface ProductsClientProps {
  products: Product[];
  categories: CategoryInfo[];
}

export default function ProductsClient({
  products,
  categories,
}: ProductsClientProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  /* ================= CATEGORY FROM URL ================= */
  const categoryFromUrl = useMemo<ProductCategory | 'all'>(() => {
    const value = searchParams.get('category');
    return categories.some((c) => c.id === value)
      ? (value as ProductCategory)
      : 'all';
  }, [searchParams, categories]);

  /* ================= FILTERED PRODUCTS ================= */
  const filteredProducts = useMemo(() => {
    if (categoryFromUrl === 'all') return products;
    return products.filter((p) => p.category === categoryFromUrl);
  }, [products, categoryFromUrl]);

  /* ================= UPDATE URL ================= */
  const handleCategoryChange = (category: ProductCategory | 'all') => {
    const params = new URLSearchParams(searchParams.toString());

    if (category === 'all') {
      params.delete('category');
    } else {
      params.set('category', category);
    }

    router.push(params.toString() ? `${pathname}?${params}` : pathname, {
      scroll: false,
    });
  };

  return (
    <div className="w-full">
      {/* ================= HERO ================= */}
      <section className="relative h-64 overflow-hidden bg-gradient-hero md:h-80">
        <Image
          src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg"
          alt="Shop Collection"
          fill
          className="object-cover opacity-30"
          priority
        />

        <div className="container-main relative z-10 flex h-full flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl font-bold text-white md:text-5xl"
          >
            Our Collection
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-white/80"
          >
            {filteredProducts.length} products
          </motion.p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="container-main py-12 md:py-16">
        {/* ===== CATEGORY FILTER ===== */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          <Button
            size="lg"
            variant={categoryFromUrl === 'all' ? 'default' : 'outline'}
            onClick={() => handleCategoryChange('all')}
          >
            All Products
          </Button>

          {categories.map((category) => (
            <Button
              key={category.id}
              size="lg"
              variant={categoryFromUrl === category.id ? 'default' : 'outline'}
              onClick={() => handleCategoryChange(category.id)}
              className={cn(categoryFromUrl === category.id && 'shadow-medium')}
            >
              {category.icon} {category.name}
            </Button>
          ))}
        </div>

        {/* ===== PRODUCTS GRID ===== */}
        <motion.div
          layout
          className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {filteredProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        {/* ===== EMPTY STATE ===== */}
        {filteredProducts.length === 0 && (
          <div className="py-20 text-center text-muted-foreground">
            No products found.
          </div>
        )}
      </section>
    </div>
  );
}