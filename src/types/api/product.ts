export interface Product {
    name: string;
    description: string;
    image: string;
    price: number;
}

export interface ProductUpdate {
    product: Product;
    id: string;
}

export interface ProductResponse {
    id: string;
    name: string;
    image: string;
    description: string;
    price: number;
    updateAt?: string;
    createAt?: string;
}