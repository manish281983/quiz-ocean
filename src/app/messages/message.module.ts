import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import { MessageViewComponent } from './message-view/message-view.component';

const routes: Routes = [
    {path: '', component: MessageViewComponent, pathMatch: 'full'}
];

@NgModule({
    declarations: [
        MessageViewComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        SharedModule
    ],
    providers: [
    ],
})

export class MessageModule {
}
