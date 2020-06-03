import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, catchError, map, tap } from 'rxjs/operators';

import { ProductAction, 
    ProductActionTypes, 
    ProductSuccessAction, 
    ProductFailedAction 
} from './product.action';
import { ProductService } from '../services/product.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ProductEffects {
  constructor(
    private service: ProductService,
    private actions$: Actions<ProductAction>
  ) {}

  @Effect()
  public performProduct$: Observable<any> = this.actions$.pipe(
    ofType(ProductActionTypes.PRODUCT_INIT),
    switchMap((action: ProductAction) => {
      return this.service.getProduct(action.categoryId).pipe(
        map(data => {
          return new ProductSuccessAction(this.service.mapProductResponse(data));
        }),
        catchError(error => {
            return of(new ProductFailedAction());
        })
      );

    })
  );
}