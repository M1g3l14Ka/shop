'use client'

import { Download } from "lucide-react"
import Link from "next/link"

export default function Footer() {
    return (
        <div className="flex justify-center items-center flex-col text-white w-full py-10 border-t border-white/10 relative mt-10">
            <div className="flex flex-col md:flex-row justify-between items-start gap-10 p-6 w-full max-w-7xl">
                
                <div className="flex flex-col gap-5">
                    <div className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-mono font-bold">
                        <span className="">
                            Хотите сделать <span className="text-orange-600">индивидуальный</span> заказ?
                        </span>
                        <br/>
                        <span>Может у вас есть <span className="text-orange-600">коммерческое</span> предложение? </span>
                    </div>
                    <div className="flex justify-center items-center font-bold font-mono">
                        <Link
                            href="/service/contacts"
                            className="text-2xl text-gray-400 font-mono font-bold border rounded-2xl w-auto p-2 hover:border-orange-600"
                        > 
                            <span className="group relative inline-block cursor-pointer hover:text-white duration-300 transition-colors pb-1">
                                Связаться
                                <span className="absolute bottom-0 w-0 h-0.5 bg-white left-1/2 -translate-x-1/2 duration-700 transition-all ease-out group-hover:w-full"/>
                            </span>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col items-start md:items-end text-left md:text-right font-mono text-sm md:text-base">
                    <div className="flex flex-col mb-5">
                        <span>Россия, Вологда / Удаленный формат</span>
                        <span className="text-gray-500 text-sm">Локация</span>    
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 py-2 mb-5">
                        <div className="flex flex-col">
                            <span>+7 (921) 234-00-95</span>
                            <span className="text-gray-500 text-sm">Telegram / WhatsApp</span>
                        </div>
                        <div className="hidden md:block border-l border-white/20 h-10 mx-2"/>
                        <div className="flex flex-col">
                            <span>kasionma@gmail.com</span>
                            <span className="text-gray-500 text-sm">Email</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 text-gray-500 text-xs md:text-sm text-left md:text-right">
                        <span>Самозанятый (НПД) Кацион Михаил</span>
                        <span>Разработка web-проектов и AI-интеграций</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl px-6 pt-6 mt-6 border-t border-white/10 text-gray-500 text-xs font-mono gap-4">
                <span>© Михаил Кацион 2024 - 2026</span>
                
                <div className="flex gap-4">
                        <a
                            href="/policy/ru/Policy.pdf"
                            download
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl font-mono text-white hover:border-purple-500/30 hover:scale-105 transition-all"
                            >
                            <Download className="w-5 h-5" />
                            Политика конфиденциальности 
                        </a>
                </div>

                <div className="flex gap-4">
                    <span>ИНН: 352528378852</span> 
                </div>
            </div>
        </div>
    )
}