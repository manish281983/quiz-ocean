import { Injectable } from '@angular/core';
import { CartModule } from '../cart.module';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { CartAction, AddCartAction } from '../ngrx/cart.action';
import { IProduct } from '../../core/models/product';
import { CartModel } from '../services/cart-service.model';
import { ICart } from 'src/app/core/models/cart';
import * as uuid from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class CartHelperService {
  inProgress$: Observable<boolean>;
  productCount$: Observable<number>;
  cartList$: Observable<ICart[]>;

  constructor(private store$: Store<any>) {
    this.productCount$ = this.store$.pipe(
      select((state: any) => state.cart.productCount)
    );
    this.inProgress$ = this.store$.pipe(
      select((state: any) => state.cart.inProgress)
    );
    this.cartList$ = this.store$.pipe(
      select((state: any) => state.cart.cartList)
    );
  }

  getCart() {
    this.store$.dispatch(new CartAction());
  }

  updateCart(updateData: any) {
    const cart: ICart = {
      id:  uuid.v4(),
      productId: updateData.id,
      orderId: '0',
      userId: '1',
      productCount: updateData.productCount
    };
    this.store$.dispatch(new AddCartAction(cart));
  }
}
