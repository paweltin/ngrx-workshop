import { Action } from '@ngrx/store';
import {Item} from '../../item';

export enum ItemsActionTypes {
  LoadItems = '[Items] Load Items',
  LoadMoreItems = '[Items] Load More Items',
  SetItems = '[Items] Set Items',
  SetMoreItems = '[Items] Set More Items',
  CheckItem = '[Items] Check Item'

}

export class LoadItems implements Action {
  readonly type = ItemsActionTypes.LoadItems;
}

export class LoadMoreItems implements Action {
  readonly type = ItemsActionTypes.LoadMoreItems;
}

export class SetItems implements Action {
  readonly type = ItemsActionTypes.SetItems;

  constructor(public payload: Item[]) {
  }
}

export class SetMoreItems implements Action {
  readonly type = ItemsActionTypes.SetMoreItems;

  constructor(public payload: Item[]) {
  }
}

export class CheckItem implements Action {
  readonly type = ItemsActionTypes.CheckItem;

  constructor(public payload: number) {
  }
}


export type ItemsActions = LoadItems | LoadMoreItems | SetItems | SetMoreItems | CheckItem;
