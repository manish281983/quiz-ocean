import { ICategory } from '../../core/models/category';

export interface CategoryRequestModel {
    category: CategoryRequest;
}

export interface CategoryRequest {
    productCount: number;
}

export interface CategoryModel {
    categoryProductList: ICategory[];
}
