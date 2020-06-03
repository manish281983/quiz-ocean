import { Action } from '@ngrx/store';
import { CartModel } from '../services/cart-service.model';
import { IProduct } from 'src/app/core/models/product';
import { ICart } from 'src/app/core/models/cart';

export enum CartActionTypes {
    CART_INIT = '[CART] Make Request',
    CART_SUCCESS = '[CART_SUCCESS] Request success',
    CART_FAILED = '[CART_FAILED] Request failed',
    ADD_CART_INIT = '[ADD_CART] Make Request',
    ADD_CART_SUCCESS = '[ADD_CART_SUCCESS] Request success',
    ADD_CART_FAILED = '[ADD_CART_FAILED] Request failed'
}

export class CartAction implements Action {
    public type = CartActionTypes.CART_INIT;
    constructor() { }
}

export class CartSuccessAction implements Action {
    public type = CartActionTypes.CART_SUCCESS;
    constructor(public cartList: ICart[]) { 
    }
}

export class CartFailedAction implements Action {
    public type = CartActionTypes.CART_FAILED;
    constructor() { }
}

export class AddCartAction implements Action {
    public type = CartActionTypes.ADD_CART_INIT;
    constructor(public cart: ICart) { }
}

export class AddCartSuccessAction implements Action {
    public type = CartActionTypes.ADD_CART_SUCCESS;
    constructor(public cartList: ICart[]) { }
}

export class AddCartFailedAction implements Action {
    public type = CartActionTypes.ADD_CART_FAILED;
    constructor() { }
}

export type CartActions =
    CartAction |
    CartSuccessAction |
    CartFailedAction |
    AddCartAction |
    AddCartSuccessAction |
    AddCartFailedAction
;
