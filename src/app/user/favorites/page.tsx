'use client'

import { useEffect, useState } from "react";
import { useShopStore } from "@/store/store";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import Link from "next/link";

export default function FavoritesPage() {
    const [mounted, setMounted] = useState(false);
    const { favorites, toggleFavorite, addToCart } = useShopStore();

    useEffect(() => { setMounted(true) }, []);
    if (!mounted) return <div className="min-h-screen bg-[#0a0a0a]" />;

    return (
        <div className="min-h-screen w-full bg-[#0a0a0a] p-6 text-white font-mono">
            <div className="max-w-7xl mx-auto py-10">
                <h1 className="text-4xl font-bold mb-10 text-orange-500">Избранное</h1>
                
                {favorites.length === 0 ? (
                    <div className="text-gray-500 text-xl">Тут пока пусто. <Link href="/products" className="text-white hover:text-orange-500 underline">В каталог -&gt;</Link></div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {favorites.map((item) => (
                            <div key={item.id} className="relative p-6 bg-white/5 border border-white/10 rounded-2xl group">
                                <button onClick={() => toggleFavorite(item)} className="absolute top-4 right-4 z-20 p-2 bg-rose-500/20 rounded-full hover:bg-rose-500/40 transition-colors">
                                    <Trash2 className="w-5 h-5 text-rose-500" />
                                </button>
                                <div className="relative w-full h-48 mb-4 overflow-hidden rounded-xl bg-white/10 flex justify-center items-center">
                                    <Image fill src={item.thumbnail} alt={item.title} className="object-cover" />
                                </div>
                                <div className="text-lg mb-2 line-clamp-1">{item.title}</div>
                                <div className="text-orange-500 font-bold mb-4">${item.price}</div>
                                <button onClick={() => addToCart(item)} className="w-full py-2 bg-white/10 hover:bg-orange-600 rounded-lg text-sm transition-colors">
                                    В корзину
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}