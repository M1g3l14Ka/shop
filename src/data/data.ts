import { HeaderLink } from "@/types/types"

export const headerServiceLinks:HeaderLink[] = [
    { id: 1, name: "Домой", href: "/" },
    { id: 2, name: "О нас", href: "/service/about" },
    { id: 3, name: "Контакты", href: "/service/contacts" },
]


export const headerUserLinks:HeaderLink[] = [
    { id: 1, name: "Избранное", href: "/user/favorites" },
    { id: 2, name: "Заказы", href: "/user/order" },
    { id: 3, name: "Корзина", href: "/user/cart" },
    { id: 4, name: "Профиль", href: "/user/profile" },
]
