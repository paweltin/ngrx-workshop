import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {ItemsState} from '../../items/state/reducers/items.reducer';
import {getSelectedItems} from '../../items/state/selectors/items.selectors';
import {Observable} from 'rxjs';
import {Item} from '../../items/item';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  selectedItems$: Observable<Item[]>;

  constructor(private store: Store<ItemsState>) {
  }

  ngOnInit() {
    this.selectedItems$ = this.store.pipe(
      select(getSelectedItems),
    );
  }

}
