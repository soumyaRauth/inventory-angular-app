import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  /**Angular Public API's */
  @Input('products') productList: Array<Product>; //angular style guide suggests to avoid this syntax
  @Output() onProductSelected: EventEmitter<Product>;

  /**
   * 
   Class Instances
   */
  private currentProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }


/**
   * 
   * @param product 
   * This function triggers when a single product is Clicked
   */

  clicked = (product: Product): void => {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  };

  /**
   * 
   * @param product 
   * This function triggers when a single product in selected state
   * It binds a class with the host 
   */

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }

  /**
   * Triggers when the component is finished constructed
   */
  ngOnInit(): void {
    console.log('This.is product listing');
    console.log(this.productList);
  }
}
