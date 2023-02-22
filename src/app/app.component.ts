import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'platzi-store';

  nombre = 'Antonio';
  age = 25;
  btnDisabled = true;
  imgTest ='https://i.pinimg.com/736x/48/51/60/485160c55c513f8eac38027385f38a52.jpg'

  persona = {
    name:'Bruce',
    lastname:'Wayne',
    address:{
      calle: 'Gotham',
      numero:19
    }
  }

  banderaBoton = true;
  //cambiare el estado de los botones
  toggleButton(){
    this.banderaBoton = !this.banderaBoton; // negar el valor boolerano q tenga en ese momento
  }

  //aumentar Edad
  increaseAge(){
    this.age = this.age + 1
  }

  // event:Event ---- evento nativo
  //leer el scroll -  metodo scroll
  onScroll(event:Event){
    const element = event.target as HTMLElement
    console.log(element.scrollTop)
  }

  //leer eventos de un input
  changeName(event:Event){
    // HTMLInputElement porque estamos trabajando con elemento - etiqueta input
    const element = event.target as HTMLInputElement;
    element.value;
    this.persona.name = element.value;
  }
}
