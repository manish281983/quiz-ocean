import { IProduct } from './product';

export interface ICategory {
    name: string;
    id: string;
    parentId?: string;
    productList?: IProduct[];
    subCategoryList?: ICategory[];
}