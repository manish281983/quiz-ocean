import { IProduct } from '../../core/models/product';
import { ICategory } from '../../core/models/category';

export interface DashboardRequestModel {
    home: DashboardRequestHome;
}

export interface DashboardRequestHome {
    featureProduct: boolean;
    productCount: number;
}

export interface DashboardModel {
    featureProductList: IProduct[];
    categoryProductList: ICategory[];
}
