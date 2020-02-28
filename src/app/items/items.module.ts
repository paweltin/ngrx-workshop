import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemsComponent} from './items/items.component';
import {FormsModule} from '@angular/forms';
import {MoreComponent} from '../more/more.component';
import { StoreModule } from '@ngrx/store';
import * as fromItems from './state/reducers/items.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ItemsEffects } from './state/effects/items.effects';


@NgModule({
  declarations: [
    ItemsComponent,
    MoreComponent
  ],
  exports: [
    ItemsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature(fromItems.itemsFeatureKey, fromItems.reducer),
    EffectsModule.forFeature([ItemsEffects]),
  ]
})
export class ItemsModule {
}
