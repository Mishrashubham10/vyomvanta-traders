'use client';

import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import Image from 'next/image';

export function CartSheet() {
  const {
    items,
    isOpen,
    setIsOpen,
    updateQuantity,
    removeFromCart,
    totalPrice,
  } = useCart();

  const isEmpty = items.length === 0;

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="right" className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>

        {/* ================= CART CONTENT ================= */}
        <div className="flex-1 overflow-y-auto mt-6">
          {/* ========= EMPTY STATE ========= */}
          {isEmpty && (
            <div className="flex flex-col items-center justify-center text-center h-full gap-4 px-4">
              <div className="text-5xl">🛒</div>

              <p className="text-muted-foreground">Your cart is empty</p>

              <Button
                asChild
                size="lg"
                className="btn-primary gap-2"
                onClick={() => setIsOpen(false)}
              >
                <Link href="/products">
                  <ShoppingBag className="h-5 w-5" />
                  Start Shopping
                </Link>
              </Button>
            </div>
          )}

          {/* ========= CART ITEMS ========= */}
          {!isEmpty && (
            <div className="space-y-4">
              {items.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="flex gap-4 rounded-xl border p-3"
                >
                  {/* IMAGE */}
                  <div className="relative h-20 w-20 rounded-lg overflow-hidden bg-muted">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* INFO */}
                  <div className="flex-1">
                    <h4 className="font-semibold leading-tight">
                      {product.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      ₹{product.price}
                    </p>

                    {/* QUANTITY */}
                    <div className="flex items-center gap-2 mt-2">
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>

                      <span className="w-6 text-center font-medium">
                        {quantity}
                      </span>

                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>

                      <Button
                        size="icon"
                        variant="ghost"
                        className="ml-auto text-destructive"
                        onClick={() => removeFromCart(product.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ================= FOOTER ================= */}
        {!isEmpty && (
          <div className="border-t pt-4 space-y-4">
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>₹{totalPrice}</span>
            </div>

            <Button size="lg" className="w-full btn-primary">
              Checkout
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}