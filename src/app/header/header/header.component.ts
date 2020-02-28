import {Component, OnInit} from '@angular/core';
import {ItemsState} from '../../items/state/reducers/items.reducer';
import {select, Store} from '@ngrx/store';
import {getSelectedItemsCount} from '../../items/state/selectors/items.selectors';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  selected$: Observable<number>;

  constructor(private store: Store<ItemsState>) {
  }

  ngOnInit() {
    this.selected$ = this.store.pipe(
      select(getSelectedItemsCount),
    );
  }

}
