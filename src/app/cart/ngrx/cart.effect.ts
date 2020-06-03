import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, catchError, map, tap, withLatestFrom } from 'rxjs/operators';
import * as uuid from 'uuid';

import { CartAction, 
    CartActionTypes, 
    CartSuccessAction, 
    CartFailedAction, 
    AddCartAction
} from './cart.action';
import { CartService } from '../services/cart.service';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ICart } from 'src/app/core/models/cart';

@Injectable({
    providedIn: 'root'
})

export class CartEffects {
  constructor(
    private store$: Store<any>,
    private service: CartService,
    private actions$: Actions<CartAction>
  ) {}

  
  @Effect()
  public performCart$: Observable<any> = this.actions$.pipe(
    ofType(CartActionTypes.CART_INIT),
    switchMap((action: CartAction) => {
      return this.service.getCart().pipe(
        map(data => {
          return new CartSuccessAction(this.service.mapCartResponse(data));
        }),
        catchError(error => {
            return of(new CartFailedAction());
        })
      );

    })
  );


  

  @Effect()
  public updateCart$: Observable<any> = this.actions$.pipe(
    ofType(CartActionTypes.ADD_CART_INIT),
      withLatestFrom(this.store$.pipe(
        select(state => state)
      )),
      switchMap(([action, state]) => {
        const cartInfo = (action as AddCartAction).cart;
        const updateCart = state.cart.cartList.find(cart=> cart.productId === cartInfo.productId);
        let requestCart: ICart = null;
        if(updateCart) {
          requestCart = {
            id: updateCart.id,
            operation: 'update',
            userId: '1',
            orderId: '0',
            productId: cartInfo.productId,
            productCount: cartInfo.productCount
          }; 
        } else {
          requestCart = {
            id: cartInfo.id,
            operation: 'add',
            userId: '1',
            orderId: '0',
            productId: cartInfo.productId,
            productCount: cartInfo.productCount
          };
        }
        return this.service.updateCart(requestCart).pipe(
          map(data => {
            if(updateCart) {
              const updateCartList = state.cart.cartList.map(cart=> {
                return {
                  id: cart.id,
                  name: cart.name,
                  price: cart.price,
                  productId: cart.productId,
                  productCount: (cart.id === data.id)? data.productCount: cart.productCount
                };
              });
              return new CartSuccessAction(this.service.mapCartResponse(updateCartList));
            } else {
              return new CartSuccessAction(this.service.mapCartResponse(data));
            }
          }),
          catchError(error => {
              return of(new CartFailedAction());
          })
        );
  
      })
  );

/*
  @Effect()
  public updateCart$: Observable<any> = this.actions$.pipe(
    ofType(CartActionTypes.ADD_CART_INIT),
    switchMap((action: AddCartAction) => {
      return this.service.updateCart(action.cart).pipe(
        map(data => {
          return new CartSuccessAction(this.service.mapCartResponse(data));
        }),
        catchError(error => {
            return of(new CartFailedAction());
        })
      );

    })
  );
  */
}
