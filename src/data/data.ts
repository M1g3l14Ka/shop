import { HeaderLink, FeaturesTables, ISocial } from "@/types/types"
import { ShieldCheck, MonitorSmartphone, MessageSquareMore, Send } from "lucide-react"


export const headerServiceLinks:HeaderLink[] = [
    { id: 1, name: "Домой", href: "/" },
    { id: 2, name: "Контакты", href: "/service/contacts" },
    { id: 3, name: "Продукция", href: "/products" },
]


export const headerUserLinks:HeaderLink[] = [
    { id: 1, name: "Избранное", href: "/user/favorites" },
    { id: 2, name: "Заказы", href: "/user/order" },
    { id: 3, name: "Корзина", href: "/user/cart" },
]


export const FeaturesTablesInfo:FeaturesTables[] = [
    { id: 1, title: "Надежность", description: "Используем только надежные протоколы, чтобы ваши данные могли работать как часы", ico: ShieldCheck},
    { id: 2, title: "Адаптивность", description: "Адаптируем интерфейс под любые экраны", ico: MonitorSmartphone},
    { id: 3, title: "Поддержка 24/7", description: "Адекватная и быстрая тех. поддержка, готовая ответить 24/7 7 дней в неделе", ico: MessageSquareMore},
    { id: 4, title: "Кроссплатформенность", description: "Интеграция с популярными приложениями и сервисами", ico: Send},
]

export const socials: ISocial[] = [
  { id: 1, name: "Telegram", url: "https://t.me/M1g3L14Ka", icon: "✈️" },
  { id: 4, name: "Email", url: "mailto:kasionma@gmail.com", icon: "📧" },
];