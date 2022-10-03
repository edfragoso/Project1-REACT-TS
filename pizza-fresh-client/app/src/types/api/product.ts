export interface Product {
    name: string;
    description: string;
    image: string;
    price: number;
}

export interface ProductUpdate {
    porduct: Product;
    id: string;
}

export interface ProductResponse {
    id: string;
    name: string;
    description: string;
    price: number;
    updateAt?: string;
    createAt?: string;
}