import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Item} from '../item';
import {ItemsService} from '../items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  items: Item[];
  @Output() itemSelected = new EventEmitter<Item[]>();
  itemsSelected: Item[] = [];

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.itemsService.getItems().subscribe(items => this.items = items);
  }

  updateSelected($event): void {
    console.log($event.target.dataset);
    if ($event.target.checked) {
      this.itemsSelected.push({id: $event.target.dataset.id, value: $event.target.dataset.value});
    } else {
      this.itemsSelected = this.itemsSelected.filter(value => value.id !== $event.target.dataset.id);
    }
    this.itemSelected.emit(this.itemsSelected);
  }

  onClicked(items): void {
    this.items = this.items.concat(items);
    console.log(this.items);
  }
}
