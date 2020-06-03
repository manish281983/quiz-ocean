import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryViewComponent } from './category-view/category-view.component';
import { SharedModule } from '../shared/shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { categoryReducer } from './ngrx/category.reducer';
import { CategoryEffects } from './ngrx/category.effect';

const routes: Routes = [
    {path: '', component: CategoryViewComponent, pathMatch: 'full'}
];

@NgModule({
    declarations: [
        CategoryViewComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        EffectsModule.forFeature([
            CategoryEffects
        ]),
        SharedModule,
        InfiniteScrollModule,
        StoreModule.forFeature('category', categoryReducer)
    ],
    providers: [
    ],
})

export class CategoryModule {
}
