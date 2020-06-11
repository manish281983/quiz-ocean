import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../services/product-service.model';
import { ProductHelperService } from '../helpers/product-helper.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/core/models/category';
import { IProduct } from 'src/app/core/models/product';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailComponent } from '../../product/components/product-detail/product-detail.component';
import { CartHelperService } from 'src/app/cart/helpers/cart-helper.service';
import { ICart } from 'src/app/core/models/cart';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit, AfterViewInit  {

  public inProgress$: Observable<boolean>;
  public productData$: Observable<ProductModel>;
  
  maxProductDisplayed: number;
  objCategory: ICategory;
  parentCategoryId: string;
  productList: any;
  constructor( 
    private router: Router,
    private cartHelperService: CartHelperService,
    private productHelperService: ProductHelperService, 
    private route: ActivatedRoute,
    public dialog: MatDialog) {
    this.inProgress$ = this.productHelperService.inProgress$;
    this.productData$ = this.productHelperService.productData$;
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.maxProductDisplayed = 10;
    this.productHelperService.productData$.subscribe((productData: ProductModel) => {
      this.productList = productData.productList;
      this.objCategory = productData.category;
      if (productData.category) {
        this.parentCategoryId = productData.category.parentId;
      }
    });
    if (this.route.snapshot.params[`id`]) {
      this.productHelperService.getProductDetails(this.route.snapshot.params[`id`]);
    }
  }

  onScroll() {
    if (this.productList) {
      if (this.maxProductDisplayed < this.productList.length) {
        this.maxProductDisplayed = this.maxProductDisplayed + 10;
      }
    }
  }
  ngAfterViewInit() {

  }
 
  productSelectAction(product: IProduct) {
    const productDetail: IProduct = {
      id: product.id,
      name: product.name,
      quantity: product.quantity,
      thumbImage: product.thumbImage,
      unavailable: product.unavailable,
      description: product.description,
      price: product.price,
      productCount: '0'
    };
    const dialogRef = this.dialog.open(ProductDetailComponent, {
      data: productDetail
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.router.navigate(['trivia-quiz/', productDetail.id]);
      }
    });
  }

}
