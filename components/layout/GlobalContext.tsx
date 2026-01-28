'use client';

import { CartProvider } from '@/context/CartContext';
import { ReactNode } from 'react';

export function GlobalContext({ children }: { children: ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}