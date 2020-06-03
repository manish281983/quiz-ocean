import { Component, OnInit } from '@angular/core';
import mockProductList from '../../../assets/mock-json/product-list.json';
import { Observable } from 'rxjs';
import { DashboardHelperService } from '../helpers/dashboard-helper.service';
import { DashboardModel } from '../services/dashboard-service.model';
import { ICategory } from '../../core/models/category';
import { Router } from '@angular/router';
import {APP_LABELS} from '../../app.constant';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailComponent } from '../../product/components/product-detail/product-detail.component';
import { IProduct } from 'src/app/core/models/product';
import { CartHelperService } from 'src/app/cart/helpers/cart-helper.service';
import { CartModel } from 'src/app/cart/services/cart-service.model';
import { ICart } from 'src/app/core/models/cart';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss']
})
export class DashboardViewComponent implements OnInit {

  public inProgress$: Observable<boolean>;
  public dashboardData$: Observable<DashboardModel>;
  
  maxProductDisplayed: number;
  productList: any;
  categoryProductList: ICategory[];
  
  pageLabel: any;

  constructor(
    private cartHelperService: CartHelperService,
    private dashboardHelperService: DashboardHelperService,
    private router: Router,
    public dialog: MatDialog) {
      this.inProgress$ = this.dashboardHelperService.inProgress$;
      this.dashboardData$ = this.dashboardHelperService.dashboardData$;
  }

  ngOnInit() {
    this.pageLabel = APP_LABELS;
    window.scrollTo(0, 0);
    this.productList = mockProductList;
    this.dashboardHelperService.getDashboard();
    this.maxProductDisplayed = 10;
    this.dashboardHelperService.dashboardData$.subscribe((dashboardData: DashboardModel) => {
      this.categoryProductList = dashboardData.categoryProductList;
    });
  }

  onScroll() {
    if (this.categoryProductList) {
      if (this.maxProductDisplayed < this.categoryProductList.length) {
        this.maxProductDisplayed = this.maxProductDisplayed + 10;
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
        this.router.navigate(['trivia-quiz/', productDetail.id]);
      }
    });
  }

}
