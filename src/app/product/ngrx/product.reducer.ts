import {
    ProductActions,
    ProductActionTypes,
    ProductFailedAction,
    ProductSuccessAction
    } from './product.action';
import { ProductModel } from '../services/product-service.model';


export interface ProductState {
    inProgress: boolean;
    productData?: ProductModel;
    error?: any;
}

const defaultState = {
    inProgress: false,
    error: false,
    productData: {
        categoryList: null,
        category: null,
        productList: null
    }
};

export function productReducer(
state: ProductState = { ...defaultState },
action: ProductActions) {
    switch (action.type) {
        case ProductActionTypes.PRODUCT_INIT:
        return {
            ...state,
            inProgress: true,
            error: false,
        };
        case ProductActionTypes.PRODUCT_SUCCESS:
        return {
            ...state,
            inProgress: false,
            error: false,
            productData: (action as ProductSuccessAction).productData
        };
        case ProductActionTypes.PRODUCT_FAILED:
        return {
            ...state,
            inProgress: false,
            error: true
        };
        default:
        return state;
    }
}