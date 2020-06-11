import { Injectable, Inject } from '@angular/core';
import { APP_CONFIG } from '../../core/data-config-key';
import {PAGE_CONTENTS} from '../../app.constant';
import { AppConfig } from '../../core/models/app-config.model';
import { BaseService } from '../../core/services/base.service';
import { CategoryRequestModel, CategoryModel } from './category-service.model';
import categoryResponse from '../../../assets/mock-json/category-list.json';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(
    @Inject(APP_CONFIG) public appConfig: AppConfig,
    protected baseService: BaseService) {
   }

  getCategory() {
    return new Observable((observer) => {
      observer.next(categoryResponse)
      observer.complete()
  });
    const httpOptions = this.getHTTPRequest();
    return this.baseService.doPost(this.appConfig.categoryAPI, httpOptions);
  }

  mapCategoryResponse(data: any) {
    if (data.category) {
      const response: CategoryModel = {
        categoryProductList: data.category.categoryProductList || []
      };
      return response;
    }
    return null;
  }

  getHTTPRequest() {
    const requestBody: CategoryRequestModel = {
      category: {
        productCount: PAGE_CONTENTS['category.categoryCount']
      }
    };
    return {
      headers: '',
      params: '',
      body: requestBody
    }
  }
}
