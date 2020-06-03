import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductViewComponent } from './product-view/product-view.component';
import {SharedModule} from '../shared/shared.module';
import { RefineViewComponent } from './components/refine-view/refine-view.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './ngrx/product.reducer';
import { ProductEffects } from './ngrx/product.effect';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

const routes: Routes = [
    {path: '', component: ProductViewComponent, pathMatch: 'full'}
];

@NgModule({
    declarations: [
        ProductViewComponent,
        RefineViewComponent,
        CategoryListComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        EffectsModule.forFeature([
            ProductEffects
        ]),
        SharedModule,
        InfiniteScrollModule,
        StoreModule.forFeature('product', productReducer)
    ],
    providers: [
    ],
})

export class ProductModule {
}
