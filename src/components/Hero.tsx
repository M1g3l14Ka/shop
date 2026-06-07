'use client'

import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
return (
    <div className="relative w-full h-[95vh] flex items-center justify-center overflow-hidden">
        
        {/* Видео фон */}
        <video
            autoPlay
            muted
            playsInline
            preload="auto"
            className="absolute h-full w-full inset-0 object-cover pointer-events-none scale-[1.18]"
            src="/logo/web-logo.mp4"
        />

        {/* Затемнение всего видео, чтобы карточка выделялась */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Glassmorphism */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-50 flex justify-center items-center flex-col gap-8 p-10 max-w-4xl w-full mx-4 bg-black/30 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl"
        >
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.2
                }}
                className="flex justify-center items-center flex-col gap-4 text-4xl md:text-6xl font-bold font-mono text-center"
            >
                <span className="text-white drop-shadow-lg">Будущее уже наступило</span>
                <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-300 to-gray-500">Быстрее, легче, проще</span>
            </motion.div>

            {/* БЛОК С КНОПКАМИ */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex flex-col sm:flex-row items-center gap-6 mt-4"
            >
                <Link href="/" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform duration-300">
                    Начать работу
                </Link>

                <Link href="/" className="group flex items-center gap-2 px-6 py-4 text-white font-medium hover:text-orange-500 transition-colors">
                    Узнать больше 
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
            </motion.div>

        </motion.div>
    </div>
    )
}