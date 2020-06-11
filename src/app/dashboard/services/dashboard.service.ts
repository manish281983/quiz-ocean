import { Injectable, Inject } from '@angular/core';
import { APP_CONFIG } from '../../core/data-config-key';
import { AppConfig } from '../../core/models/app-config.model';
import { BaseService } from '../../core/services/base.service';
import { DashboardRequestModel, DashboardModel } from './dashboard-service.model';
import {PAGE_CONTENTS} from '../../app.constant';
import { retry } from 'rxjs/operators';
import homeResponse from '../../../assets/mock-json/home.json';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(
    @Inject(APP_CONFIG) public appConfig: AppConfig,
    protected baseService: BaseService
  ) {
   }

  getDashboard() {
    return new Observable((observer) => {
      observer.next(homeResponse)
      observer.complete()
  });
    const httpOptions = this.getHTTPRequest();
    return this.baseService.doPost(this.appConfig.featureAPI, httpOptions);
  }

  mapDashboardResponse(data: any) {
    if (data.home) {
      const response: DashboardModel = {
        featureProductList: this.mapProduct(data.home.featureProductList) || [],
        categoryProductList: data.home.categoryProductList || []
      };
      return response;
    }
    return null;
  }

  mapProduct(productList) {
    return productList.map(product =>{
        return {
          name: product.name,
          id: product.id,
          categoryId: product.categoryId,
          price: product.price,
          description: product.description,
          quantity: product.quantity,
          thumbImage: product.thumbImage,
          discount: product.discount || 0,
          productCount: product.productCount || 0
        }
     })
  }

  getHTTPRequest() {
    const requestBody: DashboardRequestModel = {
      home: {
        featureProduct: PAGE_CONTENTS['home.featureProduct'],
        productCount: PAGE_CONTENTS['home.productCount']
      }
    };
    return {
      headers: '',
      params: '',
      body: requestBody
    }
  }
}
