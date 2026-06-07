

export async function Product() {


    try {
        const res = await fetch(`https://dummyjson.com/products?limit=30`)

        if(!res.ok) {
            throw new Error('Faild to fetch products!')
        }

        const data = await res.json()

        return data.products;
    }
    catch (e) {
        console.error("Ошибка загрузки", e)
        return [];
    }

}