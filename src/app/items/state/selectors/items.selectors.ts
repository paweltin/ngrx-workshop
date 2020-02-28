import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromItems from '../reducers/items.reducer';

export const selectItemsState = createFeatureSelector<fromItems.ItemsState>(
  fromItems.itemsFeatureKey
);

export const getItems = createSelector(
  selectItemsState,
  state => state.items
);

export const getSelectedItems = createSelector(
  selectItemsState,
  state => state.items.filter(item => item.selected)
);

export const getSelectedItemsCount = createSelector(
  selectItemsState,
  state => state.items.filter(item => item.selected).length
);
