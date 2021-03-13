import { Component, Input, OnInit } from '@angular/core';
import { multipleSelectorDTO } from './multipleSelector';

@Component({
  selector: 'app-selector-multiple',
  templateUrl: './selector-multiple.component.html',
  styleUrls: ['./selector-multiple.component.css']
})
export class SelectorMultipleComponent implements OnInit {

  @Input()
  selected: multipleSelectorDTO[] = [];

  @Input()
  notSelected: multipleSelectorDTO[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  selectAll(){
    this.selected.push(...this.notSelected);
    this.notSelected = [];
  }

  deSelectAll(){
    this.notSelected.push(...this.selected);
    this.selected = [];
  }

  select(item: multipleSelectorDTO, index: number){
    this.selected.push(item);
    this.notSelected.splice(index, 1);
  }

  unSelect(item: multipleSelectorDTO, index: number){
    this.notSelected.push(item);
    this.selected.splice(index, 1);
  }
}
