

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
    tags: [
        string
    ];
    brand: string;
    reviews: [
        rating: number,
        comment: string,
        data: Date,
        reviewerName: string,        
        reviewerEmail: string
    ];
    returnPolicy: string;
};
