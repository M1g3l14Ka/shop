'use client'

import { motion } from "framer-motion"
import { FeaturesTablesInfo } from "@/data/data" 

export default function Features() {
    return (
        <motion.div
            className="min-h-screen w-full flex justify-center items-center flex-col p-6 gap-10 text-2xl font-mono relative text-gray-400"
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }} // Лучше whileInView для скролла!
            viewport={{ once: true }}
            transition={{ duration:0.7 }}
        >
            <div className="flex justify-center items-center flex-col w-full">
                
                <div className="w-full text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#3d3d3d] to-[#ffffff]">
                        Почему нас <span className="text-orange-600">выбирают</span>?
                    </h2>
                </div>

                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
                    {
                        FeaturesTablesInfo.map((item) => {
                            const Icon = item.ico; 

                            return (
                                <div 
                                    key={item.id} 
                                    className="flex flex-col items-start gap-4 p-3 bg-white/5 border border-white/10 rounded-2xl hover:border-orange-500/50 hover:bg-white/10 transition-colors group"
                                >
                                    <div className="p-3 bg-black/50 rounded-xl">
                                        <Icon className="w-8 h-8 text-orange-500 group-hover:scale-110 transition-transform" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">
                                        {item.title}
                                    </h3>
                                    <p className="text-lg text-gray-400 font-light leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </motion.div>
    )
}