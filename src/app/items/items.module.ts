import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemsComponent} from './items/items.component';
import {FormsModule} from '@angular/forms';
import {MoreComponent} from '../more/more.component';


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
  ]
})
export class ItemsModule {
}
