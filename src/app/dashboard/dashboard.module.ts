import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { SharedModule } from '../shared/shared.module';
import {EffectsModule} from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { dashboardReducer } from './ngrx/dashboard.reducer';
import { DashboardEffects } from './ngrx/dashboard.effect';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DashboardHighlightComponent } from './components/dashboard-highlight/dashboard-highlight.component';


const routes: Routes = [
    {path: '', component: DashboardViewComponent, pathMatch: 'full'}
];

@NgModule({
    declarations: [
        DashboardViewComponent,
        DashboardHighlightComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        EffectsModule.forFeature([
            DashboardEffects
        ]),
        SharedModule,
        InfiniteScrollModule,
        StoreModule.forFeature('dashboard', dashboardReducer)
    ],
    providers: [
    ],
})

export class DashboardModule {
}
