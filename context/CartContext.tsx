'use client';

import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useCallback,
  ReactNode,
} from 'react';

import { products } from '@/data/products';
import type { Product, CartItem } from '@/types/products';

/* ================= TYPES ================= */

interface StoredCartItem {
  productId: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

type CartAction =
  | { type: 'INIT'; payload: CartItem[] }
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'SET_OPEN'; payload: boolean };

interface CartContextType {
  items: CartItem[];
  products: Product[];
  getProductById: (id: string) => Product | undefined;

  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;

  totalItems: number;
  totalPrice: number;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);
const CART_STORAGE_KEY = 'vyomvanta_cart';

/* ================= HELPERS ================= */

function hydrateCart(
  stored: StoredCartItem[],
  products: Product[],
): CartItem[] {
  return stored
    .map((item) => {
      const product = products.find((p) => p.id === item.productId);
      if (!product) return null;
      return { product, quantity: item.quantity };
    })
    .filter(Boolean) as CartItem[];
}

function loadStoredCart(): StoredCartItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

/* ================= REDUCER ================= */

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'INIT':
      return { ...state, items: action.payload };

    case 'ADD_ITEM': {
      const existing = state.items.find(
        (item) => item.product.id === action.payload.id,
      );

      const items = existing
        ? state.items.map((item) =>
            item.product.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          )
        : [...state.items, { product: action.payload, quantity: 1 }];

      return { ...state, items, isOpen: true };
    }

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((item) => item.product.id !== action.payload),
      };

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map((item) =>
          item.product.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item,
        ),
      };

    case 'CLEAR_CART':
      return { ...state, items: [] };

    case 'SET_OPEN':
      return { ...state, isOpen: action.payload };

    default:
      return state;
  }
}

/* ================= PROVIDER ================= */

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    isOpen: false,
  });

  /* ✅ INITIAL PHASE (PRODUCT-AWARE) */
  useEffect(() => {
    const stored = loadStoredCart();
    const hydrated = hydrateCart(stored, products);
    dispatch({ type: 'INIT', payload: hydrated });
  }, []);

  /* ✅ PERSIST (STORE IDS ONLY) */
  useEffect(() => {
    const toStore: StoredCartItem[] = state.items.map((item) => ({
      productId: item.product.id,
      quantity: item.quantity,
    }));

    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(toStore));
  }, [state.items]);

  /* ================= ACTIONS ================= */

  const addToCart = useCallback((product: Product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: productId });
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity < 1) {
      dispatch({ type: 'REMOVE_ITEM', payload: productId });
      return;
    }
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id: productId, quantity },
    });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' });
  }, []);

  const setIsOpen = useCallback((open: boolean) => {
    dispatch({ type: 'SET_OPEN', payload: open });
  }, []);

  /* ================= DERIVED ================= */

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = state.items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  const getProductById = (id: string) => products.find((p) => p.id === id);

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        products,
        getProductById,

        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,

        totalItems,
        totalPrice,
        isOpen: state.isOpen,
        setIsOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

/* ================= HOOK ================= */

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}