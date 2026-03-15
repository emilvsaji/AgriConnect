import { createContext, useState, useContext, type ReactNode } from 'react';

export interface CartItem {
  id?: number | string;
  _id?: string;
  name: string;
  farmer: string;
  price: string;
  imageUrl: string;
  description?: string;
  category?: string;
  inStock?: boolean;
  organic?: boolean;
}

const getItemKey = (product: CartItem) =>
  String(product._id ?? product.id ?? `${product.name}-${product.farmer}-${product.price}`);

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (productId: string | number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: CartItem) => {
    const newKey = getItemKey(product);
    setCartItems(prevItems => {
      if (!prevItems.find(item => getItemKey(item) === newKey)) {
        return [...prevItems, product];
      }
      return prevItems;
    });
  };

  const removeFromCart = (productId: string | number) => {
    const idKey = String(productId);
    setCartItems(prevItems =>
      prevItems.filter(item => getItemKey(item) !== idKey)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const value = { cartItems, addToCart, removeFromCart, clearCart };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};