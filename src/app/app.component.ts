import { Component, OnInit } from '@angular/core';
import {Item} from './items/item';
import {ItemsService} from './items/items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx-workshop';

  selected = 0;
  items: Item[];
  itemsSelected: Item[];

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.itemsService.getItems().subscribe(items => this.items = items);
  }

  onItemSelected(selected: Item[]) {
    this.selected = selected.length;
    this.itemsSelected = selected;
  }
}
