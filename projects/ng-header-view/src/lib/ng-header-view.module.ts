import { NgModule } from '@angular/core';
import { NgHeaderViewComponent } from './ng-header-view.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [NgHeaderViewComponent],
  imports: [
    BrowserModule
  ],
  exports: [NgHeaderViewComponent]
})
export class NgHeaderViewModule { }
