import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { DummyJsonProducts } from '@/types/types';

export interface CartItem extends DummyJsonProducts {
    quantity: number;
}

export interface Order {
    id: string;          
    date: string;        
    items: CartItem[]; 
    totalPrice: number;  
}

interface ShopState {
    cart: CartItem[];         
    favorites: DummyJsonProducts[]; 
    orders: Order[]; 
    
    addToCart: (product: DummyJsonProducts) => void;
    removeFromCart: (productId: number) => void;
    clearCart: () => void;
    toggleFavorite: (product: DummyJsonProducts) => void;
    addOrder: (order: Order) => void; 
}

export const useShopStore = create<ShopState>()(
    persist(
        (set) => ({
            cart: [],
            favorites: [],
            orders: [],

            addToCart: (product) => set((state) => {
                const existingItem = state.cart.find((item) => item.id === product.id);
                if (existingItem) {
                    return {
                        cart: state.cart.map((item) =>
                            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                        )
                    };
                }
                return { cart: [...state.cart, { ...product, quantity: 1 }] };
            }),

            removeFromCart: (productId) => set((state) => ({
                cart: state.cart.filter((item) => item.id !== productId)
            })),

            clearCart: () => set({ cart: [] }),

            toggleFavorite: (product) => set((state) => {
                const isFavorite = state.favorites.some((item) => item.id === product.id);
                if (isFavorite) {
                    return { favorites: state.favorites.filter((item) => item.id !== product.id) };
                } else {
                    return { favorites: [...state.favorites, product] };
                }
            }),

            addOrder: (order) => set((state) => ({
                orders: [order, ...state.orders]
            })),
        }),
        { name: 'shop-storage' }
    )
);