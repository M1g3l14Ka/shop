'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { HederLink } from "@/types/types"
import { Menu } from "lucide-react"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
} from "@/components/ui/sheet"


interface IHeaderp {
    links: HederLink[];
}

export default function Header({ links }:IHeaderp) {



    return (
        //animations styles
        <motion.div
            initial={{ opacity: 0, y:20 }}
            animate={{ opacity: 1, y:0 }}
            transition={{ duration: 0.7 }}
            className="w-full  gap-3 bg-[#0a0a0a]/50 text-gray-400 sticky z-50 backdrop-blur-lg border-b border-white/10"
        >
            {/* Header section, router of the site */}
            <div className="w-full flex justify-center items-center p-2 gap-3 px-10">

                <div className="w-full flex justify-between items-center">
                    <div className="text-white font-mono font-bold text-2xl tracking-widest">
                        <Link href="/" className="cursor-pointer flex justify-start flex-col pr-10">
                            <span>INNOVATE</span>
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-500 to-orange-600">TECHNOLOGIES</span>
                        </Link>
                    </div>
                    <div className="lg:flex items-center gap-10 sm:text-lg md:text-xl lg:text-2xl font-bold font-mono hidden">
                        {
                            links.map((item) => (
                                <div key={item.id}>
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

                    <div className="lg:hidden flex items-center">
                        <Sheet>
                            <SheetTrigger asChild>
                                <button className="text-white hover:text-orange-600 transition-colors">
                                    <Menu className="w-8 h-8"/>
                                </button>
                            </SheetTrigger>

                            <SheetContent side="right"className="bg-[#0a0a0a]/95 border border-white/10 py-4 backdrop-blur-xl">
                                <SheetTitle className="text-center w-full text-[50px] font-mono font-bold text-orange-600 ">Menu</SheetTitle>
                                <div>
                                    {
                                        links.map((item) => (
                                            <div key={item.id} className="pl-10 text-[30px] text-gray-400 hover:text-white transition-colors">
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
            </div>

        </motion.div>
    )
}


