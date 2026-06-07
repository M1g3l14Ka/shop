'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { DummyJsonProducts } from "@/types/types"

interface MainProps {
    products: DummyJsonProducts[]
}

export default function Main({ products }:MainProps) {

    

    return (
        <motion.div
            className="h-screen w-full flex justify-center items-center flex-col p-2 gap-6 text-2xl relative font-mono font-bold"
        
        >
            <div className="sm:w-xl md:w-2xl lg:w-4xl xl:w-300 absolute top-0 py-6">
                <input 
                    type="text" 
                    placeholder="Iphone 15 pro..."

                    className="text white rounded-2xl focus:border-white w-full border px-5 h-12 text-white"
                
                />
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
                {
                    products.map((item) => (
                        <div key={item.id} className="flex justify-center items-center flex-col gap-3 p-2 text-white mt-auto rounded-2xl backdrop-blur-xl">
                            <div className="w-full p-4 ">
                                <Image
                                    fill
                                    src={item.thumbnail}
                                    alt={item.title}
                                    className="object-cover"
                                />
                            </div>
                            <div className="w-full sm:text-sm md:text-lg lg:text-xl xl-text-2xl text-center mb-4">
                                {item.title}
                            </div>
                            <div>

                            </div>
                        </div>
                    ))
                }
            </div>

        </motion.div>
    )
}