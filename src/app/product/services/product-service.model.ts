import { IProduct } from '../../core/models/product';
import { ICategory } from 'src/app/core/models/category';

export interface ProductRequestModel {
    product: ProductRequest;
}

export interface ProductRequest {
    categoryId: string;
}

export interface ProductModel {
    categoryList: ICategory[];
    category: ICategory;
    productList: IProduct[];
}
