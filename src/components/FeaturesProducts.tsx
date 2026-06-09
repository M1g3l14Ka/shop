'use client'

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { DummyJsonProducts } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { useShopStore } from "@/store/store";
import { Heart } from "lucide-react";

interface FeaturesProductsProps {
    products: DummyJsonProducts[];
}

export default function FeaturesProducts({ products }: FeaturesProductsProps) {
    const [mounted, setMounted] = useState(false);
    const { addToCart, favorites, toggleFavorite } = useShopStore();

    useEffect(() => {
        setMounted(true);
    }, []);

    const topProducts = [...products]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 4);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full flex flex-col items-center gap-10 max-w-7xl px-6 pb-20"
        >
            <div className="w-full text-center">
                <h2 className="text-4xl md:text-5xl font-mono font-bold text-transparent bg-clip-text bg-linear-to-r from-[#888888] to-[#ffffff]">
                    Хиты продаж
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                {topProducts.map((item) => {
                    const isFav = mounted ? favorites.some(f => f.id === item.id) : false;
                    const discountPrice = (item.price - (item.price * item.discountPercentage / 100)).toFixed(2);

                    return (
                        <div key={item.id} className="relative flex flex-col items-center p-6 text-white rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-orange-500/50 group hover:-translate-y-2 duration-300 transition-all shadow-lg hover:shadow-orange-500/10 overflow-hidden">
                            
                            <Link href={`/products/${item.id}`} className="absolute inset-0 z-10" />

                            <button 
                                onClick={(e) => { e.preventDefault(); toggleFavorite(item); }}
                                className="relative z-20 left-20 -top-3 p-2 bg-black/50 backdrop-blur-md rounded-full hover:scale-110 transition-transform"
                            >
                                <Heart className={`w-5 h-5 transition-colors ${isFav ? 'fill-rose-500 text-rose-500' : 'text-gray-400'}`} />
                            </button>

                            <div className="relative z-0 w-full h-48 mb-4 overflow-hidden rounded-xl bg-white/10 flex justify-center items-center">
                                <Image fill src={item.thumbnail} alt={item.title} className="object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>

                            <div className="relative z-0 w-full text-center text-lg mb-1 font-mono line-clamp-1">{item.title}</div>
                            
                            <div className="relative z-0 flex gap-3 items-center mb-4">
                                <span className="text-gray-500 line-through text-sm">${item.price}</span>
                                <span className="bg-rose-500/20 text-rose-400 text-xs px-2 py-1 rounded-md">-{item.discountPercentage}%</span>
                            </div>
                            
                            <div className="relative z-0 text-transparent bg-clip-text bg-linear-to-r from-[#888888] to-[#ffffff] font-bold mb-4 font-mono text-2xl">
                                ${discountPrice}
                            </div>

                            <button 
                                onClick={(e) => { e.preventDefault(); addToCart(item); }}
                                className="relative z-20 w-full py-3 bg-white/10 hover:bg-orange-600 rounded-xl text-sm font-mono font-bold transition-colors active:scale-95"
                            >
                                В корзину
                            </button>
                        </div>
                    )
                })}
            </div>
            
            <Link href="/products" className="mt-4 px-8 py-3 bg-white/5 border border-white/10 hover:border-orange-500 hover:text-orange-500 rounded-full font-mono transition-colors">
                Все товары
            </Link>
        </motion.div>
    )
}