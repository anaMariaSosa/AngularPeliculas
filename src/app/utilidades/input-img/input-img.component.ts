import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { toBase64 } from '../utils';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.css']
})
export class InputImgComponent implements OnInit {

  imageBase64: string |unknown = '';

  @Input()
  imageURL: string |unknown = '';

  @Output()
  selectFileImage: EventEmitter<File> = new EventEmitter<File>();

  constructor() { }

  ngOnInit(): void {
  }

  changeImage (event){
    if (event.target.files.length > 0){
      const file: File = event.target.files[0];
      toBase64(file).then((value: string|unknown) => this.imageBase64 = value)
      .catch(error => console.log(error));
      this.selectFileImage.emit(file);
      this.imageURL = '';
    }
  }
}
