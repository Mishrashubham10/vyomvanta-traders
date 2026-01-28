'use client';

import { motion } from 'framer-motion';
import { CategoryInfo } from '@/types/products';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface CategoryCardProps {
  category: CategoryInfo;
  index?: number;
}

export function CategoryCard({ category, index = 0 }: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      <Link
        href={`/shop?category=${category.id}`}
        className={cn(
          'block p-6 rounded-2xl bg-linear-to-br transition-all duration-300 hover:shadow-large hover:-translate-y-1',
          category.id === 'budget' &&
            'from-toy-mint/10 to-toy-mint/5 hover:from-toy-mint/20 hover:to-toy-mint/10',
          category.id === 'educational' &&
            'from-toy-indigo/10 to-toy-indigo/5 hover:from-toy-indigo/20 hover:to-toy-indigo/10',
          category.id === 'soft-toys' &&
            'from-toy-coral/10 to-toy-coral/5 hover:from-toy-coral/20 hover:to-toy-coral/10',
          category.id === 'action-figures' &&
            'from-toy-amber/10 to-toy-amber/5 hover:from-toy-amber/20 hover:to-toy-amber/10',
          category.id === 'premium' &&
            'from-toy-lavender/10 to-toy-lavender/5 hover:from-toy-lavender/20 hover:to-toy-lavender/10',
        )}
      >
        <div className="text-4xl mb-4">{category.icon}</div>
        <h3 className="font-display font-bold text-lg text-foreground mb-1">
          {category.name}
        </h3>
        <p className="text-sm text-muted-foreground">{category.description}</p>
      </Link>
    </motion.div>
  );
}