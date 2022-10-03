import { OrderItemType } from "types/OrderItemType";

export interface Order {
    UserId: string;
    tableNumber: number;
    products: OrderItemType[];
}