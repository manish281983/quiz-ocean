import {Component, AfterViewInit, Input, Output, EventEmitter} from '@angular/core';
import { ICategory } from 'src/app/core/models/category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements AfterViewInit  {

 @Input() categoryList: any[];
 @Output() categorySelected = new EventEmitter<any>();
  @Input() selectedCategory: any;
  @Input() title: string;
  constructor() {
  }

  ngAfterViewInit() {
  }

  selectProductAction(id: string) {
    this.categorySelected.emit(id);
  }
}
