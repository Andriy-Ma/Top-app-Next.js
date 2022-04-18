export interface ProductCharacteristic {
    value: string;
    name: string;
}

export interface ReviewModel{
    _id: string;
    name: string;
    title: string;
    description: string;
    rating: number;
    createdAt: Date;
}

export interface Blog {
    text: string;
    _id: string;
    bigImage: string;
}

export interface ProductModel {
    _id: string;
    categories: string[];
    tags: string[];
    title: string;
    image: string;
    description: string;
    link: string;
    price: number;
    credit: number;
    oldPrice: number;
    characteristics: ProductCharacteristic[];
    advantages: string;
    initialRating: number;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    html: string;
    blog: Blog;
    reviews: ReviewModel[];
    reviewCount: number;
    reviewAvg?: any;
}