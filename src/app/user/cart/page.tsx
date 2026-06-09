'use client'

import { useEffect, useState } from "react";
import { useShopStore } from "@/store/store";
import Image from "next/image";
import { Trash2, ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function CartPage() {
    const [mounted, setMounted] = useState(false);
    const { cart, removeFromCart, addOrder, clearCart } = useShopStore();
    const [isOrdering, setIsOrdering] = useState(false);

    useEffect(() => { setMounted(true) }, []);
    if (!mounted) return <div className="min-h-screen bg-[#0a0a0a]" />;

    const totalPrice = cart.reduce((acc, item) => {
        const discountPrice = item.price - (item.price * item.discountPercentage / 100);
        return acc + (discountPrice * item.quantity);
    }, 0);

    const handleCheckout = () => {
        setIsOrdering(true);
        setTimeout(() => {
            const newOrder = {
                id: Math.random().toString(36).substring(2, 9).toUpperCase(),
                date: new Date().toLocaleString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
                items: [...cart], 
                totalPrice: totalPrice 
            };

            addOrder(newOrder);
            
            clearCart();
            setIsOrdering(false);
            alert("Заказ успешно оформлен! Вы можете найти его в разделе 'Заказы'.");
        }, 1500);
    };

    return (
        <div className="min-h-screen w-full bg-[#0a0a0a] p-6 text-white font-mono">
            <div className="max-w-5xl mx-auto py-10">
                <h1 className="text-4xl font-bold mb-10 text-orange-500 flex items-center gap-3">
                    <ShoppingBag className="w-10 h-10" /> Корзина
                </h1>
                
                {cart.length === 0 ? (
                    <div className="text-gray-500 text-xl">Ваша корзина пуста. <Link href="/products" className="text-white hover:text-orange-500 underline">Перейти в каталог -&gt;</Link></div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-10">
                        <div className="flex-1 flex flex-col gap-4">
                            {cart.map((item) => {
                                const discountPrice = (item.price - (item.price * item.discountPercentage / 100)).toFixed(2);
                                return (
                                    <div key={item.id} className="flex items-center gap-6 p-4 bg-white/5 border border-white/10 rounded-2xl">
                                        <div className="relative w-24 h-24 bg-white/10 rounded-xl overflow-hidden shrink-0">
                                            <Image fill src={item.thumbnail} alt={item.title} className="object-cover" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold line-clamp-1">{item.title}</h3>
                                            <p className="text-gray-400 text-sm mb-1">Количество: {item.quantity} шт.</p>
                                            <p className="text-orange-500 font-bold">${discountPrice}</p>
                                        </div>
                                        <button onClick={() => removeFromCart(item.id)} className="p-3 bg-rose-500/10 hover:bg-rose-500/30 rounded-xl transition-colors">
                                            <Trash2 className="w-6 h-6 text-rose-500" />
                                        </button>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="w-full lg:w-80 h-fit bg-white/5 border border-white/10 p-6 rounded-2xl sticky top-24">
                            <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">Ваш заказ</h3>
                            <div className="flex justify-between mb-2 text-gray-400">
                                <span>Позиций ({cart.length}):</span>
                                <span>${totalPrice.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-2xl font-bold mt-6 pt-4 border-t border-white/10 mb-8">
                                <span>Итого:</span>
                                <span className="text-orange-500">${totalPrice.toFixed(2)}</span>
                            </div>

                            <button onClick={handleCheckout} disabled={isOrdering} className="w-full py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-xl transition-colors disabled:opacity-50">
                                {isOrdering ? "Оформляем..." : "Оформить заказ"}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}