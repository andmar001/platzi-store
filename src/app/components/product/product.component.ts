import { Component, Input } from '@angular/core';
import { IProducto } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() product :IProducto = {
    id:"",
    name:"",
    image:"",
    price:0
  }
}
