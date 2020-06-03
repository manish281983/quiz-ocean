import {FlatTreeControl} from '@angular/cdk/tree';
import {Component, Input, OnInit} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import mockCategoryList from '../../../../assets/mock-json/category-list.json';
import { ICategory } from 'src/app/core/models/category';
import { ProductHelperService } from '../../helpers/product-helper.service';

@Component({
  selector: 'app-refine-view',
  templateUrl: './refine-view.component.html',
  styleUrls: ['./refine-view.component.scss']
})
export class RefineViewComponent implements OnInit{

  @Input() categoryList: ICategory[];
  @Input() selectedCategory: ICategory;
  constructor(private productHelperService: ProductHelperService) {
  }

  ngOnInit() {

  }
  categorySelected(id: string) {
    this.productHelperService.getProductDetails(id);
  }
}
