import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
@Input("products") productList:Product[]; 
@Output() onProductSelected:EventEmitter<Product>;
  constructor() { }

  ngOnInit(): void {
  }

}
