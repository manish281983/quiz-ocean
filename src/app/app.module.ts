import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgHeaderViewModule} from 'ng-header-view';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { APP_CONFIG } from './core/data-config-key';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CartModule} from '../app/cart/cart.module';
import { EffectsModule } from '@ngrx/effects';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    NgHeaderViewModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSidenavModule,
    MatFormFieldModule,
    SharedModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([
    ]),
    HttpClientModule,
    CartModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
 
  ],
  entryComponents: [],
  providers: [
    { provide: APP_CONFIG, useValue: environment.APP_CONFIG }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
