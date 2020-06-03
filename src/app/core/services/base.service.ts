import { Injectable } from '@angular/core';
import { AppConfig } from '../models/app-config.model';
import { DaoConfig } from '../models/dao-config.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  constructor(protected http: HttpClient) {
  }

  doPost(daoConfig: DaoConfig, httpOptions: any) {
    return  this.http.post<any>(daoConfig.url, httpOptions.body);
  }
/*
  buildRequestConfig = (url?: string, useAlwaysAppCache: boolean = false): RequestConfig => (<RequestConfig>{
    baseUrl: useDefault(url, this.daoConfig.url),
    retryConfig: this.buildRetry(),
    timeout: useDefault(this.daoConfig.timeout, 500),
    cacheConfig: this.buildCacheConfig(useAlwaysAppCache)
  })

  
  buildHttpOptions = (url?: string, params?: HttpParams, JWT?: string ): HttpOptionsConfig => {
    const headers = this.buildHeaders();
    const options: HttpOptionsConfig = {
        headers: headers
    };
    if (url) { options.url = url; }
    if (params) { options.params = params; }
    return options;
  }
/*
  protected buildHeaders = (): HttpHeaders => new HttpHeaders({
    'content-type': 'application/json; charset=UTF-8',
  })*/

}
