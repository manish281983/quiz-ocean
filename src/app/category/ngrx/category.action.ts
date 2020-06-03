import { Action } from '@ngrx/store';
import { CategoryModel } from '../services/category-service.model';

export enum CategoryActionTypes {
    CATEGORY_INIT = '[CATEGORY] Make Request',
    CATEGORY_SUCCESS = '[CATEGORY_SUCCESS] Request success',
    CATEGORY_FAILED = '[CATEGORY_FAILED] Request failed'
}

export class CategoryAction implements Action {
    public type = CategoryActionTypes.CATEGORY_INIT;
    constructor() { }
}

export class CategorySuccessAction implements Action {
    public type = CategoryActionTypes.CATEGORY_SUCCESS;
    constructor(public CategoryData: CategoryModel) { }
}

export class CategoryFailedAction implements Action {
    public type = CategoryActionTypes.CATEGORY_FAILED;
    constructor() { }
}

export type CategoryActions =
    CategoryAction |
    CategorySuccessAction |
    CategoryFailedAction;
