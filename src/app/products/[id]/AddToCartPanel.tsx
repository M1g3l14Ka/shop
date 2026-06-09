'use client'

import { useState } from "react";
import { useShopStore } from "@/store/store";
import { DummyJsonProducts } from "@/types/types";
import { Minus, Plus, ShoppingBag } from "lucide-react";

export default function AddToCartPanel({ product }: { product: DummyJsonProducts }) {
    const { addToCart } = useShopStore();
    const [quantity, setQuantity] = useState(1);

    const handleAdd = () => {
        for (let i = 0; i < quantity; i++) {
            addToCart(product);
        }
        alert(`Товар добавлен в корзину (${quantity} шт.)`);
    };

    return (
        <div className="flex items-center gap-6">
            <div className="flex items-center bg-white/5 border border-white/10 rounded-xl p-1">
                <button 
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="p-3 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                    <Minus className="w-5 h-5" />
                </button>
                <span className="w-12 text-center font-bold text-xl">{quantity}</span>
                <button 
                    onClick={() => setQuantity(q => Math.min(product.stock, q + 1))}
                    className="p-3 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                    <Plus className="w-5 h-5" />
                </button>
            </div>

            <button 
                onClick={handleAdd}
                className="flex-1 flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 rounded-xl transition-colors active:scale-95"
            >
                <ShoppingBag className="w-5 h-5" />
                В корзину
            </button>
        </div>
    );
}