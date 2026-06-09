import { LucideIcon } from "lucide-react";


export interface HeaderLink {
    id: number;
    name: string;
    href: string;
};

export interface DummyJsonProducts {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    reviews: {
        rating: number,
        comment: string,
        data: string,
        reviewerName: string,        
        reviewerEmail: string
    }[];
    returnPolicy: string;
};

export interface FeaturesTables {
    id: number;
    title: string;
    description: string;
    ico: LucideIcon;
}

export interface ISocial {
  id: number;
  name: string;
  url: string;
  icon: string;
}

export interface IContactForm {
    name: string;
    phone: string;
    email: string;
    message: string;
}

export interface ISendEmailResult {
  success: boolean;
  error?: string;
  details?: string;
}