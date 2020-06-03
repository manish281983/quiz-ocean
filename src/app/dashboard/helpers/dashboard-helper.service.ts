import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { DashboardAction } from '../ngrx/dashboard.action';
import { DashboardModel } from '../services/dashboard-service.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardHelperService {
  inProgress$: Observable<boolean>;
  dashboardData$: Observable<DashboardModel>;

  constructor(private store$: Store<any>) {
    this.inProgress$ = this.store$.pipe(
      select((state: any) => state.dashboard.inProgress)
    );
    this.dashboardData$ = this.store$.pipe(
      select((state: any) => state.dashboard.dashboardData)
    );
  }

  getDashboard() {
    this.store$.dispatch(new DashboardAction());
  }
}
