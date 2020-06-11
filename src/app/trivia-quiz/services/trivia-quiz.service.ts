import { Injectable, Inject } from '@angular/core';
import { APP_CONFIG } from '../../core/data-config-key';
import { AppConfig } from '../../core/models/app-config.model';
import { BaseService } from '../../core/services/base.service';
import { TriviaQuizRequestModel, TriviaQuizModel } from './trivia-quiz-service.model';
import {AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TriviaQuizService {
  constructor(
    @Inject(APP_CONFIG) public appConfig: AppConfig,
    protected baseService: BaseService,
    private db: AngularFireDatabase
  ) {
   }

  getTriviaQuiz(productId: string) {
    return this.getTriviaFirbase(productId);
    const httpOptions = this.getHTTPRequest(productId);

    return this.baseService.doPost(this.appConfig.featureAPI, httpOptions);
  }

  getTriviaFirbase(id): Observable<any[]>{
    return this.db.list('trivia-'+id).valueChanges();
  }

  mapTriviaQuizResponse(data: any) {
    if (data.length!==0) {
      const response: TriviaQuizModel = {
        productDetail: data[0].trivia.productDetail,
        triviaQuizList: data[0].trivia.triviaQuizList || []
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
          quantity: product.quantity,
          thumbImage: product.thumbImage,
          discount: product.discount || 0,
          productCount: product.productCount || 0
        }
     })
  }

  getHTTPRequest(id: string) {
    const requestBody: TriviaQuizRequestModel = {
      trivia: {
        product: {
          productId: id
        }
      }
    };
    return {
      headers: '',
      params: '',
      body: requestBody
    }
  }
}
