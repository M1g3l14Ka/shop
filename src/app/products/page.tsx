import { DummyJsonProducts } from "@/types/types"
import { getProducts } from "@/data/products"
import ProductsClient from "./ProductsClient"

export default async function ProductsPage() {
    const products: DummyJsonProducts[] = await getProducts();

    return (
        <div className="min-h-screen w-full flex items-center flex-col p-6 gap-6 relative font-mono font-bold bg-[#0a0a0a]">
            <ProductsClient initialProducts={products} />
        </div>
    )
}