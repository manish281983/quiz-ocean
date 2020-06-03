import {
    DashboardActions,
    DashboardActionTypes,
    DashboardFailedAction,
    DashboardSuccessAction
    } from './dashboard.action';
import { DashboardModel } from '../services/dashboard-service.model';


export interface DashboardState {
    inProgress: boolean;
    dashboardData?: DashboardModel;
    error?: any;
}

const defaultState = {
    inProgress: false,
    error: false,
    dashboardData: {
        featureProductList: null,
        categoryProductList: null
    }
};

export function dashboardReducer(
state: DashboardState = { ...defaultState },
action: DashboardActions) {
    switch (action.type) {
        case DashboardActionTypes.DASHBOARD_INIT:
        return {
            ...state,
            inProgress: true,
            error: false,
        };
        case DashboardActionTypes.DASHBOARD_SUCCESS:
        return {
            ...state,
            inProgress: false,
            error: false,
            dashboardData: (action as DashboardSuccessAction).dashboardData
        };
        case DashboardActionTypes.DASHBOARD_FAILED:
        return {
            ...state,
            inProgress: false,
            error: true
        };
        default:
        return state;
    }
}