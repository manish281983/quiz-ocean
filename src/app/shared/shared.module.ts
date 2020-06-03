import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ProductInfoComponent } from './product-info/product-info.component';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import { CartViewComponent } from '../cart/cart-view/cart-view.component';
import { TreeviewModule } from 'ngx-treeview';
import { ProductDetailComponent } from '../product/components/product-detail/product-detail.component';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
    imports: [
        TreeviewModule.forRoot(),
        FormsModule,
        CommonModule
    ],
    exports: [
        AngularFontAwesomeModule,
        CommonModule,
        ProductInfoComponent,
        MatTreeModule,
        MatIconModule,
        CartViewComponent,
        FormsModule
    ],
    declarations: [
        ProductInfoComponent,
        CartViewComponent,
        ProductDetailComponent
    ],
    providers: [
        AngularFontAwesomeModule,
        CommonModule,
        MatTreeModule,
        MatIconModule
    ],
    entryComponents: [
        ProductDetailComponent
    ]
})
export class SharedModule {
    constructor() {
    }
}
