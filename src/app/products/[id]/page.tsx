import Image from "next/image";
import { DummyJsonProducts } from "@/types/types";
import AddToCartPanel from "./AddToCartPanel";
import { Star } from "lucide-react";

// Функция для загрузки ОДНОГО товара
async function getProduct(id: string) {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    if (!res.ok) return null;
    return res.json();
}

export default async function ProductPage({ params }: { params: { id: string } }) {
    
    const { id } = await params;

    const product: DummyJsonProducts = await getProduct(id);

    if (!product) return <div className="min-h-screen flex items-center justify-center text-white">Товар не найден</div>;

    const discountPrice = (product.price - (product.price * product.discountPercentage / 100)).toFixed(2);

    return (
        <div className="min-h-screen w-full bg-[#0a0a0a] text-white p-6 font-mono">
            <div className="max-w-6xl mx-auto py-10">
                
                <div className="text-gray-500 text-sm mb-8">
                    Главная / Продукция / <span className="text-gray-300">{product.category}</span> / {product.title}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="relative w-full h-125 bg-white/5 border border-white/10 rounded-3xl overflow-hidden flex items-center justify-center p-8">
                        <Image 
                            fill 
                            src={product.thumbnail} 
                            alt={product.title} 
                            className="object-contain hover:scale-105 transition-transform duration-500" 
                        />
                    </div>

                    <div className="flex flex-col">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-linear-to-r from-[#888888] to-[#ffffff]">
                            {product.title}
                        </h1>
                        
                        <div className="flex items-center gap-4 mb-6">
                            <span className="flex items-center gap-1 text-orange-500">
                                <Star className="w-5 h-5 fill-orange-500" /> {product.rating}
                            </span>
                            <span className="text-gray-500">|</span>
                            <span className="text-gray-400">В наличии: {product.stock} шт.</span>
                        </div>

                        <p className="text-gray-400 leading-relaxed mb-8">
                            {product.description}
                        </p>

                        <div className="flex items-end gap-4 mb-8 pb-8 border-b border-white/10">
                            <span className="text-4xl font-bold">${discountPrice}</span>
                            <span className="text-xl text-gray-500 line-through mb-1">${product.price}</span>
                            <span className="bg-rose-500/20 text-rose-400 px-2 py-1 rounded-md text-sm mb-2">
                                -{product.discountPercentage}%
                            </span>
                        </div>

                        <AddToCartPanel product={product} />

                        <div className="mt-8 space-y-3 text-sm text-gray-400">
                            <p><strong className="text-white">Бренд:</strong> {product.brand || 'Не указан'}</p>
                            <p><strong className="text-white">Политика возврата:</strong> {product.returnPolicy}</p>
                        </div>
                    </div>
                </div>

                <div className="mt-20 border-t border-white/10 pt-10">
                    <h3 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-linear-to-r from-[#888888] to-[#ffffff]">Отзывы покупателей</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {product.reviews?.map((review, i) => (
                            <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                                <div className="flex justify-between items-center mb-4">
                                    <div className="font-bold">{review.reviewerName}</div>
                                    <div className="flex text-orange-500">
                                        <Star className="w-4 h-4 fill-orange-500" />
                                        <span className="ml-1 text-sm">{review.rating}</span>
                                    </div>
                                </div>
                                <p className="text-gray-400 text-sm">{review.comment}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}