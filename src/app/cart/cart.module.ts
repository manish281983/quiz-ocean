import { NgModule } from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './ngrx/cart.reducer';
import { CartEffects } from './ngrx/cart.effect';


@NgModule({
    declarations: [
    ],
    imports: [
        EffectsModule.forFeature([
            CartEffects
        ]),
        StoreModule.forFeature('cart', cartReducer)
    ],
    providers: [
    ],
})

export class CartModule {
}
