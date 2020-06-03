import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryModel } from '../services/category-service.model';
import { CategoryHelperService } from '../helpers/category-helper.service';
import { ICategory } from '../../core/models/category';
import { Router } from '@angular/router';
import {APP_LABELS} from '../../app.constant';
import { IProduct } from '../../core/models/product';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailComponent } from '../../product/components/product-detail/product-detail.component';
import { CartHelperService } from 'src/app/cart/helpers/cart-helper.service';
import { ICart } from 'src/app/core/models/cart';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.scss']
})
export class CategoryViewComponent implements OnInit  {

  public inProgress$: Observable<boolean>;
  public categoryData$: Observable<CategoryModel>;


  maxCategoryDisplayed: number;
  categoryProductList: ICategory[];
  pageLabel: any;

  constructor( 
    private cartHelperService: CartHelperService,
    private categoryHelperService: CategoryHelperService, 
    private router: Router,
    public dialog: MatDialog) { 
    this.inProgress$ = this.categoryHelperService.inProgress$;
    this.categoryData$ = this.categoryHelperService.categoryData$;
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.pageLabel = APP_LABELS;
    this.categoryHelperService.getCategoryDetails();
    this.maxCategoryDisplayed = 10;
    this.categoryHelperService.categoryData$.subscribe((categoryData: CategoryModel) => {
      this.categoryProductList = categoryData.categoryProductList;
    });
  }

  onScroll() {
    if (this.categoryProductList) {
      if (this.maxCategoryDisplayed < this.categoryProductList.length) {
        this.maxCategoryDisplayed = this.maxCategoryDisplayed + 10;
      }
    }
  }

  categorySelectAction(id: string) {
    this.router.navigate(['product/', id]);
  }

  productSelectAction(product: IProduct) {
    const productDetail: IProduct = {
      id: product.id,
      name: product.name,
      quantity: product.quantity,
      thumbImage: product.thumbImage,
      unavailable: product.unavailable,
      price: product.price,
      productCount: '0'
    };
    const dialogRef = this.dialog.open(ProductDetailComponent, {
      data: productDetail
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.cartHelperService.updateCart(result);
      }
    });
  }
}
