import { IProduct } from '../../core/models/product';
import { ICategory } from '../../core/models/category';
import { ICart } from 'src/app/core/models/cart';

export interface CartRequestModel  {
    id: string;
    orderId?: string;
    productId: string;
    productCount: string;
    userId?: string;
    operation: string;
}

export interface CartModel {
    cartList: ICart[];
}
