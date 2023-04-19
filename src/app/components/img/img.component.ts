import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit{

  @Input() img: string = "valor inicial";

  @Output() loaded = new EventEmitter<string>();

  imageDefault = "../../../assets/img/img_nothing.jpg";

  ngOnInit(): void {

  }

  imgError(){
    this.img = this.imageDefault
  }

  imgLoaded(){
    console.log("load hijo...");
    this.loaded.emit(this.img);
  }
}
