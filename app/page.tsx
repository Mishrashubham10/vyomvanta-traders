'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Truck, Shield, HeadphonesIcon, Gift } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { CategoryCard } from '@/components/category/CategoryCard';
import { ProductCard } from '@/components/products/ProductCard';
import { categories, featuredProducts } from '@/data/products';

import heroImage from '@/assets/hero.jpeg';

const trustBadges = [
  { icon: Truck, title: 'Free Shipping', description: 'On orders over ₹999' },
  {
    icon: Shield,
    title: 'Secure Payment',
    description: '100% secure checkout',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Always here to help',
  },
  { icon: Gift, title: 'Gift Wrapping', description: 'Free gift wrapping' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-linear-to-br from-toy-indigo/5 via-background to-toy-amber/5">
        <div className="container-main section-padding">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* ================= CONTENT ================= */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary font-semibold text-sm mb-6"
              >
                ✨ Premium Toy Collection
              </motion.span>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                Where <span className="gradient-text">Imagination</span> Comes
                to Play
              </h1>

              <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
                Discover our curated collection of toys that spark joy,
                creativity, and endless adventures.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="btn-primary px-8">
                  <Link href="/products">
                    Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                <Button asChild size="lg" variant="outline" className="px-8">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </motion.div>

            {/* ================= HERO IMAGE ================= */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-large">
                <Image
                  src={heroImage}
                  alt="Colorful toys collection"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-foreground/20 to-transparent" />
              </div>

              {/* ================= FLOATING BADGE ================= */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground px-6 py-3 rounded-2xl shadow-amber font-display font-bold"
              >
                <span className="text-2xl">🎁</span> New Arrivals!
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= TRUST BADGES ================= */}
      <section className="border-y border-border bg-muted/30">
        <div className="container-main py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 justify-center lg:justify-start"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <badge.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{badge.title}</h4>
                  <p className="text-xs text-muted-foreground">
                    {badge.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
            {categories.map((category, index) => (
              <CategoryCard
                key={category.id}
                category={category}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURED PRODUCTS ================= */}
      <section className="section-padding bg-muted/30">
        <div className="container-main">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}