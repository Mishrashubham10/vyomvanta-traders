'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, Menu, X, LogIn } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/products' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60"
    >
      <nav className="container-main flex h-16 sm:h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* ================= LOGO ================= */}
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2"
          >
            <span className="text-2xl">🎪</span>
            <span className="font-display text-lg sm:text-xl font-bold">
              <span className="text-primary">VYOMVANTA</span>
              <span className="text-secondary"> TRADERS</span>
            </span>
          </motion.div>
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;

            return (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  'relative font-medium text-sm transition-colors hover:text-primary',
                  isActive ? 'text-primary' : 'text-muted-foreground',
                )}
              >
                {link.name}

                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-primary"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* ================= ACTIONS ================= */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* =========== CART ============= */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => setIsOpen(true)}
            >
              <ShoppingCart className="h-5 w-5" />

              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-xs font-bold text-secondary-foreground"
                >
                  {totalItems}
                </motion.span>
              )}
            </Button>
          </motion.div>

          {/* ===== LOGIN LINK (DESKTOP) ===== */}
          <Link
            href="/login"
            className={cn(
              'relative font-medium text-sm flex items-center gap-1 transition-colors hover:text-primary',
              pathname === '/login' ? 'text-primary' : 'text-muted-foreground',
            )}
          >
            <LogIn className="h-4 w-4" />
            Login
            {pathname === '/login' && (
              <motion.div
                layoutId="activeNav"
                className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-primary"
              />
            )}
          </Link>

          {/* ============== MOBILE MENU TOGGLE ============== */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-border bg-background"
        >
          <div className="container-main space-y-2 px-4 py-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;

              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'block rounded-lg px-4 py-3 font-medium transition-colors',
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:bg-muted',
                  )}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* ===== LOGIN LINK (MOBILE) ===== */}
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                'rounded-lg px-4 py-3 font-medium transition-colors flex items-center gap-2',
                pathname === '/login'
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:bg-muted',
              )}
            >
              <LogIn className="h-4 w-4" />
              Login
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}