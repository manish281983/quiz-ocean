import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CartHelperService } from '../helpers/cart-helper.service';
import { Observable } from 'rxjs';
import { ICart } from 'src/app/core/models/cart';
@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss']
})
export class CartViewComponent implements OnInit {
  @Output() cartAction = new EventEmitter<any>();
  @Input() pageType: string;

  public productCount$: Observable<number>;
  public cartList$: Observable<ICart[]>;

  constructor(private cartHelperService: CartHelperService) { 
    this.productCount$ = this.cartHelperService.productCount$;
    this.cartList$ = this.cartHelperService.cartList$;
  }

  ngOnInit() {
    this.cartHelperService.getCart();
    this.cartHelperService.productCount$.subscribe((productCount: number) => {
      this.cartAction.emit({cartCount: productCount});
       
    });
  }

  closeCartAction(action) {
    this.cartAction.emit(action);
  }

}
