import * as fromRoot from '../../../reducers';
import {ItemsActions, ItemsActionTypes} from '../actions/items.actions';
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

    case ItemsActionTypes.SetMoreItems:
      return {
        ...state,
        items: state.items.concat(action.payload)
      };

    case ItemsActionTypes.CheckItem:
      const items = state.items.map(item => {
        const itemLocal = Object.assign({}, item);
        if (item.id === action.payload) {
          itemLocal.selected = !item.selected;
        }

        return itemLocal;
      });

      return {
        ...state,
        items
      };

    default:
      return state;
  }
}
