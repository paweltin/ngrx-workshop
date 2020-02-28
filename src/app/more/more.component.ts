import {Component, EventEmitter, Output} from '@angular/core';
import {Item} from '../items/item';
import {ItemsState} from '../items/state/reducers/items.reducer';
import {Store} from '@ngrx/store';
import {LoadMoreItems} from '../items/state/actions/items.actions';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss']
})
export class MoreComponent {
  @Output() clicked = new EventEmitter<Item[]>();

  constructor(private store: Store<ItemsState>) {
  }

  onClick(): void {
    this.store.dispatch(new LoadMoreItems());
  }

}
