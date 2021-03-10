import { element } from 'protractor';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css']
})
export class InputMarkdownComponent implements OnInit {

  markdowncontent = '';

  @Output()
  changeText: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  inputTextArea(event: any): void{
    console.log(event.target.value.toString());
    this.markdowncontent = event.target.value.toString();
    this.changeText.emit(this.markdowncontent);
  }
}
