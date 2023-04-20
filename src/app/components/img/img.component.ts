import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy{

  img:string = ''

  //setear valores de la imagen
  @Input('img')
  set changeImg(newImg:string){
    this.img = newImg
    console.log("change just image", this.img)
  }

  @Input() alt: string = "";

  @Output() loaded = new EventEmitter<string>();

  imageDefault = "../../../assets/img/img_nothing.jpg";

  counter = 0

  // to finalize the process of counter
  // counterFn: number | undefined

  constructor() {
    // before render
    // no correr cosas asincronas ---once time
    console.log("constructor called =>", this.img);
  }

  ngOnChanges( changes:SimpleChanges): void {
    // before render - during the render
    //cambios en los inputs - se ejecuta las veces q se actualizen los inputs que definamos
    console.log("on changes => imgValue", this.img)
    console.log("changes => ",changes)

  }
  ngOnInit(): void {
    // before render
    // podemos correr cosas de manera asincrona - corre una sola vez
    console.log("on init => imgValue", this.img)
    // this.counterFn = window.setInterval(()=>{
    //   this.counter += 1;
    //   console.log("run counter")
    // },1000)
  }

  ngAfterViewInit(): void {
    //after render - despues de que se renderizan componentes hijos
    // handler children - manejador de componentes hijos
    console.log("afterview init => imgValue");
  }

  ngOnDestroy(): void {
    // donde se elimina el componente
    console.log("ng on destroy");
    // window.clearInterval(this.counterFn)
  }

  imgError(){
    this.img = this.imageDefault
  }

  imgLoaded(){
    console.log("load hijo...");
    this.loaded.emit(this.img);
  }
}
