import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';

import {concatMap, map} from 'rxjs/operators';
import * as itemsActions from '../../state/actions/items.actions';
import {ItemsService} from '../../items.service';
import {Item} from '../../item';


@Injectable()
export class ItemsEffects {


  @Effect()
  loadItems$ = this.actions$.pipe(
    ofType(itemsActions.ItemsActionTypes.LoadItems),
    concatMap(() => this.itemsService.getItems().pipe(
      map((items: Item[]) => new itemsActions.SetItems(items))
    ))
  );

  @Effect()
  loadMoreItems$ = this.actions$.pipe(
    ofType(itemsActions.ItemsActionTypes.LoadMoreItems),
    concatMap(() => this.itemsService.getMoreItems().pipe(
      map((items: Item[]) => new itemsActions.SetMoreItems(items))
    ))
  );


  constructor(private actions$: Actions<itemsActions.ItemsActions>, private itemsService: ItemsService) {
  }

}
