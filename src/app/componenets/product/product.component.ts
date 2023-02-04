import { Component, OnInit } from '@angular/core';
import { Product } from './Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products : Product[];
  constructor() {
    this.products = [];
   }

  ngOnInit(): void {
    this.products = [
      new Product("Leche", 123, 3500, "lacetos"),
      new Product("Maiz", 124, 1700),
      new Product("Harina", 125, 1000),
      new Product("Huevos", 126, 18000, "granja", true),
      new Product("Azucar", 127, 2400),
      new Product("Arroz", 128, 4300),
      new Product("Queso", 129, 6700, "lacetos", true),
      new Product("Tomáte", 130, 2000),
      new Product("Cebolla", 131, 4500),
      new Product("Chocolate", 132, 8000),

    ]


  }

}
