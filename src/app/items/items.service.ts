import {Injectable} from '@angular/core';
import {Item} from './item';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private static counter = 3;

  private items: Item[] = [
    {
      id: 0,
      value: 'Pierwszy',
    },
    {
      id: 1,
      value: 'Drugi',
    },
    {
      id: 2,
      value: 'Trzeci',
    }
  ];

  constructor() {
  }

  getItems(): Observable<Item[]> {
    return of(this.items);
  }

  getMoreItems(): Observable<Item[]> {
    const moreItems: Item[] = [];
    const limit = ItemsService.counter + 3;

    for (ItemsService.counter; ItemsService.counter < limit; ItemsService.counter++) {
      moreItems.push({
        id: ItemsService.counter,
        value: `Item ${ItemsService.counter}`
      });
    }

    return of(moreItems);
  }
}
