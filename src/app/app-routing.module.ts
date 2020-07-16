import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductViewComponent } from './product/product-view/product-view.component';
import { PaymentViewComponent } from './payment/payment-view/payment-view.component';

const routes: Routes = [
  {
    path: 'product/:id',
    loadChildren: './product/product.module#ProductModule',
    pathMatch: 'full',
  },
  {
    path: 'product',
    redirectTo: '/dashboard', pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule',
    pathMatch: 'full',
  },
  {
    path: 'category',
    loadChildren: './category/category.module#CategoryModule',
    pathMatch: 'full',
  },
  {
    path: 'payment',
    loadChildren: './payment/payment.module#PaymentModule',
    pathMatch: 'full',
  },
  {
    path: 'user',
    loadChildren: './user-management/user-management.module#UserManagementModule',
    pathMatch: 'full',
  },
  {
    path: 'trivia-quiz/:id',
    loadChildren: './trivia-quiz/trivia-quiz.module#TriviaQuizModule',
    pathMatch: 'full',
  },
  {
    path: 'message/:id',
    loadChildren: './messages/message.module#MessageModule',
    pathMatch: 'full',
  },
  {
      path: 'message',
      loadChildren: './messages/message.module#MessageModule',
      pathMatch: 'full',
  },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
