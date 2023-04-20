import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  imgParent: string = 'https://www.w3schools.com/howto/img_avatar.png';

  showImg = true;

  onLoaded(img: string) {
    console.log('Log padre', img);
  }

  toggleImg(){
    this.showImg = !this.showImg;
  }
}
