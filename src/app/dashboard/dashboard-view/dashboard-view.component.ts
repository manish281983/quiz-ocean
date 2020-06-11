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
import {AngularFireDatabase} from 'angularfire2/database';

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
    private db: AngularFireDatabase,
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
  
    this.getTodo().subscribe(data=>
      console.log(data));
  }
  createTodo() {
    return this.db.list('trivia-8affce15-9dfc-47ac-89c5-f8c941a59033').push({"home":{"featureProductList":null,"categoryProductList":null},"category":{"categoryProductList":null},"product":{"categoryList":null,"category":null,"productList":null},"detail":{"productDetail":null},"trivia":{"productDetail":{"quantity":"1","deleted":false,"categoryId":"a13642a1-9ef8-4d20-b0e1-b501efa4b666","unavailable":false,"featureProduct":true,"thumbImage":"https://quiz-ocean.s3.us-east-2.amazonaws.com/survey-quiz/superheros/ironman.JPG","id":"8affce15-9dfc-47ac-89c5-f8c941a59033","price":"","description":"Do you consider yourself an expert in all things Iron-Man? This Iron Man Quiz will really tickle your brain cells. ","name":"Iron Man Quiz: Only A True Tony Stark Fan Will Pass","discount":"0"},"triviaQuizList":[{"question":"When did Iron Man first appear in comics?","id":"e4d09cf4-7d42-4e0c-bd8e-871e79b11c96","answers":[{"answer":"1950","points":"0","status":"false"},{"answer":"1963","points":"0","status":"false"},{"answer":"1972","points":"0","status":"false"},{"answer":"1976","points":"0","status":"false"}]},{"question":"What was the name of the peacekeeping AI Stark built?","id":"8ebafcf4-f064-410c-9849-238cff0fbb5a","answers":[{"answer":"Ultron","points":"0","status":"false"},{"answer":"Thanos","points":"0","status":"false"},{"answer":"Loki","points":"0","status":"false"},{"answer":"Falcon","points":"0","status":"false"}]},{"question":"Who did Iron Man face off against in Civil War?","id":"9733ae65-412d-4327-ac8e-20d94eca6044","answers":[{"answer":"Ant man","points":"0","status":"false"},{"answer":"Black Panther","points":"0","status":"false"},{"answer":"Spiderman","points":"0","status":"false"},{"answer":"Captain America","points":"0","status":"false"}]},{"question":"What super-team is Iron Man a founding member of?","id":"727784d7-228d-4602-8f77-11cbada25312","answers":[{"answer":"Destructor","points":"0","status":"false"},{"answer":"Avengers","points":"0","status":"false"},{"answer":"X- Team","points":"0","status":"false"},{"answer":"Defenders","points":"0","status":"false"}]},{"question":"What is the name of Tony Stark father?","id":"37b51c19-d78f-48ec-9dfa-64766af13d44","answers":[{"answer":"Howard","points":"0","status":"false"},{"answer":"Jason","points":"0","status":"false"},{"answer":"Richard","points":"0","status":"false"},{"answer":"Thomas","points":"0","status":"false"}]},{"question":"What is the name of the device in Tony chest?","id":"c822cbd9-42d4-414c-88c5-375663ce431b","answers":[{"answer":"Arc Cylender","points":"0","status":"false"},{"answer":"Arc Reactor","points":"0","status":"false"},{"answer":"Strak Reactor","points":"0","status":"false"},{"answer":"Tony Cylender","points":"0","status":"false"}]},{"question":"What is the name of Iron Man's computer system?","id":"5399aad3-eced-4c37-a10a-f1267a508a26","answers":[{"answer":"Hogan","points":"0","status":"false"},{"answer":"Rescue","points":"0","status":"false"},{"answer":"Starker","points":"0","status":"false"},{"answer":"Jarvis","points":"0","status":"false"}]},{"question":"What is Pepper allergic to?","id":"dae921b3-b3f4-4bd3-82de-53c657ba40b6","answers":[{"answer":"Peanuts","points":"0","status":"false"},{"answer":"Mango","points":"0","status":"false"},{"answer":"Strawberries","points":"0","status":"false"},{"answer":"Apple","points":"0","status":"false"}]},{"question":"What is the name of Tony Stark company?","id":"dc8756ce-935b-4de3-8aa7-e4e474bdfaeb","answers":[{"answer":"Tony Corp","points":"0","status":"false"},{"answer":"Strak Industries","points":"0","status":"false"},{"answer":"Tony Industries","points":"0","status":"false"},{"answer":"Stark Corp","points":"0","status":"false"}]}]}});
  }

  getTodo(): Observable<any[]>{
    return this.db.list('category').valueChanges();
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
