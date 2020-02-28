import { Action } from '@ngrx/store';
import {Item} from '../../item';

export enum ItemsActionTypes {
  LoadItems = '[Items] Load Items',
  SetItems = '[Items] Set Items',


}

export class LoadItems implements Action {
  readonly type = ItemsActionTypes.LoadItems;
}

export class SetItems implements Action {
  readonly type = ItemsActionTypes.SetItems;

  constructor(public payload: Item[]) {
  }
}


export type ItemsActions = LoadItems | SetItems;
