import {Component, OnInit, Input} from '@angular/core';
import {Item} from 'src/app/items/item';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() selectedItems: Item[] = [{id: -1, value: '--none--'}];

  constructor() {
  }

  ngOnInit() {
  }

}
