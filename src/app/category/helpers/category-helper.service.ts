import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { CategoryAction } from '../ngrx/category.action';
import { CategoryModel } from '../services/category-service.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryHelperService {
  inProgress$: Observable<boolean>;
  categoryData$: Observable<CategoryModel>;

  constructor(private store$: Store<any>) {
    this.inProgress$ = this.store$.pipe(
      select((state: any) => state.category.inProgress)
    );
    this.categoryData$ = this.store$.pipe(
      select((state: any) => state.category.categoryData)
    );
  }

  getCategoryDetails() {
    this.store$.dispatch(new CategoryAction());
  }
}
