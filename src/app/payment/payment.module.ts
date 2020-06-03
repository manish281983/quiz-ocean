import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import { PaymentViewComponent } from './payment-view/payment-view.component';

const routes: Routes = [
    {path: '', component: PaymentViewComponent, pathMatch: 'full'}
];

@NgModule({
    declarations: [
        PaymentViewComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        SharedModule
    ],
    providers: [
    ],
})

export class PaymentModule {
}
