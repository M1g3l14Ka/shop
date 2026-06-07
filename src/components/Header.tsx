'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { HeaderLink } from "@/types/types"
import { Menu } from "lucide-react"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTrigger,
    SheetTitle,
} from "@/components/ui/sheet"


interface IHeaderp {
    serviceLinks: HeaderLink[];
    userLinks: HeaderLink[];
}

export default function Header({ serviceLinks, userLinks }:IHeaderp) {

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full bg-[#0a0a0a]/50 text-gray-400 text-lg  top-0 z-50 backdrop-blur-lg border-b border-white/10 px-6 font-mono font-bold sticky"
        >
            {/* Основной контейнер */}
            <div className="max-w-7xl mx-auto flex justify-between items-center py-1">
                
                {/* 1. ЛЕВАЯ КОЛОНКА (Логотип) — Занимает строго 25% ширины */}
                <div className="w-1/4 flex justify-start">
                    <Link href="/" className="text-xl flex flex-col">
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-[#ffffff] to-[#3d3d3d]">
                            INNOVATE 
                        </span>
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-[#3d3d3d] to-[#ffffff]">
                            TECHNOLOGIES
                        </span>
                    </Link>
                </div>

                {/* 2. ЦЕНТРАЛЬНАЯ КОЛОНКА (Сервисные ссылки) — Занимает строго 50% ширины */}
                {/* Скрываем на экранах меньше XL (hidden xl:flex) */}
                <div className="hidden xl:flex w-2/4 justify-center gap-10">
                    {
                        serviceLinks.map((item) => (
                            <div key={item.id}>
                                <Link href={item.href}>
                                    <span className="group relative inline-block cursor-pointer hover:text-white duration-300 transition-colors pb-1">
                                        {item.name}
                                        <span className="absolute bottom-0 w-0 h-0.5 bg-white left-1/2 -translate-x-1/2 duration-700 transition-all ease-out group-hover:w-full"/>    
                                    </span>
                                </Link>
                            </div>
                        ))
                    }
                </div>

                {/* 3. ПРАВАЯ КОЛОНКА (Ссылки пользователя) — Занимает строго 25% ширины */}
                {/* Скрываем на экранах меньше XL (hidden xl:flex) */}
                <div className="hidden xl:flex w-1/4 justify-end gap-6 font-mono font-bold">
                    {
                        userLinks.map((item) => (
                            <div key={item.id} className="transition-colors">
                                <Link href={item.href}>
                                    <span className="group relative inline-block cursor-pointer hover:text-white transition-colors duration-300 pb-1">
                                        {item.name}
                                        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white -translate-x-1/2 transition-all duration-300 ease-out group-hover:w-full"/>
                                    </span>
                                </Link>
                            </div>
                        ))
                    }
                </div>

                {/* 4. МОБИЛЬНЫЙ БУРГЕР (Показываем на всех экранах меньше XL: xl:hidden) */}
                <div className="xl:hidden flex items-center">
                    <Sheet>
                        <SheetTrigger asChild>
                            <button className="text-white hover:text-orange-600 transition-colors cursor-pointer">
                                <Menu className="w-8 h-8"/>
                            </button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-[#0a0a0a]/95 border-l border-white/10 py-6 px-8 backdrop-blur-xl flex flex-col gap-6 overflow-y-auto">
                        <SheetDescription className="sr-only">Навигация по сайту</SheetDescription>
                        <SheetTitle className="text-center w-full text-4xl font-mono font-bold text-transparent bg-clip-text bg-linear-to-r from-[#3d3d3d] to-[#ffffff] border-b border-white/10 pb-4">Меню</SheetTitle>

                        {/* РАЗДЕЛ 1: СЕРВИСНЫЕ ССЫЛКИ */}
                        <div className="flex flex-col gap-4">
                            <span className="text-gray-500 text-lg text-center tracking-widest font-mono mb-2 border-b border-gray-500/40">НАВИГАЦИЯ ПО САЙТУ</span>
                            {
                                serviceLinks.map((item) => (
                                    <div key={item.id} className="pl-4 text-2xl text-gray-400 hover:text-white transition-colors">
                                        <Link href={item.href}>
                                            <span className="group relative inline-block cursor-pointer hover:text-white transition-colors duration-300 pb-1">
                                                {item.name}
                                                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white -translate-x-1/2 transition-all duration-700 ease-out group-hover:w-full"/>
                                            </span>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                        
                        {/* РАЗДЕЛ 2: КЛИЕНТСКИЕ ССЫЛКИ (Отделены тонкой линией) */}
                        <div className="flex flex-col gap-4 mt-4 border-t pt-6">
                            <span className="text-gray-500 text-lg text-center tracking-widest font-mono mb-2 border-b border-gray-500/40">КЛИЕНТСКАЯ ЗОНА</span>
                            {
                                userLinks.map((item) => (
                                    <div key={item.id} className="pl-4 text-2xl text-gray-400 hover:text-white transition-colors">
                                        <Link href={item.href}>
                                            <span className="group relative inline-block cursor-pointer hover:text-white transition-colors duration-300 pb-1">
                                                {item.name}
                                                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white -translate-x-1/2 transition-all duration-700 ease-out group-hover:w-full"/>
                                            </span>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </SheetContent>
                    </Sheet>
                </div>

            </div>
        </motion.div>
    )    
}