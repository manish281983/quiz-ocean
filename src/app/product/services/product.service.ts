import { Injectable, Inject } from '@angular/core';
import { APP_CONFIG } from '../../core/data-config-key';
import { AppConfig } from '../../core/models/app-config.model';
import { BaseService } from '../../core/services/base.service';
import { ProductRequestModel, ProductModel } from './product-service.model';
import {PAGE_CONTENTS} from '../../app.constant';
import { ICategory } from 'src/app/core/models/category';
import productResponse from '../../../assets/mock-json/product-list.json';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(
    @Inject(APP_CONFIG) public appConfig: AppConfig,
    protected baseService: BaseService) {
   }

  getProduct(categoryId: string) {
    return new Observable((observer) => {
      observer.next(productResponse)
      observer.complete()
  });
   
    const httpOptions = this.getHTTPRequest(categoryId);
    return this.baseService.doPost(this.appConfig.productAPI, httpOptions);
  }

  mapProductResponse(data: any) {
    if (data.product) {
      const response: ProductModel = {
        categoryList: this.assignSubCategory(data.product.categoryList),
        category: data.product.category,
        productList: data.product.productList
      };
      return response;
    }
    return null;
  }

  assignSubCategory(categoryList) {
    const parentCategoryList: ICategory[] = categoryList.filter(category => category.parentId === '0' );
    parentCategoryList.forEach(parentCategory => {
      const subCategoryList = categoryList.filter(category => category.parentId === parentCategory.id);
      parentCategory.subCategoryList = subCategoryList;
    });
    return parentCategoryList;
  }

  getHTTPRequest(catId: string) {
    const requestBody: ProductRequestModel = {
      product: {
        categoryId: catId
      }
    };
    return {
      headers: '',
      params: '',
      body: requestBody
    }
  }
}
