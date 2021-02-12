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
 
  products:Array<Product>;
  messageFlag:boolean=false;

  constructor() {
    this.products=[new Product(
      'MYSHOES',
      'Black Running Shoes',
      '/assets/images/products/black-shoes.jpg',
      ['Men', 'Shoes', 'Running Shoes'],
      109.99),
      new Product(
      'NEATOJACKET',
      'Blue Jacket',
      '/assets/images/products/blue-jacket.jpg',
      ['Women', 'Apparel', 'Jackets & Vests'],
      238.99),
      new Product(
      'NICEHAT',
      'A Nice Black Hat',
      '/assets/images/products/black-hat.jpg',
      ['Men', 'Accessories', 'Hats'],
      29.99)
      ];
  }


  /**
   * This is a single liner function
   */

  doubleClicked=()=>this.messageFlag=true;

  disapear=()=>this.messageFlag=false;

  /**
   * Product selected functionality
   */
  productWasSelected = (product:Product)=>console.log(product)

}
