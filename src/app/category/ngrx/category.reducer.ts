import {
    CategoryActions,
    CategoryActionTypes,
    CategoryFailedAction,
    CategorySuccessAction
    } from './category.action';
import { CategoryModel } from '../services/category-service.model';


export interface CategoryState {
    inProgress: boolean;
    categoryData?: CategoryModel;
    error?: any;
}

const defaultState = {
    inProgress: false,
    error: false,
    categoryData: {
        featureProductList: null,
        categoryProductList: null
    }
};

export function categoryReducer(
state: CategoryState = { ...defaultState },
action: CategoryActions) {
    switch (action.type) {
        case CategoryActionTypes.CATEGORY_INIT:
        return {
            ...state,
            inProgress: true,
            error: false,
        };
        case CategoryActionTypes.CATEGORY_SUCCESS:
        return {
            ...state,
            inProgress: false,
            error: false,
            categoryData: (action as CategorySuccessAction).CategoryData
        };
        case CategoryActionTypes.CATEGORY_FAILED:
        return {
            ...state,
            inProgress: false,
            error: true
        };
        default:
        return state;
    }
}