import {Component, EventEmitter, Output} from '@angular/core';
import {ItemsService} from '../items/items.service';
import {Item} from '../items/item';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss']
})
export class MoreComponent {
  @Output() clicked = new EventEmitter<Item[]>();

  constructor(private itemsService: ItemsService) {
  }

  onClick(): void {
    this.itemsService.getMoreItems().subscribe(items => this.clicked.emit(items));
  }

}
