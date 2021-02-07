import { Component, EventEmitter } from '@angular/core';

import {Product} from './product.model';

/**
 * @InventoryApp: the top-level component for our application
 */
@Component({
  selector: 'inventory-app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  products:Array<Product>=[
    new Product(
    "Nike Shoe",
    "NS",
    "/assets/images/products/black-hat.jpg",
    ["Men", "Accessories", "shoes"],
    20.99
    ),
    new Product(
    "Addidas Shoe",
    "AS",
    "/assets/images/products/black-hat.jpg",
    ["Men", "Accessories", "shoes"],
    22.99
    ),
    new Product(
    "Bata Shoe",
    "BS",
    "/assets/images/products/black-hat.jpg",
    ["Men", "Accessories", "Shoes"],
    10.99
    ),
  
  ];

  constructor() {}


  /**
   * Product selected functionality
   */
  productWasSelected(product:Product){
    console.log('Product Clicked',product);
    
  }

}
