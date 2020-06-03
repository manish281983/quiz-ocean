import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, catchError, map, tap } from 'rxjs/operators';

import { CategoryAction, 
    CategoryActionTypes, 
    CategorySuccessAction, 
    CategoryFailedAction 
} from './category.action';
import { CategoryService } from '../services/category.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class CategoryEffects {
  constructor(
    private service: CategoryService,
    private actions$: Actions<CategoryAction>
  ) {}

  
  @Effect()
  public performCategory$: Observable<any> = this.actions$.pipe(
    ofType(CategoryActionTypes.CATEGORY_INIT),
    switchMap((action: CategoryAction) => {
      return this.service.getCategory().pipe(
        map(data => {
          return new CategorySuccessAction(this.service.mapCategoryResponse(data));
        }),
        catchError(error => {
            return of(new CategoryFailedAction());
        })
      );

    })
  );
}