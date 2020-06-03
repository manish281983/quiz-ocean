import {
    CartActions,
    CartActionTypes,
    CartFailedAction,
    CartSuccessAction
    } from './cart.action';
import { CartModel } from '../services/cart-service.model';
import { ICart } from 'src/app/core/models/cart';


export interface CartState {
    inProgress: boolean;
    productCount: number;
    cartList?: ICart[];
    error?: any;
}

const defaultState = {
    inProgress: false,
    error: false,
    productCount: 0,
    cartList: []
};

export function cartReducer(
state: CartState = { ...defaultState },
action: CartActions) {
    switch (action.type) {
        case CartActionTypes.CART_INIT:
        return {
            ...state,
            inProgress: true,
            error: false
        };
        case CartActionTypes.CART_SUCCESS:
        return {
            ...state,
            inProgress: false,
            error: false,
            productCount: (action as CartSuccessAction).cartList.length,
            cartList: (action as CartSuccessAction).cartList
        };
        case CartActionTypes.CART_FAILED:
        return {
            ...state,
            inProgress: false,
            error: true
        };
        default:
        return state;
    }
}