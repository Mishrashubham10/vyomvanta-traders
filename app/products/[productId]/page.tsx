"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ShoppingCart,
  Heart,
  Star,
  Minus,
  Plus,
  ArrowLeft,
  Truck,
  Shield,
  RefreshCcw,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ProductCard } from '@/components/products/ProductCard';

export default function ProductDetailsPage() {
  const { productId } = useParams<{ productId: string }>();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === productId);
  const relatedProducts = products
    .filter((p) => p.category === product?.category && p.id !== productId)
    .slice(0, 4);
  const category = categories.find((c) => c.id === product?.category);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <h1 className="font-display text-2xl font-bold mb-4">
            Product not found
          </h1>
          <Button asChild>
            <Link href="/shop">Back to Shop</Link>
          </Button>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case 'new':
        return 'bg-toy-mint text-white';
      case 'bestseller':
        return 'bg-toy-amber text-white';
      case 'sale':
        return 'bg-toy-coral text-white';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen">
      <div className="container-main section-padding">
        {/* ============= BREADCRUMB ============= */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm text-muted-foreground mb-8"
        >
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-primary transition-colors">
            Shop
          </Link>
          <span>/</span>
          <Link
            href={`/shop?category=${product.category}`}
            className="hover:text-primary transition-colors"
          >
            {category?.name}
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </motion.div>

        {/* ================= BACK LINK ================ */}
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Shop
        </Link>

        {/* =============== PRODUCT DETAILS ================= */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* ================ IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full h-150"
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-muted">
              <Image
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-sm"
                loading='lazy'
                fill
              />
            </div>
            {product.badge && (
              <Badge
                className={cn(
                  'absolute top-4 left-4 capitalize font-semibold text-sm px-4 py-1',
                  getBadgeVariant(product.badge),
                )}
              >
                {product.badge}
              </Badge>
            )}
          </motion.div>

          {/* ============== DETAILS ============== */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* ============== CATEGORY & NAME ============= */}
            <div>
              <p className="text-sm font-medium text-primary uppercase tracking-wide mb-2">
                {category?.icon} {category?.name}
              </p>
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                {product.name}
              </h1>

              {/* ============== RATING =============== */}
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        'h-5 w-5',
                        i < Math.floor(product.rating)
                          ? 'text-toy-amber fill-toy-amber'
                          : 'text-muted stroke-muted-foreground',
                      )}
                    />
                  ))}
                </div>
                <span className="font-medium">{product.rating}</span>
                <span className="text-muted-foreground">
                  ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            {/* ============== PRICE ============== */}
            <div className="flex items-baseline gap-3">
              <span className="font-display text-4xl font-bold text-foreground">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-muted-foreground line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                  <Badge className="bg-toy-coral text-white">
                    {Math.round(
                      (1 - product.price / product.originalPrice) * 100,
                    )}
                    % OFF
                  </Badge>
                </>
              )}
            </div>

            {/* =============== DESCRIPTION ================ */}
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* =============== DETAILS LIST =============== */}
            <div className="grid grid-cols-2 gap-4 py-4 border-y border-border">
              <div>
                <p className="text-sm text-muted-foreground">Age Group</p>
                <p className="font-medium">{product.ageGroup} years</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Availability</p>
                <p
                  className={cn(
                    'font-medium',
                    product.inStock ? 'text-toy-mint' : 'text-destructive',
                  )}
                >
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </p>
              </div>
            </div>

            {/* ================ QUANTITY AND ADD TO CART =============== */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3 border border-border rounded-xl px-4 py-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center font-medium">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              <Button
                className="flex-1 btn-primary font-semibold"
                size="lg"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>

              <Button variant="outline" size="lg" className="px-4">
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            {/* ============ TRUST BADGES ============== */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <Truck className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="text-xs text-muted-foreground">Free Shipping</p>
              </div>
              <div className="text-center">
                <Shield className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="text-xs text-muted-foreground">Quality Assured</p>
              </div>
              <div className="text-center">
                <RefreshCcw className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="text-xs text-muted-foreground">Easy Returns</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =============== RELATED PRODUCTS ================= */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 pt-16 border-t border-border">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}