import { Action } from '@ngrx/store';
import { ProductModel } from '../services/product-service.model';

export enum ProductActionTypes {
    PRODUCT_INIT = '[PRODUCT] Make Request',
    PRODUCT_SUCCESS = '[PRODUCT_SUCCESS] Request success',
    PRODUCT_FAILED = '[PRODUCT_FAILED] Request failed'
}

export class ProductAction implements Action {
    public type = ProductActionTypes.PRODUCT_INIT;
    constructor(public categoryId: string) { }
}

export class ProductSuccessAction implements Action {
    public type = ProductActionTypes.PRODUCT_SUCCESS;
    constructor(public productData: ProductModel) { }
}

export class ProductFailedAction implements Action {
    public type = ProductActionTypes.PRODUCT_FAILED;
    constructor() { }
}

export type ProductActions =
    ProductAction |
    ProductSuccessAction |
    ProductFailedAction;
