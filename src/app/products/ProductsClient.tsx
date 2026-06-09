'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Heart, Frown } from "lucide-react";
import { DummyJsonProducts } from "@/types/types";
import { useShopStore } from "@/store/store";

interface ProductsClientProps {
    initialProducts: DummyJsonProducts[];
}

export default function ProductsClient({ initialProducts }: ProductsClientProps) {
    const [mounted, setMounted] = useState(false);
    const { addToCart, favorites, toggleFavorite } = useShopStore();

    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
        setMounted(true);
    }, []);

    const categories = ["All", ...Array.from(new Set(initialProducts.map(item => item.category)))];

    const filteredProducts = initialProducts.filter(product => {
        const matchSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchCategory = selectedCategory === "All" || product.category === selectedCategory;
        
        return matchSearch && matchCategory;
    });

    return (
        <div className="w-full flex flex-col items-center max-w-7xl font-mono">
            
            <div className="w-full max-w-4xl py-6 relative mb-6">
                <input 
                    type="text" 
                    placeholder="Поиск товаров..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 h-14 text-white focus:border-orange-500 outline-none transition-colors"
                />
                <div className="absolute right-0 top-6 bottom-0 w-14 h-14 border-l border-white/20 flex items-center justify-center">
                    <Search className="text-gray-400" />
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-10 w-full max-w-4xl">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                            selectedCategory === category
                                ? "bg-orange-500/20 text-orange-500 border border-orange-500" 
                                : "bg-white/5 text-gray-400 border border-white/10 hover:border-orange-500/50 hover:text-white" 
                        }`}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>

            {filteredProducts.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-gray-500">
                    <Frown className="w-16 h-16 mb-4 text-white/20" />
                    <h2 className="text-2xl">Товары не найдены</h2>
                    <p className="text-sm">Попробуйте изменить параметры поиска</p>
                </div>
            ) : (
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
                    {filteredProducts.map((item) => {
                        const isFav = mounted ? favorites.some(f => f.id === item.id) : false;
                        const discountPrice = (item.price - (item.price * item.discountPercentage / 100)).toFixed(2);

                        return (
                            <div key={item.id} className="relative flex flex-col items-center p-6 text-white rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-orange-500/50 group hover:-translate-y-2 duration-300 transition-all shadow-lg hover:shadow-orange-500/10 overflow-hidden">
                                
                                <Link href={`/products/${item.id}`} className="absolute inset-0 z-10" />

                                <button 
                                    onClick={(e) => { e.preventDefault(); toggleFavorite(item); }}
                                    className=" z-20 top-4 right-4 p-2 bg-black/50 backdrop-blur-md rounded-full hover:scale-110 transition-transform"
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
                                    className="relative z-20 w-full py-3 bg-white/10 hover:bg-orange-600 rounded-xl text-sm font-bold transition-colors active:scale-95"
                                >
                                    В корзину
                                </button>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    );
}
