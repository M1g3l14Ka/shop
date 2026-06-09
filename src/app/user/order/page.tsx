'use client'

import { useEffect, useState } from "react";
import { useShopStore } from "@/store/store";
import Image from "next/image";
import { PackageCheck, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function OrdersPage() {
    const [mounted, setMounted] = useState(false);
    const { orders } = useShopStore();

    useEffect(() => { setMounted(true) }, []);
    if (!mounted) return <div className="min-h-screen bg-[#0a0a0a]" />;

    return (
        <div className="min-h-screen w-full bg-[#0a0a0a] p-6 text-white font-mono">
            <div className="max-w-5xl mx-auto py-10">
                <h1 className="text-4xl font-bold mb-10 text-orange-500 flex items-center gap-3">
                    <PackageCheck className="w-10 h-10" /> Мои заказы
                </h1>
                
                {orders.length === 0 ? (
                    <div className="text-gray-500 text-xl">Вы еще ничего не заказывали. <Link href="/products" className="text-white hover:text-orange-500 underline transition-colors">Перейти в каталог -&gt;</Link></div>
                ) : (
                    <div className="flex flex-col gap-8">
                        {orders.map((order, index) => (
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                key={order.id} 
                                className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md"
                            >
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 pb-6 border-b border-white/10 gap-4">
                                    <div>
                                        <div className="text-gray-400 text-sm mb-1">Заказ №</div>
                                        <div className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#888888] to-[#ffffff]">{order.id}</div>
                                    </div>
                                    <div className="flex flex-col md:items-end gap-1">
                                        <div className="flex items-center gap-2 text-gray-400">
                                            <Calendar className="w-4 h-4 text-orange-500" />
                                            <span>{order.date.split(',')[0]}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                                            <Clock className="w-4 h-4" />
                                            <span>{order.date.split(',')[1]}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4 mb-6">
                                    {order.items.map(item => {
                                        const discountPrice = (item.price - (item.price * item.discountPercentage / 100)).toFixed(2);
                                        return (
                                            <div key={item.id} className="flex items-center gap-4 bg-black/20 p-4 rounded-xl">
                                                <div className="relative w-16 h-16 bg-white/10 rounded-lg overflow-hidden shrink-0">
                                                    <Image fill src={item.thumbnail} alt={item.title} className="object-cover" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="font-bold line-clamp-1">{item.title}</div>
                                                    <div className="text-gray-500 text-sm">{item.quantity} шт. x ${discountPrice}</div>
                                                </div>
                                                <div className="font-bold text-orange-500">
                                                    ${(Number(discountPrice) * item.quantity).toFixed(2)}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>

                                <div className="flex justify-end items-center pt-6 border-t border-white/10">
                                    <div className="text-xl">
                                        <span className="text-gray-400 mr-4">Итоговая сумма:</span>
                                        <span className="font-bold text-3xl text-orange-500">${order.totalPrice.toFixed(2)}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}