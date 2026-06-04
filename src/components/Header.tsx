'use client'

import { motion } from "framer-motion"
import Link from "next/link"

export default function Header() {

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

                        <Link href="/">
                            <span className="group relative inline-block cursor-pointer hover:text-white transition-colors duration-300 pb-1">
                                Home
                                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white -translate-x-1/2 transition-all duration-700 ease-out group-hover:w-full"/>
                            </span>
                        </Link>

                        <Link href="/service/contacts">
                            <span className="group relative inline-block cursor-pointer hover:text-white transition-colors duration-300 pb-1">
                                Contact 
                                {/* White underline */}
                                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white -translate-x-1/2 transition-all duration-700 ease-out group-hover:w-full"/>
                            </span>
                        </Link>    
                        
                        <Link href="/service/policy">
                            <span className="group relative inline-block cursor-pointer hover:text-white transition-colors duration-300 pb-1">
                                Policy
                                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white -translate-x-1/2 transition-all duration-700 ease-out group-hover:w-full"/> 
                            </span>
                        </Link> 

                        <Link href="/user/order">
                            <span className="group relative inline-block cursor-pointer hover:text-white transition-colors duration-300 pb-1">
                                Orders
                                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white -translate-x-1/2 transition-all duration-700 ease-out group-hover:w-full"/>    
                            </span>

                        </Link>

                        <Link href="/user/favorites">
                            <span className="group relative inline-block cursor-pointer hover:text-white transition-colors duration-300 pb-1">
                                Favorites
                                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white -translate-x-1/2 transition-all duration-700 ease-out group-hover:w-full"/>    
                            </span>
                        </Link>

                        <Link href="/user/cart">
                            <span className="group relative inline-block cursor-pointer hover:text-white transition-colors duration-300 pb-1">
                                Cart
                                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white -translate-x-1/2 transition-all duration-700 ease-out group-hover:w-full"/>    
                            </span>
                        
                        </Link>
                    
                    </div>
                
                </div>
            </div>

        </motion.div>
    )
}


