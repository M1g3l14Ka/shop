'use client'

import Features from "./Features";
import FeaturesProducts from "./FeaturesProducts"
import { DummyJsonProducts } from "@/types/types"


interface MainProps {
    products: DummyJsonProducts[];
}

export default function Main({ products }:MainProps) {

    return (
        <div className="w-full flex flex-col items-center gap-5">
            <section id="#start">
                <Features/>
            </section>
            <FeaturesProducts products={products}/>
        </div>
    )
}