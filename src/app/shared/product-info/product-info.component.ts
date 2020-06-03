import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {

  @Input() product: any;
 
  @Output()
  public productSelectAction = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  productAction() {
    this.productSelectAction.emit(this.product);
  }

  productOver(product) {}
}
