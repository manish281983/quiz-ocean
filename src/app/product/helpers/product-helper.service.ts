import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ProductAction } from '../ngrx/product.action';
import { ProductModel } from '../services/product-service.model';

@Injectable({
  providedIn: 'root'
})
export class ProductHelperService {
  inProgress$: Observable<boolean>;
  productData$: Observable<ProductModel>;

  constructor(private store$: Store<any>) {
    this.inProgress$ = this.store$.pipe(
      select((state: any) => state.product.inProgress)
    );
    this.productData$ = this.store$.pipe(
      select((state: any) => state.product.productData)
    );
  }

  getProductDetails(categoryId: string) {
    this.store$.dispatch(new ProductAction(categoryId));
  }
}
