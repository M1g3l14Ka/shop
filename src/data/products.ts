
export async function getProducts() {

    const API_URL = process.env.PRODCUT_FETCH_URL;

    try {
        const res = await fetch(API_URL!)

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