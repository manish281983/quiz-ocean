import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginViewComponent } from './components/login-view/login-view.component';
import { SharedModule } from '../shared/shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

const routes: Routes = [
    {path: '', component: LoginViewComponent, pathMatch: 'full'}
];

@NgModule({
    declarations: [
        LoginViewComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        SharedModule,
        InfiniteScrollModule
    ],
    providers: [
    ],
})

export class UserManagementModule {
}
