import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Item} from '../item';
import {select, Store} from '@ngrx/store';
import {ItemsState} from '../state/reducers/items.reducer';
import * as itemsActions from '../state/actions/items.actions';
import * as itemsSelectors from '../state/selectors/items.selectors';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  items$: Observable<Item[]>;

  constructor(private store: Store<ItemsState>) { }

  ngOnInit() {
    this.store.dispatch(new itemsActions.LoadItems());

    this.items$ = this.store.pipe(select(itemsSelectors.getItems));
  }

  updateSelected($event): void {
    this.store.dispatch(new itemsActions.CheckItem(+$event.target.dataset.id));
  }
}
