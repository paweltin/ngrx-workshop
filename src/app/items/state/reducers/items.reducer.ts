import * as fromRoot from '../../../reducers';
import { ItemsActions, ItemsActionTypes } from '../actions/items.actions';
import {Item} from '../../item';

export const itemsFeatureKey = 'items';

export interface State extends fromRoot.State {
  items: ItemsState;
}

export interface ItemsState {
  items: Item[];
}

export const initialState: ItemsState = {
  items: []
};

export function reducer(state = initialState, action: ItemsActions): ItemsState {
  switch (action.type) {

    case ItemsActionTypes.SetItems:
      return {
        ...state,
        items: action.payload
      };

    default:
      return state;
  }
}
