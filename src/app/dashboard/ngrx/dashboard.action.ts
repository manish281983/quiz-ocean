import { Action } from '@ngrx/store';
import { DashboardModel } from '../services/dashboard-service.model';

export enum DashboardActionTypes {
    DASHBOARD_INIT = '[DASHBOARD] Make Request',
    DASHBOARD_SUCCESS = '[DASHBOARD_SUCCESS] Request success',
    DASHBOARD_FAILED = '[DASHBOARD_FAILED] Request failed'
}

export class DashboardAction implements Action {
    public type = DashboardActionTypes.DASHBOARD_INIT;
    constructor() { }
}

export class DashboardSuccessAction implements Action {
    public type = DashboardActionTypes.DASHBOARD_SUCCESS;
    constructor(public dashboardData: DashboardModel) { }
}

export class DashboardFailedAction implements Action {
    public type = DashboardActionTypes.DASHBOARD_FAILED;
    constructor() { }
}

export type DashboardActions =
    DashboardAction |
    DashboardSuccessAction |
    DashboardFailedAction
;
