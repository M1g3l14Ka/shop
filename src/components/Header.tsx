'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { HederLink } from "@/types/types"

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
            <div className="w-full flex justify-between items-center p-2 gap-3">

                <div className="w-full flex justify-center items-center flex-col px-10">

                    <div className="flex items-center gap-10 sm:text-lg md:text-xl lg:text-2xl font-bold font-mono ">

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
                
                </div>
            </div>

        </motion.div>
    )
}


