import { Component } from '@angular/core';
import { IProducto } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  product :IProducto = {
    id:"1",
    name:"producto 1",
    image:"../../assets/img/iphone.jpg",
    price:10
  }
}
