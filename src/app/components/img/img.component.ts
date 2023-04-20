import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy{

  @Input() img: string = "valor inicial";

  @Output() loaded = new EventEmitter<string>();

  imageDefault = "../../../assets/img/img_nothing.jpg";

  constructor() {
    // before render
    // no correr cosas asincronas ---once time
    console.log("constructor called =>", this.img);
  }

  ngOnChanges(): void {
    // before render - during the render
    //cambios en los inputs - se ejecuta las veces q se actualizen los inputs que definamos
    console.log("on changes => imgValue", this.img)

  }
  ngOnInit(): void {
    // before render
    // podemos correr cosas de manera asincrona - corre una sola vez
    console.log("on init => imgValue", this.img)
  }

  ngAfterViewInit(): void {
    //after render - despues de que se renderizan componentes hijos
    // handler children - manejador de componentes hijos
    console.log("afterview init => imgValue");
  }

  ngOnDestroy(): void {
    // donde se elimina el componente
    console.log("ng on destroy");
  }

  imgError(){
    this.img = this.imageDefault
  }

  imgLoaded(){
    console.log("load hijo...");
    this.loaded.emit(this.img);
  }
}
