import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, catchError, map, tap } from 'rxjs/operators';

import { DashboardAction, 
    DashboardActionTypes, 
    DashboardSuccessAction, 
    DashboardFailedAction 
} from './dashboard.action';
import { DashboardService } from '../services/dashboard.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class DashboardEffects {
  constructor(
    private service: DashboardService,
    private actions$: Actions<DashboardAction>
  ) {}

  
  @Effect()
  public performDashboard$: Observable<any> = this.actions$.pipe(
    ofType(DashboardActionTypes.DASHBOARD_INIT),
    switchMap((action: DashboardAction) => {
      return this.service.getDashboard().pipe(
        map(data => {
          return new DashboardSuccessAction(this.service.mapDashboardResponse(data));
        }),
        catchError(error => {
            return of(new DashboardFailedAction());
        })
      );

    })
  );
}