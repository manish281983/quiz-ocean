import { Injectable, Inject } from '@angular/core';
import { APP_CONFIG } from '../../core/data-config-key';
import { AppConfig } from '../../core/models/app-config.model';
import { BaseService } from '../../core/services/base.service';
import { CartRequestModel, CartModel } from './cart-service.model';
import {PAGE_CONTENTS} from '../../app.constant';
import { ICart } from 'src/app/core/models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(
    @Inject(APP_CONFIG) public appConfig: AppConfig,
    protected baseService: BaseService
  ) {
   }

  getCart() {
    const httpOptions = this.getHTTPRequest(null);
    return this.baseService.doPost(this.appConfig.cartAPI, httpOptions);
  }

  updateCart(request: ICart) {
    const httpOptions = this.getHTTPRequest(request);
    return this.baseService.doPost(this.appConfig.cartAPI, httpOptions);
  }

  mapCartResponse(data: any) {
      return data;
  }

  getHTTPRequest(request) {
    const requestBody: CartRequestModel = request;

    return {
      headers: '',
      params: '',
      body: requestBody
    }
  }
}
